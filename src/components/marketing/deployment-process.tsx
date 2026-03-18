"use client";
import { motion } from 'framer-motion';
import { Rocket, ShieldCheck, Zap, BarChart3, Users, Settings, Wrench, Clock } from 'lucide-react';
import Link from 'next/link';

export function DeploymentProcess() {
  return (
    <section id="deployment" className="py-24 relative overflow-hidden bg-white">
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center space-y-8"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-black/10 bg-primary/5 text-black text-sm font-bold mb-4"
          >
            <Clock className="w-4 h-4 text-primary" />
            <span className="tracking-tight">14-Day Activation Process</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-4xl md:text-6xl font-bold tracking-tight"
          >
            Rapid Platform <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Deployment</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-xl text-black/70 leading-relaxed max-w-2xl mx-auto"
          >
            We don't just "onboard" properties. We deploy a vertically integrated operating system.
            Our 14-day protocol transforms your asset into a high-performance hospitality business.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="pt-8"
          >
            <Link
              href="/wizard"
              className="px-12 py-5 bg-primary hover:bg-primary/90 text-black rounded-xl font-bold text-lg transition-all hover:shadow-[0_0_30px_rgba(171,209,199,0.3)] hover:-translate-y-1 inline-flex items-center gap-3 group"
            >
              Activate My Property
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
