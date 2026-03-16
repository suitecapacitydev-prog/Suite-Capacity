import SiteShell from '@/components/layout/site-shell';
import { Hero } from '@/components/marketing/hero';
import { GuestEcosystemSection } from '@/components/marketing/guest-ecosystem-section';
import { DeploymentProcess } from '@/components/marketing/deployment-process';
import Link from 'next/link';

/**
 * Suite Capacity Landing Page
 * Features the "Central Brain" Hero and high-level platform value propositions.
 */
export default function Home() {
  return (
    <SiteShell>
      <Hero />

      {/* Platform Value Propositions */}
      <section className="py-24 container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8">
          <Link href="/platform/central-brain" className="glass-panel p-8 space-y-4 intelligence-border hover:scale-[1.02] transition-transform block group">
            <h3 className="text-xl font-bold transition-colors text-black group-hover:text-primary">The Central Brain</h3>
            <p className="text-black text-sm">
              Centralized revenue intelligence, dynamic pricing, and marketing automation powered by proprietary demand modeling.
            </p>
          </Link>
          <Link href="/platform/local-layer" className="glass-panel p-8 space-y-4 intelligence-border hover:scale-[1.02] transition-transform block group">
            <h3 className="text-xl font-bold transition-colors text-black group-hover:text-primary">The Local Layer</h3>
            <p className="text-black text-sm">
              Boots-on-the-ground support for maintenance, inspections, and guest services across our distributed market network.
            </p>
          </Link>
          <Link href="/platform/guest-ecosystem" className="glass-panel p-8 space-y-4 block group intelligence-border hover:scale-[1.02] transition-transform">
            <h3 className="text-xl font-bold transition-colors text-black group-hover:text-primary">Guest Ecosystem</h3>
            <p className="text-black text-sm">
              A vertically integrated network of travelers driving repeat, direct bookings and lifetime guest value growth.
            </p>
          </Link>
        </div>

        {/* The Result Section */}
        <div className="mt-24 pt-16 border-t border-black/5">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-4xl font-bold text-black tracking-tight">The Result</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-12">
            <div className="text-center space-y-3">
              <div className="text-3xl font-bold text-black font-mono">Higher Revenue</div>
              <p className="text-black/60 text-sm">Maximized yield through proprietary intelligence and direct booking demand.</p>
            </div>
            <div className="text-center space-y-3 border-x border-black/5 px-6">
              <div className="text-3xl font-bold text-black font-mono">Scalable Operations</div>
              <p className="text-black/60 text-sm">Distributed market teams handle the complexity while the platform handles the scale.</p>
            </div>
            <div className="text-center space-y-3">
              <div className="text-3xl font-bold text-black font-mono">Consistent Performance</div>
              <p className="text-black/60 text-sm">Standardized protocols ensure institutional-grade hospitality across every unit.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Guest Ecosystem Section */}
      <GuestEcosystemSection />

      {/* Platform Deployment Section */}
      <DeploymentProcess />
    </SiteShell>
  );
}
