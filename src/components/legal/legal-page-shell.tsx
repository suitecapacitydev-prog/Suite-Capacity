import type { ReactNode } from 'react';
import SiteShell from '@/components/layout/site-shell';
import Link from 'next/link';
import { LEGAL_ROUTES } from '@/lib/legal';

interface LegalPageShellProps {
  title: string;
  subtitle?: string;
  children: ReactNode;
}

export function LegalPageShell({ title, subtitle, children }: LegalPageShellProps) {
  return (
    <SiteShell>
      <section className="pt-32 pb-24">
        <div className="container mx-auto px-6 max-w-3xl">
          <p className="text-[10px] font-black uppercase tracking-[0.4em] text-primary mb-4">Legal</p>
          <h1 className="text-4xl md:text-5xl font-black tracking-tighter mb-4">{title}</h1>
          {subtitle && <p className="text-lg text-black/60 font-medium mb-10">{subtitle}</p>}
          <div className="prose prose-neutral max-w-none space-y-6 text-black/80 leading-relaxed [&_h2]:text-xl [&_h2]:font-black [&_h2]:tracking-tight [&_h2]:mt-10 [&_h2]:mb-3 [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:space-y-2 [&_a]:text-primary [&_a]:font-semibold">
            {children}
          </div>
          <div className="mt-16 pt-8 border-t border-black/10 flex flex-wrap gap-4 text-sm font-bold">
            <Link href={LEGAL_ROUTES.privacy} className="text-primary hover:underline">
              Privacy Policy
            </Link>
            <Link href={LEGAL_ROUTES.terms} className="text-primary hover:underline">
              Terms of Service
            </Link>
            <Link href={LEGAL_ROUTES.sms} className="text-primary hover:underline">
              SMS Terms &amp; Conditions
            </Link>
          </div>
        </div>
      </section>
    </SiteShell>
  );
}
