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
      </section>

      {/* Guest Ecosystem Section */}
      <GuestEcosystemSection />

      {/* Platform Deployment Section */}
      <DeploymentProcess />
    </SiteShell>
  );
}
