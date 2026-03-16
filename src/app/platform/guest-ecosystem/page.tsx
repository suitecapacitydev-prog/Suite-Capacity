import SiteShell from '@/components/layout/site-shell';
import { Database, Filter, Repeat2, MessageSquare, Tag, Crosshair, ArrowRight, ShieldCheck, Zap } from 'lucide-react';
import Link from 'next/link';

export default function GuestEcosystemPage() {
  return (
    <SiteShell>
      {/* Hero Section */}
      <section className="pt-32 pb-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:40px_40px]" />
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[120px] pointer-events-none" />
        
        <div className="container mx-auto px-6 relative z-10 text-center max-w-4xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-black/10 bg-black/5 text-black text-sm font-medium mb-8">
            <Database className="w-4 h-4 text-black" />
            <span>Shared Traveler Database</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight leading-tight whitespace-pre-line">
            The World's Most Powerful{'\n'}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Guest Ecosystem</span>
          </h1>
          <p className="text-xl text-black mb-10 max-w-2xl mx-auto">
            A vertically integrated STR operating platform that captures, nurtures, and converts traveler demand across our entire portfolio.
          </p>
        </div>
      </section>

      {/* System Components Architecture */}
      <section className="py-24 bg-black/40 border-y border-white/5 relative">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ecosystem Architecture</h2>
            <p className="text-black text-lg">The intelligent infrastructure powering our direct demand engine.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="glass-panel p-8 group hover:border-black/30 transition-colors">
              <Database className="w-8 h-8 text-black mb-6" />
              <h3 className="text-xl font-bold mb-3 text-black">Central CRM</h3>
              <p className="text-black text-sm leading-relaxed">
                A unified database aggregating millions of traveler data points, booking histories, and preferences across all local markets.
              </p>
            </div>
            
            <div className="glass-panel p-8 group hover:border-black/30 transition-colors">
              <Filter className="w-8 h-8 text-black mb-6" />
              <h3 className="text-xl font-bold mb-3 text-black">Segmentation Engine</h3>
              <p className="text-black text-sm leading-relaxed">
                Advanced behavioral tagging capable of grouping past guests by travel season, group size, budget, and amenity preferences.
              </p>
            </div>

            <div className="glass-panel p-8 group hover:border-black/30 transition-colors">
              <Repeat2 className="w-8 h-8 text-black mb-6" />
              <h3 className="text-xl font-bold mb-3 text-black">Repeat Automation</h3>
              <p className="text-black text-sm leading-relaxed">
                Automated 365-day lifecycle campaigns designed to bring past guests back, bypassing OTA fees to increase owner margins.
              </p>
            </div>

            <div className="glass-panel p-8 group hover:border-black/30 transition-colors">
              <MessageSquare className="w-8 h-8 text-black mb-6" />
              <h3 className="text-xl font-bold mb-3 text-black">Multichannel Retargeting</h3>
              <p className="text-black text-sm leading-relaxed">
                Omnichannel delivery of personalized offers via SMS and email, precisely timed prior to their historical booking window.
              </p>
            </div>

            <div className="glass-panel p-8 group hover:border-black/30 transition-colors">
              <Tag className="w-8 h-8 text-black mb-6" />
              <h3 className="text-xl font-bold mb-3 text-black">Loyalty Incentives</h3>
              <p className="text-black text-sm leading-relaxed">
                Dynamic pricing models that automatically calculate optimal discounts required to convert past guests into direct bookers.
              </p>
            </div>

            <div className="glass-panel p-8 group hover:border-black/30 transition-colors">
              <Crosshair className="w-8 h-8 text-black mb-6" />
              <h3 className="text-xl font-bold mb-3 text-black">Cross-Property Routing</h3>
              <p className="text-black text-sm leading-relaxed">
                Intelligent demand routing that redistributes excess inquiries from fully booked properties to comparable available homes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Owner Value Messaging */}
      <section className="py-24 container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Unlocking Lifetime Guest Value</h2>
            <p className="text-lg text-black mb-8">
              Traditional local property managers rely entirely on Airbnb and Vrbo for bookings. Our ecosystem reduces OTA dependency, increasing both your occupancy and net revenue per booking.
            </p>
            
            <ul className="space-y-6">
              <li className="flex gap-4">
                <div className="w-10 h-10 rounded-full bg-black/5 flex items-center justify-center shrink-0">
                  <ShieldCheck className="w-5 h-5 text-black" />
                </div>
                <div>
                  <h4 className="text-lg font-bold">Lifetime Guest Value Growth</h4>
                  <p className="text-sm text-black">Turn one-time renters into recurring revenue streams across our portfolio.</p>
                </div>
              </li>
              <li className="flex gap-4">
                <div className="w-10 h-10 rounded-full bg-black/5 flex items-center justify-center shrink-0">
                  <Zap className="w-5 h-5 text-black" />
                </div>
                <div>
                  <h4 className="text-lg font-bold">Off-Platform Revenue</h4>
                  <p className="text-sm text-black">Capture higher margins by eliminating standard 15% OTA commissions on repeat stays.</p>
                </div>
              </li>
            </ul>
          </div>

          <div className="glass-panel p-8 intelligence-border relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-[80px]" />
            <h3 className="text-2xl font-bold mb-8">Owner Dashboard Metrics</h3>
            <div className="space-y-4">
              <div className="flex justify-between items-center p-4 rounded-lg bg-black/5 border border-black/5">
                <span className="text-black">Ecosystem Booking %</span>
                <span className="font-mono text-xl text-black font-extrabold">32%</span>
              </div>
              <div className="flex justify-between items-center p-4 rounded-lg bg-black/5 border border-black/5">
                <span className="text-black">Repeat Guest Rate</span>
                <span className="font-mono text-xl text-black font-extrabold">24%</span>
              </div>
              <div className="flex justify-between items-center p-4 rounded-lg bg-black/5 border border-black/5">
                <span className="text-black">Direct Booking Growth</span>
                <span className="font-mono text-xl text-black font-extrabold">+48%</span>
              </div>
            </div>
            <div className="mt-8 pt-8 border-t border-white/10 text-center">
              <p className="text-sm text-black">Real-time visibility into your property's network effect</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative overflow-hidden text-center">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-primary/10" />
        <div className="container mx-auto px-6 relative z-10 max-w-3xl">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Plug Your Property Into The System</h2>
          <p className="text-lg text-black mb-10">
            Our platform can deploy the entire ecosystem for your property, from pricing engines to guest marketing automation, in under 14 days.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/intelligence-wizard" 
              className="px-8 py-4 bg-primary hover:bg-primary/90 text-black rounded-lg font-semibold transition-all hover:shadow-[0_0_20px_rgba(171,209,199,0.4)] flex items-center justify-center gap-2"
            >
              Activate My Property
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </SiteShell>
  );
}
