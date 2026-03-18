import SiteShell from '@/components/layout/site-shell';
import { MapPin, TrendingUp, Users, ShieldCheck, Waves, Zap, Star, Calendar, Sun } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function JerseyShorePage() {
  const stats = [
    { label: 'Revenue Lift', value: '+28.4%', icon: TrendingUp },
    { label: 'Market Rank', value: 'Top 2%', icon: Star },
    { label: 'Units Managed', value: '42', icon: Users },
    { label: 'Guest Rating', value: '4.92', icon: ShieldCheck },
  ];

  return (
    <SiteShell>
      <section className="pt-32 pb-24 relative overflow-hidden bg-primary/5">
        <div className="container mx-auto px-6 relative z-10">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="lg:w-1/2">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-[10px] font-black uppercase tracking-[0.2em] mb-6 border border-primary/20">
                <MapPin className="w-3 h-3" /> Jersey Shore Central
              </div>
              <h1 className="text-5xl md:text-7xl font-black tracking-tight mb-8 leading-[1.1]">
                Mastering the <span className="text-primary">Atlantic</span> Seaboard.
              </h1>
              <p className="text-xl text-black/60 font-medium mb-10 leading-relaxed max-w-xl">
                From Belmar to Cape May, we've deployed a hyper-local operations layer that handles high-intensity summer seasonal spikes with 28.4% better revenue capture than the market average.
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
                  src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&q=80&w=1200" 
                  alt="Jersey Shore Waterfront" 
                  className="w-full aspect-[4/3] object-cover"
                />
              </div>
              <div className="absolute -bottom-8 -left-8 glass-panel p-8 border-black/5 bg-white shadow-xl max-w-xs animate-in slide-in-from-bottom-5 duration-700">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-2xl bg-green-500/10 flex items-center justify-center text-green-600">
                    <TrendingUp className="w-6 h-6" />
                  </div>
                  <div className="text-2xl font-black tracking-tight">+$12,450</div>
                </div>
                <p className="text-xs font-bold text-black/40 uppercase tracking-widest leading-relaxed">
                  Average monthly revenue increase for 3+ bedroom units in Belmar.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white border-b border-black/5">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, i) => (
              <div key={i} className="text-center space-y-2">
                <div className="w-12 h-12 rounded-2xl bg-primary/5 flex items-center justify-center mx-auto mb-4 text-primary">
                  <stat.icon className="w-6 h-6" />
                </div>
                <div className="text-3xl font-black tracking-tight">{stat.value}</div>
                <div className="text-xs font-bold text-black/40 uppercase tracking-widest">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Local Strategy Section */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mb-16">
            <h2 className="text-4xl font-black tracking-tight mb-6">Seasonal Strategy, <span className="text-primary">Perfected.</span></h2>
            <p className="text-lg text-black/60 font-medium">
              We don't believe in set-it-and-forget-it management. Our Jersey Shore response team uses a high-frequency maintenance protocol and dynamic pricing models built specifically for beach town demand curves.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Summer Peak Capture',
                desc: 'proprietary min-stay algorithms that maximize occupancy during high-demand summer weekends without sacrificing weekly booking gaps.',
                icon: Sun
              },
              {
                title: 'Ocean-Front Maintenance',
                desc: 'Specialized HVAC and exterior maintenance protocols to combat salt-air corrosion and high-humidity environments.',
                icon: Waves
              },
              {
                title: 'Off-Season Activation',
                desc: 'Custom corporate retreat and long-term winter rental programs to ensure cash flow during the shoulder months.',
                icon: Calendar
              }
            ].map((feature, i) => (
              <div key={i} className="glass-panel p-10 border-black/5 bg-white hover:border-primary/20 transition-all">
                <div className="w-14 h-14 rounded-2xl bg-primary/5 flex items-center justify-center mb-8 text-primary">
                  <feature.icon className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-black mb-4">{feature.title}</h3>
                <p className="text-black/60 font-medium text-sm leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </SiteShell>
  );
}
