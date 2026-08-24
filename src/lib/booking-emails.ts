import { WizardData, RevenueProjection } from '@/types/wizard';
import { CALENDLY_URL } from '@/lib/constants';

function escapeHtml(value: string): string {
    return value
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#39;');
}

function formatCurrency(val: number): string {
    return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        maximumFractionDigits: 0,
    }).format(val);
}

export function generateInternalBlueprintEmailHTML(
    data: WizardData,
    projection: RevenueProjection,
    submissionId: string,
    scheduledAt?: string | null,
): string {
    const liftPct = projection.currentRevenue > 0
        ? Math.round((projection.optimizedRevenue / projection.currentRevenue - 1) * 100)
        : 0;
    const opportunities = projection.intelligence?.missedOpportunities?.slice(0, 5) ?? [];

    return `
<!DOCTYPE html>
<html>
<head><meta charset="utf-8"></head>
<body style="font-family:Arial,sans-serif;background:#f4f3f2;margin:0;padding:24px;">
  <div style="max-width:640px;margin:0 auto;background:#fff;border-radius:16px;padding:32px;border:1px solid #e5e7eb;">
    <p style="margin:0 0 8px;font-size:11px;font-weight:900;text-transform:uppercase;letter-spacing:0.15em;color:#309683;">
      ${scheduledAt ? 'Blueprint Call Booked' : 'New STR Blueprint Lead'}
    </p>
    <h1 style="margin:0 0 16px;font-size:24px;color:#1a1c1b;">${escapeHtml(data.lead.name)} — ${escapeHtml(data.property.address.split(',')[0])}</h1>
    <p style="margin:0 0 24px;color:#4b5563;">Submission ID: <strong>${escapeHtml(submissionId)}</strong></p>

    <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom:24px;">
      <tr><td style="padding:8px 0;color:#6b7280;font-size:12px;font-weight:700;text-transform:uppercase;">Contact</td></tr>
      <tr><td style="padding:4px 0;"><strong>Email:</strong> ${escapeHtml(data.lead.email)}</td></tr>
      <tr><td style="padding:4px 0;"><strong>Phone:</strong> ${escapeHtml(data.lead.phone || 'N/A')}</td></tr>
      <tr><td style="padding:4px 0;"><strong>Timeline:</strong> ${escapeHtml(data.lead.timeline)}</td></tr>
    </table>

    <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom:24px;">
      <tr><td style="padding:8px 0;color:#6b7280;font-size:12px;font-weight:700;text-transform:uppercase;">Property</td></tr>
      <tr><td style="padding:4px 0;"><strong>Address:</strong> ${escapeHtml(data.property.address)}</td></tr>
      <tr><td style="padding:4px 0;"><strong>Type:</strong> ${escapeHtml(data.property.propertyType)} · ${data.property.bedrooms} bed / ${data.property.bathrooms} bath</td></tr>
    </table>

    <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom:24px;background:#f0fdf4;border-radius:12px;padding:16px;">
      <tr><td style="padding:8px 0;color:#309683;font-size:12px;font-weight:700;text-transform:uppercase;">Blueprint Snapshot</td></tr>
      <tr><td style="padding:4px 0;"><strong>Current Revenue:</strong> ${formatCurrency(projection.currentRevenue)}</td></tr>
      <tr><td style="padding:4px 0;"><strong>Optimized Potential:</strong> ${formatCurrency(projection.optimizedRevenue)} (+${liftPct}%)</td></tr>
      <tr><td style="padding:4px 0;"><strong>Demand Index:</strong> ${projection.marketComparison.demandIndex.toFixed(0)}%</td></tr>
    </table>

    ${opportunities.length > 0 ? `
    <p style="margin:0 0 8px;color:#6b7280;font-size:12px;font-weight:700;text-transform:uppercase;">Top Opportunities</p>
    <ul style="margin:0 0 24px;padding-left:20px;color:#374151;">
      ${opportunities.map(o => `<li style="margin-bottom:6px;">${escapeHtml(o)}</li>`).join('')}
    </ul>` : ''}

    ${scheduledAt ? `<p style="margin:0;padding:16px;background:#ecfdf5;border-radius:12px;color:#065f46;"><strong>Call scheduled:</strong> ${escapeHtml(scheduledAt)}</p>` : `
    <p style="margin:0;padding:16px;background:#fffbeb;border-radius:12px;color:#92400e;">Awaiting consultation booking. Full PDF report is attached for team prep.</p>`}
  </div>
</body>
</html>`;
}

export function generateBookingConfirmationEmailHTML(
    data: WizardData,
    projection: RevenueProjection,
    scheduledAt: string,
): string {
    const liftPct = projection.currentRevenue > 0
        ? Math.round((projection.optimizedRevenue / projection.currentRevenue - 1) * 100)
        : 0;

    return `
<!DOCTYPE html>
<html>
<head><meta charset="utf-8"></head>
<body style="font-family:Arial,sans-serif;background:#f4f3f2;margin:0;padding:24px;">
  <div style="max-width:640px;margin:0 auto;background:#fff;border-radius:16px;padding:32px;border:1px solid #e5e7eb;">
    <p style="margin:0 0 8px;font-size:11px;font-weight:900;text-transform:uppercase;letter-spacing:0.15em;color:#309683;">Booking Confirmed</p>
    <h1 style="margin:0 0 16px;font-size:28px;color:#1a1c1b;">Your Blueprint Review Is Scheduled</h1>
    <p style="margin:0 0 24px;color:#4b5563;line-height:1.6;">
      Hi ${escapeHtml(data.lead.name)}, your STR Blueprint consultation is confirmed for
      <strong>${escapeHtml(scheduledAt)}</strong>.
    </p>
    <p style="margin:0 0 24px;color:#4b5563;line-height:1.6;">
      Our team will walk you through your property&apos;s performance, revenue opportunities (+${liftPct}% projected upside),
      and full recommendations for ${escapeHtml(data.property.address.split(',')[0])}.
    </p>
    <p style="margin:0 0 24px;color:#4b5563;line-height:1.6;">
      Your complete STR Blueprint audit is attached to this email. We look forward to speaking with you!
    </p>
    <a href="${CALENDLY_URL}" style="display:inline-block;background:#309683;color:#fff;padding:14px 28px;border-radius:12px;font-weight:700;text-decoration:none;text-transform:uppercase;font-size:12px;letter-spacing:0.1em;">Manage Appointment</a>
  </div>
</body>
</html>`;
}

export function generateBookingConfirmationSms(
    data: WizardData,
    scheduledAt: string,
): string {
    return `Suite Capacity: Your STR Blueprint review for ${data.property.address.split(',')[0]} is confirmed for ${scheduledAt}. Check your email for the full audit. Reply STOP to opt out.`;
}
