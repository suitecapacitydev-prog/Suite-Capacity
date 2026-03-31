'use client';

import SiteShell from '@/components/layout/site-shell';
import { Rocket, ShieldCheck, Zap, BarChart3, Users, Settings, ArrowRight, CheckCircle2, TrendingUp, Building2, Landmark } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function InvestPage() {
  return (
    <SiteShell>
      {/* Hero Section */}
      <section className="pt-32 pb-24 relative overflow-hidden bg-white">
        <div className="absolute inset-0 bg-grid-black/[0.02] bg-[size:40px_40px]" />
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[120px] pointer-events-none" />

        <div className="container mx-auto px-6 relative z-10 text-center max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-black/10 bg-primary/5 text-black text-sm font-medium mb-8">
            <Landmark className="w-4 h-4 text-primary" />
            <span>Invest in Short-Term Rentals</span>
          </div>
          <h1 className="text-4xl md:text-7xl font-bold mb-6 tracking-tight leading-[1.1]">
            Build Passive Income Through{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Short-Term Rentals</span>
          </h1>
          <p className="text-xl text-black/70 mb-10 max-w-2xl mx-auto leading-relaxed">
            From buying your first property to investing in curated portfolios — Suite Capacity helps you launch, manage, and scale STR investments.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="#accelerator">
              <Button size="lg" variant="intelligence" className="w-full sm:w-auto h-14 px-8 text-lg font-bold shadow-xl shadow-primary/20">
                Apply for the Accelerator
              </Button>
            </Link>
            <Link href="https://calendly.com/suitecapacity/consultation-and-discovery-call?month=2026-03">
              <Button size="lg" variant="outline" className="w-full sm:w-auto h-14 px-8 text-lg font-bold">
                Schedule a Call
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Positioning Statement */}
      <section className="py-12 bg-black text-white overflow-hidden">
        <div className="container mx-auto px-6 text-center">
          <p className="text-xl md:text-2xl font-medium tracking-tight opacity-90">
            Suite Capacity helps you <span className="text-primary font-bold">buy, build, and scale</span> short-term rental investments — all designed for passive income.
          </p>
        </div>
      </section>

      {/* 90-Day Accelerator Section */}
      <section id="accelerator" className="py-24 bg-primary/5 border-y border-black/5 relative overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
            <div className="space-y-8">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-black text-xs font-bold uppercase tracking-widest mb-6">
                  <TrendingUp className="w-4 h-4" /> 90-Day Accelerator — Free Program
                </div>
                <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
                  Go From Purchase to Passive Income in 90 Days
                </h2>
                <p className="text-lg text-black/60 leading-relaxed mb-8">
                  Our 90-Day Accelerator is a fully done-for-you program where we help you acquire, design, launch, and manage your short-term rental — turning it into a cash-flowing asset.
                </p>
                <div className="p-4 rounded-xl bg-white/50 border border-primary/20 backdrop-blur-sm mb-8">
                  <p className="text-sm font-bold text-black">Now available at no upfront cost across the U.S.</p>
                  <p className="text-xs text-black/40 italic">(Management agreement required)</p>
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  'Property Sourcing & Underwriting',
                  'Revenue Projections & STR Strategy',
                  'Design, Furnishing, and Setup',
                  'Listing Creation & Optimization',
                  'Professional Photography',
                  'Full-Service Management Launch',
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 text-sm text-black/70">
                    <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                    {item}
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Link href="/wizard">
                  <Button variant="intelligence" className="h-12 px-8 font-bold">Apply for the 90-Day Accelerator</Button>
                </Link>
                <a href="https://calendly.com/suitecapacity/consultation-and-discovery-call" target="_blank" rel="noopener noreferrer">
                  <Button variant="outline" className="h-12 px-8 font-bold">Schedule a Call</Button>
                </a>
              </div>
            </div>

            <div className="relative">
              <div className="glass-panel p-8 bg-white shadow-2xl rounded-2xl border-primary/10 relative z-10">
                <div className="space-y-6">
                  <div className="flex items-center justify-between border-b pb-6">
                    <h3 className="font-bold text-xl">Accelerator Timeline</h3>
                    <div className="px-3 py-1 rounded-full bg-green-500/10 text-green-600 text-xs font-bold">Available Now</div>
                  </div>
                  <div className="space-y-6">
                    {[
                      { step: '01', title: 'Acquisition', desc: 'Property sourcing and strategic underwriting.' },
                      { step: '02', title: 'Transformation', desc: 'Professional design, furnishing, and setup.' },
                      { step: '03', title: 'Launch', desc: 'Optimization and full management go-live.' },
                    ].map((phase, i) => (
                      <div key={i} className="flex gap-4">
                        <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center font-bold text-primary shrink-0">{phase.step}</div>
                        <div>
                          <p className="font-bold text-black">{phase.title}</p>
                          <p className="text-sm text-black/50">{phase.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-primary/20 blur-[60px] rounded-full" />
              <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-accent/20 blur-[60px] rounded-full" />
            </div>
          </div>
        </div>
      </section>

      {/* Buy/Sell Pathways */}
      <section className="py-24 container mx-auto px-6">
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4 text-black">Work With Us</h2>
          <p className="text-lg text-black/55">Whether you're looking to acquire your first property or liquidate an existing portfolio.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <div className="glass-panel p-10 bg-white group hover:border-primary/40 transition-all">
            <Building2 className="w-12 h-12 text-primary mb-6" />
            <h3 className="text-2xl font-bold mb-4 text-black">Buy an STR</h3>
            <p className="text-black/60 mb-8 leading-relaxed">
              We help you identify and acquire high-performing STR properties, then fully set them up and manage them for passive income.
            </p>
            <Link href="/wizard">
              <Button variant="intelligence" className="w-full gap-2 group-hover:scale-105 transition-transform">
                Start Your STR Investment
                <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
          </div>

          <div className="glass-panel p-10 bg-white group hover:border-accent/40 transition-all">
            <TrendingUp className="w-12 h-12 text-accent mb-6" />
            <h3 className="text-2xl font-bold mb-4 text-black">Sell Your Property</h3>
            <p className="text-black/60 mb-8 leading-relaxed">
              We market your property based on its income potential, attracting STR-focused buyers and maximizing value.
            </p>
            <Link href="#">
              <Button variant="outline" className="w-full border-accent text-accent hover:bg-accent/5 gap-2 group-hover:scale-105 transition-transform">
                List Your Property
                <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Investment Platform - Coming Soon */}
      <section className="py-24 bg-black text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:40px_40px]" />
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center mb-20">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-white text-xs font-bold uppercase tracking-widest mb-6 border border-white/10">
              Coming Soon
            </div>
            <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">Invest Passively in Curated STR Deals</h2>
            <p className="text-xl text-white/60 max-w-2xl mx-auto leading-relaxed">
              Suite Capacity is expanding into a full investment platform, offering access to professionally managed short-term rental assets designed for passive income and long-term growth.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {[
              {
                title: 'Hyper-Local Mini Funds',
                desc: 'Small, market-specific portfolios of STR properties.',
                icon: MapPin
              },
              {
                title: 'Multi-Market Funds',
                desc: 'Diversified STR investments across multiple locations.',
                icon: Globe
              },
              {
                title: 'Boutique Hotel Syndications',
                desc: 'Unique hospitality assets with strong revenue potential.',
                icon: Hotel
              },
            ].map((fund, i) => (
              <div key={i} className="p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm group hover:bg-white/10 transition-all border-b-4 border-b-primary/40">
                <fund.icon className="w-8 h-8 text-primary mb-6" />
                <h3 className="text-xl font-bold mb-3">{fund.title}</h3>
                <p className="text-sm text-white/40 leading-relaxed mb-6">{fund.desc}</p>
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-16">
            <a href="https://calendly.com/suitecapacity/consultation-and-discovery-call" target="_blank" rel="noopener noreferrer">
              <Button variant="intelligence" className="h-12 px-10 font-bold">Join Investment List</Button>
            </a>
            <a href="https://calendly.com/suitecapacity/consultation-and-discovery-call" target="_blank" rel="noopener noreferrer">
              <Button variant="outline" className="h-12 px-10 font-bold border-white/20 text-white hover:bg-white/10">Get Early Access</Button>
            </a>
          </div>
        </div>
      </section>

      {/* Tax Advantage Callout */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="p-12 rounded-3xl bg-primary/5 border border-primary/20 text-center space-y-6">
            <Landmark className="w-12 h-12 text-primary mx-auto" />
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-black">Why STR Investing Right Now</h2>
            <p className="text-xl text-black/70 leading-relaxed">
              Short-term rentals offer unique tax advantages and income potential, making them one of the most attractive real estate investment strategies today. Leveraging the "STR Tax Loophole" can significantly offset active income while building long-term equity.
            </p>
          </div>
        </div>
      </section>
    </SiteShell>
  );
}

import { MapPin, Globe, Hotel } from 'lucide-react';
