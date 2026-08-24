'use server';

import { supabaseAdmin } from '@/lib/supabase';
import { WizardData, RevenueProjection } from '@/types/wizard';
import { revalidatePath } from 'next/cache';
import { AirDNAService } from '@/services/airdna';
import { PriceLabsService } from '@/services/pricelabs';
import { AIREnderingService } from '@/services/ai-rendering';
import { OpenAIService } from '@/services/openai';
import { MARKETS } from '@/data/markets';
import { generateReportPdf } from '@/lib/report-pdf';
import { sendInternalBlueprintNotification, processBookingConfirmation } from '@/lib/booking-service';

/**
 * Utility to upsert a record while gracefully handling schema mismatches.
 *
 * Supabase client caches the schema. If a column is missing in the remote
 * database (e.g. the project hasn't run the latest migration), we'll retry
 * the operation after removing the missing column(s) from the payload.
 */
async function upsertWithSchemaFallback<T = any>(
    table: string,
    payload: Record<string, unknown>,
    opts?: any
) {
    const maxRetries = 5;
    const payloadCopy = { ...payload };

    for (let attempt = 0; attempt < maxRetries; attempt += 1) {
        const { data, error } = await supabaseAdmin
            .from(table)
            .upsert(payloadCopy, opts)
            .select()
            .single();

        if (!error) {
            return { data, error: null };
        }

        const message = error?.message || '';
        const match = /Could not find the '(.+?)' column of '(.+?)' in the schema cache/i.exec(message);

        if (match && match[2] === table && match[1] in payloadCopy) {
            // Remove the unsupported column and retry
            // eslint-disable-next-line @typescript-eslint/no-dynamic-delete
            delete payloadCopy[match[1]];
            console.warn(`Supabase schema mismatch: removed column ${match[1]} from payload and retrying`);
            continue;
        }

        return { data: null, error };
    }

    return {
        data: null,
        error: new Error(`Failed to upsert into ${table} after ${maxRetries} attempts due to schema mismatch.`),
    };
}

function calculateEstimateRevenue(data: WizardData) {
    if (data.baseline.annualRevenue) return data.baseline.annualRevenue;

    if (data.baseline.type === 'ltr' && data.baseline.monthlyRent) {
        return data.baseline.monthlyRent * 12;
    }

    // Default to STR calculation
    const adr = data.baseline.adr || 0;
    const occupancy = data.baseline.occupancy || 0;
    return Math.round(adr * (occupancy / 100) * 365);
}

function computeLeadScore(data: WizardData, estimatedRevenue: number) {
    let score = 0;

    // Ownership (high priority)
    if (data.qualification.ownershipStatus === 'own' || data.qualification.ownershipStatus === 'contract') {
        score += 3;
    }

    // Active STR
    if (data.qualification.isOperating === 'yes') {
        score += 3;
    }

    // Timeline urgency
    if (data.qualification.timeline === 'immediately') {
        score += 3;
    }

    // Revenue threshold
    if (estimatedRevenue > 75000) {
        score += 2;
    }

    // Pricing software (prefer no software = higher priority)
    if (data.baseline.hasPricingSoftware === false) {
        score += 2;
    }

    // Direct booking (lower % = higher priority)
    if ((data.baseline.directPercentage ?? 0) < 30) {
        score += 2;
    }

    return score;
}

function buildCrmTags(data: WizardData, leadScore: number, estimatedRevenue: number) {
    const tags = [] as string[];

    tags.push(data.qualification.isOperating === 'yes' ? 'active-str' : 'active-ltr');
    tags.push(estimatedRevenue > 75000 ? 'revenue->75k' : 'revenue-<75k');
    tags.push(`timeline-${data.qualification.timeline}`);
    tags.push(`lead-score-${leadScore}`);

    return tags;
}

/**
 * Submits the full wizard data to the backend.
 * This is called at the end of the 10-step flow.
 */
