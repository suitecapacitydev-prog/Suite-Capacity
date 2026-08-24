/**
 * Optional SMS via Twilio. Skips silently when credentials are not configured.
 */
export async function sendSms(to: string, body: string): Promise<{ sent: boolean; error?: string }> {
    const accountSid = process.env.TWILIO_ACCOUNT_SID;
    const authToken = process.env.TWILIO_AUTH_TOKEN;
    const fromNumber = process.env.TWILIO_PHONE_NUMBER;

    if (!accountSid || !authToken || !fromNumber) {
        return { sent: false, error: 'Twilio credentials not configured' };
    }

    const normalized = to.replace(/[^\d+]/g, '');
    if (!normalized) {
        return { sent: false, error: 'Invalid phone number' };
    }

    try {
        const params = new URLSearchParams({
            To: normalized.startsWith('+') ? normalized : `+1${normalized}`,
            From: fromNumber,
            Body: body,
        });

        const response = await fetch(
            `https://api.twilio.com/2010-04-01/Accounts/${accountSid}/Messages.json`,
            {
                method: 'POST',
                headers: {
                    Authorization: `Basic ${Buffer.from(`${accountSid}:${authToken}`).toString('base64')}`,
                    'Content-Type': 'application/x-www-form-urlencoded',
                },
                body: params.toString(),
            }
        );

        if (!response.ok) {
            const text = await response.text();
            return { sent: false, error: text };
        }

        return { sent: true };
    } catch (error: any) {
        return { sent: false, error: error?.message || String(error) };
    }
}
