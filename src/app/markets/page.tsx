import SiteShell from '@/components/layout/site-shell';
import { MapPin, ArrowRight, TrendingUp, Users, ShieldCheck, Waves, Sun, Mountain, Trees } from 'lucide-react';
import Link from 'next/link';

export default function MarketsPage() {
  const markets = [
    {
      name: 'Jersey Shore',
      desc: 'Asbury park to cape may. The Northeast’s premier beach destination. Specialized beachfront maintenance and high-intensity summer seasonal strategies.',
      performance: '+28%',
      stats: 'Active',
      icon: Waves,
    },
    {
      name: 'Kissimmee-Orlando',
      desc: 'Coming Soon. High-demand vacation rental market near major attractions. Deployment of our vertically integrated operating system underway.',
      performance: 'TBD',
      stats: 'Coming Soon',
      icon: Sun,
    },
    {
      name: 'Florida Coastal',
      desc: 'Coming Soon. Year-round demand with localized expertise in hurricane compliance and vacation rental saturation management.',
      performance: 'TBD',
      stats: 'Coming Soon',
      icon: Waves,
    },
    {
      name: 'Phoenix',
      desc: 'Coming Soon. High-yield golf and event-driven markets. Proactive HVAC maintenance and heat-sensitive asset preservation.',
      performance: 'TBD',
      stats: 'Coming Soon',
      icon: Sun,
    },
    {
      name: 'Smoky Mountains',
      desc: 'Coming Soon. Year-round mountain destination specializing in luxury cabin management and winter weather operations.',
      performance: 'TBD',
      stats: 'Coming Soon',
      icon: Mountain,
    },
    {
      name: 'Poconos',
      desc: 'Coming Soon. Premier Northeast mountain retreat. Expertise in multi-seasonal demand and large-group hospitality.',
      performance: 'TBD',
      stats: 'Coming Soon',
      icon: Trees,
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
              <div key={index} className="glass-panel overflow-hidden group hover:border-primary/30 transition-all hover:scale-[1.02] flex flex-col">
                <div className="h-48 overflow-hidden relative">
                  <img
                    src={
                      market.name === 'Jersey Shore' ? '/images/properties/waterfront.jpg' :
                        market.name === 'Kissimmee-Orlando' ? 'https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?auto=format&fit=crop&q=80&w=800' :
                          market.name === 'Florida Coastal' ? '/images/properties/beachside.jpg' :
                            market.name === 'Phoenix' ? 'https://images.unsplash.com/photo-1558036117-15d82a90b9b1?auto=format&fit=crop&q=80&w=800' :
                              market.name === 'Smoky Mountains' ? 'https://images.unsplash.com/photo-1542718610-a1d656d1884c?auto=format&fit=crop&q=80&w=800' :
                                'https://images.unsplash.com/photo-1518780664697-55e3ad937233?auto=format&fit=crop&q=80&w=800'
                    }
                    alt={`${market.name} vacation rental property`}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6">
                    <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center">
                      <market.icon className="w-5 h-5 text-black" />
                    </div>
                  </div>
                </div>
                <div className="p-8 flex flex-col flex-grow">
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
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Local Layer Promo */}
      <section className="py-24 bg-primary/40 border-y border-white/5 relative">
        <div className="container mx-auto px-6 text-center max-w-3xl">
          <MapPin className="w-12 h-12 text-primary mx-auto mb-6" />
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Don't see your market?</h2>
          <p className="text-lg text-black mb-10">
            We are expanding our distributed network every quarter. Our 7 days or less to launch, no long term commitments policy allows us to scout and activate new market teams rapidly.
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
