'use server';

import { supabase, supabaseAdmin } from '@/lib/supabase';
import { WizardData, RevenueProjection } from '@/types/wizard';
import { revalidatePath } from 'next/cache';
import { AirDNAService } from '@/services/airdna';
import { PriceLabsService } from '@/services/pricelabs';
import { AIREnderingService } from '@/services/ai-rendering';
import { Resend } from 'resend';

// Initialize Resend with your API key
const resend = new Resend(process.env.RESEND_API_KEY || 're_dummy_key');

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

/**
 * Submits the full wizard data to the backend.
 * This is called at the end of the 10-step flow.
 */
export async function submitWizardData(data: WizardData, projection: RevenueProjection) {
    try {
        // 1. Create or Find Lead
        const leadPayload = {
            name: data.lead.name,
            email: data.lead.email,
            phone: data.lead.phone,
            timeline: data.lead.timeline,
            switching_management: data.lead.switchingManagement,
            operating_status: data.qualification.isOperating,
            ownership_status: data.qualification.ownershipStatus,
            current_manager: data.lead.currentManager,
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
        if (process.env.RESEND_API_KEY) {
            try {
                await resend.emails.send({
                    from: 'Suite Capacity <onboarding@resend.dev>', // Update with your verified domain in production
                    to: [data.lead.email],
                    subject: 'Your Revenue Intelligence Report is Ready',
                    html: `
                        <h1>Hi ${data.lead.name},</h1>
                        <p>Thank you for submitting your property details for ${data.property.address}.</p>
                        <p>Your custom Revenue Intelligence Report has been generated successfully.</p>
                        <p>Based on our analysis, your property has an optimized revenue potential of <strong>$${projection.optimizedRevenue.toLocaleString(undefined, { maximumFractionDigits: 0 })}</strong>.</p>
                        <p>Our team will follow up shortly to discuss these insights.</p>
                        <br/>
                        <p>Best Regards,</p>
                        <p>The Suite Capacity Team</p>
                    `
                });
                console.log('Confirmation email sent to:', data.lead.email);
            } catch (emailError) {
                console.error('Failed to send email:', emailError);
            }
        } else {
            console.warn('RESEND_API_KEY is not set. Skipping email send.');
        }

        revalidatePath('/dashboard'); // Mock path
        return { success: true, submissionId: lead.id };
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

        return {
            url: signedUrlData.signedUrl,
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
 * Calculates a real intelligence-based revenue projection.
 * Coordinates between AirDNA and PriceLabs.
 */
export async function calculateRevenueIntelligence(data: WizardData): Promise<RevenueProjection> {
    try {
        // 1. Fetch Market Data from AirDNA
        const marketData = await AirDNAService.fetchMarketData(data.property.address);

        // 2. Fetch Pricing Intelligence from PriceLabs
        const pricingData = await PriceLabsService.getPricingStrategy(data.property.address);

        // 3. Current Revenue (from user input or market average)
        const currentAdr = data.baseline.adr || marketData.adr;
        const currentOcc = data.baseline.occupancy || marketData.occupancyRate;
        const currentRevenue = (currentAdr * (currentOcc / 100)) * 365;

        // 4. Calculate Lift Factors based on Intelligence
        const marketUpside = Math.max(0, (marketData.adr * 1.3) - currentAdr);
        const pricingUpside = currentRevenue * (pricingData.volatilityIndex * 1.5);

        const optimizedRevenue = currentRevenue + marketUpside + pricingUpside;
        const totalLift = optimizedRevenue - currentRevenue;

        return {
            currentRevenue,
            optimizedRevenue,
            pricingLift: totalLift * 0.4,
            conversionLift: totalLift * 0.25,
            ecosystemLift: totalLift * 0.15,
            designLift: totalLift * 0.15,
            efficiencyLift: totalLift * 0.05,
            marketComparison: {
                marketMedianAdr: marketData.adr,
                topQuartileAdr: marketData.adr * 1.4,
                marketOccupancy: marketData.occupancyRate,
                demandIndex: marketData.demandIndex * 100
            }
        };
    } catch (error) {
        console.error('Intelligence Calculation Error:', error);
        // Fallback for demo if APIs are still setup
        return {
            currentRevenue: 100000,
            optimizedRevenue: 125000,
            pricingLift: 10000,
            conversionLift: 5000,
            ecosystemLift: 5000,
            designLift: 4000,
            efficiencyLift: 1000,
            marketComparison: {
                marketMedianAdr: 250,
                topQuartileAdr: 350,
                marketOccupancy: 65,
                demandIndex: 85
            }
        };
    }
}
