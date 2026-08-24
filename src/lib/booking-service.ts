import { supabaseAdmin } from '@/lib/supabase';
import nodemailer from 'nodemailer';
import { WizardData, RevenueProjection } from '@/types/wizard';
import { generateReportPdf } from '@/lib/report-pdf';
import {
    generateInternalBlueprintEmailHTML,
    generateBookingConfirmationEmailHTML,
    generateBookingConfirmationSms,
} from '@/lib/booking-emails';
import { sendSms } from '@/lib/sms';

const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST || 'smtp.gmail.com',
    port: parseInt(process.env.SMTP_PORT || '587'),
    secure: process.env.SMTP_PORT === '465',
    auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
    },
});

const emailFrom = process.env.EMAIL_FROM || '"Suite Capacity" <onboarding@resend.dev>';
const internalTeamEmails = [
    process.env.INTERNAL_TEAM_EMAIL || 'suitecapacity.dev@gmail.com',
    'suitecapacity@gmail.com',
].filter(Boolean);

function formatScheduledTime(isoDate: string): string {
    try {
        return new Date(isoDate).toLocaleString('en-US', {
            weekday: 'long',
            month: 'long',
            day: 'numeric',
            year: 'numeric',
            hour: 'numeric',
            minute: '2-digit',
            timeZoneName: 'short',
        });
    } catch {
        return isoDate;
    }
}

async function fetchSubmissionBundle(submissionId: string) {
    const { data: submission, error } = await supabaseAdmin
        .from('wizard_submissions')
        .select('id, status, qualification_data, baseline_data, audit_data, projection_results, lead_id, property_id')
        .eq('id', submissionId)
        .single();

    if (error || !submission) return null;

    const [{ data: lead }, { data: property }] = await Promise.all([
        supabaseAdmin.from('leads').select('name, email, phone, timeline, switching_management').eq('id', submission.lead_id).single(),
        supabaseAdmin.from('properties').select('address, property_type, bedrooms, bathrooms, max_occupancy, amenities, parking').eq('id', submission.property_id).single(),
    ]);

    const wizardData: WizardData = {
        qualification: submission.qualification_data,
        baseline: submission.baseline_data,
        audit: submission.audit_data,
        property: {
            address: property?.address || '',
            propertyType: property?.property_type || 'single-family',
            bedrooms: property?.bedrooms || 2,
            bathrooms: property?.bathrooms || 2,
            maxOccupancy: property?.max_occupancy || 4,
            amenities: property?.amenities || [],
            parking: property?.parking || 'ample',
        },
        aiDesign: { images: [] },
        lead: {
            name: lead?.name || '',
            email: lead?.email || '',
            phone: lead?.phone || '',
            timeline: lead?.timeline || 'immediately',
            switchingManagement: lead?.switching_management || 'maybe',
        },
    };

    const projection = submission.projection_results as RevenueProjection;

    return { submission, wizardData, projection };
}

export async function sendInternalBlueprintNotification(
    submissionId: string,
    wizardData: WizardData,
    projection: RevenueProjection,
    pdfBytes: Uint8Array,
    scheduledAt?: string | null,
) {
    if (!process.env.SMTP_USER || !process.env.SMTP_PASS) {
        console.warn('SMTP not configured; skipping internal blueprint notification.');
        return { sent: false };
    }

    const scheduledLabel = scheduledAt ? formatScheduledTime(scheduledAt) : null;

    await transporter.sendMail({
        from: emailFrom,
        to: internalTeamEmails,
        subject: scheduledAt
            ? `[Call Booked] STR Blueprint — ${wizardData.lead.name} — ${wizardData.property.address.split(',')[0]}`
            : `[New Lead] STR Blueprint — ${wizardData.lead.name} — ${wizardData.property.address.split(',')[0]}`,
        html: generateInternalBlueprintEmailHTML(wizardData, projection, submissionId, scheduledLabel),
        attachments: [
            {
                filename: 'STR-Blueprint-Report.pdf',
                content: Buffer.from(pdfBytes),
                contentType: 'application/pdf',
            },
        ],
    });

    return { sent: true };
}

