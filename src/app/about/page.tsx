import SiteShell from '@/components/layout/site-shell';

export default function AboutPage() {
  return (
    <SiteShell>
      <section className="pt-32 pb-24 relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mb-24">
            <p className="text-[10px] font-black uppercase tracking-[0.4em] text-primary mb-4">The Infrastructure of Passivity</p>
            <h1 className="text-5xl md:text-7xl font-black mb-8 tracking-tighter leading-[0.9]">
              About Suite <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Capacity</span>
            </h1>
            <p className="text-xl md:text-2xl text-black font-medium leading-relaxed">
              Suite Capacity is a full-service short-term rental operating platform built to maximize revenue and eliminate the day-to-day burden for property owners.
            </p>
            <p className="text-lg text-black/60 mt-6 max-w-2xl font-medium">
              We manage everything   pricing, guest experience, cleaning, maintenance, and design   turning properties into high-performing, fully passive income assets.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-16 mb-24">
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-black tracking-tight mb-4 uppercase italic">Built to Scale. <br />Designed to Be Local.</h2>
                <p className="text-lg text-black/70 leading-relaxed font-medium">
                  What makes Suite Capacity different is how we operate. We combine a centralized system   covering pricing, strategy, and performance optimization   with local teams on the ground in every market we serve.
                </p>
              </div>
              <p className="text-lg text-black/80 font-bold border-l-4 border-primary pl-6 py-2 bg-primary/5">
                That means your property is backed by a larger platform, while still being managed with the care and responsiveness of a local operator   always within 30 minutes of the asset.
              </p>
            </div>

            <div className="glass-panel p-10 bg-white text-black space-y-8 shadow-2xl border-none">
              <h3 className="text-2xl font-black uppercase tracking-widest text-primary">The Result</h3>
              <ul className="space-y-6">
                {[
                  "Higher revenue through optimized pricing and positioning",
                  "Consistent 5-star guest experiences",
                  "Reliable, hands-on local execution",
                  "True passivity for owners"
                ].map((item, i) => (
                  <li key={i} className="flex gap-4 items-start group">
                    <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center text-[10px] font-black text-primary shrink-0 transition-all group-hover:bg-primary group-hover:text-white">{i + 1}</div>
                    <span className="text-black font-bold tracking-tight text-lg">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mb-24 p-12 rounded-[2rem] bg-primary/10 border border-primary/20 text-center space-y-6">
            <p className="text-[10px] font-black uppercase tracking-[0.5em] text-primary">Our Mission</p>
            <h2 className="text-3xl md:text-5xl font-black tracking-tighter max-w-4xl mx-auto leading-tight text-primary">
              We’re building the infrastructure that makes short-term rental ownership scalable, reliable, and truly hands-off.
            </h2>
            <p className="text-xl text-primary/80 font-bold italic">  National Reach meet Hyper-Local Execution.</p>
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
                  bio: "Hi, I'm Marialaura. I studied Hotel Management and Administration because I've always been passionate about hospitality and making people feel welcome during their trips. As someone who also loves traveling, I truly understand the importance of feeling comfortable away from home. At Suite Capacity, I focus on making sure your stay runs effortlessly from answering questions to coordinating every detail so you can enjoy a stress-free and memorable experience with us!"
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
