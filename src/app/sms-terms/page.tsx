import Link from 'next/link';
import { LegalPageShell } from '@/components/legal/legal-page-shell';
import { LEGAL_BRAND, LEGAL_ROUTES } from '@/lib/legal';

export const metadata = {
  title: 'SMS Terms & Conditions | Suite Capacity',
  description: 'Terms for SMS messaging from Suite Capacity Property Management.',
};

export default function SmsTermsPage() {
  return (
    <LegalPageShell
      title="SMS Terms & Conditions"
      subtitle={`Last updated: November 13, 2026 · ${LEGAL_BRAND.name}`}
    >
      <p>
        These SMS Terms &amp; Conditions (&quot;SMS Terms&quot;) apply when you opt in to receive text messages from{' '}
        {LEGAL_BRAND.dba}. By providing your mobile number and consenting to receive SMS messages,
        you agree to these SMS Terms and our{' '}
        <Link href={LEGAL_ROUTES.privacy}>Privacy Policy</Link>. Consent is obtained when you verbally agree during a
        conversation with our team.
      </p>

      <h2>SMS consent &amp; communication</h2>
      <p>
        The phone numbers you provide as part of the SMS consent process will not be shared with third parties for
        marketing purposes. Message and data rates may apply. Message frequency may vary.
      </p>

      <h2>Types of SMS communications</h2>
      <p>If you consent to receive SMS messages, you may receive communications such as:</p>
      <ul>
        <li>
          Appointment and consultation reminders (for example: reminders about upcoming calls or property walkthroughs)
        </li>
        <li>Follow-up messages regarding your inquiry or property onboarding</li>
        <li>Guest stay updates, check-in information, or reservation-related notices</li>
        <li>Billing or account inquiries related to management services</li>
      </ul>
      <p className="text-sm text-black/60 italic">
        Example: &quot;Hello, this is a reminder of your upcoming consultation with {LEGAL_BRAND.name} on [Date] at
        [Time]. Reply STOP to opt out of SMS messaging at any time.&quot;
      </p>

      <h2>Message frequency</h2>
      <p>
        Message frequency may vary depending on the type of communication. You may receive up to 4 SMS messages per week
        regarding appointments, guest stays, or account status.
      </p>

      <h2>Potential fees</h2>
      <p>
        Standard message and data rates may apply depending on your carrier&apos;s pricing plan. Fees may vary for
        domestic and international messages.
      </p>

      <h2>Opt-in methods</h2>
      <p>You may opt in to receive SMS messages by:</p>
      <ul>
        <li>Verbally agreeing during a conversation with our team</li>
      </ul>

      <h2>Opt-out methods</h2>
      <p>
        You can opt out at any time by replying <strong>STOP</strong> to any SMS message from us. After you opt out, you
        may receive a final confirmation message. You may also contact us directly to be removed from our messaging list.
      </p>

      <h2>Help</h2>
      <p>
        For help with SMS, reply <strong>HELP</strong> to any message from us, email{' '}
        <a href={`mailto:${LEGAL_BRAND.email}`}>{LEGAL_BRAND.email}</a>, or call {LEGAL_BRAND.phoneTollFree} (
        {LEGAL_BRAND.phoneOffice}).
      </p>

      <h2>Standard messaging disclosures</h2>
      <ul>
        <li>Message and data rates may apply.</li>
        <li>You can opt out at any time by texting STOP.</li>
        <li>
          For assistance, text HELP or visit our{' '}
          <Link href={LEGAL_ROUTES.privacy}>Privacy Policy</Link> and{' '}
          <Link href={LEGAL_ROUTES.terms}>Terms of Service</Link>.
        </li>
        <li>Message frequency may vary.</li>
      </ul>

      <h2>Changes</h2>
      <p>
        We may update these SMS Terms from time to time. Continued receipt of messages after changes constitutes acceptance
        of the updated terms where permitted by law.
      </p>
    </LegalPageShell>
  );
}
