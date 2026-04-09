import SiteShell from '@/components/layout/site-shell';
import { CheckCircle2, Star, ArrowRight, Zap, Calendar, ShieldCheck } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export const metadata = {
  title: 'Member Access Unlocked | Suite Capacity Guest List',
  description: 'Welcome to the Suite Capacity Guest List. Your member access is now active.',
};

export default function GuestWelcomePage() {
  return (
    <SiteShell>
      <section className="min-h-[90vh] flex items-center justify-center py-24 relative overflow-hidden bg-white">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent pointer-events-none" />
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[100px] pointer-events-none" />

        <div className="container mx-auto px-6 relative z-10 max-w-2xl text-center space-y-10">

          {/* Success Badge */}
          <div className="flex justify-center">
            <div className="w-24 h-24 rounded-full bg-primary/10 flex items-center justify-center ring-8 ring-primary/5 animate-in zoom-in-50 duration-500">
              <CheckCircle2 className="w-12 h-12 text-primary" />
            </div>
          </div>

          {/* Heading */}
          <div className="space-y-4 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/20 bg-primary/5 text-primary text-xs font-bold uppercase tracking-widest">
              <Star className="w-3.5 h-3.5 fill-primary" />
              Member Access Unlocked
            </div>
            <h1 className="text-4xl md:text-6xl font-black tracking-tight leading-tight text-black">
              Welcome to the{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
                Guest List
              </span>
            </h1>
            <p className="text-xl text-black/60 leading-relaxed max-w-xl mx-auto">
              You now have access to member rates, priority booking, and exclusive perks across our entire portfolio.
            </p>
          </div>

          {/* Member Perks Summary */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 animate-in fade-in slide-in-from-bottom-4 duration-700">
            {[
              { icon: Zap, title: 'Save 5–10%', desc: 'on every booking vs. OTAs' },
              { icon: Calendar, title: 'Priority Access', desc: 'to new property launches' },
              { icon: ShieldCheck, title: 'Member Perks', desc: 'exclusive rewards & upgrades' },
            ].map((perk, i) => (
              <div key={i} className="p-6 rounded-2xl bg-primary/5 border border-primary/10 text-center space-y-2">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center mx-auto">
                  <perk.icon className="w-5 h-5 text-primary" />
                </div>
                <p className="font-bold text-black text-sm">{perk.title}</p>
                <p className="text-xs text-black/50">{perk.desc}</p>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-in fade-in slide-in-from-bottom-4 duration-1000">
            <Link href="/guest-list">
              <Button size="lg" variant="intelligence" className="h-14 px-10 text-lg font-bold shadow-xl shadow-primary/20">
                View Member Properties
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
            <Link href="/">
              <Button size="lg" variant="outline" className="h-14 px-10 text-lg font-bold">
                Back to Home
              </Button>
            </Link>
          </div>

          <p className="text-xs text-black/40">
            Check your email inbox   a welcome confirmation is on its way.
          </p>
        </div>
      </section>
    </SiteShell>
  );
}
