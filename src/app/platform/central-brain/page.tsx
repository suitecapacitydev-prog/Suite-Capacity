import SiteShell from '@/components/layout/site-shell';
import { Brain, TrendingUp, BarChart3, Mail, Globe, ArrowRight, Zap, Target, Cpu } from 'lucide-react';
import Link from 'next/link';

export default function CentralBrainPage() {
  const features = [
    {
      title: 'Revenue Management',
      desc: 'Dynamic algorithm-driven pricing that adjusts in real-time based on market demand, seasonality, and local events.',
      icon: TrendingUp,
    },
    {
      title: 'Pricing Intelligence',
      desc: 'Proprietary demand modeling that identifies pricing inefficiencies and maximizes Average Daily Rate (ADR).',
      icon: Target,
    },
    {
      title: 'Marketing Automation',
      desc: 'Automated lifecycle nurturing that converts one-time travelers into recurring direct bookers.',
      icon: Mail,
    },
    {
      title: 'Owner Analytics',
      desc: 'Real-time performance dashboards providing deep visibility into occupancy, revenue, and guest metrics.',
      icon: BarChart3,
    },
    {
      title: 'Direct Booking Funnels',
      desc: 'High-converting, brand-owned funnels designed to capture demand off-OTA and increase margins.',
      icon: Globe,
    },
    {
      title: 'Neural Network Logic',
      desc: 'A centralized intelligence layer that learns from every booking across our entire portfolio.',
      icon: Cpu,
    },
  ];

  return (
    <SiteShell>
      {/* Hero Section */}
      <section className="pt-32 pb-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:40px_40px]" />
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[120px] pointer-events-none" />
        
        <div className="container mx-auto px-6 relative z-10 text-center max-w-4xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-black/10 bg-black/5 text-black text-sm font-medium mb-8">
            <Brain className="w-4 h-4 text-black" />
            <span>Revenue Intelligence System</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight leading-tight whitespace-pre-line">
            The Central{'\n'}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Intelligence Brain</span>
          </h1>
          <p className="text-xl text-black mb-10 max-w-2xl mx-auto">
            A centralized STR operating system that deploys revenue strategy, marketing automation, and operational workflows across our distributed network.
          </p>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-24 bg-black/40 border-y border-white/5 relative">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <div key={index} className="glass-panel p-8 group hover:border-black/30 transition-colors">
                <div className="w-12 h-12 rounded-lg bg-black/5 flex items-center justify-center mb-6">
                  <feature.icon className="w-6 h-6 text-black" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-foreground">{feature.title}</h3>
                <p className="text-black text-sm leading-relaxed">
                  {feature.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Value prop section */}
      <section className="py-24 container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">From Data to Revenue</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="glass-panel p-8 text-left border-l-4 border-l-black/30">
              <h4 className="text-black font-bold mb-2 uppercase text-xs tracking-wider">Traditional PM</h4>
              <p className="text-sm text-black italic mb-4">"We hope we get bookings this weekend."</p>
              <p className="text-sm">Manual adjustments, reliance on OTA suggestions, and reactive pricing led by emotion rather than demand.</p>
            </div>
            <div className="glass-panel p-8 text-left border-l-4 border-l-black/50">
              <h4 className="text-black font-bold mb-2 uppercase text-xs tracking-wider">Suite Capacity</h4>
              <p className="text-sm text-black font-semibold mb-4 italic">"The market demand index is shifting 32%, adjusting portfolio pricing now."</p>
              <p className="text-sm">Centralized intelligence that acts automatically, capturing the highest value guest for every single night.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative overflow-hidden text-center">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-primary/10" />
        <div className="container mx-auto px-6 relative z-10 max-w-3xl">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Activate the Brain</h2>
          <p className="text-lg text-black mb-10">
            Deploy our revenue intelligence layer for your property in under 14 days.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/wizard" 
              className="px-8 py-4 bg-primary hover:bg-primary/90 text-black rounded-lg font-semibold transition-all hover:shadow-[0_0_20px_rgba(171,209,199,0.4)] flex items-center justify-center gap-2"
            >
              Start My Revenue Report
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </SiteShell>
  );
}
