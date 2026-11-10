import Link from 'next/link';
import { LegalPageShell } from '@/components/legal/legal-page-shell';
import { LEGAL_BRAND, LEGAL_ROUTES } from '@/lib/legal';

export const metadata = {
  title: 'Privacy Policy | Suite Capacity',
  description: 'How Suite Capacity collects, uses, and protects your personal information.',
};

export default function PrivacyPolicyPage() {
  return (
    <LegalPageShell
      title="Privacy Policy"
      subtitle={`Last updated: November 10, 2026 · ${LEGAL_BRAND.name}`}
    >
      <p>
        {LEGAL_BRAND.dba} (&quot;{LEGAL_BRAND.name},&quot; &quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) operates{' '}
        <a href={LEGAL_BRAND.website}>{LEGAL_BRAND.website.replace('https://', '')}</a> and provides vacation rental
        and property management services. This Privacy Policy explains how we collect, use, disclose, and safeguard
        your information when you visit our website, submit a form, or communicate with us.
      </p>

      <h2>Information we collect</h2>
      <p>We may collect information that you voluntarily provide, including:</p>
      <ul>
        <li>Name, email address, and phone number</li>
        <li>Property address and rental details you submit through our tools or forms</li>
        <li>Reservation or guest-list information</li>
        <li>Communications you send to us by email, phone, or text</li>
        <li>Technical data such as IP address, browser type, and usage data through cookies and analytics</li>
      </ul>

      <h2>How we use your information</h2>
      <p>We use collected information to:</p>
      <ul>
        <li>Provide property management, guest services, and owner support</li>
        <li>Respond to inquiries and deliver requested reports or consultations</li>
        <li>Send service-related messages, including SMS where you have opted in</li>
        <li>Improve our website, operations, and marketing (where permitted)</li>
        <li>Comply with legal obligations and protect our rights</li>
      </ul>

      <h2>SMS and mobile information</h2>
      <p>
        If you opt in to receive text messages from us, we use your mobile number only for the purposes described in
        our{' '}
        <Link href={LEGAL_ROUTES.sms}>SMS Terms &amp; Conditions</Link>.{' '}
        <strong>
          Mobile opt-in or phone numbers collected for the purpose of SMS are not shared with any third party or
          affiliate company for marketing purposes.
        </strong>{' '}
        We may use service providers (such as telephony platforms) solely to deliver messages on our behalf; they are not
        permitted to use your number for their own marketing.
      </p>

      <h2>Sharing of information</h2>
      <p>
        We do not sell your personal information. We may share data with trusted service providers who assist our
        operations (hosting, email, scheduling, property systems) under confidentiality obligations, or when required by
        law. SMS opt-in data and consent are not shared with third parties or affiliates for marketing purposes.
      </p>

      <h2>Data security</h2>
      <p>
        We use reasonable administrative, technical, and organizational measures to protect your information. No method
        of transmission over the Internet is 100% secure.
      </p>

      <h2>Your choices</h2>
      <ul>
        <li>You may opt out of marketing emails using unsubscribe links where provided.</li>
        <li>You may opt out of SMS at any time by replying STOP to any message from us.</li>
        <li>You may contact us to request access, correction, or deletion of certain personal information, subject to law.</li>
      </ul>

      <h2>Children</h2>
      <p>Our services are not directed to individuals under 18. We do not knowingly collect data from children.</p>

      <h2>Contact us</h2>
      <p>
        For privacy questions, contact {LEGAL_BRAND.name} at{' '}
        <a href={`mailto:${LEGAL_BRAND.email}`}>{LEGAL_BRAND.email}</a>, call {LEGAL_BRAND.phoneTollFree} or{' '}
        {LEGAL_BRAND.phoneOffice}, or visit{' '}
        <a href={LEGAL_BRAND.website}>{LEGAL_BRAND.website.replace('https://', '')}</a>.
      </p>

      <p>
        See also our <Link href={LEGAL_ROUTES.terms}>Terms of Service</Link> and{' '}
        <Link href={LEGAL_ROUTES.sms}>SMS Terms &amp; Conditions</Link>.
      </p>
    </LegalPageShell>
  );
}
