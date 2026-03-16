import { Network, Users, Repeat, MapPin, TrendingUp } from 'lucide-react';

export function GuestEcosystemSection() {
  return (
    <section className="py-24 relative overflow-hidden bg-black/40 border-t border-b border-white/5">
      {/* Background glow effects */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight">
            The Guest <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Ecosystem</span>
          </h2>
          <p className="text-lg text-black">
            A vertically integrated network of travelers driving repeat, direct bookings and lifetime guest value growth across our entire portfolio.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column: Visual Flywheel Diagram */}
          <div className="relative aspect-square max-w-[500px] mx-auto w-full">
            {/* Center Node */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 rounded-full glass-panel border border-black/20 flex flex-col items-center justify-center z-20 shadow-[0_0_30px_rgba(0,0,0,0.1)]">
              <Network className="w-10 h-10 text-black mb-2" />
              <span className="text-xs font-semibold tracking-wider text-black">CENTRAL CRM</span>
            </div>

            {/* Orbital Nodes - Simple CSS positioning for a network look */}
            
            {/* Top Node */}
            <div className="absolute top-[10%] left-1/2 -translate-x-1/2 w-20 h-20 rounded-full glass-panel flex flex-col items-center justify-center z-10 animation-pulse-slow">
              <Users className="w-6 h-6 text-black mb-1" />
              <span className="text-[10px] text-black font-medium">Travelers</span>
            </div>
            {/* Top Right Node */}
            <div className="absolute top-[25%] right-[10%] w-24 h-24 rounded-full glass-panel flex flex-col items-center justify-center z-10">
              <Repeat className="w-6 h-6 text-black mb-1" />
              <span className="text-[10px] text-black font-medium text-center leading-tight">Repeat<br/>Renters</span>
            </div>
            {/* Bottom Right Node */}
            <div className="absolute bottom-[20%] right-[15%] w-20 h-20 rounded-full glass-panel flex flex-col items-center justify-center z-10">
              <TrendingUp className="w-6 h-6 text-black mb-1" />
              <span className="text-[10px] text-black font-medium text-center">Direct<br/>Bookings</span>
            </div>
            {/* Bottom Left Node */}
            <div className="absolute bottom-[20%] left-[15%] w-24 h-24 rounded-full glass-panel flex flex-col items-center justify-center z-10">
              <MapPin className="w-6 h-6 text-black mb-1" />
              <span className="text-[10px] text-black font-medium text-center">Cross<br/>Exposure</span>
            </div>
            {/* Top Left Node */}
            <div className="absolute top-[30%] left-[5%] w-16 h-16 rounded-full glass-panel flex flex-col items-center justify-center z-10">
              <Users className="w-5 h-5 text-black" />
            </div>

            {/* Connecting Lines (SVG overlay) */}
            <svg className="absolute inset-0 w-full h-full z-0 opacity-20 pointer-events-none" viewBox="0 0 500 500">
              <g stroke="currentColor" className="text-black" strokeWidth="1" fill="none">
                <path d="M 250 250 L 250 100" />
                <path d="M 250 250 L 400 175" />
                <path d="M 250 250 L 375 350" />
                <path d="M 250 250 L 125 350" />
                <path d="M 250 250 L 75 200" />
                
                {/* Circular orbit indications */}
                <circle cx="250" cy="250" r="160" strokeDasharray="4 8" className="opacity-50" />
                <circle cx="250" cy="250" r="220" strokeDasharray="2 10" className="opacity-30" />
              </g>
            </svg>
          </div>

          {/* Right Column: Value Props */}
          <div className="space-y-6">
            <div className="glass-panel p-6 flex gap-4 items-start group hover:border-black/50 transition-colors">
              <div className="w-12 h-12 rounded-lg bg-black/5 flex items-center justify-center shrink-0">
                <Users className="w-6 h-6 text-black" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2 text-black group-hover:text-black transition-colors">Shared Guest Network</h3>
                <p className="text-sm text-black leading-relaxed">
                  Every property added to our platform pools its past guests into our central centralized CRM, creating a massive, shared traveler database.
                </p>
              </div>
            </div>

            <div className="glass-panel p-6 flex gap-4 items-start group hover:border-black/50 transition-colors">
              <div className="w-12 h-12 rounded-lg bg-black/5 flex items-center justify-center shrink-0">
                <Repeat className="w-6 h-6 text-black" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2 text-black group-hover:text-black transition-colors">Repeat Renter Automation</h3>
                <p className="text-sm text-black leading-relaxed">
                  Automated retargeting campaigns ensure past guests return to our ecosystem, reducing dependency on costly OTA platforms like Airbnb and Vrbo.
                </p>
              </div>
            </div>

            <div className="glass-panel p-6 flex gap-4 items-start group hover:border-black/50 transition-colors">
              <div className="w-12 h-12 rounded-lg bg-black/5 flex items-center justify-center shrink-0">
                <MapPin className="w-6 h-6 text-black" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2 text-black group-hover:text-black transition-colors">Cross-Property Exposure</h3>
                <p className="text-sm text-black leading-relaxed">
                  When a property is fully booked, excess demand is routed instantly to other available homes in the market, maximizing network occupancy.
                </p>
              </div>
            </div>

            <div className="glass-panel p-6 flex gap-4 items-start group hover:border-black/50 transition-colors">
              <div className="w-12 h-12 rounded-lg bg-black/5 flex items-center justify-center shrink-0">
                <TrendingUp className="w-6 h-6 text-black" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2 text-black group-hover:text-black transition-colors">Direct Booking Engine</h3>
                <p className="text-sm text-black leading-relaxed">
                  A high-converting, brand-owned funnel turns OTA travelers into direct bookers, capturing higher margins and increasing your revenue.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
