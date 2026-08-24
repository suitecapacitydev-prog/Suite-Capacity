import { NextResponse } from 'next/server';
import crypto from 'crypto';
import { processBookingConfirmation, findSubmissionByEmail } from '@/lib/booking-service';

function verifyCalendlySignature(rawBody: string, signatureHeader: string | null): boolean {
    const signingKey = process.env.CALENDLY_WEBHOOK_SIGNING_KEY;
    if (!signingKey || !signatureHeader) return !signingKey;

    const parts = signatureHeader.split(',').reduce<Record<string, string>>((acc, part) => {
        const [key, value] = part.split('=');
        if (key && value) acc[key.trim()] = value.trim();
        return acc;
    }, {});

    const timestamp = parts.t;
    const signature = parts.v1;
    if (!timestamp || !signature) return false;

    const signedPayload = `${timestamp}.${rawBody}`;
    const expected = crypto.createHmac('sha256', signingKey).update(signedPayload).digest('hex');

    try {
        return crypto.timingSafeEqual(Buffer.from(signature), Buffer.from(expected));
    } catch {
        return false;
    }
}

export async function POST(request: Request) {
    try {
        const rawBody = await request.text();
        const signature = request.headers.get('Calendly-Webhook-Signature');

        if (process.env.CALENDLY_WEBHOOK_SIGNING_KEY && !verifyCalendlySignature(rawBody, signature)) {
            return NextResponse.json({ error: 'Invalid signature' }, { status: 401 });
        }

        const payload = JSON.parse(rawBody);
        const event = payload?.event;

        if (event !== 'invitee.created') {
            return NextResponse.json({ received: true, skipped: true });
        }

        const invitee = payload?.payload?.invitee;
        const scheduledEvent = payload?.payload?.scheduled_event;
        const inviteeEmail = invitee?.email as string | undefined;

        if (!inviteeEmail) {
            return NextResponse.json({ error: 'Missing invitee email' }, { status: 400 });
        }

        const utmContent = payload?.payload?.tracking?.utm_content as string | undefined;
        let submissionId = utmContent || null;

        if (!submissionId) {
            submissionId = await findSubmissionByEmail(inviteeEmail);
        }

        if (!submissionId) {
            console.warn('Calendly webhook: no matching submission for', inviteeEmail);
            return NextResponse.json({ received: true, matched: false });
        }

        const result = await processBookingConfirmation(submissionId, {
            calendlyEventUri: scheduledEvent?.uri,
            calendlyInviteeUri: invitee?.uri,
            scheduledAt: scheduledEvent?.start_time,
            inviteeEmail,
        });

        return NextResponse.json({ received: true, ...result });
    } catch (error: any) {
        console.error('Calendly webhook error:', error);
        return NextResponse.json({ error: error?.message || 'Webhook processing failed' }, { status: 500 });
    }
}
