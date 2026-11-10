import Link from 'next/link';
import { LegalPageShell } from '@/components/legal/legal-page-shell';
import { LEGAL_BRAND, LEGAL_ROUTES } from '@/lib/legal';

export const metadata = {
  title: 'Terms of Service | Suite Capacity',
  description: 'Terms governing use of the Suite Capacity website and services.',
};

export default function TermsOfServicePage() {
  return (
    <LegalPageShell
      title="Terms of Service"
      subtitle={`Last updated: November 10, 2026 · ${LEGAL_BRAND.name}`}
    >
      <p>
        These Terms of Service (&quot;Terms&quot;) govern your access to and use of the website and digital services
        offered by {LEGAL_BRAND.dba}. By using our site, you agree to these Terms and our{' '}
        <Link href={LEGAL_ROUTES.privacy}>Privacy Policy</Link>.
      </p>

      <h2>Use of the website</h2>
      <p>
        You agree to use this website only for lawful purposes. You may not attempt to disrupt the site, access
        non-public areas, or misuse content, tools, or data made available to you.
      </p>

      <h2>No guarantee of outcomes</h2>
      <p>
        Revenue projections, market analyses, AI renderings, and similar tools are for informational purposes. They are
        not guarantees of future performance. Management services are subject to separate agreements between you and{' '}
        {LEGAL_BRAND.name}.
      </p>

      <h2>Intellectual property</h2>
      <p>
        Content on this site—including text, graphics, logos, and software—is owned by or licensed to {LEGAL_BRAND.name}
        and may not be copied or used without permission.
      </p>

      <h2>Third-party links</h2>
      <p>
        Our site may link to third-party sites or services. We are not responsible for their content or practices.
      </p>

      <h2>Disclaimer &amp; limitation of liability</h2>
      <p>
        The site is provided &quot;as is&quot; to the fullest extent permitted by law. {LEGAL_BRAND.name} is not liable
        for indirect or consequential damages arising from your use of the website.
      </p>

      <h2>Text messaging</h2>
      <p>
        SMS messaging is governed by our separate{' '}
        <Link href={LEGAL_ROUTES.sms}>SMS Terms &amp; Conditions</Link>. Mobile opt-in and phone numbers collected for
        SMS are handled as described in our Privacy Policy and are not shared with third parties or affiliates for
        marketing purposes.
      </p>

      <h2>Contact</h2>
      <p>
        Questions about these Terms: <a href={`mailto:${LEGAL_BRAND.email}`}>{LEGAL_BRAND.email}</a>,{' '}
        {LEGAL_BRAND.phoneTollFree}.
      </p>
    </LegalPageShell>
  );
}
