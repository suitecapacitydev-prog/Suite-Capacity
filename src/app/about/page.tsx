import SiteShell from '@/components/layout/site-shell';

export default function AboutPage() {
  return (
    <SiteShell>
      <section className="pt-32 pb-24 relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-3xl mb-16">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">
              Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Vision</span>
            </h1>
            <p className="text-xl text-black mb-10 leading-relaxed">
              Suite Capacity is a centralized operating system that deploys revenue strategy, marketing automation, and operational workflows — executed locally by boots-on-the-ground teams.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="glass-panel p-8 space-y-6">
              <h2 className="text-2xl font-bold">Mission</h2>
              <p className="text-black/70 italic">
                "Transforming STR management from traditional hospitality into a data-driven operating platform."
              </p>
            </div>
            <div className="glass-panel p-8 space-y-6">
              <h2 className="text-2xl font-bold">Platform Vision</h2>
              <p className="text-black/70">
                A vertically integrated network where centralized data intelligence meets hyper-localized execution, creating superior yield for owners and seamless experiences for guests.
              </p>
            </div>
          </div>

          <div className="mt-24">
            <h2 className="text-3xl font-bold mb-12">Growth Roadmap</h2>
            <div className="space-y-8">
              {[
                { phase: 'Phase 1', title: 'Central Brain Alpha', desc: 'Deployment of proprietary revenue modeling and pricing algorithms.' },
                { phase: 'Phase 2', title: 'Guest Ecosystem expansion', desc: 'Shared traveler database across all managed properties.' },
                { phase: 'Phase 3', title: 'Market Network nodes', desc: 'Expanding local market teams to 10+ core STR markets.' }
              ].map((item, i) => (
                <div key={i} className="flex gap-6 items-start">
                  <div className="text-sm font-bold uppercase tracking-widest text-primary pt-1 shrink-0 w-24">{item.phase}</div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                    <p className="text-black/60">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </SiteShell>
  );
}
