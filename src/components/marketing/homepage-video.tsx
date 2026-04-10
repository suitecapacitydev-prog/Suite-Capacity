'use client';

import { motion } from 'framer-motion';
import { Play } from 'lucide-react';

export function HomepageVideo() {
  return (
    <section className="py-24 bg-background relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/20 bg-primary/5 text-primary text-[10px] font-bold uppercase tracking-widest mb-6">
            <Play className="w-4 h-4 fill-primary" />
            Inside Suite Capacity
          </div>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground font-playfair mb-6">
            Discover the <span className="text-primary italic">Difference</span>
          </h2>
          <p className="text-lg text-secondary/70">
            See how we transform property management into a passive, highly profitable experience for our owners.
          </p>
        </motion.div>

        <motion.div
           initial={{ opacity: 0, y: 30, scale: 0.95 }}
           whileInView={{ opacity: 1, y: 0, scale: 1 }}
           viewport={{ once: true }}
           transition={{ delay: 0.2, duration: 0.6 }}
           className="max-w-5xl mx-auto relative rounded-[2rem] overflow-hidden shadow-2xl border border-black/5 bg-black"
        >
          {/* 16:9 Aspect Ratio Container for Responsive Video */}
          <div className="relative w-full overflow-hidden" style={{ paddingTop: '56.25%' }}>
            <iframe 
              className="absolute top-0 left-0 w-full h-full"
              src="https://www.youtube.com/embed/bMt2hgIUh24?rel=0&modestbranding=1" 
              title="Suite Capacity Showcase" 
              frameBorder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
              allowFullScreen
            ></iframe>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
