import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST || 'smtp.gmail.com',
  port: parseInt(process.env.SMTP_PORT || '587', 10),
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

interface ContactPayload {
  firstName: string;
  lastName: string;
  company?: string;
  email: string;
  phone?: string;
  propertyZip?: string;
  marketZip?: string;
  inquiryType?: string;
  message?: string;
  smsConsent?: boolean;
}

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as ContactPayload;

    const firstName = body.firstName?.trim();
    const lastName = body.lastName?.trim();
    const email = body.email?.trim();

    if (!firstName || !lastName || !email) {
      return NextResponse.json({ success: false, error: 'Missing required fields.' }, { status: 400 });
    }

    if (body.phone?.trim() && !body.smsConsent) {
      return NextResponse.json(
        { success: false, error: 'SMS consent is required when a phone number is provided.' },
        { status: 400 }
      );
    }

    const rows = [
      ['Name', `${firstName} ${lastName}`],
      ['Company', body.company?.trim() || '—'],
      ['Email', email],
      ['Phone', body.phone?.trim() || '—'],
      ['Property Zip', body.propertyZip?.trim() || '—'],
      ['Market Zip', body.marketZip?.trim() || '—'],
      ['Inquiry Type', body.inquiryType?.trim() || '—'],
      ['SMS Opt-in', body.smsConsent ? 'Yes' : 'No'],
      ['Message', body.message?.trim() || '—'],
    ];

    const html = `
      <h2>New Contact Us submission</h2>
      <table style="border-collapse:collapse;font-family:sans-serif;font-size:14px;">
        ${rows
          .map(
            ([label, value]) =>
              `<tr><td style="padding:6px 12px 6px 0;font-weight:600;color:#374151;vertical-align:top;">${escapeHtml(label)}</td><td style="padding:6px 0;color:#111827;">${escapeHtml(value)}</td></tr>`
          )
          .join('')}
      </table>
    `;

    const hasSmtp = Boolean(process.env.SMTP_USER && process.env.SMTP_PASS);

    if (hasSmtp) {
      await transporter.sendMail({
        from: emailFrom,
        to: internalTeamEmails,
        replyTo: email,
        subject: `Contact Us: ${firstName} ${lastName}`,
        html,
      });
    } else {
      console.log('Contact Us submission (SMTP not configured):', Object.fromEntries(rows));
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json({ success: false, error: 'Failed to process submission.' }, { status: 500 });
  }
}