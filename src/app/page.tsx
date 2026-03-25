import SiteShell from '@/components/layout/site-shell';
import { Hero } from '@/components/marketing/hero';
import { GuestEcosystemSection } from '@/components/marketing/guest-ecosystem-section';
import { DeploymentProcess } from '@/components/marketing/deployment-process';
import { MarketsSection } from '@/components/marketing/markets-section';
import { InvestmentTeaser } from '@/components/marketing/investment-teaser';
import { GuestListTeaser } from '@/components/marketing/guest-list-teaser';
import Link from 'next/link';
import { FileText, Settings, TrendingUp, ArrowRight, CheckCircle } from 'lucide-react';

export default function Home() {
  return (
    <SiteShell>
      <Hero />

      {/* SECTION — STR BLUEPRINT */}
      <section className="py-24 bg-primary/5 border-y border-black/5">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 text-primary text-[11px] font-semibold uppercase tracking-widest mb-6 border border-primary/20">
                <FileText className="w-3 h-3" /> Free STR Blueprint
              </div>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-5 leading-tight">
                See Exactly What Your Property Can Make.
              </h2>
              <p className="text-base text-black/55 mb-8 leading-relaxed">
                Before you commit to anything, we give you a free personalized STR Blueprint. Real revenue projections, a design plan, and an optimization strategy tailored to your specific property.
              </p>
              <ul className="space-y-3 mb-10">
                {[
                  'Revenue Projections & Market Comparison',
                  'Design + Setup Plan for Maximum Bookings',
                  'Pricing & Optimization Strategy',
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-black/65 text-sm">
                    <CheckCircle className="w-4 h-4 text-primary shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <Link href="/wizard">
                <button className="inline-flex items-center gap-2 px-7 py-4 bg-primary text-black rounded-2xl font-semibold text-base hover:bg-primary/90 hover:-translate-y-0.5 transition-all shadow-lg shadow-primary/20">
                  <FileText className="w-4 h-4" /> Generate Your Report
                  <ArrowRight className="w-4 h-4" />
                </button>
              </Link>
            </div>
            <div className="relative">
              <div className="glass-panel p-8 border-primary/20 bg-white shadow-xl rounded-2xl">
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-9 h-9 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                    <FileText className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="font-semibold text-base">STR Blueprint</div>
                    <div className="text-xs text-black/40 uppercase tracking-wider">Personalized Report</div>
                  </div>
                </div>
                <div className="space-y-0">
                  {[
                    { label: 'Projected Monthly Revenue', value: '$8,400 – $12,200', positive: true },
                    { label: 'Estimated Annual Income', value: '$100,800+', positive: true },
                    { label: 'Vs. Long-Term Rental', value: '+$4,200/mo', positive: true },
                    { label: 'Market ADR (Area Average)', value: '$320/night', positive: false },
                    { label: 'Occupancy Projection', value: '78 – 92%', positive: false },
                  ].map((stat, i) => (
                    <div key={i} className="flex justify-between items-center py-3.5 border-b border-black/5 last:border-0">
                      <span className="text-sm text-black/50">{stat.label}</span>
                      <span className={`text-sm font-semibold ${stat.positive ? 'text-green-600' : 'text-black'}`}>{stat.value}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-6 p-3.5 rounded-xl bg-primary/5 border border-primary/10 text-center">
                  <div className="text-xs font-semibold text-primary mb-0.5">Blueprint Status</div>
                  <div className="text-xs text-black/50">Personalized for your property address & market</div>
                </div>
              </div>
              <div className="absolute -bottom-4 -right-4 bg-white rounded-xl shadow-lg px-4 py-3 border border-green-100">
                <div className="text-xs font-semibold text-green-600">Free — No Commitment</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION — HOW IT WORKS */}
      <section id="how-it-works" className="py-24 container mx-auto px-6">
        <div className="text-center mb-16 max-w-xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-black tracking-tight mb-3">How It Works</h2>
          <p className="text-base text-black/55">Three phases. Fully done for you. You collect the income.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {[
            {
              step: '01',
              title: 'Analyze',
              subtitle: 'Your STR Blueprint',
              icon: FileText,
              color: 'text-blue-600 bg-blue-500/10',
              items: ['Revenue Projections', 'Market Demand Analysis', 'Personalized STR Strategy'],
            },
            {
              step: '02',
              title: 'Setup',
              subtitle: 'Full Property Activation',
              icon: Settings,
              color: 'text-primary bg-primary/10',
              items: ['Furnishing & Interior Design', 'Professional Photography', 'Listing Creation & Optimization'],
            },
            {
              step: '03',
              title: 'Operate',
              subtitle: 'Ongoing Management',
              icon: TrendingUp,
              color: 'text-green-600 bg-green-500/10',
              items: ['Dynamic Pricing & Automation', 'Guest Management & Concierge', 'Cleaning, Inspections & Compliance'],
            },
          ].map((phase, i) => (
            <div key={i} className="glass-panel p-8 border-black/5 bg-white relative overflow-hidden group hover:-translate-y-1 transition-all">
              <div className="absolute top-6 right-6 text-7xl font-black text-black/[0.04] leading-none select-none">{phase.step}</div>
              <div className={`w-11 h-11 rounded-xl flex items-center justify-center mb-5 ${phase.color}`}>
                <phase.icon className="w-5 h-5" />
              </div>
              <div className="text-xs font-semibold text-black/35 uppercase tracking-widest mb-1.5">Step {phase.step}</div>
              <h3 className="text-xl font-semibold mb-1">{phase.title}</h3>
              <p className="text-sm text-primary font-medium mb-5">{phase.subtitle}</p>
              <ul className="space-y-2.5">
                {phase.items.map((item, j) => (
                  <li key={j} className="flex items-center gap-2 text-sm text-black/55">
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
            <h2 className="text-3xl font-bold text-black tracking-tight">The Result</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-10">
            {[
              { title: 'Passive income', desc: 'Your property works for you. We handle the complexity — you collect the revenue.' },
              { title: 'More revenue', desc: 'Our pricing tools and automation consistently outperform the market average by 24%+.' },
              { title: 'Zero headaches', desc: 'Standardized protocols ensure institutional-grade hospitality across every unit, every time.' },
            ].map((result) => (
              <div key={result.title} className="text-center space-y-3 p-6 glass-panel border-transparent hover:border-black/5 transition-colors">
                <div className="text-xl font-semibold text-black">{result.title}</div>
                <p className="text-black/55 text-sm leading-relaxed">{result.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <InvestmentTeaser />
      <GuestListTeaser />
      <MarketsSection />
      <GuestEcosystemSection />
      <DeploymentProcess />
    </SiteShell>
  );
}
