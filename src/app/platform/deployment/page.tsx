import SiteShell from '@/components/layout/site-shell';
import { Rocket, ShieldCheck, Zap, BarChart3, Users, Settings, Wrench, Clock, ArrowRight, CheckCircle2 } from 'lucide-react';
import Link from 'next/link';

export default function DeploymentPage() {
  const steps = [
    {
      day: 'Days 1-3',
      title: 'Digital Core Activation',
      desc: 'Pricing engine setup, listing optimization, and digital asset integration.',
      items: ['Dynamic Pricing Setup', 'Neural Network Indexing', 'OTA Channel Sync'],
      icon: Zap,
    },
    {
      day: 'Days 4-7',
      title: 'Local Operational Layer',
      desc: 'Field team activation, maintenance protocols, and recursive inspection setup.',
      items: ['Localized Team Scouted', 'Vendor Onboarding', 'Inventory Audit'],
      icon: MapPin,
    },
    {
      day: 'Days 8-10',
      title: 'Guest Ecosystem Plugin',
      desc: 'Importing guest data, CRM automation setup, and direct booking funnel launch.',
      items: ['CRM Guest Migration', 'Automation Trigger Setup', 'Direct Funnel Test'],
      icon: Users,
    },
    {
      day: 'Days 11-14',
      title: 'Full Platform Go-Live',
      desc: 'Owner dashboard access, compliance verification, and 24/7 support activation.',
      items: ['Owner Dashboard Launch', 'Compliance Final Signoff', 'Market Support Live'],
      icon: Rocket,
    },
  ];

  return (
    <SiteShell>
      {/* Hero Section */}
      <section className="pt-32 pb-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:40px_40px]" />
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[120px] pointer-events-none" />

        <div className="container mx-auto px-6 relative z-10 text-center max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-black/10 bg-primary/5 text-black text-sm font-medium mb-8">
            <Clock className="w-4 h-4 text-black" />
            <span>14-Day Activation Protocol</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight leading-tight whitespace-pre-line">
            Rapid Platform{'\n'}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Deployment</span>
          </h1>
          <p className="text-xl text-black mb-10 max-w-2xl mx-auto">
            Traditional property management onboarding takes months. Our platform deployment protocol activates your property’s intelligence layer in under 14 days.
          </p>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-24 bg-primary/40 border-y border-white/5 relative">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="space-y-12">
              {steps.map((step, index) => (
                <div key={index} className="flex flex-col md:flex-row gap-8 relative group">
                  {index !== steps.length - 1 && (
                    <div className="absolute left-[39px] top-20 bottom-[-48px] w-px bg-white/10 hidden md:block" />
                  )}
                  <div className="w-20 h-20 rounded-2xl bg-primary/5 flex items-center justify-center shrink-0 border border-black/10 group-hover:bg-primary/10 transition-colors">
                    <step.icon className="w-10 h-10 text-black" />
                  </div>
                  <div className="flex-1">
                    <div className="inline-block px-3 py-1 rounded-full bg-primary/5 border border-black/10 text-black text-xs font-bold mb-3 uppercase tracking-wider">
                      {step.day}
                    </div>
                    <h3 className="text-2xl font-bold mb-3">{step.title}</h3>
                    <p className="text-black mb-6">{step.desc}</p>
                    <div className="grid sm:grid-cols-3 gap-4">
                      {step.items.map((item, i) => (
                        <div key={i} className="flex items-center gap-2 text-sm text-foreground/80">
                          <CheckCircle2 className="w-4 h-4 text-black" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative overflow-hidden text-center">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-primary/10" />
        <div className="container mx-auto px-6 relative z-10 max-w-3xl">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Ready to Deploy?</h2>
          <p className="text-lg text-black mb-10">
            Start with our Revenue Intelligence Report. We’ll baseline your performance and map out your deployment timeline.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/wizard"
              className="px-8 py-4 bg-primary hover:bg-primary/90 text-black rounded-lg font-semibold transition-all hover:shadow-[0_0_20px_rgba(171,209,199,0.4)] flex items-center justify-center gap-2"
            >
              Initialize My Deployment
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </SiteShell>
  );
}

import { MapPin } from 'lucide-react';
