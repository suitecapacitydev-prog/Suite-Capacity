import SiteShell from '@/components/layout/site-shell';
import { TrendingUp, Zap, Home, CheckCircle, ArrowRight, FileText } from 'lucide-react';
import Link from 'next/link';

export default function SolutionsPage() {
  const tiers = [
    {
      title: 'Full-Service (Commission)',
      badge: 'Most Popular',
      desc: 'Completely hands-off. We handle every aspect of your STR   from guest communication and dynamic pricing to cleaning, maintenance, and compliance. You collect a check.',
      items: [
        'Full property setup & listing creation',
        'Dynamic pricing & revenue optimization',
        'Guest communication & concierge',
        'Cleaning, inspections & maintenance',
        'Compliance & licensing management',
      ],
      icon: Home,
      cta: 'Get Your Blueprint',
      href: '/wizard',
      featured: true,
    },
    {
      title: 'Flat Fee (Operations Only)',
      badge: 'Keep More Revenue',
      desc: 'You keep a larger share of your revenue. We run the full on-the-ground operating system   so you stay hands-off without paying a percentage of every booking.',
      items: [
        'Guest management & support',
        'Cleaning & inspection protocols',
        'Vendor coordination',
        'Operational reporting',
      ],
      icon: Zap,
      cta: 'Book a Call',
      href: 'https://calendly.com/suitecapacity/consultation-and-discovery-call?month=2026-03',
      featured: false,
    },
    {
      title: 'Design & Optimization',
      badge: 'Improve Existing STR',
      desc: "Already have a rental? We audit your setup, redesign for maximum booking appeal, and inject our pricing and automation system to increase your property's revenue.",
      items: [
        'Interior design & staging audit',
        'High-impact furnishing plan',
        'Photography & listing optimization',
        'Pricing strategy injection',
      ],
      icon: TrendingUp,
      cta: 'Request a Review',
      href: 'https://calendly.com/suitecapacity/consultation-and-discovery-call?month=2026-03',
      featured: false,
    },
  ];

  return (
    <SiteShell>
      {/* Hero Section */}
      <section className="pt-32 pb-16 relative overflow-hidden bg-primary/5">
        <div className="container mx-auto px-6 text-center max-w-3xl">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-[11px] font-semibold uppercase tracking-widest mb-6 border border-primary/20">
            Ways to Work With Us
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-5 tracking-tight">
            Passive Income, Your Way.
          </h1>
          <p className="text-lg text-black/55 mb-10 leading-relaxed">
            Whether you want completely hands-off income or just need us to run the operations   we have a model that fits.
          </p>
          <Link href="/wizard">
            <button className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-white rounded-2xl font-semibold hover:bg-primary/90 hover:-translate-y-0.5 transition-all shadow-lg shadow-primary/20">
              <FileText className="w-4 h-4" /> Get Your Free STR Blueprint
            </button>
          </Link>
        </div>
      </section>

      {/* Service Tiers */}
      <section className="py-24 container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8">
          {tiers.map((tier, index) => (
            <div
              key={index}
              className={`glass-panel p-8 flex flex-col border-black/5 ${tier.featured ? 'ring-2 ring-primary shadow-xl shadow-primary/10' : 'hover:border-primary/20'} transition-all`}
            >
              <div className="flex justify-between items-start mb-6">
                <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center">
                  <tier.icon className="w-5 h-5 text-primary" />
                </div>
                <span className={`text-[10px] font-semibold uppercase tracking-wider px-3 py-1.5 rounded-full ${tier.featured ? 'bg-primary text-white' : 'bg-primary/10 text-primary'}`}>
                  {tier.badge}
                </span>
              </div>
              <h3 className="text-xl font-semibold mb-3">{tier.title}</h3>
              <p className="text-black/55 text-sm leading-relaxed mb-8 flex-grow">{tier.desc}</p>
              <ul className="space-y-3 mb-8">
                {tier.items.map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-black/65">
                    <CheckCircle className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
              <a
                href={tier.href}
                target={tier.href.startsWith('http') ? '_blank' : undefined}
                rel="noopener noreferrer"
                className={`w-full py-3.5 rounded-xl text-sm font-semibold text-center transition-all flex items-center justify-center gap-2 ${tier.featured ? 'bg-primary text-white hover:bg-primary/90' : 'bg-primary/10 hover:bg-primary/20 text-black border border-primary/20'}`}
              >
                {tier.cta} <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* Not Just Management   A System */}
      <section className="py-24 bg-primary/5 border-y border-black/5">
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
              Not Just Management  {' '}
              <span className="text-primary">A System</span>
            </h2>
            <p className="text-base text-black/55 max-w-xl mx-auto">
              Most property managers just collect rent and handle complaints. We install a complete revenue-focused operating system into your property.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { old: 'We manage your property', new: 'We turn your property into passive income', icon: Home },
              { old: 'Full-service management', new: 'Done-for-you STR operating system', icon: Zap },
              { old: 'We optimize listings', new: "We increase your property's revenue", icon: TrendingUp },
            ].map((item, i) => (
              <div key={i} className="glass-panel p-8 border-black/5 bg-white">
                <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center mb-6 text-primary">
                  <item.icon className="w-5 h-5" />
                </div>
                <div className="space-y-2">
                  <div className="text-sm text-black/30 line-through">{item.old}</div>
                  <div className="text-base font-semibold text-black">{item.new}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 container mx-auto px-6 text-center max-w-xl">
        <h2 className="text-3xl font-bold tracking-tight mb-5">
          Ready to Activate Your Property?
        </h2>
        <p className="text-black/55 mb-10 leading-relaxed">
          Start with a free STR Blueprint   we'll show you exactly how much your property can make and what it would take to get there.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/wizard">
            <button className="inline-flex items-center gap-2 px-7 py-3.5 bg-primary text-white rounded-xl font-semibold hover:bg-primary/90 hover:-translate-y-0.5 transition-all shadow-lg shadow-primary/20">
              <FileText className="w-4 h-4" /> Get Your STR Blueprint
            </button>
          </Link>
          <a href="https://calendly.com/suitecapacity/consultation-and-discovery-call?month=2026-03" target="_blank" rel="noopener noreferrer">
            <button className="inline-flex items-center gap-2 px-7 py-3.5 border border-black/10 rounded-xl font-semibold hover:bg-primary/5 transition-all">
              Book a Call
            </button>
          </a>
        </div>
      </section>
    </SiteShell>
  );
}
