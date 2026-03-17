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
            <h2 className="text-3xl font-bold mb-12 uppercase tracking-tight">Our Team</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {[
                {
                  name: 'William "Billy" Butler',
                  role: 'Co-Founder & CEO',
                  img: '/images/team/billy.jpg',
                  bio: "Billy's journey is a testament to the fusion of creativity and entrepreneurship. Hailing from the Phoenix area, Billy's early days were spent immersed in the world of entertainment, where he honed his skills as a freelance filmmaker. It wasn't long before Billy's entrepreneurial spirit began to shine through. Billy ventured into the realm of real estate. Blending his creative flair with a keen business sense, he began building his real estate portfolio and exploring opportunities in property management. Driven by a vision to revolutionize the real estate landscape, Billy made the bold decision to establish Suite Capacity alongside his partner, Maddie, offering unparalleled services in real estate guidance, property management, and short-term rentals."
                },
                {
                  name: 'Madeline Rizzo',
                  role: 'Co-Founder & Chief Brand Officer',
                  img: '/images/team/madeline.jpg',
                  bio: "Having spent her formative years frequenting the Jersey Shore with her family, Maddie's upbringing instilled in her a profound appreciation for the region's rich heritage and scenic beauty. However, it was her professional journey that provided her with the insights and expertise necessary to embark on her entrepreneurial endeavors. Maddie honed her craft in the bustling metropolis of Los Angeles, where she served as a Property Assistant for a prominent film studio. Immersed in the fast-paced world of entertainment, Maddie gained invaluable experience in property management, honing her organizational prowess and keen eye for detail."
                },
                {
                  name: 'Marialaura Natera',
                  role: 'Executive Assistant',
                  img: '/images/team/marialaura.jpg',
                  bio: "Hi, I'm Marialaura. I studied Hotel Management and Administration because I've always been passionate about hospitality and making people feel welcome during their trips. As someone who also loves traveling, I truly understand the importance of feeling comfortable away from home. At Suite Capacity, I focus on making sure your stay runs effortlessly—from answering questions to coordinating every detail—so you can enjoy a stress-free and memorable experience with us!"
                },
                {
                  name: 'Liam Hoffman',
                  role: 'Sales Assistant',
                  img: '/images/team/liam.jpg',
                  bio: "Liam Hoffman is a creative and driven professional who brings genuine passion and curiosity to every project he supports. With experience in sales assistance, virtual support, and marketing coordination, he thrives in environments where ideas, people, and solutions come together. What truly defines Liam is not his job titles but the energy and enthusiasm he brings to helping others succeed. He is deeply interested in how businesses grow, how brands express their identity, and how meaningful connections are built. Liam enjoys exploring new tools, discovering smarter ways to work, and finding small improvements that make a big difference in a client's daily workflow."
                }
              ].map((member, i) => (
                <div key={i} className="glass-panel p-8 flex flex-col items-start gap-6 group hover:border-primary/50 transition-all">
                  <div className="flex items-center gap-6 text-left">
                    <div className="w-28 h-28 rounded-full overflow-hidden shrink-0 border-2 border-primary/20 bg-primary/5">
                      <img
                        src={member.img}
                        alt={member.name}
                        className="w-full h-full object-cover object-top transition-all duration-500"
                      />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold">{member.name}</h3>
                      <p className="text-primary text-sm font-semibold uppercase tracking-wider">{member.role}</p>
                    </div>
                  </div>
                  <p className="text-sm text-black/70 leading-relaxed italic">
                    "{member.bio}"
                  </p>
                </div>
              ))}
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
