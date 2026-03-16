import SiteShell from '@/components/layout/site-shell';
import { Brain, Database, MapPin, Rocket, BarChart3, LayoutGrid, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function PlatformPage() {
  const layers = [
    {
      title: 'The Central Brain',
      desc: 'Our revenue intelligence layer that deploys pricing strategy and marketing automation across our network.',
      icon: Brain,
      href: '/platform/central-brain',
      color: 'primary',
    },
    {
      title: 'Revenue Intelligence',
      desc: 'Proprietary demand modeling that identifies pricing inefficiencies and maximizes Average Daily Rate (ADR).',
      icon: BarChart3,
      href: '/platform/revenue-intelligence',
      color: 'primary',
    },
    {
      title: 'Guest Ecosystem',
      desc: 'A vertically integrated network of travelers driving repeat, direct bookings and lifetime guest value growth.',
      icon: Database,
      href: '/platform/guest-ecosystem',
      color: 'accent',
    },
    {
      title: 'Local Market Layer',
      desc: 'Boots-on-the-ground support for maintenance, inspections, and guest services across our distributed network.',
      icon: MapPin,
      href: '/platform/local-layer',
      color: 'secondary',
    },
    {
      title: 'Deployment Process',
      desc: 'Our 14-day protocol that transforms your property into a high-performance hospitality asset.',
      icon: Rocket,
      href: '/platform/deployment',
      color: 'primary',
    },
    {
      title: 'Owner Dashboard',
      desc: 'Real-time performance dashboards providing deep visibility into occupancy, revenue, and guest metrics.',
      icon: LayoutGrid,
      href: '/wizard', // For now, directing to wizard as a preview of intelligence
      color: 'accent',
    },
  ];

  return (
    <SiteShell>
      <section className="pt-32 pb-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:40px_40px]" />
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-3xl mb-16">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">
              The Suite Capacity <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Platform</span>
            </h1>
            <p className="text-xl text-black mb-10 leading-relaxed">
              We’ve replaced traditional, fragmented property management with a vertically integrated operating system. Data intelligence meets hyper-local execution.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {layers.map((layer, index) => (
              <Link 
                key={index} 
                href={layer.href}
                className="glass-panel p-8 group hover:border-primary/30 transition-all hover:scale-[1.02] flex flex-col"
              >
                <div className={`w-12 h-12 rounded-lg bg-${layer.color}/10 flex items-center justify-center mb-6 group-hover:bg-${layer.color}/20 transition-colors`}>
                  <layer.icon className={`w-6 h-6 text-${layer.color}`} />
                </div>
                <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors text-black">{layer.title}</h3>
                <p className="text-black opacity-70 text-sm leading-relaxed mb-8 flex-grow">
                  {layer.desc}
                </p>
                <div className="flex items-center gap-2 text-black font-bold text-sm">
                  Explore Layer
                  <ArrowRight className="w-4 h-4 text-primary group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Shared CTA */}
      <section className="py-24 bg-black/40 border-t border-white/5 relative overflow-hidden">
        <div className="container mx-auto px-6 text-center max-w-3xl relative z-10">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight">Experience Infrastructure That Scales</h2>
          <p className="text-lg text-black mb-10">
            Our platform is designed to handle thousands of properties with the same precision as a single boutique home.
          </p>
          <Link 
            href="/wizard" 
            className="px-10 py-5 bg-primary hover:bg-primary/90 text-black rounded-lg font-bold text-lg transition-all hover:shadow-[0_0_30px_rgba(171,209,199,0.4)]"
          >
            Run Revenue Audit
          </Link>
        </div>
      </section>
    </SiteShell>
  );
}
