import { Network, Users, Repeat, MapPin, TrendingUp, Cpu, Database, Fingerprint, Mail, Gift, LayoutDashboard, LineChart, Target, Zap } from 'lucide-react';

export function GuestEcosystemSection() {
  return (
    <section id="guest-ecosystem" className="py-24 relative overflow-hidden bg-black/40 border-t border-b border-white/5">
      {/* Background glow effects */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight uppercase text-black">
            Guest <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Ecosystem</span>
          </h2>
          <p className="text-xl text-black font-medium">
            Shared traveler database across all Suite Capacity properties.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-20 items-center">
          {/* Left Column: Visual Flywheel Diagram */}
          <div className="relative aspect-square max-w-[500px] mx-auto w-full group">

            {/* Center Node */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-36 h-36 rounded-full glass-panel border border-black/20 flex flex-col items-center justify-center z-20 shadow-[0_0_50px_rgba(0,0,0,0.15)] group-hover:scale-110 transition-transform duration-700">
              <Network className="w-12 h-12 text-black mb-2" />
              <span className="text-[10px] font-black tracking-widest text-black">CENTRAL CRM</span>
            </div>

            {/* Orbital Nodes */}
            <div className="absolute top-[10%] left-1/2 -translate-x-1/2 w-24 h-24 rounded-full glass-panel flex flex-col items-center justify-center z-10 animate-vertical-float">
              <Users className="w-6 h-6 text-black mb-1" />
              <span className="text-[10px] text-black font-bold uppercase tracking-tighter text-center">Travelers</span>
            </div>
            <div className="absolute top-[25%] right-[5%] w-28 h-28 rounded-full glass-panel flex flex-col items-center justify-center z-10 hover:translate-x-2 transition-transform duration-500">
              <Repeat className="w-8 h-8 text-black mb-1" />
              <span className="text-[10px] text-black font-bold uppercase tracking-tighter text-center leading-tight">Repeat<br />Renters</span>
            </div>
            <div className="absolute bottom-[15%] right-[10%] w-24 h-24 rounded-full glass-panel flex flex-col items-center justify-center z-10 hover:translate-y-2 transition-transform duration-500">
              <TrendingUp className="w-8 h-8 text-black mb-1" />
              <span className="text-[10px] text-black font-bold uppercase tracking-tighter text-center">Direct<br />Bookings</span>
            </div>
            <div className="absolute bottom-[15%] left-[10%] w-28 h-28 rounded-full glass-panel flex flex-col items-center justify-center z-10 hover:-translate-y-2 transition-transform duration-500">
              <MapPin className="w-8 h-8 text-black mb-1" />
              <span className="text-[10px] text-black font-bold uppercase tracking-tighter text-center">Cross<br />Exposure</span>
            </div>

            {/* Connecting Lines (SVG overlay) */}
            <svg className="absolute inset-0 w-full h-full z-0 opacity-20 pointer-events-none" viewBox="0 0 500 500">
              <g stroke="currentColor" className="text-black" strokeWidth="1" fill="none">
                <path d="M 250 250 L 250 100" />
                <path d="M 250 250 L 400 175" />
                <path d="M 250 250 L 375 350" />
                <path d="M 250 250 L 125 350" />
                <circle cx="250" cy="250" r="180" strokeDasharray="4 8" className="animate-spin-slow origin-center" />
              </g>
            </svg>
          </div>

          {/* Right Column: Key Points */}
          <div className="space-y-6">
            {[
              { title: 'Shared guest network', desc: 'Every property added to our platform pools its past guests into our central centralized CRM, creating a massive, shared traveler database.', icon: Users },
              { title: 'Repeat renter automation', desc: 'Automated retargeting campaigns ensure past guests return to our ecosystem, reducing dependency on costly OTA platforms like Airbnb and Vrbo.', icon: Repeat },
              { title: 'Cross-property exposure', desc: 'When a property is fully booked, excess demand is routed instantly to other available homes in the market, maximizing network occupancy.', icon: MapPin },
              { title: 'Direct booking engine', desc: 'A high-converting, brand-owned funnel turns OTA travelers into direct bookers, capturing higher margins and increasing your revenue.', icon: TrendingUp },
            ].map((point, i) => (
              <div key={i} className="glass-panel p-6 flex gap-4 items-start group hover:border-primary/50 transition-colors">
                <div className="w-12 h-12 rounded-lg bg-black/5 flex items-center justify-center shrink-0">
                  <point.icon className="w-6 h-6 text-black" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2 text-black transition-colors">{point.title}</h3>
                  <p className="text-sm text-black leading-relaxed">
                    {point.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
