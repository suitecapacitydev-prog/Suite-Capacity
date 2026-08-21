import SiteShell from '@/components/layout/site-shell';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { CALENDLY_URL } from '@/lib/constants';

const whyLocalMatters = [
  'Local market and pricing expertise',
  'Local operations teams',
  'Property inspections and quality control',
  'Cleaning and turnover oversight',
  'Maintenance coordination',
  'Local regulations and compliance',
  'Guest issue resolution',
  'Market-specific owner strategy',
];

const team = [
  {
    name: 'William "Billy" Butler',
    role: 'Founder & CEO',
    img: '/images/team/billy.jpg',
    bio: 'Billy built Suite Capacity from the ground up at the Jersey Shore, bringing local STR and real estate expertise, revenue optimization, and the operating model that defines how every property is managed.',
  },
  {
    name: 'Madeline Rizzo',
    role: 'Co-Founder & Chief Brand Officer',
    img: '/images/team/madeline.jpg',
    bio: 'Maddie owns brand positioning, owner communications, and the guest-facing experience across all Suite Capacity properties.',
  },
  {
    name: 'Marialaura Natera',
    role: 'Executive Assistant',
    img: '/images/team/marialaura.jpg',
    bio: 'Marialaura executes guest communications, owner updates, and day-to-day operational coordination across the portfolio.',
  },
  {
    name: 'Liam Hoffman',
    role: 'Sales Assistant',
    img: '/images/team/liam.jpg',
    bio: 'Liam handles owner outreach, lead follow-up, and onboarding coordination for new properties.',
  },
];

export default function AboutPage() {
  return (
    <SiteShell>
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mb-8">
            <p className="text-[10px] font-black uppercase tracking-[0.4em] text-primary mb-4">
              Local Expertise. Professional Execution.
            </p>
            <h1 className="text-5xl md:text-7xl font-black mb-8 tracking-tighter leading-[0.9]">
              About Suite{' '}
              <span className="text-transparent bg-clip-text bg-linear-to-r from-primary to-accent">
                Capacity
              </span>
            </h1>
          </div>

          {/* 1. Main Messaging */}
          <div className="grid md:grid-cols-2 gap-16 mb-24">
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-black tracking-tight mb-4 uppercase italic">
                  Designed to Be Local.
                  <br />
                  Built to Scale.
                </h2>
                <p className="text-lg text-black/70 leading-relaxed font-medium mb-4">
                  Suite Capacity combines dedicated local operations teams with professional
                  hospitality systems to manage every aspect of a vacation rental.
                </p>
                <p className="text-lg text-black/70 leading-relaxed font-medium">
                  Our teams understand the neighborhoods, seasonality, regulations, guests, vendors,
                  pricing patterns, and operational challenges unique to the markets we serve.
                </p>
              </div>
            </div>

            {/* 2. Why Local Matters */}
            <div className="glass-panel p-10 bg-white text-black space-y-8 shadow-2xl border-none">
              <h3 className="text-2xl font-black uppercase tracking-widest text-primary">
                Why Local Matters
              </h3>
              <p className="text-base text-black/70 font-bold leading-relaxed mb-3">
                Vacation rentals are a local business.
              </p>
              <p className="text-base text-black/70 font-medium leading-relaxed">
                Great STR management requires more than software and remote guest messaging. It
                requires people who understand the market and can execute on the ground.
              </p>
              <ul className="space-y-6">
                {whyLocalMatters.map((item, i) => (
                  <li key={item} className="flex gap-4 items-start group">
                    <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center text-[10px] font-black text-primary shrink-0 transition-all group-hover:bg-primary group-hover:text-white">
                      {i + 1}
                    </div>
                    <span className="text-black font-bold tracking-tight text-lg">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* 3. Our Story */}
          <div className="mb-24 p-12 rounded-[2rem] bg-primary/10 border border-primary/20 text-center space-y-6">
            <p className="text-[10px] font-black uppercase tracking-[0.5em] text-primary">
              Our Story
            </p>
            <h2 className="text-3xl md:text-5xl font-black tracking-tighter max-w-4xl mx-auto leading-tight text-primary">
              Built property by property at the Jersey Shore.
            </h2>
            <p className="text-lg text-black/70 font-medium max-w-3xl mx-auto leading-relaxed">
              Suite Capacity was built property by property at the Jersey Shore, learning firsthand
              what actually drives revenue, guest satisfaction, and reliable operations.
            </p>
            <p className="text-xl text-primary/80 font-bold italic max-w-3xl mx-auto">
              That real operating experience is the foundation of the company — not theory or
              technology alone.
            </p>
          </div>

          {/* 4. Team Bios */}
          <div className="mt-24">
            <h2 className="text-3xl font-bold mb-12 uppercase tracking-tight">Our Team</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {team.map((member) => (
                <div
                  key={member.name}
                  className="glass-panel p-8 flex flex-col items-start gap-6 group hover:border-primary/50 transition-all"
                >
                  <div className="flex items-center gap-6 text-left">
                    <div className="relative w-28 h-28 rounded-full overflow-hidden shrink-0 border-2 border-primary/20 bg-primary/5">
                      <Image
                        src={member.img}
                        alt={member.name}
                        fill
                        sizes="112px"
                        className="object-cover object-top transition-all duration-500"
                      />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold">{member.name}</h3>
                      <p className="text-primary text-sm font-semibold uppercase tracking-wider">
                        {member.role}
                      </p>
                    </div>
                  </div>
                  <p className="text-sm text-black/70 leading-relaxed italic">
                    &ldquo;{member.bio}&rdquo;
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* 5. Operating Model (replaces Growth Roadmap) */}
          <div className="mt-24">
            <h2 className="text-3xl font-black tracking-tight mb-4 uppercase italic">
              Local Expertise. Backed by a Better Operating System.
            </h2>
            <p className="text-lg text-black/70 leading-relaxed font-medium max-w-3xl mb-12">
              As Suite Capacity expands, the model remains the same: local teams + local market
              expertise + centralized technology, revenue management, and support.
            </p>
            <div className="space-y-8">
              {[
                {
                  phase: 'Local Teams',
                  title: 'People on the ground',
                  desc: 'Inspect, coordinate, and resolve issues in your market.',
                },
                {
                  phase: 'Local Expertise',
                  title: 'Market-specific knowledge',
                  desc: 'Pricing, seasonality, regulations, and guest expectations shaped by real experience.',
                },
                {
                  phase: 'Central Support',
                  title: 'Technology that scales',
                  desc: 'Revenue management and operational systems that support local execution.',
                },
              ].map((item) => (
                <div key={item.phase} className="flex gap-6 items-start">
                  <div className="text-sm font-bold uppercase tracking-widest text-primary pt-1 shrink-0 w-32">
                    {item.phase}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                    <p className="text-black/60">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* 6. Closing CTA */}
          <div className="mt-24 text-center p-12 rounded-[2rem] bg-primary text-white space-y-6">
            <h2 className="text-3xl md:text-5xl font-black tracking-tighter leading-tight">
              Your Property Deserves a Local Expert.
            </h2>
            <p className="text-lg md:text-xl text-white/85 font-medium max-w-2xl mx-auto leading-relaxed">
              Professional vacation rental management backed by people who know your market and
              take ownership of the operation.
            </p>
            <div className="pt-4">
              <a href={CALENDLY_URL} target="_blank" rel="noopener noreferrer">
                <Button
                  size="lg"
                  className="h-12 px-10 rounded-2xl font-bold text-lg bg-white text-primary hover:bg-white/90"
                >
                  Speak With Our Team
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>
    </SiteShell>
  );
}
