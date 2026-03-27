import SiteShell from '@/components/layout/site-shell';
import { TrendingUp, MapPin, BarChart3, ArrowRight, Home, Zap } from 'lucide-react';
import Link from 'next/link';

export default function CaseStudiesPage() {
  const cases = [
    {
      title: 'Luxury Beachfront Yield Optimization',
      market: 'Jersey Shore',
      result: '+34% Revenue',
      desc: 'How the Central Brain transformed a high-end seasonal asset into a year-round revenue engine.',
      icon: TrendingUp,
    },
    {
      title: 'Multifamily Portfolio Migration',
      market: 'Florida Coastal',
      result: '-40% OpEx',
      desc: 'Deploying the Local Market Layer to consolidate operations for a 24-unit seaside portfolio.',
      icon: Home,
    },
    {
      title: 'Guest Ecosystem Network Effect',
      market: 'Network Wide',
      result: '48% Direct Bookings',
      desc: 'A look at how our shared traveler database reduced OTA dependency for newly deployed assets.',
      icon: Zap,
    },
  ];

  return (
    <SiteShell>
      {/* Hero Section */}
      <section className="pt-32 pb-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:40px_40px]" />
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[120px] pointer-events-none" />

        <div className="container mx-auto px-6 relative z-10 text-center max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">
            Performance <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Benchmarks</span>
          </h1>
          <p className="text-xl text-black mb-10 leading-relaxed">
            We don’t just talk about intelligence. We measure it. Explore how our platform is shifting the baseline for STR performance.
          </p>
        </div>
      </section>

      {/* Cases Grid */}
      <section className="py-24 bg-primary/40 border-y border-white/5 relative">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {cases.map((cs, index) => (
              <div key={index} className="glass-panel p-8 group hover:border-primary/30 transition-all flex flex-col">
                <div className="flex justify-between items-start mb-6">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                    <cs.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div className="text-right">
                    <p className="text-xs uppercase font-bold text-black opacity-60">{cs.market}</p>
                    <p className="text-lg font-bold text-black">{cs.result}</p>
                  </div>
                </div>
                <h3 className="text-2xl font-bold mb-4">{cs.title}</h3>
                <p className="text-black opacity-70 text-sm leading-relaxed mb-8 flex-grow">
                  {cs.desc}
                </p>
                <Link
                  href="/wizard"
                  className="flex items-center gap-2 text-black font-bold text-sm"
                >
                  View Case Study
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative overflow-hidden text-center">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-primary/10" />
        <div className="container mx-auto px-6 relative z-10 max-w-3xl">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Benchmark Your Property</h2>
          <p className="text-lg text-black mb-10">
            Find out how your property compares to our platform averages.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/wizard"
              className="px-8 py-4 bg-primary hover:bg-primary/90 text-white rounded-lg font-semibold transition-all flex items-center justify-center gap-2"
            >
              Start Intelligence Audit
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </SiteShell>
  );
}
