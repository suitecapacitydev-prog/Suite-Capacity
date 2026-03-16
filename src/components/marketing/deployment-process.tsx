import { Rocket, ShieldCheck, Zap, BarChart3, Users, Settings, Wrench, Clock } from 'lucide-react';
import Link from 'next/link';

export function DeploymentProcess() {
  const steps = [
    {
      title: 'Pricing Engine Activation',
      desc: 'Deployment of our proprietary revenue intelligence layer and dynamic pricing algorithms.',
      icon: Zap,
    },
    {
      title: 'Guest Ecosystem Onboarding',
      desc: 'Integration of your property into our shared traveler database and automated CRM.',
      icon: Users,
    },
    {
      title: 'Listing Optimization',
      desc: 'Full audit and rewrite of listing content with professional photography integration.',
      icon: Rocket,
    },
    {
      title: 'Vendor Onboarding',
      desc: 'Scanning and activating localized field teams for cleaning and maintenance.',
      icon: Wrench,
    },
    {
      title: 'Automation Setup',
      desc: 'Configuration of guest communication workflows and operational trigger systems.',
      icon: Settings,
    },
    {
      title: 'Owner Dashboard Launch',
      desc: 'Granting real-time access to performance metrics, guest data, and revenue reports.',
      icon: BarChart3,
    },
    {
      title: 'Maintenance Integration',
      desc: 'Setup of the recursive maintenance program and recurring inspection protocols.',
      icon: ShieldCheck,
    },
  ];

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-black/10 bg-black/5 text-black text-sm font-medium mb-6">
              <Clock className="w-4 h-4 text-black" />
              <span>14-Day Activation Process</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight">
              Rapid Platform <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Deployment</span>
            </h2>
            <p className="text-lg text-black mb-10">
              We don't just "onboard" properties. We deploy a vertically integrated operating system. Our 14-day protocol transforms your asset into a high-performance hospitality business.
            </p>
            
            <Link 
              href="/wizard" 
              className="px-8 py-4 bg-primary hover:bg-primary/90 text-black rounded-lg font-semibold transition-all hover:shadow-[0_0_20px_rgba(171,209,199,0.4)] inline-flex items-center gap-2"
            >
              Activate My Property
            </Link>
          </div>

          <div className="space-y-4">
            {steps.map((step, index) => (
              <div 
                key={index}
                className="glass-panel p-4 flex gap-4 items-center group hover:border-black/30 transition-all hover:translate-x-1"
              >
                <div className="w-10 h-10 rounded-lg bg-black/5 flex items-center justify-center shrink-0">
                  <step.icon className="w-5 h-5 text-black" />
                </div>
                <div>
                  <h4 className="font-bold text-sm">{step.title}</h4>
                  <p className="text-black">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
