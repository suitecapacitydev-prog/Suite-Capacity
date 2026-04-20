"use client";
import SiteShell from '@/components/layout/site-shell';
import { Market, iconMap } from '@/data/markets';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { MapPin, TrendingUp, Zap } from 'lucide-react';

interface MarketHubViewProps {
  market: Market;
}

export function MarketHubView({ market }: MarketHubViewProps) {
  return (
    <SiteShell>
      {/* Hero Section */}
      <section className="pt-32 pb-24 relative overflow-hidden bg-primary/5">
        <div className="container mx-auto px-6 relative z-10">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="lg:w-1/2">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-[10px] font-black uppercase tracking-[0.2em] mb-6 border border-primary/20">
                <MapPin className="w-3 h-3" /> {market.name} Market Hub
              </div>
              <h1 className="text-5xl md:text-7xl font-black tracking-tight mb-8 leading-[1.1]">
                {market.heroTitle} <span className="text-primary">{market.heroHighlight}</span>
              </h1>
              <p className="text-xl text-black/60 font-medium mb-10 leading-relaxed max-w-xl">
                {market.heroDesc}
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/wizard">
                  <Button className="h-16 px-10 rounded-2xl bg-primary text-white font-black uppercase tracking-widest gap-2 shadow-xl shadow-primary/20 hover:-translate-y-1 transition-all active:scale-95 border-none">
                    Start Your Audit <Zap className="w-5 h-5" />
                  </Button>
                </Link>
              </div>
            </div>
            <div className="lg:w-1/2 relative">
              <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl shadow-black/20">
                <img 
                  src={market.heroImage} 
                  alt={`${market.name} real estate management`} 
                  className="w-full aspect-[4/3] object-cover"
                />
              </div>
              <div className="absolute -bottom-8 -left-8 glass-panel p-8 border-black/5 bg-white shadow-xl max-w-xs animate-in slide-in-from-bottom-5 duration-700 z-20">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-2xl bg-green-500/10 flex items-center justify-center text-green-600">
                    <TrendingUp className="w-6 h-6" />
                  </div>
                  <div className="text-2xl font-black tracking-tight">{market.revenueIncrease}</div>
                </div>
                <p className="text-xs font-bold text-black/40 uppercase tracking-widest leading-relaxed">
                  {market.revenueContext}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 bg-white border-b border-black/5">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {market.stats?.map((stat, i) => {
              const IconComponent = iconMap[stat.iconName] || TrendingUp;
              return (
                <div key={i} className="text-center space-y-2">
                  <div className="w-12 h-12 rounded-2xl bg-primary/5 flex items-center justify-center mx-auto mb-4 text-primary">
                    <IconComponent className="w-6 h-6" />
                  </div>
                  <div className="text-3xl font-black tracking-tight">{stat.value}</div>
                  <div className="text-xs font-bold text-black/40 uppercase tracking-widest">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mb-16">
            <h2 className="text-4xl font-black tracking-tight mb-6">{market.featuresTitle} <span className="text-primary">{market.featuresHighlight}</span></h2>
            <p className="text-lg text-black/60 font-medium">
              {market.featuresDesc}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {market.features?.map((feature, i) => {
              const IconComponent = iconMap[feature.iconName] || Zap;
              return (
                <div key={i} className="glass-panel p-10 border-black/5 bg-white hover:border-primary/20 transition-all">
                  <div className="w-14 h-14 rounded-2xl bg-primary/5 flex items-center justify-center mb-8 text-primary">
                    <IconComponent className="w-7 h-7" />
                  </div>
                  <h3 className="text-xl font-black mb-4">{feature.title}</h3>
                  <p className="text-black/60 font-medium text-sm leading-relaxed">{feature.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
      
      {/* Local SEO Text Section */}
      <section className="py-24 bg-primary/5 border-t border-black/5">
        <div className="container mx-auto px-6 max-w-4xl text-center mb-16">
            <h2 className="text-3xl font-black mb-10 tracking-tight">The {market.name} Management Standard</h2>
            <div className="space-y-6 text-black/70 font-medium leading-relaxed">
                <p>
                    Managing a short-term rental in {market.name} requires more than just a cleaning crew. It requires an integrated approach to dynamic pricing, guest vetting, and high-frequency maintenance. Our platform was built specifically to handle the complexities of the {market.name} market.
                </p>
                <p>
                    Whether you own a luxury beachfront estate or a high-yield urban apartment, our locally-distributed operations layer ensures your property remains in top condition while maximizing your Net Operating Income. We use real-time market data to ensure your property is always priced correctly for local demand events, from seasonal festivals to major sporting events.
                </p>
            </div>
        </div>
      </section>

      {/* Internal Linking: Sub-markets */}
      {market.subMarkets && market.subMarkets.length > 0 && (
        <section className="py-20 bg-white border-t border-black/5">
          <div className="container mx-auto px-6 max-w-5xl">
            <h3 className="text-2xl font-black mb-8 text-center">Local {market.name} Markets We Serve</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {market.subMarkets.map((sub) => (
                <Link key={sub.slug} href={`/${sub.slug}`}>
                  <div className="p-6 rounded-2xl border border-black/5 bg-gray-50 hover:bg-primary/5 hover:border-primary/20 transition-all flex items-center justify-between group">
                    <span className="font-semibold text-black/80 group-hover:text-primary transition-colors">{sub.name}</span>
                    <MapPin className="w-4 h-4 text-black/30 group-hover:text-primary transition-colors" />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </SiteShell>
  );
}
