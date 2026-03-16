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

      {/* SECTION — HOW THE PLATFORM WORKS */}
      <section id="how-it-works" className="py-24 container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-black tracking-tight">How the Platform Works</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {/* The Central Brain */}
          <div className="glass-panel p-8 space-y-6 intelligence-border">
            <h3 className="text-2xl font-bold text-primary">The Central Brain</h3>
            <ul className="space-y-3">
              {['Pricing', 'Marketing', 'Direct booking', 'Analytics', 'Automation'].map((item) => (
                <li key={item} className="flex items-center gap-3 text-black/70">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                  {item}
                </li>
              ))}
            </ul>
            <Link href="/platform/central-brain" className="inline-flex items-center gap-2 text-primary font-bold text-sm hover:translate-x-1 transition-transform">
              See How It Works <div className="w-4 h-4 border-2 border-primary border-t-transparent rounded-full animate-spin hidden" />
            </Link>
          </div>

          {/* The Local Layer */}
          <div className="glass-panel p-8 space-y-6 intelligence-border">
            <h3 className="text-2xl font-bold text-accent">The Local Layer</h3>
            <ul className="space-y-3">
              {['Inspections', 'Maintenance', 'Vendor management', 'Compliance', 'Guest services'].map((item) => (
                <li key={item} className="flex items-center gap-3 text-black/70">
                  <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                  {item}
                </li>
              ))}
            </ul>
            <Link href="/platform/local-layer" className="inline-flex items-center gap-2 text-accent font-bold text-sm hover:translate-x-1 transition-transform">
              See Local Execution
            </Link>
          </div>
        </div>

        {/* The Result Section */}
        <div className="pt-16 border-t border-black/5">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-black tracking-tight">The Result</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-12">
            {[
              { title: 'Higher revenue', desc: 'Maximized yield through proprietary intelligence and direct booking demand.' },
              { title: 'Scalable operations', desc: 'Distributed market teams handle the complexity while the platform handles the scale.' },
              { title: 'Consistent performance', desc: 'Standardized protocols ensure institutional-grade hospitality across every unit.' }
            ].map((result) => (
              <div key={result.title} className="text-center space-y-4 p-6 glass-panel border-transparent hover:border-black/5 transition-colors">
                <div className="text-2xl font-bold text-black font-mono capitalize">{result.title}</div>
                <p className="text-black/60 text-sm leading-relaxed">{result.desc}</p>
              </div>
            ))}
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
