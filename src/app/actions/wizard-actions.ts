'use server';

import { supabase, supabaseAdmin } from '@/lib/supabase';
import { WizardData, RevenueProjection } from '@/types/wizard';
import { revalidatePath } from 'next/cache';
import { AirDNAService } from '@/services/airdna';
import { PriceLabsService } from '@/services/pricelabs';
import { AIREnderingService } from '@/services/ai-rendering';
import { OpenAIService } from '@/services/openai';
import { MARKETS } from '@/data/markets';
import { PDFDocument, StandardFonts, rgb } from 'pdf-lib';
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
    let page = pdfDoc.addPage([612, 792]);
    const font = await pdfDoc.embedFont(StandardFonts.Helvetica);
    const fontBold = await pdfDoc.embedFont(StandardFonts.HelveticaBold);
    const primaryColor = rgb(0 / 255, 0 / 255, 0 / 255); // Using Black for text, but can use primary brand color
    const accentColor = rgb(59 / 255, 130 / 255, 246 / 255); // Blue accent

    const margin = 50;
    const width = 612 - (margin * 2);
    let y = 740;

    const checkPageBreak = (needed: number) => {
        if (y - needed < margin) {
            page = pdfDoc.addPage([612, 792]);
            y = 740;
            return true;
        }
        return false;
    };

    const drawWrappedText = (text: string, options: { size?: number; bold?: boolean; indent?: number; color?: any } = {}) => {
        const usedFont = options.bold ? fontBold : font;
        const size = options.size ?? 10;
        const indent = options.indent ?? 0;
        const maxWidth = width - indent;

        const words = text.split(' ');
        let line = '';

        for (const word of words) {
            const testLine = line + word + ' ';
            const lineWidth = usedFont.widthOfTextAtSize(testLine, size);

            if (lineWidth > maxWidth && line !== '') {
                checkPageBreak(size + 5);
                page.drawText(line, { x: margin + indent, y, size, font: usedFont, color: options.color });
                y -= (size + 5);
                line = word + ' ';
            } else {
                line = testLine;
            }
        }

        if (line !== '') {
            checkPageBreak(size + 5);
            page.drawText(line, { x: margin + indent, y, size, font: usedFont, color: options.color });
            y -= (size + 5);
        }
    };

    const drawSectionHeader = (title: string) => {
        y -= 25;
        checkPageBreak(30);
        page.drawRectangle({
            x: margin,
            y: y - 5,
            width: width,
            height: 20,
            color: rgb(240 / 255, 240 / 255, 240 / 255)
        });
        page.drawText(title.toUpperCase(), {
            x: margin + 5,
            y: y,
            size: 10,
            font: fontBold,
            color: primaryColor
        });
        y -= 25;
    };

    // Header
    page.drawText('SUITE CAPACITY INTEL®', { x: margin, y: 760, size: 8, font: fontBold, color: accentColor });
    drawWrappedText('Revenue Intelligence Report', { size: 24, bold: true });
    y -= 10;
    drawWrappedText(`Property: ${data.property.address}`, { size: 12, bold: true });
    drawWrappedText(`Owner: ${data.lead.name} | Date: ${new Date().toLocaleDateString()}`, { size: 10 });
    y -= 15;

    const intel = projection.intelligence;

    // 1. Positioning
    drawSectionHeader('1. Property Positioning Snapshot');
    if (intel?.positioning) {
        drawWrappedText('Asset Description:', { bold: true });
        drawWrappedText(intel.positioning.description, { indent: 10 });
        y -= 5;
        drawWrappedText('Market Positioning:', { bold: true });
        drawWrappedText(intel.positioning.marketPositioning, { indent: 10 });
        y -= 5;
        drawWrappedText('Key Strengths:', { bold: true });
        drawWrappedText(intel.positioning.strengths, { indent: 10 });
    }

    // 2. Performance
    drawSectionHeader('2. Current Market Performance (Baseline)');
    drawWrappedText(`Estimated Annual Revenue: $${projection.currentRevenue.toLocaleString()}`, { bold: true });
    if (intel?.marketPerformance) {
        drawWrappedText(intel.marketPerformance.baselineContext, { indent: 10 });
    }

    // 3. Missed Opportunities
    drawSectionHeader('3. Missed Revenue Opportunities');
    if (intel?.missedOpportunities) {
        intel.missedOpportunities.forEach((opp: any) => {
            const title = typeof opp === 'string' ? opp : opp.title;
            const desc = typeof opp === 'string' ? '' : opp.desc;
            drawWrappedText(`• ${title}`, { bold: true });
            if (desc) drawWrappedText(desc, { indent: 15 });
        });
    }

    // 4. Optimized Projection
    drawSectionHeader('4. Suite Capacity Optimized Projection');
    drawWrappedText(`Optimized Revenue Target: $${projection.optimizedRevenue.toLocaleString()}`, { size: 14, bold: true, color: accentColor });
    if (intel?.optimizedProjection) {
        drawWrappedText(`• New Peak Weekly Rate: ${intel.optimizedProjection.newPeakWeeklyRate}`);
        drawWrappedText(`• Occupancy Target: ${intel.optimizedProjection.occupancyTarget}`);
        drawWrappedText(`• Projected Range: ${intel.optimizedProjection.revenueRange}`);
    }

    // 5. Design Strategy
    drawSectionHeader('5. Design & Amenity Strategy');
    if (intel?.designStrategy) {
        drawWrappedText('Recommendation:', { bold: true });
        drawWrappedText(intel.designStrategy.recommendation, { indent: 10 });
        y -= 5;
        drawWrappedText('Impact Logic:', { bold: true });
        drawWrappedText(intel.designStrategy.impact, { indent: 10 });
    }

    // 6. Listing Optimization
    drawSectionHeader('6. Listing Optimization Strategy');
    if (intel?.listingStrategy) {
        drawWrappedText('Target Title:', { bold: true });
        drawWrappedText(intel.listingStrategy.titleStrategy.good, { indent: 10, color: accentColor });
        y -= 5;
        drawWrappedText('Copy Logic Details:', { bold: true });
        intel.listingStrategy.descriptionStrategy.forEach((step: string) => {
            drawWrappedText(`- ${step}`, { indent: 10 });
        });
    }

    y -= 40;
    checkPageBreak(60);
    drawWrappedText('Why Suite Capacity?', { size: 16, bold: true });
    drawWrappedText(intel?.whySuiteCapacity || 'Professional management isn’t a cost it’s the only way to capture the remaining 30%+ of your property’s value.', { size: 11 });

    const pdfBytes = await pdfDoc.save();
    return pdfBytes;
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
                const intel = projection.intelligence;
                const strategyUrl = process.env.STRATEGY_CALL_URL || 'https://yourdomain.com/schedule';

                const htmlContent = `
                    <div style="font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; color: #000; max-width: 600px; margin: 0 auto; padding: 20px; line-height: 1.6;">
                        <div style="text-align: center; margin-bottom: 40px;">
                            <p style="text-transform: uppercase; letter-spacing: 0.3em; font-size: 10px; font-weight: 900; color: #3b82f6; margin-bottom: 5px;">Suite Capacity Intel®</p>
                            <h1 style="font-size: 32px; font-weight: 900; margin: 0; letter-spacing: -0.05em;">Revenue Intelligence Report</h1>
                        </div>

                        <div style="background-color: #f8fafc; padding: 30px; border-radius: 20px; margin-bottom: 40px; border: 1px solid #e2e8f0;">
                            <p style="margin: 0; font-size: 14px; font-weight: 700; color: #64748b; text-transform: uppercase;">Property Analysis Prepared For:</p>
                            <p style="margin: 5px 0 0; font-size: 20px; font-weight: 900;">${data.lead.name}</p>
                            <p style="margin: 5px 0 0; font-size: 16px; font-weight: 500; color: #334155;">${data.property.address}</p>
                        </div>

                        <h2 style="font-size: 11px; font-weight: 900; text-transform: uppercase; letter-spacing: 0.2em; color: #3b82f6; border-bottom: 1px solid #f1f5f9; padding-bottom: 10px; margin-bottom: 20px;">1. Property Positioning Snapshot</h2>
                        <p style="font-weight: 700; margin-bottom: 5px;">Asset Assessment:</p>
                        <p style="margin-top: 0; margin-bottom: 20px;">${intel?.positioning?.description || 'Strategic STR asset with significant upside.'}</p>
                        <p style="font-weight: 700; margin-bottom: 5px;">Market Positioning:</p>
                        <p style="margin-top: 0; margin-bottom: 20px; font-weight: 900;">${intel?.positioning?.marketPositioning || 'Premium-Tier Potential'}</p>

                        <h2 style="font-size: 11px; font-weight: 900; text-transform: uppercase; letter-spacing: 0.2em; color: #3b82f6; border-bottom: 1px solid #f1f5f9; padding-bottom: 10px; margin-bottom: 20px;">2. Missed Revenue Opportunities</h2>
                        <div style="margin-bottom: 30px;">
                            ${(intel?.missedOpportunities || []).map((opp: any) => `
                                <div style="margin-bottom: 15px;">
                                    <p style="margin: 0; font-weight: 900; font-size: 14px; color: #991b1b;">• ${typeof opp === 'string' ? opp : opp.title}</p>
                                    ${typeof opp === 'object' && opp.desc ? `<p style="margin: 5px 0 0 15px; font-size: 13px; color: #7f1d1d;">${opp.desc}</p>` : ''}
                                </div>
                            `).join('')}
                        </div>

                        <div style="background-color: #000; color: #fff; padding: 40px; border-radius: 30px; text-align: center; margin-bottom: 40px;">
                            <p style="text-transform: uppercase; letter-spacing: 0.1em; font-size: 10px; font-weight: 700; color: #3b82f6; margin-bottom: 10px;">Institutional management Projection</p>
                            <h3 style="font-size: 48px; font-weight: 900; margin: 0; letter-spacing: -0.05em;">$${projection.optimizedRevenue.toLocaleString()}</h3>
                            <p style="font-size: 14px; color: rgba(255,255,255,0.7); margin-top: 5px;">Projected Annual Revenue Target</p>
                        </div>

                        <h2 style="font-size: 11px; font-weight: 900; text-transform: uppercase; letter-spacing: 0.2em; color: #3b82f6; border-bottom: 1px solid #f1f5f9; padding-bottom: 10px; margin-bottom: 20px;">3. Optimized Growth Roadmap</h2>
                        <ul style="padding-left: 20px; margin-bottom: 30px;">
                            <li style="margin-bottom: 10px;"><strong>Design Strategy:</strong> ${intel?.designStrategy?.recommendation || 'Premium interior refresh.'}</li>
                            <li style="margin-bottom: 10px;"><strong>Listing Optimization:</strong> ${intel?.listingStrategy?.titleStrategy?.good || 'Experience-first SEO titles.'}</li>
                            <li style="margin-bottom: 10px;"><strong>Revenue Management:</strong> Dynamic occupancy targeting @ 75%+.</li>
                        </ul>

                        <div style="text-align: center; margin-top: 50px; padding-top: 40px; border-top: 1px solid #f1f5f9;">
                            <h3 style="font-size: 20px; font-weight: 900; margin-bottom: 20px;">Ready to activate your professional management plan?</h3>
                            <a href="${strategyUrl}" style="background-color: #3b82f6; color: #fff; text-decoration: none; padding: 15px 35px; border-radius: 50px; font-weight: 900; font-size: 14px; text-transform: uppercase; letter-spacing: 0.1em; display: inline-block;">Book Strategy Session</a>
                            <p style="font-size: 12px; color: #64748b; margin-top: 20px;">Or reply to this email to speak with a property strategist directly.</p>
                        </div>

                        <div style="margin-top: 60px; text-align: center; font-size: 12px; color: #94a3b8;">
                            <p style="font-weight: 700;">Suite Capacity®</p>
                            <p>The centralized STR operating platform combining revenue intelligence and local expertise.</p>
                        </div>
                    </div>
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
 * Calculates a real intelligence-based revenue projection.
 * Coordinates between AirDNA, PriceLabs, and OpenAI.
 */
export async function calculateRevenueIntelligence(data: WizardData): Promise<RevenueProjection> {
    const market = getTargetMarket(data);
    const isShore = market?.id === 'jersey-shore';
    const marketMultiplier = market?.multiplier || 1.15; // default conservative multiplier
    
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
        const currentRevenue = data.baseline.annualRevenue || ((currentAdr * (currentOcc / 100)) * 365);

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
            performanceBreakdown: {
                peakContribution: Math.round((marketData.seasonalityIndex || 0.75) * 100),
                shoulderContribution: Math.round((1 - (marketData.seasonalityIndex || 0.75)) * 0.65 * 100),
                offSeasonContribution: Math.round((1 - (marketData.seasonalityIndex || 0.75)) * 0.35 * 100),
                peakWeeklyRate: Math.round((marketData.adr * 7) * marketMultiplier)
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
        const fallbackSeasonality = isShore ? 0.75 : 0.60;

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
            performanceBreakdown: {
                peakContribution: Math.round(fallbackSeasonality * 100),
                shoulderContribution: Math.round((1 - fallbackSeasonality) * 0.65 * 100),
                offSeasonContribution: Math.round((1 - fallbackSeasonality) * 0.35 * 100),
                peakWeeklyRate: Math.round(estimatedAdr * 7 * (isShore ? 1.35 : 1.15))
            },
            intelligence: intelligence || undefined
        };
    }
}
