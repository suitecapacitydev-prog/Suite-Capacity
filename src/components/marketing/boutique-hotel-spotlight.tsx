'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Building, MapPin, Sparkles } from 'lucide-react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';

export default function BoutiqueHotelSpotlight() {
  return (
    <motion.section 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="py-16 my-16 bg-black text-white rounded-[40px] relative overflow-hidden"
    >
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[100px] -mr-64 -mt-64 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-white/5 rounded-full blur-[80px] -ml-32 -mb-32 pointer-events-none" />

      <div className="container mx-auto px-8 md:px-16 relative z-10">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          {/* Content */}
          <div className="flex-1 space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/30 bg-primary/10 text-primary text-[10px] font-bold uppercase tracking-widest">
              <Building className="w-4 h-4" />
              Featured Collection
            </div>
            
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-tight font-playfair">
              The <span className="text-primary italic">Boutique</span> Hotel Experience
            </h2>
            
            <p className="text-white/70 text-lg leading-relaxed max-w-xl">
              Showcasing one of our premier management projects, a stunning boutique hotel featuring a combined total of 21 unique units. Designed for ultimate comfort and an unforgettable Jersey Shore getaway.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a 
                href="https://jerseyshorebnb.com/" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <Button className="h-14 px-8 text-lg font-bold bg-primary text-black hover:bg-white transition-all shadow-xl shadow-primary/20 rounded-2xl w-full sm:w-auto">
                  Explore The Hotel <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </a>
            </div>
          </div>

          {/* Feature Image Grid / Visual */}
          <div className="flex-1 w-full lg:w-auto relative">
             <div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl shadow-primary/5 border border-white/10 relative group">
               <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-10" />
               <Image 
                 src="/images/jersey-shore-hotel.png" 
                 alt="Jersey Shore BNB Boutique Hotel" 
                 fill 
                 className="object-cover transition-transform duration-700 group-hover:scale-105"
               />
               
               <div className="absolute bottom-8 left-8 z-20">
                 <h3 className="text-2xl font-bold text-white mb-2">Jersey Shore BNB</h3>
                 <div className="flex items-center gap-2 text-white/80 text-sm font-medium">
                   <MapPin className="w-4 h-4 text-primary" />
                   21 Premium Units
                 </div>
               </div>
             </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