export async function processBookingConfirmation(
    submissionId: string,
    options: {
        calendlyEventUri?: string;
        calendlyInviteeUri?: string;
        scheduledAt?: string;
        inviteeEmail?: string;
    } = {},
) {
    const bundle = await fetchSubmissionBundle(submissionId);
    if (!bundle) {
        return { success: false, error: 'Submission not found' };
    }

    const { submission, wizardData, projection } = bundle;

    if (submission.status === 'booking_scheduled') {
        return { success: true, alreadyProcessed: true };
    }

    if (options.inviteeEmail && wizardData.lead.email.toLowerCase() !== options.inviteeEmail.toLowerCase()) {
        console.warn('Booking email mismatch for submission', submissionId);
    }

    const scheduledAt = options.scheduledAt || new Date().toISOString();
    const scheduledLabel = formatScheduledTime(scheduledAt);

    const updatePayload: Record<string, unknown> = {
        status: 'booking_scheduled',
        booking_scheduled_at: scheduledAt,
        booking_confirmed_at: new Date().toISOString(),
    };
    if (options.calendlyEventUri) updatePayload.calendly_event_uri = options.calendlyEventUri;
    if (options.calendlyInviteeUri) updatePayload.calendly_invitee_uri = options.calendlyInviteeUri;

    const { error: updateError } = await supabaseAdmin
        .from('wizard_submissions')
        .update(updatePayload)
        .eq('id', submissionId);

    if (updateError) {
        return { success: false, error: updateError.message };
    }

    const pdfBytes = await generateReportPdf(wizardData, projection);

    let emailSent = false;
    let smsSent = false;

    if (process.env.SMTP_USER && process.env.SMTP_PASS) {
        try {
            await transporter.sendMail({
                from: emailFrom,
                to: wizardData.lead.email,
                bcc: internalTeamEmails,
                subject: 'Your STR Blueprint Review Is Confirmed',
                html: generateBookingConfirmationEmailHTML(wizardData, projection, scheduledLabel),
                attachments: [
                    {
                        filename: 'STR-Blueprint-Report.pdf',
                        content: Buffer.from(pdfBytes),
                        contentType: 'application/pdf',
                    },
                ],
            });
            emailSent = true;
        } catch (err) {
            console.error('Booking confirmation email failed:', err);
        }
    }

    if (wizardData.lead.phone) {
        const smsResult = await sendSms(
            wizardData.lead.phone,
            generateBookingConfirmationSms(wizardData, scheduledLabel),
        );
        smsSent = smsResult.sent;
    }

    await sendInternalBlueprintNotification(submissionId, wizardData, projection, pdfBytes, scheduledAt);

    return { success: true, emailSent, smsSent };
}

export async function findPendingSubmissionByEmail(email: string) {
    const { data: lead } = await supabaseAdmin
        .from('leads')
        .select('id')
        .ilike('email', email.trim())
        .maybeSingle();

    if (!lead) return null;

    const { data: submission } = await supabaseAdmin
        .from('wizard_submissions')
        .select('id')
        .eq('lead_id', lead.id)
        .eq('status', 'pending_booking')
        .order('created_at', { ascending: false })
        .limit(1)
        .maybeSingle();

    return submission?.id ?? null;
}

export async function findSubmissionByEmail(email: string) {
    const pending = await findPendingSubmissionByEmail(email);
    if (pending) return pending;

    const { data: lead } = await supabaseAdmin
        .from('leads')
        .select('id')
        .ilike('email', email.trim())
        .maybeSingle();

    if (!lead) return null;

    const { data: submission } = await supabaseAdmin
        .from('wizard_submissions')
        .select('id')
        .eq('lead_id', lead.id)
        .order('created_at', { ascending: false })
        .limit(1)
        .maybeSingle();

    return submission?.id ?? null;
}
