import SiteShell from '@/components/layout/site-shell';
import { Hero } from '@/components/marketing/Hero';

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
          <div className="glass-panel p-8 space-y-4 intelligence-border">
            <h3 className="text-xl font-bold">The Central Brain</h3>
            <p className="text-secondary-foreground text-sm">
              Centralized revenue intelligence, dynamic pricing, and marketing automation powered by proprietary demand modeling.
            </p>
          </div>
          <div className="glass-panel p-8 space-y-4">
            <h3 className="text-xl font-bold">The Local Layer</h3>
            <p className="text-secondary-foreground text-sm">
              Boots-on-the-ground support for maintenance, inspections, and guest services across our distributed market network.
            </p>
          </div>
          <div className="glass-panel p-8 space-y-4">
            <h3 className="text-xl font-bold">Guest Ecosystem</h3>
            <p className="text-secondary-foreground text-sm">
              A vertically integrated network of travelers driving repeat, direct bookings and lifetime guest value growth.
            </p>
          </div>
        </div>
      </section>
    </SiteShell>
  );
}
