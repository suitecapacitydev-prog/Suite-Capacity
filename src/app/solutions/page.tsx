import SiteShell from '@/components/layout/site-shell';
import { LayoutGrid, TrendingUp, Users, ShieldCheck, ArrowRight, Zap, Target, Cpu, Home } from 'lucide-react';
import Link from 'next/link';

export default function SolutionsPage() {
  const solutions = [
    {
      title: 'Platform Managed™',
      desc: 'Our full-stack management solution. We deploy the Central Brain, the Local Layer, and the Guest Ecosystem to maximize your property performance.',
      items: ['Revenue Intelligence', 'Local Market Teams', 'Guest Ecosystem Access'],
      icon: Home,
    },
    {
      title: 'Revenue Engine™',
      desc: 'A data-first solution focused on yield optimization. For owners who want to handle their own ops but need institutional-grade pricing strategy.',
      items: ['Dynamic Pricing Engine', 'Market Demand Modeling', 'Channel Management'],
      icon: TrendingUp,
    },
    {
      title: 'Ops Layer™',
      desc: 'The infrastructure for local excellence. We provide the field teams, vendor coordination, and maintenance protocols for your portfolio.',
      items: ['Clean/Inspect Protocols', 'Vendor Ecosystem', 'Compliance Management'],
      icon: Cpu,
    },
    {
      title: 'Asset Optimization Studio™',
      desc: 'Designed for property transformation. We handle the design, furnishing, and photography to prepare your asset for the Platform.',
      items: ['Interior Design Audit', 'High-Impact Furnishing', 'Content Production'],
      icon: Zap,
    },
  ];

  return (
    <SiteShell>
      {/* Hero Section */}
      <section className="pt-32 pb-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:40px_40px]" />
        <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[120px] pointer-events-none" />

        <div className="container mx-auto px-6 relative z-10 text-center max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">
            Vertical <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Solutions</span>
          </h1>
          <p className="text-xl text-black mb-10 leading-relaxed">
            The STR market is fragmented. Our platform provides a unified solution for every scale of property ownership.
          </p>
        </div>
      </section>

      {/* Solutions Grid */}
      <section className="py-24 bg-primary/40 border-y border-white/5 relative">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {solutions.map((solution, index) => (
              <div key={index} className="glass-panel p-8 group hover:border-primary/30 transition-all flex flex-col">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-6">
                  <solution.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-2xl font-bold mb-4">{solution.title}</h3>
                <p className="text-black opacity-70 text-sm leading-relaxed mb-8 flex-grow">
                  {solution.desc}
                </p>
                {solution.items && (
                  <ul className="space-y-3 mb-8">
                    {solution.items.map((item, i) => (
                      <li key={i} className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-black">
                        <ArrowRight className="w-3 h-3 text-primary" />
                        {item}
                      </li>
                    ))}
                  </ul>
                )}
                <Link
                  href="/wizard"
                  className="w-full py-4 bg-primary/10 hover:bg-primary/20 border border-primary/20 rounded-lg text-black text-sm font-bold transition-all text-center"
                >
                  Request Solution Brief
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partnering section */}
      <section className="py-24 container mx-auto px-6">
        <div className="glass-panel p-12 intelligence-border relative overflow-hidden bg-accent/5 max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Institutional Grade. Local Soul.</h2>
              <p className="text-lg text-black mb-0">
                We bridge the gap between "Corporate Management" and "Local Expertise". Our platform handles the institution-level data strategy, while our teams handle the localized guest touchpoints.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="p-4 bg-white/5 border border-white/5 rounded-lg text-center">
                <TrendingUp className="w-6 h-6 text-primary mx-auto mb-2" />
                <p className="text-lg font-bold text-black">+24%</p>
                <p className="text-[10px] uppercase font-bold text-black opacity-60">Portfolio ADR Lift</p>
              </div>
              <div className="p-4 bg-white/5 border border-white/5 rounded-lg text-center">
                <Users className="w-6 h-6 text-accent mx-auto mb-2" />
                <p className="text-lg font-bold text-black">1M+</p>
                <p className="text-[10px] uppercase font-bold text-black opacity-60">Ecosystem Guests</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </SiteShell>
  );
}
