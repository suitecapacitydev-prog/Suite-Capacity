import SiteShell from '@/components/layout/site-shell';
import { MapPin, ArrowRight, TrendingUp, Users, ShieldCheck, Waves, Sun, Mountain } from 'lucide-react';
import Link from 'next/link';

export default function MarketsPage() {
  const markets = [
    {
      name: 'Jersey Shore',
      desc: 'The Northeast’s premier beach destination. Specialized beachfront maintenance and high-intensity summer seasonal strategies.',
      performance: '+28%',
      stats: '142 Units',
      icon: Waves,
    },
    {
      name: 'Florida Coastal',
      desc: 'Year-round demand with localized expertise in hurricane compliance and vacation rental saturation management.',
      performance: '+22%',
      stats: '84 Units',
      icon: Sun,
    },
    {
      name: 'Arizona Deserts',
      desc: 'High-yield golf and event-driven markets. Proactive HVAC maintenance and heat-sensitive asset preservation.',
      performance: '+31%',
      stats: '68 Units',
      icon: Mountain,
    },
  ];

  return (
    <SiteShell>
      {/* Hero Section */}
      <section className="pt-32 pb-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:40px_40px]" />
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[120px] pointer-events-none" />
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-3xl mb-16 mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">
              Our Active <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Markets</span>
            </h1>
            <p className="text-xl text-black leading-relaxed">
              We don’t just manage properties; we own the data for the neighborhoods they sit in. Hyper-local expertise, distributed to scale.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {markets.map((market, index) => (
              <div key={index} className="glass-panel p-8 group hover:border-primary/30 transition-all hover:scale-[1.02] flex flex-col">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-6">
                  <market.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-2xl font-bold mb-3">{market.name}</h3>
                <p className="text-black opacity-70 text-sm leading-relaxed mb-6 flex-grow">
                  {market.desc}
                </p>
                <div className="pt-6 border-t border-border flex justify-between items-center text-sm">
                  <div className="space-y-1">
                    <p className="text-xs uppercase tracking-wider text-black opacity-60 font-bold">Rev Lift</p>
                    <p className="text-lg font-bold text-black">{market.performance}</p>
                  </div>
                  <div className="space-y-1 text-right">
                    <p className="text-xs uppercase tracking-wider text-black opacity-60 font-bold">Managed</p>
                    <p className="text-lg font-bold text-black">{market.stats}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Local Layer Promo */}
      <section className="py-24 bg-black/40 border-y border-white/5 relative">
        <div className="container mx-auto px-6 text-center max-w-3xl">
          <MapPin className="w-12 h-12 text-primary mx-auto mb-6" />
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Don't see your market?</h2>
          <p className="text-lg text-black mb-10">
            We are expanding our distributed network every quarter. Our 14-day deployment protocol allows us to scout and activate new market teams rapidly.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/wizard" 
              className="px-8 py-4 bg-primary hover:bg-primary/90 text-black rounded-lg font-semibold transition-all flex items-center justify-center gap-2"
            >
                Submit New Market Request
                <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </SiteShell>
  );
}