export async function submitWizardData(data: WizardData, projection: RevenueProjection) {
    try {
        // 0. Generate PDF Report
        const pdfBytes = await generateReportPdf(data, projection);

        // 1. Create or Find Lead
        const estimatedRevenue = calculateEstimateRevenue(data);
        const leadScore = computeLeadScore(data, estimatedRevenue);
        const crmTags = buildCrmTags(data, leadScore, estimatedRevenue);

        const leadPayload = {
            name: data.lead.name,
            email: data.lead.email,
            phone: data.lead.phone,
            timeline: data.lead.timeline,
            switching_management: data.lead.switchingManagement,
            operating_status: data.qualification.isOperating,
            ownership_status: data.qualification.ownershipStatus,
            current_manager: data.lead.currentManager,
            estimated_revenue: estimatedRevenue,
            has_pricing_software: data.baseline.hasPricingSoftware,
            direct_booking_pct: data.baseline.directPercentage,
            lead_score: leadScore,
            crm_tags: crmTags,
        };

        const { data: lead, error: leadError } = await upsertWithSchemaFallback(
            'leads',
            leadPayload,
            { onConflict: 'email' }
        );

        if (leadError) throw leadError;

        // 2. Create Property Record
        const { data: property, error: propertyError } = await supabaseAdmin
            .from('properties')
            .insert({
                lead_id: lead.id,
                address: data.property.address,
                property_type: data.property.propertyType,
                bedrooms: data.property.bedrooms,
                bathrooms: data.property.bathrooms,
                max_occupancy: data.property.maxOccupancy,
                amenities: data.property.amenities,
                parking: data.property.parking,
            })
            .select()
            .single();

        if (propertyError) throw propertyError;

        // 3. Save Full Submission (awaiting consultation booking)
        const { data: submission, error: submissionError } = await supabaseAdmin
            .from('wizard_submissions')
            .insert({
                lead_id: lead.id,
                property_id: property.id,
                qualification_data: data.qualification,
                baseline_data: data.baseline,
                audit_data: data.audit,
                projection_results: projection,
                status: 'pending_booking',
            })
            .select('id')
            .single();

        if (submissionError) throw submissionError;

        // 4. Register AI Images if present
        if (data.aiDesign.images.length > 0) {
            const imageRecords = data.aiDesign.images.map(img => ({
                property_id: property.id,
                category: img.category,
                original_url: img.url,
                processing_status: 'pending'
            }));

            const { error: aiError } = await supabaseAdmin
                .from('ai_enhancements')
                .insert(imageRecords);

            if (aiError) console.error('Error saving AI records:', aiError);
        }

        // 5. Notify internal team (full blueprint + PDF; user receives audit after booking)
        let emailSent = false;
        let emailError: string | null = null;
        let emailHint: string | null = null;

        try {
            const internalResult = await sendInternalBlueprintNotification(
                submission.id,
                data,
                projection,
                pdfBytes,
            );
            emailSent = internalResult.sent;
            if (!emailSent) {
                emailHint = 'SMTP credentials are not set; internal team notification was not sent.';
            }
        } catch (emailErr: any) {
            emailError = String(emailErr?.message || emailErr);
            emailHint = 'Internal team notification failed; check SMTP configuration.';
            console.error('Failed to send internal blueprint notification:', emailErr);
        }

        try {
            revalidatePath('/dashboard'); // Mock path
        } catch (revalidateError) {
            console.warn('Failed to revalidate path:', revalidateError);
        }

        return {
            success: true,
            submissionId: submission.id,
            emailSent: emailSent,
            emailError: emailError,
            emailHint: emailHint,
        };
    } catch (error: any) {
        console.error('Wizard Submission Error:', error);
        const message = error?.message || String(error);
        const hint = message.toLowerCase().includes('fetch')
            ? 'Submission failed due to network or Supabase configuration issues. Verify your NEXT_PUBLIC_SUPABASE_URL and keys.'
            : message;
        return { success: false, error: hint };
    }
}

/**
 * Called when a user schedules their Blueprint review (Calendly embed or webhook).
 */
export async function markBookingScheduled(
    submissionId: string,
    options: {
        calendlyEventUri?: string;
        calendlyInviteeUri?: string;
        scheduledAt?: string;
        inviteeEmail?: string;
    } = {},
) {
    return processBookingConfirmation(submissionId, options);
}

/**
 * Uploads a property photo to Supabase Storage.
 */
