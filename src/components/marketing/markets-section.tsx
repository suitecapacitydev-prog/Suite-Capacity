"use client";
import { motion } from 'framer-motion';
import { MapPin, ArrowRight, Waves, Sun, Mountain, Trees, Cloud } from 'lucide-react';

const markets = [
  { 
    name: 'Jersey Shore', 
    detail: 'Asbury park to cape may', 
    status: 'Active',
    icon: Waves,
    color: 'text-blue-500 bg-blue-500/10'
  },
  { 
    name: 'Kissimmee-Orlando', 
    status: 'Coming Soon',
    icon: Sun,
    color: 'text-orange-500 bg-orange-500/10'
  },
  { 
    name: 'Florida Coastal', 
    status: 'Coming Soon',
    icon: Waves,
    color: 'text-cyan-500 bg-cyan-500/10'
  },
  { 
    name: 'Phoenix', 
    status: 'Coming Soon',
    icon: Cloud,
    color: 'text-yellow-600 bg-yellow-600/10'
  },
  { 
    name: 'Smoky Mountains', 
    status: 'Coming Soon',
    icon: Mountain,
    color: 'text-green-600 bg-green-600/10'
  },
  { 
    name: 'Poconos', 
    status: 'Coming Soon',
    icon: Trees,
    color: 'text-emerald-700 bg-emerald-700/10'
  },
];

export function MarketsSection() {
  return (
    <section id="markets" className="py-24 bg-white relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-black/5 to-transparent" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-black/10 bg-primary/5 text-black text-[11px] font-bold uppercase tracking-widest mb-6"
          >
            <MapPin className="w-3 h-3 text-primary" />
            For Our Core Markets
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-5xl font-bold tracking-tight mb-4"
          >
            A Presence in High-Yield Markets
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-black/55"
          >
            We combine centralized revenue intelligence with hyper-local market operations.
          </motion.p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {markets.map((market, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="glass-panel p-8 border border-black/5 hover:border-primary/40 transition-all group relative overflow-hidden bg-white"
            >
              <div className="flex justify-between items-start mb-6">
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${market.color} group-hover:scale-110 transition-transform duration-500`}>
                  <market.icon className="w-6 h-6" />
                </div>
                <div className="flex flex-col items-end gap-2">
                  <span className={`text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-full ${
                    market.status === 'Active' ? 'bg-primary/10 text-primary' : 'bg-black/5 text-black/40'
                  }`}>
                    {market.status}
                  </span>
                </div>
              </div>
              
              <h3 className="text-xl font-bold text-black mb-2">{market.name}</h3>
              {market.detail ? (
                <p className="text-sm text-black/55 leading-relaxed">
                  {market.detail}
                </p>
              ) : (
                <p className="text-sm text-black/30 italic">
                  Hyper-local operations launching soon...
                </p>
              )}
              
              <div className="absolute bottom-0 right-0 w-24 h-24 bg-primary/5 rounded-full blur-3xl -mr-12 -mb-12 pointer-events-none group-hover:bg-primary/10 transition-colors" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
