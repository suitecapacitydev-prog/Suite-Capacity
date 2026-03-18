"use client";
import { motion } from 'framer-motion';
import { Network, Users, Repeat, MapPin, TrendingUp, Cpu, Database, Fingerprint, Mail, Gift, LayoutDashboard, LineChart, Target, Zap } from 'lucide-react';

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 }
  }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15
    }
  }
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5 }
  }
};

export function GuestEcosystemSection() {
  return (
    <section id="guest-ecosystem" className="py-24 relative overflow-hidden bg-primary/40 border-t border-b border-white/5">
      {/* Background glow effects */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5 }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[120px] pointer-events-none"
      />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight uppercase text-black">
            Guest <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Ecosystem</span>
          </h2>
          <p className="text-xl text-black font-medium">
            Shared traveler database across all Suite Capacity properties.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-20 items-center">
          {/* Left Column: Visual Flywheel Diagram */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="relative aspect-square max-w-[500px] mx-auto w-full group"
          >

            {/* Center Node */}
            <motion.div
              variants={scaleIn}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-36 h-36 rounded-full glass-panel border border-black/20 flex flex-col items-center justify-center z-20 shadow-[0_0_50px_rgba(0,0,0,0.15)] group-hover:scale-110 transition-transform duration-700"
            >
              <Network className="w-12 h-12 text-primary mb-2" />
              <span className="text-[9px] font-bold tracking-widest text-primary uppercase" style={{ fontFamily: 'var(--font-playfair), Georgia, serif' }}>CENTRAL CRM</span>
            </motion.div>

            {/* Orbital Nodes */}
            <motion.div
              variants={fadeInUp}
              className="absolute top-[10%] left-1/2 -translate-x-1/2 w-24 h-24 rounded-full glass-panel flex flex-col items-center justify-center z-10 animate-vertical-float"
            >
              <Users className="w-6 h-6 text-blue-500 mb-1" />
              <span className="text-[9px] text-blue-500 font-bold uppercase tracking-tight text-center" style={{ fontFamily: 'var(--font-playfair), Georgia, serif' }}>Travelers</span>
            </motion.div>
            <motion.div
              variants={fadeInUp}
              className="absolute top-[25%] right-[5%] w-28 h-28 rounded-full glass-panel flex flex-col items-center justify-center z-10 hover:translate-x-2 transition-transform duration-500"
            >
              <Repeat className="w-8 h-8 text-accent mb-1" />
              <span className="text-[9px] text-accent font-bold uppercase tracking-tight text-center leading-tight" style={{ fontFamily: 'var(--font-playfair), Georgia, serif' }}>Repeat<br />Renters</span>
            </motion.div>
            <motion.div
              variants={fadeInUp}
              className="absolute bottom-[15%] right-[10%] w-24 h-24 rounded-full glass-panel flex flex-col items-center justify-center z-10 hover:translate-y-2 transition-transform duration-500"
            >
              <TrendingUp className="w-8 h-8 text-green-500 mb-1" />
              <span className="text-[9px] text-green-600 font-bold uppercase tracking-tight text-center" style={{ fontFamily: 'var(--font-playfair), Georgia, serif' }}>Direct<br />Bookings</span>
            </motion.div>
            <motion.div
              variants={fadeInUp}
              className="absolute bottom-[15%] left-[10%] w-28 h-28 rounded-full glass-panel flex flex-col items-center justify-center z-10 hover:-translate-y-2 transition-transform duration-500"
            >
              <MapPin className="w-8 h-8 text-primary mb-1" />
              <span className="text-[9px] text-primary font-bold uppercase tracking-tight text-center" style={{ fontFamily: 'var(--font-playfair), Georgia, serif' }}>Cross<br />Exposure</span>
            </motion.div>

            {/* Connecting Lines (SVG overlay) */}
            <svg className="absolute inset-0 w-full h-full z-0 opacity-20 pointer-events-none" viewBox="0 0 500 500">
              <g stroke="currentColor" className="text-black" strokeWidth="1" fill="none">
                <motion.path
                  initial={{ pathLength: 0 }}
                  whileInView={{ pathLength: 1 }}
                  transition={{ duration: 1.5, delay: 0.5 }}
                  d="M 250 250 L 250 100"
                />
                <motion.path
                  initial={{ pathLength: 0 }}
                  whileInView={{ pathLength: 1 }}
                  transition={{ duration: 1.5, delay: 0.7 }}
                  d="M 250 250 L 400 175"
                />
                <motion.path
                  initial={{ pathLength: 0 }}
                  whileInView={{ pathLength: 1 }}
                  transition={{ duration: 1.5, delay: 0.9 }}
                  d="M 250 250 L 375 350"
                />
                <motion.path
                  initial={{ pathLength: 0 }}
                  whileInView={{ pathLength: 1 }}
                  transition={{ duration: 1.5, delay: 1.1 }}
                  d="M 250 250 L 125 350"
                />
                <motion.circle
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 1 }}
                  cx="250" cy="250" r="180" strokeDasharray="4 8" className="animate-spin-slow origin-center"
                />
              </g>
            </svg>
          </motion.div>

          {/* Right Column: Key Points */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="space-y-6"
          >
            {[
              { title: 'Shared guest network', desc: 'Every property added to our platform pools its past guests into our central centralized CRM, creating a massive, shared traveler database.', icon: Users },
              { title: 'Repeat renter automation', desc: 'Automated retargeting campaigns ensure past guests return to our ecosystem, reducing dependency on costly OTA platforms like Airbnb and Vrbo.', icon: Repeat },
              { title: 'Cross-property exposure', desc: 'When a property is fully booked, excess demand is routed instantly to other available homes in the market, maximizing network occupancy.', icon: MapPin },
              { title: 'Direct booking engine', desc: 'A high-converting, brand-owned funnel turns OTA travelers into direct bookers, capturing higher margins and increasing your revenue.', icon: TrendingUp },
            ].map((point, i) => (
              <motion.div
                key={i}
                variants={fadeInUp}
                className="glass-panel p-6 flex gap-4 items-start group hover:border-primary/50 transition-colors cursor-pointer"
                whileHover={{ x: 10, backgroundColor: "rgba(0,0,0,0.05)" }}
              >
                <div className={`w-12 h-12 rounded-lg flex items-center justify-center shrink-0 ${
                    i === 0 ? 'bg-blue-500/10' :
                    i === 1 ? 'bg-accent/10' :
                    i === 2 ? 'bg-primary/10' :
                    'bg-green-500/10'
                  }`}>
                  <point.icon className={`w-6 h-6 ${
                    i === 0 ? 'text-blue-500' :
                    i === 1 ? 'text-accent' :
                    i === 2 ? 'text-primary' :
                    'text-green-500'
                  }`} />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2 text-black transition-colors">{point.title}</h3>
                  <p className="text-sm text-black leading-relaxed">
                    {point.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