export async function uploadPropertyPhoto(file: File, category: string) {
    try {
        const fileExt = file.name.split('.').pop();
        const fileName = `${Math.random().toString(36).substring(2)}.${fileExt}`;
        const filePath = `${category}/${fileName}`;

        const { data, error } = await supabaseAdmin.storage
            .from('property-photos')
            .upload(filePath, file);

        if (error) throw error;

        // Get signed URL so that the uploaded image can be accessed even if the bucket is private
        const { data: signedUrlData, error: signedUrlError } = await supabaseAdmin.storage
            .from('property-photos')
            .createSignedUrl(filePath, 60 * 60); // 1 hour

        if (signedUrlError) {
            throw signedUrlError;
        }

        // Attempt to generate an enhanced version of the image via AI (Replicate)
        let enhancedUrl: string | undefined;
        let enhancedStatus: 'pending' | 'completed' | 'failed' = 'pending';

        try {
            const aiResult = await AIREnderingService.enhanceImage({
                imageUrl: signedUrlData.signedUrl,
                category: category as any,
            });
            enhancedUrl = aiResult.enhancedUrl;
            enhancedStatus = enhancedUrl ? 'completed' : 'failed';
        } catch (aiError) {
            console.warn('AI rendering failed, using original upload:', aiError);
            enhancedStatus = 'failed';
        }

        return {
            url: signedUrlData.signedUrl,
            enhancedUrl,
            enhancedStatus,
            success: true
        };
    } catch (error: any) {
        console.error('Upload Error:', error);
        const message = error?.message || String(error);
        const hint = message.toLowerCase().includes('fetch')
            ? 'Unable to reach Supabase. Check your NEXT_PUBLIC_SUPABASE_URL and network connectivity.'
            : message;
        return { success: false, error: hint };
    }
}

/**
 * Checks if an address is within a target market.
 */
function getTargetMarket(data: WizardData) {
    if (data.property.marketId) {
        return MARKETS.find(m => m.id === data.property.marketId);
    }
    const addr = data.property.address.toLowerCase();
    return MARKETS.find(market =>
        market.towns?.some(town => addr.includes(town))
    );
}

/**
 * Cleans up common "noise" from property addresses like "Sleeps X" or "- Entire Complex"
 * ensuring better matching with real-estate APIs.
 */
function sanitizeAddress(address: string): string {
    if (!address) return "";

    // Remove "Sleeps X", "Entire Complex", "Combo", etc.
    return address
        .split(/ - | Sleeps | sleeps | Sleeps: | sleeps: |, sleeps /)[0]
        .replace(/Entire Complex/gi, '')
        .replace(/Combo/gi, '')
        .replace(/\d+\s*BR/gi, '')
        .trim();
}

/**
 * Calculates revenue intelligence based on property and market data.
 */
