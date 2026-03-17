import SiteShell from '@/components/layout/site-shell';
import { MapPin, ShieldCheck, Wrench, Users, ClipboardCheck, ArrowRight, Truck, Microscope } from 'lucide-react';
import Link from 'next/link';

export default function LocalLayerPage() {
  const services = [
    {
      title: 'Boots-on-the-Ground',
      desc: 'Our distributed market teams handle everything from rapid-response maintenance to high-touch guest support.',
      icon: MapPin,
    },
    {
      title: 'Hyper-Localized Teams',
      desc: 'We don’t outsource to generic vendors. We build and manage local market expert teams in every market we operate.',
      icon: Users,
    },
    {
      title: '120-Point Inspections',
      desc: 'Rigorous recurring inspections ensuring every property meets the highest safety, design, and cleanliness standards.',
      icon: ClipboardCheck,
    },
    {
      title: 'Recursive Maintenance',
      desc: 'A proactive approach to asset preservation, identifying and fixing issues before they impact the guest experience.',
      icon: Wrench,
    },
    {
      title: 'Compliance Expertise',
      desc: 'Navigating local STR regulations and licensing to ensure your property remains operational and protected.',
      icon: ShieldCheck,
    },
    {
      title: 'Vendor Coordination',
      desc: 'Seamless management of cleaning crews, pool services, and landscaping through our proprietary field ops layer.',
      icon: Truck,
    },
  ];

  return (
    <SiteShell>
      {/* Hero Section */}
      <section className="pt-32 pb-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:40px_40px]" />
        <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[120px] pointer-events-none" />

        <div className="container mx-auto px-6 relative z-10 text-center max-w-4xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-black/10 bg-primary/5 text-black text-sm font-medium mb-8">
            <MapPin className="w-4 h-4 text-black" />
            <span>Localized Operational Execution</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight leading-tight whitespace-pre-line">
            The Hyper-Local{'\n'}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Operations Layer</span>
          </h1>
          <p className="text-xl text-black mb-10 max-w-2xl mx-auto">
            Centralized data intelligence is nothing without rapid, localized execution. Our boots-on-the-ground teams ensure your property is managed with white-glove precision.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 bg-primary/40 border-y border-white/5 relative">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <div key={index} className="glass-panel p-8 group hover:border-black/30 transition-colors">
                <div className="w-12 h-12 rounded-lg bg-primary/5 flex items-center justify-center mb-6">
                  <service.icon className="w-6 h-6 text-black" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-black">{service.title}</h3>
                <p className="text-black text-sm leading-relaxed">
                  {service.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Field Ops Visual section */}
      <section className="py-24 container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="absolute -inset-4 bg-primary/10 blur-[40px] rounded-full pointer-events-none" />
            <div className="glass-panel overflow-hidden relative z-10 border-l-4 border-l-black/30">
              <img
                src="/images/repairs.jpg"
                alt="Proactive Maintenance"
                className="w-full h-48 object-cover opacity-80"
              />
              <div className="p-8">
                <h3 className="text-2xl font-bold mb-4">Precision Inspections</h3>
                <p className="text-black mb-6">
                  Our "120-Point Scan" is performed before every peak season and after major guest stays. We don't just look for "broken" things—we look for optimization opportunities.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center gap-2 text-sm">
                    <ClipboardCheck className="w-4 h-4 text-black" />
                    <span>Furniture & Furnishing Condition</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <ClipboardCheck className="w-4 h-4 text-black" />
                    <span>Safety & Compliance Verification</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <ClipboardCheck className="w-4 h-4 text-black" />
                    <span>Connectivity & Tech Audit</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <ClipboardCheck className="w-4 h-4 text-black" />
                    <span>Inventory Precision Check</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <h2 className="text-3xl font-bold mb-6">Market-specific expertise that scales.</h2>
            <p className="text-lg text-black mb-8">
              We understand the nuances of every market we enter. From beachfront maintenance requirements in the Jersey Shore to heat-sensitive seasonal protocols in Arizona—our teams are trained for local excellence.
            </p>
            <div className="flex items-center gap-4 p-4 rounded-lg bg-primary/10 border border-primary/20 mb-8">
              <Microscope className="w-8 h-8 text-black" />
              <div>
                <p className="text-sm font-bold text-black">14-Day Deployment Protocol</p>
                <p className="text-xs text-black">We scout and activate your local team in under 14 days.</p>
              </div>
            </div>

            <div className="glass-panel p-6 flex items-center gap-6 border-r-4 border-r-primary/30">
              <div className="w-20 h-20 rounded-full overflow-hidden shrink-0">
                <img
                  src="/images/concierge.jpg"
                  alt="Property Concierge"
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h4 className="font-bold">Property Concierge</h4>
                <p className="text-sm text-black opacity-70">Dedicated local support for every guest and owner.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative overflow-hidden text-center">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-primary/10" />
        <div className="container mx-auto px-6 relative z-10 max-w-3xl">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Managed Locally. Driven by Data.</h2>
          <p className="text-lg text-black mb-10">
            Let our boots-on-the-ground teams handle the operations while you enjoy the results of the Central Brain.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/wizard"
              className="px-8 py-4 bg-primary hover:bg-primary/90 text-black rounded-lg font-semibold transition-all hover:shadow-[0_0_20px_rgba(171,209,199,0.4)] flex items-center justify-center gap-2"
            >
              Get My Property Scanned
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </SiteShell>
  );
}
