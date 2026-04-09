'use server';

import { supabase, supabaseAdmin } from '@/lib/supabase';
import { WizardData, RevenueProjection } from '@/types/wizard';
import { revalidatePath } from 'next/cache';
import { AirDNAService } from '@/services/airdna';
import { PriceLabsService } from '@/services/pricelabs';
import { AIREnderingService } from '@/services/ai-rendering';
import { OpenAIService } from '@/services/openai';
import { PDFDocument, StandardFonts } from 'pdf-lib';
import nodemailer from 'nodemailer';

// Initialize Nodemailer transporter
const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST || 'smtp.gmail.com',
    port: parseInt(process.env.SMTP_PORT || '587'),
    secure: process.env.SMTP_PORT === '465', // true for 465, false for other ports
    auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
    },
});

const emailFrom = process.env.EMAIL_FROM || '"Suite Capacity" <onboarding@resend.dev>';

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
        const { data, error } = await supabase
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

async function generateReportPdf(data: WizardData, projection: RevenueProjection) {
    const pdfDoc = await PDFDocument.create();
    const page = pdfDoc.addPage([612, 792]); // US Letter
    const font = await pdfDoc.embedFont(StandardFonts.Helvetica);
    const fontBold = await pdfDoc.embedFont(StandardFonts.HelveticaBold);

    const lineHeight = 18;
    let y = 760;

    const drawText = (text: string, options: { size?: number; bold?: boolean } = {}) => {
        const usedFont = options.bold ? fontBold : font;
        const size = options.size ?? 12;
        page.drawText(text, { x: 50, y, size, font: usedFont });
        y -= lineHeight;
    };

    drawText('Revenue Intelligence Report', { size: 18, bold: true });
    y -= 10;
    drawText(`Property: ${data.property.address}`, { bold: true });
    y -= 10;
    drawText(`Prepared for: ${data.lead.name}`);
    y -= 20;

    drawText('Revenue Breakdown', { size: 14, bold: true });
    const estimatedRevenue = calculateEstimateRevenue(data);
    drawText(`• Estimated Current Revenue: $${estimatedRevenue.toLocaleString()}`);
    drawText(`• Projected Revenue: $${projection.optimizedRevenue.toLocaleString()}`);
    drawText(`• Projected Lift: $${(projection.optimizedRevenue - estimatedRevenue).toLocaleString()}`);
    y -= 10;

    drawText('Action Plan', { size: 14, bold: true });
    drawText('• Improve listing conversion with updated photography and copy.');
    drawText('• Implement dynamic pricing and automated messaging.');
    drawText('• Increase direct bookings via direct checkout integration.');
    y -= 10;

    drawText('Case Study', { size: 14, bold: true });
    drawText('Property X increased revenue by 22% in 90 days using the same playbook.');
    y -= 10;

    const strategyUrl = process.env.STRATEGY_CALL_URL || 'https://yourdomain.com/schedule';
    drawText('Strategy Call', { size: 14, bold: true });
    drawText(`Book your strategy session: ${strategyUrl}`);

    const pdfBytes = await pdfDoc.save();
    return pdfBytes;
}

/**
 * Submits the full wizard data to the backend.
 * This is called at the end of the 10-step flow.
 */
