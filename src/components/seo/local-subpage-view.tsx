"use client";
import SiteShell from '@/components/layout/site-shell';
import { Market, SubMarket } from '@/data/markets';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { MapPin, ArrowLeft, Building2, TrendingUp, ShieldCheck } from 'lucide-react';

interface LocalSubpageViewProps {
  market: Market;
  subMarket: SubMarket;
}

export function LocalSubpageView({ market, subMarket }: LocalSubpageViewProps) {
  const nearbyTowns = market.subMarkets?.filter(sm => sm.slug !== subMarket.slug) || [];

  return (
    <SiteShell>
      {/* Hero Section */}
      <section className="pt-32 pb-24 relative overflow-hidden bg-white">
        <div className="container mx-auto px-6 relative z-10 max-w-4xl text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/5 text-primary text-xs font-black uppercase tracking-[0.2em] mb-6 border border-primary/20">
            <MapPin className="w-4 h-4" /> {subMarket.name} Management
          </div>
          
          <h1 className="text-5xl md:text-7xl font-black tracking-tight mb-8 leading-[1.1]">
            Expert Airbnb Management in <span className="text-primary">{subMarket.name}</span>
          </h1>
          
          <p className="text-xl text-black/60 font-medium mb-12 leading-relaxed max-w-2xl mx-auto">
            {subMarket.intro}
          </p>

          <Link href="/wizard">
            <Button className="h-16 px-10 rounded-2xl bg-primary text-white font-black uppercase tracking-widest gap-2 shadow-xl shadow-primary/20 hover:-translate-y-1 transition-all active:scale-95 border-none">
              Calculate Free Revenue Estimate <TrendingUp className="w-5 h-5" />
            </Button>
          </Link>

          <div className="mt-12 flex items-center justify-center gap-8 text-black/50 text-sm font-semibold uppercase tracking-widest">
            <div className="flex items-center gap-2"><Building2 className="w-4 h-4" /> Local Operations</div>
            <div className="flex items-center gap-2"><ShieldCheck className="w-4 h-4" /> Guest Vetting</div>
          </div>
        </div>
      </section>

      {/* STR Demand Section */}
      <section className="py-24 bg-primary/5 border-t border-b border-black/5">
        <div className="container mx-auto px-6 max-w-4xl text-center">
            <h2 className="text-3xl font-black mb-8 tracking-tight">Understanding {subMarket.name} STR Demand</h2>
            <div className="text-xl text-black/70 font-medium leading-relaxed bg-white p-10 rounded-3xl shadow-xl shadow-black/5 border border-black/5">
                {subMarket.demandExplanation}
            </div>
        </div>
      </section>

      {/* Templated Service Offering */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="text-center mb-16">
             <h2 className="text-4xl font-black tracking-tight mb-4">Our Service Offering</h2>
             <p className="text-lg text-black/60 font-medium">Standardized excellence, executed locally.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
             <div className="p-8 rounded-2xl bg-gray-50 border border-black/5">
                <h3 className="text-xl font-bold mb-3">Dynamic Pricing</h3>
                <p className="text-black/60 text-sm leading-relaxed">We adjust your nightly rates daily based on hyper-local {subMarket.name} market signals, maximizing yield.</p>
             </div>
             <div className="p-8 rounded-2xl bg-gray-50 border border-black/5">
                <h3 className="text-xl font-bold mb-3">Local Maintenance</h3>
                <p className="text-black/60 text-sm leading-relaxed">Our in-market field agents handle turnover inspections and preventative maintenance, ensuring 5-star readiness.</p>
             </div>
             <div className="p-8 rounded-2xl bg-gray-50 border border-black/5">
                <h3 className="text-xl font-bold mb-3">24/7 Guest Support</h3>
                <p className="text-black/60 text-sm leading-relaxed">Round-the-clock dedicated guest communication and emergency dispatch to protect your {subMarket.name} investment.</p>
             </div>
          </div>
        </div>
      </section>

      {/* Internal Linking */}
      <section className="py-20 border-t border-black/5 bg-gray-50">
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="flex flex-col md:flex-row justify-between items-center mb-10">
            <h3 className="text-2xl font-black">Explore Nearby Markets</h3>
            <Link href={`/${market.slug}`}>
               <Button variant="outline" className="gap-2 rounded-xl text-xs uppercase tracking-widest font-black">
                 <ArrowLeft className="w-4 h-4" /> Back to {market.name} Hub
               </Button>
            </Link>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {nearbyTowns.map((sub) => (
              <Link key={sub.slug} href={`/${sub.slug}`}>
                <div className="p-6 rounded-2xl bg-white border border-black/5 hover:border-primary/20 hover:shadow-lg transition-all flex items-center justify-between group">
                  <span className="font-bold text-black/80 group-hover:text-primary transition-colors">{sub.name}</span>
                  <MapPin className="w-4 h-4 text-black/20 group-hover:text-primary transition-colors" />
                </div>
              </Link>
            ))}
            {nearbyTowns.length === 0 && (
                <div className="text-black/40 text-sm italic col-span-full">No nearby towns listed yet.</div>
            )}
          </div>
        </div>
      </section>
    </SiteShell>
  );
}