export async function calculateRevenueIntelligence(data: WizardData): Promise<RevenueProjection> {
    const rawAddress = data.property.address;
    const cleanAddress = sanitizeAddress(rawAddress);
    const market = getTargetMarket(data);

    console.log("DEBUG: Original Address:", rawAddress);
    console.log("DEBUG: Sanitized Address:", cleanAddress);

    // Simple check: Does the address at least look like it has a city/state?
    // (Contains at least one comma or a Zip Code-like pattern)
    const isVague = !cleanAddress.includes(',') && !/\b\d{5}\b/.test(cleanAddress);

    const isShore = market?.id === 'jersey-shore';
    const marketMultiplier = market?.multiplier || 1.15; // default conservative multiplier

    try {
        // 1. Fetch Market Data from AirDNA
        // If address is vague, AirDNA Rentalizer will almost certainly fail or return garbage.
        const marketData = await AirDNAService.fetchMarketData(isVague ? `${cleanAddress}, New Jersey` : cleanAddress);
        console.log("DEBUG: Final Market Data in Action:", marketData);

        // 2. Fetch Pricing Intelligence from PriceLabs
        const pricingData = await PriceLabsService.getPricingStrategy(cleanAddress);

        // 3. Generate AI Intelligence in parallel if possible
        const aiIntelligencePromise = OpenAIService.generateIntelligence(data, {
            ...marketData,
            isShore
        });

        // 4. Current Revenue (from user input or market average)
        const currentAdr = data.baseline.adr || marketData.adr;
        const currentOcc = data.baseline.occupancy || marketData.occupancyRate;
        const currentRevenue = data.baseline.annualRevenue || ((currentAdr * (currentOcc / 100)) * 365);

        // Use user revenue if available as the baseline comparison
        const baselineComparison = data.baseline.annualRevenue || (marketData.revpar * 365);

        let optimizedRevenue = currentRevenue;
        let pricingLift = 0;
        let conversionLift = 0;
        let ecosystemLift = 0;
        let designLift = 0;
        let efficiencyLift = 0;

        // Dynamic Multipliers derived directly from the user's audit form
        const designMult = data.audit.designLevel === 'pro' || data.audit.designLevel === 'luxury' ? 0.20 : (data.audit.designLevel === 'updated' ? 0.10 : 0.05);
        const amenitiesCount = data.property.amenities?.length || 0;
        const amenitiesMult = amenitiesCount > 8 ? 0.15 : (amenitiesCount > 4 ? 0.08 : 0.03);
        const listingMult = data.audit.listingOptimization === 'pro' || data.audit.listingOptimization === 'ai' ? 0.15 : 0.05;
        const revMgmtMult = data.audit.dynamicPricing === 'yes' ? 0.12 : (data.audit.dynamicPricing === 'manual' ? 0.05 : 0.18); // Higher upside if they use NO pricing tools

        if (isShore) {
            // Jersey Shore Logic: Blend heuristic with real AirDNA data
            const brCount = data.property.bedrooms || 1;
            const marketDrivenPeak = (marketData.adr * 7) * marketMultiplier;
            const heuristicPeak = brCount * 1050;
            const peakWeeklyRate = Math.max(heuristicPeak, marketDrivenPeak);

            const peakRevenue = peakWeeklyRate * 12; // 12 weeks of summer
            const targetSeasonality = marketData.seasonalityIndex || 0.70; // High seasonality market
            const projectedAnnual = peakRevenue / targetSeasonality;

            const totalOptimized = projectedAnnual * (1 + designMult + amenitiesMult + listingMult + revMgmtMult) * 0.85; // Blend smoothing factor

            optimizedRevenue = Math.max(totalOptimized, currentRevenue * (1 + designMult + listingMult));
            const totalLift = Math.max(0, optimizedRevenue - currentRevenue);

            pricingLift = totalLift * 0.35;
            conversionLift = totalLift * 0.25;
            designLift = totalLift * 0.20;
            ecosystemLift = totalLift * 0.15;
            efficiencyLift = totalLift * 0.05;
        } else {
            // Standard Global Logic: Heavily anchor on AirDNA + Form Inputs
            const dynamicVolatility = pricingData.volatilityIndex || (marketData.seasonalityIndex * 0.3) || 0.15;

            // Market Upside: Catch up to top quartile ADR if they are operating below
            const topQuartileAdr = marketData.adr * marketMultiplier;
            const adrGap = Math.max(0, topQuartileAdr - currentAdr);
            const marketUpside = adrGap * (currentOcc / 100) * 365;

            // Apply their specific audit gaps
            const totalMultipliers = 1 + designMult + amenitiesMult + listingMult + revMgmtMult;
            const baselineOptimized = currentRevenue * totalMultipliers;
            const pricingGain = baselineOptimized * dynamicVolatility; // Upside from implementing pro revenue management algorithm

            optimizedRevenue = baselineOptimized + marketUpside + pricingGain;
            const totalLift = Math.max(0, optimizedRevenue - currentRevenue);

            pricingLift = totalLift * 0.40;
            conversionLift = totalLift * 0.25;
            designLift = totalLift * 0.15;
            ecosystemLift = totalLift * 0.15;
            efficiencyLift = totalLift * 0.05;
        }

        const intelligence = await aiIntelligencePromise;

        // Extract and parse the performance breakdown from AI if available
        const aiBreakdown = intelligence?.performanceBreakdown;
        const parseNumeric = (val: any) => {
            if (typeof val === 'number') return val;
            if (typeof val !== 'string') return 0;
            return parseInt(val.replace(/[^0-9]/g, '')) || 0;
        };

        const performanceBreakdown = aiBreakdown ? {
            peakContribution: parseNumeric(aiBreakdown.peakContribution),
            shoulderContribution: parseNumeric(aiBreakdown.shoulderContribution),
            offSeasonContribution: parseNumeric(aiBreakdown.offSeasonContribution),
            peakWeeklyRate: parseNumeric(aiBreakdown.peakWeeklyRate)
        } : {
            peakContribution: Math.round((marketData.seasonalityIndex || 0.75) * 100),
            shoulderContribution: Math.round((1 - (marketData.seasonalityIndex || 0.75)) * 0.65 * 100),
            offSeasonContribution: Math.round((1 - (marketData.seasonalityIndex || 0.75)) * 0.35 * 100),
            peakWeeklyRate: Math.round((marketData.adr * 7) * marketMultiplier)
        };

        return {
            currentRevenue,
            optimizedRevenue,
            pricingLift,
            conversionLift,
            ecosystemLift,
            designLift,
            efficiencyLift,
            usingMockData: false,
            marketComparison: {
                marketMedianAdr: marketData.adr,
                topQuartileAdr: marketData.adr * 1.4,
                marketOccupancy: marketData.occupancyRate,
                demandIndex: marketData.demandIndex * 100
            },
            performanceBreakdown,
            intelligence: intelligence || undefined,
            volatilityIndex: pricingData.volatilityIndex || 0.15
        };
    } catch (error) {
        console.error('Intelligence Calculation Error:', error);

        // Fallback for demo mode
        const currentRevenue = calculateEstimateRevenue(data);

        // Use Jersey Shore rules for fallback if detected
        let baseLiftPct = 0.22;
        if (isShore) baseLiftPct = 0.35; // Higher potential in Shore market

        const optimizedRevenue = Math.round(currentRevenue * (1 + baseLiftPct));
        const totalLift = optimizedRevenue - currentRevenue;

        const estimatedAdr = data.baseline.adr || (isShore ? 450 : 250);
        const estimatedOccupancy = data.baseline.occupancy || (isShore ? 55 : 60);
        const fallbackSeasonality = isShore ? 0.75 : 0.60;

        // Try AI even in fallback path
        const intelligence = await OpenAIService.generateIntelligence(data, {
            adr: estimatedAdr,
            occupancyRate: estimatedOccupancy,
            isShore
        }).catch(() => null);

        const aiBreakdown = intelligence?.performanceBreakdown;
        const parseNumeric = (val: any) => {
            if (typeof val === 'number') return val;
            if (typeof val !== 'string') return 0;
            return parseInt(val.replace(/[^0-9]/g, '')) || 0;
        };

        const performanceBreakdown = aiBreakdown ? {
            peakContribution: parseNumeric(aiBreakdown.peakContribution),
            shoulderContribution: parseNumeric(aiBreakdown.shoulderContribution),
            offSeasonContribution: parseNumeric(aiBreakdown.offSeasonContribution),
            peakWeeklyRate: parseNumeric(aiBreakdown.peakWeeklyRate)
        } : {
            peakContribution: Math.round(fallbackSeasonality * 100),
            shoulderContribution: Math.round((1 - fallbackSeasonality) * 0.65 * 100),
            offSeasonContribution: Math.round((1 - fallbackSeasonality) * 0.35 * 100),
            peakWeeklyRate: Math.round(estimatedAdr * 7 * (isShore ? 1.35 : 1.15))
        };

        return {
            currentRevenue,
            optimizedRevenue,
            pricingLift: Math.round(totalLift * 0.4),
            conversionLift: Math.round(totalLift * 0.25),
            ecosystemLift: Math.round(totalLift * 0.15),
            designLift: Math.round(totalLift * 0.15),
            efficiencyLift: Math.round(totalLift * 0.05),
            usingMockData: true,
            marketComparison: {
                marketMedianAdr: estimatedAdr,
                topQuartileAdr: Math.round(estimatedAdr * 1.25),
                marketOccupancy: Math.min(100, Math.max(0, estimatedOccupancy)),
                demandIndex: isShore ? 92 : 80,
            },
            performanceBreakdown,
            intelligence: intelligence || undefined,
            volatilityIndex: 0.15
        };
    }
}
