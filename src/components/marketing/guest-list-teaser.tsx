'use client';

import { motion } from 'framer-motion';
import { Star, ArrowRight, Zap, CheckCircle2, Lock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export function GuestListTeaser() {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="glass-panel p-12 bg-primary/5 border-primary/20 relative overflow-hidden rounded-[40px]">
          <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-[100px] -mr-48 -mt-48" />
          
          <div className="grid lg:grid-cols-2 gap-16 items-center relative z-10">
            <div className="space-y-8">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-primary/20 text-black text-xs font-bold uppercase tracking-widest shadow-sm"
              >
                <Star className="w-4 h-4 text-primary fill-primary" />
                Join The Guest List
              </motion.div>

              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-4xl md:text-5xl font-black tracking-tight leading-tight text-black"
              >
                Book Direct. <br />
                <span className="text-primary">Unlock Member Rates.</span>
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-xl text-black/85 font-medium leading-relaxed"
              >
                Join our private guest network for better rates, priority booking, and exclusive perks you won't find on Airbnb.
              </motion.p>

              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  '5-10% Lower Rates',
                  'Priority Booking Access',
                  'Early Check-in / Late Checkout',
                  'Exclusive Member Perks',
                ].map((perk, i) => (
                  <div key={i} className="flex items-center gap-3 text-black/85 font-black">
                    <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
                    {perk}
                  </div>
                ))}
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="flex flex-col sm:flex-row gap-4 pt-4"
              >
                <Link href="/guest-list">
                  <Button size="lg" variant="intelligence" className="w-full sm:w-auto h-12 px-10 text-lg font-bold shadow-xl shadow-primary/20">
                    Join The Guest List
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </Link>
                <Link href="/guest-list#signup">
                  <Button size="lg" variant="outline" className="w-full sm:w-auto h-12 px-10 text-lg font-bold">
                    Unlock Member Rates
                  </Button>
                </Link>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative hidden lg:block"
            >
              <div className="aspect-square rounded-3xl overflow-hidden bg-black shadow-2xl relative group">
                <img 
                  src="/images/properties/waterfront.jpg" 
                  alt="Luxury Vacation Rental" 
                  className="w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-700" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent p-12 flex flex-col justify-end">
                  <div className="space-y-4">
                    <div className="flex items-center gap-2 text-white font-bold uppercase tracking-widest text-sm">
                      <Lock className="w-4 h-4 text-primary" /> Member Exclusive
                    </div>
                    <h3 className="text-3xl font-bold text-white">Private Guest Network</h3>
                    <p className="text-white/85 font-medium">Access curated properties at rates designed for direct travelers.</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
