import SiteShell from '@/components/layout/site-shell';
import { Hero } from '@/components/marketing/hero';
import { GuestEcosystemSection } from '@/components/marketing/guest-ecosystem-section';
import { DeploymentProcess } from '@/components/marketing/deployment-process';
import Link from 'next/link';
import { FileText, Settings, Users, TrendingUp, ArrowRight, CheckCircle, Zap } from 'lucide-react';

export default function Home() {
  return (
    <SiteShell>
      <Hero />

      {/* SECTION — STR BLUEPRINT (major feature near top) */}
      <section className="py-24 bg-primary/5 border-y border-black/5">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-black uppercase tracking-widest mb-6 border border-primary/20">
                <FileText className="w-3 h-3" /> Free STR Blueprint
              </div>
              <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-6 leading-tight">
                See Exactly What Your Property Can Make.
              </h2>
              <p className="text-lg text-black/60 mb-8 leading-relaxed">
                Before you commit to anything, we give you a free personalized STR Blueprint — no fluff, no vague estimates. Real revenue projections, a design plan, and an optimization strategy tailored to your specific property.
              </p>
              <ul className="space-y-4 mb-10">
                {[
                  'Revenue projections & market comparison',
                  'Design + setup plan for maximum bookings',
                  'Pricing & optimization strategy',
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-black/70 font-medium">
                    <CheckCircle className="w-5 h-5 text-primary shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <Link href="/wizard">
                <button className="inline-flex items-center gap-2 px-8 py-5 bg-primary text-white rounded-2xl font-black text-lg hover:bg-primary/90 hover:-translate-y-1 transition-all shadow-xl shadow-primary/20">
                  <FileText className="w-5 h-5" /> Generate Your Report
                  <ArrowRight className="w-5 h-5" />
                </button>
              </Link>
            </div>
            <div className="relative">
              <div className="glass-panel p-10 border-primary/20 bg-white shadow-xl">
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                    <FileText className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="font-black text-lg">STR Blueprint</div>
                    <div className="text-xs text-black/40 font-bold uppercase tracking-widest">Personalized Report</div>
                  </div>
                </div>
                <div className="space-y-4">
                  {[
                    { label: 'Projected Monthly Revenue', value: '$8,400 – $12,200', positive: true },
                    { label: 'Estimated Annual Income', value: '$100,800+', positive: true },
                    { label: 'Vs. Current Long-Term Rental', value: '+$4,200/mo', positive: true },
                    { label: 'Market ADR (Area Average)', value: '$320/night', positive: false },
                    { label: 'Occupancy Projection', value: '78 – 92%', positive: false },
                  ].map((stat, i) => (
                    <div key={i} className="flex justify-between items-center py-3 border-b border-black/5 last:border-0">
                      <span className="text-sm text-black/50 font-medium">{stat.label}</span>
                      <span className={`text-sm font-black ${stat.positive ? 'text-green-600' : 'text-black'}`}>{stat.value}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-8 p-4 rounded-2xl bg-primary/5 border border-primary/10 text-center">
                  <div className="text-xs font-black uppercase tracking-widest text-primary mb-1">Blueprint Status</div>
                  <div className="text-sm text-black/60">Personalized for your property address & market</div>
                </div>
              </div>
              <div className="absolute -bottom-4 -right-4 glass-panel p-4 border-green-500/20 bg-white shadow-lg">
                <div className="text-xs font-black text-green-600 uppercase tracking-widest">Free — No Commitment</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION — HOW IT WORKS */}
      <section id="how-it-works" className="py-24 container mx-auto px-6">
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-black text-black tracking-tight mb-4">How It Works</h2>
          <p className="text-lg text-black/60">Three phases. Fully done for you. You collect the income.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {[
            {
              step: '01',
              title: 'Analyze',
              subtitle: 'Your STR Blueprint',
              icon: FileText,
              color: 'text-blue-600 bg-blue-500/10',
              items: ['Revenue projections', 'Market demand analysis', 'Personalized STR strategy'],
            },
            {
              step: '02',
              title: 'Setup',
              subtitle: 'Full Property Activation',
              icon: Settings,
              color: 'text-primary bg-primary/10',
              items: ['Furnishing & interior design', 'Professional photography', 'Listing creation & optimization'],
            },
            {
              step: '03',
              title: 'Operate',
              subtitle: 'Ongoing Management',
              icon: TrendingUp,
              color: 'text-green-600 bg-green-500/10',
              items: ['Dynamic pricing & automation', 'Guest management & concierge', 'Cleaning, inspections & compliance'],
            },
          ].map((phase, i) => (
            <div key={i} className="glass-panel p-8 border-black/5 bg-white relative overflow-hidden group hover:-translate-y-1 transition-all">
              <div className="absolute top-6 right-6 text-7xl font-black text-black/[0.04] leading-none">{phase.step}</div>
              <div className={`w-12 h-12 rounded-2xl flex items-center justify-center mb-6 ${phase.color}`}>
                <phase.icon className="w-6 h-6" />
              </div>
              <div className="text-xs font-black uppercase tracking-widest text-black/40 mb-2">Step {phase.step}</div>
              <h3 className="text-2xl font-black mb-1">{phase.title}</h3>
              <p className="text-sm text-primary font-bold mb-6">{phase.subtitle}</p>
              <ul className="space-y-3">
                {phase.items.map((item, j) => (
                  <li key={j} className="flex items-center gap-2 text-sm text-black/60 font-medium">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Result Row */}
        <div className="pt-16 border-t border-black/5">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-black text-black tracking-tight">The Result</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-12">
            {[
              { title: 'Passive income', desc: 'Your property works for you. We handle the complexity — you collect the revenue.' },
              { title: 'More revenue', desc: 'Our pricing tools and automation consistently outperform the market average by 24%+.' },
              { title: 'Zero headaches', desc: 'Standardized protocols ensure institutional-grade hospitality across every unit, every time.' },
            ].map((result) => (
              <div key={result.title} className="text-center space-y-4 p-6 glass-panel border-transparent hover:border-black/5 transition-colors">
                <div className="text-2xl font-black text-black capitalize">{result.title}</div>
                <p className="text-black/60 text-sm leading-relaxed">{result.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION — GUEST ECOSYSTEM */}
      <GuestEcosystemSection />

      {/* SECTION — PLATFORM DEPLOYMENT */}
      <DeploymentProcess />
    </SiteShell>
  );
}
