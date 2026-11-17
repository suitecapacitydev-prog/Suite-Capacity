import type { Metadata } from 'next';
import SiteShell from '@/components/layout/site-shell';
import { ContactUsForm } from '@/components/contact/contact-us-form';
import { LEGAL_BRAND } from '@/lib/legal';

export const metadata: Metadata = {
  title: 'Contact Us | Suite Capacity',
  description: `Contact ${LEGAL_BRAND.dba} for property management inquiries, consultations, and support.`,
};

export default function ContactPage() {
  return (
    <SiteShell>
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-6 max-w-xl">
          <div className="text-center mb-10">
            <h1 className="text-4xl md:text-5xl font-black tracking-tight text-black mb-4">Contact Us</h1>
            <p className="text-black/60 leading-relaxed">
              Reach {LEGAL_BRAND.dba}. Call {LEGAL_BRAND.phoneTollFree} or email{' '}
              <a href={`mailto:${LEGAL_BRAND.email}`} className="text-primary font-semibold hover:underline">
                {LEGAL_BRAND.email}
              </a>
              .
            </p>
          </div>
          <div className="rounded-2xl border border-black/10 bg-white shadow-sm p-6 md:p-8">
            <ContactUsForm />
          </div>
        </div>
      </section>
    </SiteShell>
  );
}