export async function submitWizardData(data: WizardData, projection: RevenueProjection) {
    try {
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
        const { data: property, error: propertyError } = await supabase
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

        // 3. Save Full Submission
        const { error: submissionError } = await supabase
            .from('wizard_submissions')
            .insert({
                lead_id: lead.id,
                property_id: property.id,
                qualification_data: data.qualification,
                baseline_data: data.baseline,
                audit_data: data.audit,
                projection_results: projection,
                status: 'complete',
            });

        if (submissionError) throw submissionError;

        // 4. Register AI Images if present
        if (data.aiDesign.images.length > 0) {
            const imageRecords = data.aiDesign.images.map(img => ({
                property_id: property.id,
                category: img.category,
                original_url: img.url,
                processing_status: 'pending'
            }));

            const { error: aiError } = await supabase
                .from('ai_enhancements')
                .insert(imageRecords);

            if (aiError) console.error('Error saving AI records:', aiError);
        }

        // 5. Send Email via Resend
        let emailSent = false;
        let emailError: string | null = null;
        let emailHint: string | null = null;
        let emailResponseId: string | null = null;
        let emailStatus: any = null;

        if (process.env.SMTP_USER && process.env.SMTP_PASS) {
            try {
                const pdfBytes = await generateReportPdf(data, projection);
                const strategyUrl = process.env.STRATEGY_CALL_URL || 'https://yourdomain.com/schedule';

                const htmlContent = `
                        <h1>Hi ${data.lead.name},</h1>
                        <p>Thank you for submitting your property details for ${data.property.address}.</p>

                        <h2>Revenue Breakdown</h2>
                        <p><strong>Current Estimate:</strong> $${estimatedRevenue.toLocaleString()}</p>
                        <p><strong>Optimized Potential:</strong> $${projection.optimizedRevenue.toLocaleString()}</p>
                        <p><strong>Projected Lift:</strong> $${(projection.optimizedRevenue - estimatedRevenue).toLocaleString()}</p>

                        <h2>Action Plan</h2>
                        <ul>
                            <li>Refresh listing visuals + copy.</li>
                            <li>Enable dynamic pricing + automated guest messaging.</li>
                            <li>Boost direct bookings with a direct checkout flow.</li>
                        </ul>

                        <h2>Case Study</h2>
                        <p>Property X scaled revenue +22% in 90 days using the same playbook.</p>

                        <h2>Next Step</h2>
                        <p><a href="${strategyUrl}">Book a 1:1 Strategy Session</a> to activate the full revenue optimization plan.</p>

                        <br/>
                        <p>Best Regards,</p>
                        <p>The Suite Capacity Team</p>
                    `;

                const emailResult = await transporter.sendMail({
                    from: emailFrom,
                    to: data.lead.email,
                    bcc: ['suitecapacity.dev@gmail.com'],
                    subject: 'Your Revenue Intelligence Report is Ready',
                    html: htmlContent,
                    attachments: [
                        {
                            filename: 'Revenue Intelligence Report.pdf',
                            content: Buffer.from(pdfBytes),
                            contentType: 'application/pdf',
                        },
                    ],
                });

                emailSent = true;
                emailResponseId = emailResult?.messageId || null;

                if (emailResponseId) {
                    try {
                        // For Nodemailer, we can't easily retrieve status via ID like Resend
                        // But we can check if it was accepted
                        emailStatus = emailResult.accepted.includes(data.lead.email) ? 'accepted' : 'pending';
                        console.log('Nodemailer email status:', emailStatus);
                    } catch (statusErr) {
                        console.warn('Failed to determine Nodemailer email status:', statusErr);
                    }
                }

                console.log(
                    'Confirmation email sent to:',
                    data.lead.email,
                    'emailId:',
                    emailResponseId,
                    'resendResult:',
                    emailResult,
                    'emailStatus:',
                    emailStatus
                );
            } catch (emailErr: any) {
                emailError = String(emailErr?.message || emailErr);
                emailHint = 'Email failed to send; check SMTP configuration and network.';
                console.error('Failed to send email:', emailErr);
            }
        } else {
            emailHint = 'SMTP credentials are not set; email was not sent.';
            console.warn('SMTP credentials are not set. Skipping email send.');
        }

        try {
            revalidatePath('/dashboard'); // Mock path
        } catch (revalidateError) {
            console.warn('Failed to revalidate path:', revalidateError);
        }

        return {
            success: true,
            submissionId: lead.id,
            emailSent: emailSent,
            emailError: emailError,
            emailHint: emailHint,
            emailResponseId: emailResponseId,
            emailStatus,
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
 * Checks if an address is within the Jersey Shore target markets.
 */
function isJerseyShore(address: string): boolean {
    const shoreTowns = [
        'seaside heights', 'seaside park', 'lavallette', 'ortley beach',
        'point pleasant', 'mantoloking', 'bay head', 'manasquan',
        'belmar', 'spring lake', 'sea girt', 'bradley beach',
        'ocean grove', 'asbury park', 'long branch'
    ];
    const addr = address.toLowerCase();
    return shoreTowns.some(town => addr.includes(town));
}

/**
 * Calculates a real intelligence-based revenue projection.
 * Coordinates between AirDNA, PriceLabs, and OpenAI.
 */
export async function calculateRevenueIntelligence(data: WizardData): Promise<RevenueProjection> {
    const isShore = isJerseyShore(data.property.address);

    try {
        // 1. Fetch Market Data from AirDNA
        const marketData = await AirDNAService.fetchMarketData(data.property.address);

        // 2. Fetch Pricing Intelligence from PriceLabs
        const pricingData = await PriceLabsService.getPricingStrategy(data.property.address);

        // 3. Generate AI Intelligence in parallel if possible
        const aiIntelligencePromise = OpenAIService.generateIntelligence(data, {
            ...marketData,
            isShore
        });

        // 4. Current Revenue (from user input or market average)
        const currentAdr = data.baseline.adr || marketData.adr;
        const currentOcc = data.baseline.occupancy || marketData.occupancyRate;
        const currentRevenue = (currentAdr * (currentOcc / 100)) * 365;

        let optimizedRevenue = currentRevenue;
        let pricingLift = 0;
        let conversionLift = 0;
        let ecosystemLift = 0;
        let designLift = 0;
        let efficiencyLift = 0;

        if (isShore) {
            // Jersey Shore Logic: Peak Baseline ~$1,000/week per bedroom
            const brCount = data.property.bedrooms || 1;
            const peakWeeklyRate = brCount * 1050; // Slightly higher than 1000 for "premium"
            const peakRevenue = peakWeeklyRate * 12; // 12 weeks of summer (June-Aug)
            
            // Summer accounts for 75% of revenue in this model
            const projectedAnnual = peakRevenue / 0.75;
            
            // Multipliers (Jersey Shore Specific)
            const designMult = data.audit.designLevel === 'pro' || data.audit.designLevel === 'luxury' ? 0.30 : 0.15;
            const amenitiesCount = data.property.amenities?.length || 0;
            const amenitiesMult = amenitiesCount > 10 ? 0.25 : 0.10;
            const listingMult = data.audit.listingOptimization === 'pro' || data.audit.listingOptimization === 'ai' ? 0.20 : 0.10;
            const revMgmtMult = data.audit.dynamicPricing === 'yes' ? 0.15 : 0.10;

            const totalOptimized = projectedAnnual * (1 + designMult + amenitiesMult + listingMult + revMgmtMult) * 0.7; // Blend factor
            
            optimizedRevenue = Math.max(totalOptimized, currentRevenue * 1.25);
            const totalLift = optimizedRevenue - currentRevenue;
            
            pricingLift = totalLift * 0.35;
            conversionLift = totalLift * 0.25;
            designLift = totalLift * 0.25;
            ecosystemLift = totalLift * 0.10;
            efficiencyLift = totalLift * 0.05;
        } else {
            // Standard Global Logic
            const marketUpside = Math.max(0, (marketData.adr * 1.3) - currentAdr);
            const pricingUpside = currentRevenue * (pricingData.volatilityIndex * 1.5);
            optimizedRevenue = currentRevenue + marketUpside + pricingUpside;
            const totalLift = optimizedRevenue - currentRevenue;
 
            pricingLift = totalLift * 0.4;
            conversionLift = totalLift * 0.25;
            ecosystemLift = totalLift * 0.15;
            designLift = totalLift * 0.15;
            efficiencyLift = totalLift * 0.05;
        }

        const intelligence = await aiIntelligencePromise;

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
            intelligence: intelligence || undefined
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

        // Try AI even in fallback path
        const intelligence = await OpenAIService.generateIntelligence(data, {
            adr: estimatedAdr,
            occupancyRate: estimatedOccupancy,
            isShore
        }).catch(() => null);

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
            intelligence: intelligence || undefined
        };
    }
}
