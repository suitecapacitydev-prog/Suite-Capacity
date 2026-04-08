'use client';

import { motion } from 'framer-motion';
import { Rocket, ArrowRight, ShieldCheck, TrendingUp, Landmark } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export function InvestmentTeaser() {
  return (
    <section className="py-24 bg-black text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:40px_40px]" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-white text-xs font-bold uppercase tracking-widest border border-white/10"
            >
              <Landmark className="w-4 h-4 text-primary-foreground" />
              For Our Direct Investors
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-6xl font-bold tracking-tight leading-tight text-white"
            >
              Build Passive Income Through <span className="text-primary-foreground font-black italic">Short-Term Rentals</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-xl text-white/70 leading-relaxed font-medium"
            >
              From buying your first property to investing in curated portfolios — Suite Capacity helps you launch, manage, and scale STR investments.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="space-y-4"
            >
              {[
                'Done-For-You 90-Day Accelerator',
                'With a free entry program (90-Day Accelerator)',
                'And a future pipeline of investment opportunities',
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3 text-white/90">
                  <ShieldCheck className="w-5 h-5 text-primary-foreground" />
                  <span className="font-medium text-lg">{item}</span>
                </div>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4 pt-4"
            >
              <Link href="/invest">
                <Button size="lg" variant="intelligence" className="w-full sm:w-auto h-12 px-10 text-lg font-black uppercase tracking-widest shadow-xl shadow-primary/20">
                  Explore Investment Options
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="glass-panel p-8 bg-primary border-white/10 backdrop-blur-md relative z-10 space-y-8 shadow-2xl shadow-primary/20">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-black text-white/85 uppercase tracking-[0.2em] mb-1">Featured Opportunity</p>
                  <h3 className="text-2xl font-bold text-white">Launch an STR in 90 Days — Free Program</h3>
                </div>
                <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center text-white">
                  <Rocket className="w-6 h-6" />
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex justify-between items-end p-4 rounded-xl bg-white/10 border border-white/10">
                  <div>
                    <p className="text-xs text-white/70 uppercase font-black tracking-widest mb-1">Status</p>
                    <p className="text-sm font-black text-white">Now accepting applications</p>
                  </div>
                  <div className="text-right">
                    <p className="text-xs text-white/60 uppercase font-bold tracking-wider mb-1">Entry Cost</p>
                    <p className="text-sm font-bold text-white">$0 Upfront</p>
                  </div>
                </div>
                <p className="text-sm text-white/90 leading-relaxed font-bold italic">
                  Turn a new property into a cash-flowing asset in under 3 months.
                </p>
              </div>

              <Link href="/invest#accelerator" className="block">
                <Button variant="outline" className="w-full border-white/40 text-white hover:bg-white/10 font-black uppercase tracking-widest group h-12 rounded-2xl">
                  Apply Now
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </div>

            <div className="absolute -top-10 -right-10 w-32 h-32 bg-primary/20 blur-[80px] rounded-full" />
            <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-accent/20 blur-[80px] rounded-full" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
