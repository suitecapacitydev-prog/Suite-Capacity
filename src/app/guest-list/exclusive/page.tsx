'use client';

import { useState, useEffect, useMemo } from 'react';
import { useRouter } from 'next/navigation';
import SiteShell from '@/components/layout/site-shell';
import { ShieldCheck, Sparkles, Filter, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { motion, AnimatePresence } from 'framer-motion';
import { properties } from '@/data/properties';
import PropertyCard from '@/components/marketing/property-card';

export default function ExclusivePropertiesPage() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true);
  const [activeFilter, setActiveFilter] = useState('All');

  useEffect(() => {
    // Check if the user has unlocked access
    const unlocked = localStorage.getItem('guest_list_unlocked') === 'true';
    if (!unlocked) {
      router.push('/guest-list?reason=locked');
    } else {
      setIsLoading(false);
    }
  }, [router]);

  const locations = useMemo(() => {
    return ['All', ...new Set(properties.map(p => p.location.split(',')[0]))];
  }, []);

  const filteredProperties = useMemo(() => {
    if (activeFilter === 'All') return properties;
    return properties.filter(p => p.location.startsWith(activeFilter));
  }, [activeFilter]);

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
      </div>
    );
  }

  return (
    <SiteShell>
      <section className="pt-32 pb-24 bg-[#F4F3F2] relative overflow-hidden min-h-screen">
        {/* Decorative Background Elements */}
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[120px] -mr-96 -mt-96 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-accent/5 rounded-full blur-[120px] -ml-64 -mb-64 pointer-events-none" />

        <div className="container mx-auto px-6 relative z-10">
          {/* Header Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-4xl mx-auto mb-20"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/20 bg-primary/5 text-primary text-[10px] font-bold uppercase tracking-widest mb-8">
              <ShieldCheck className="w-4 h-4" />
              Member-Exclusive Collection
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-8 tracking-tight leading-tight text-foreground font-playfair">
              Curated <span className="text-primary italic">Coastal</span> Living
            </h1>
            <p className="text-secondary/60 text-xl leading-relaxed max-w-2xl mx-auto font-light">
              Unlock the Jersey Shore&apos;s most prestigious direct-booking network.
              Exclusive rates, priority access, and bespoke service for our members.
            </p>
          </motion.div>

          {/* Filter Bar */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="flex flex-wrap items-center justify-center gap-3 mb-16"
          >
            <div className="flex items-center gap-2 mr-4 text-secondary/40 font-bold uppercase text-[10px] tracking-widest pt-1">
              <Filter className="w-3 h-3" /> Filter by location:
            </div>
            {locations.map((loc) => (
              <button
                key={loc}
                onClick={() => setActiveFilter(loc)}
                className={`px-6 py-2.5 rounded-xl text-[10px] font-bold border transition-all duration-300 uppercase tracking-widest ${activeFilter === loc
                  ? 'bg-primary border-primary text-white shadow-lg shadow-primary/20'
                  : 'bg-white border-black/5 text-secondary/60 hover:border-primary/30 hover:bg-primary/5'
                  }`}
              >
                {loc}
              </button>
            ))}
            <div className="ml-4 pl-4 border-l border-black/5 text-secondary/40 text-[10px] font-bold uppercase tracking-widest pt-1">
              {filteredProperties.length} Properties Found
            </div>
          </motion.div>

          {/* Properties Grid */}
          <div className="grid lg:grid-cols-2 gap-x-12 gap-y-16">
            <AnimatePresence mode="popLayout">
              {filteredProperties.map((property, idx) => (
                <PropertyCard key={property.id} property={property} index={idx} />
              ))}
            </AnimatePresence>
          </div>

          {/* Empty State */}
          {filteredProperties.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="py-24 text-center glass-panel border-dashed border-2 border-black/5"
            >
              <p className="text-secondary/40 font-medium">No properties found in this location yet.</p>
              <Button variant="ghost" onClick={() => setActiveFilter('All')} className="mt-2 text-primary font-bold">
                View All Listings
              </Button>
            </motion.div>
          )}

          {/* Concierge Section */}
          <div className="mt-32">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="glass-panel p-10 md:p-16 bg-secondary text-white rounded-[40px] border-white/10 relative overflow-hidden shadow-2xl"
            >
              <div className="flex flex-col md:flex-row items-center gap-12 relative z-10">
                <div className="md:flex-1 text-center md:text-left">
                  <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/20 bg-white/5 text-primary text-[10px] font-bold uppercase tracking-widest mb-6">
                    <Sparkles className="w-3.5 h-3.5" />
                    Concierge Service
                  </div>
                  <h2 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight text-primary font-playfair">
                    Looking for a <span className=" italic">Custom</span> Itinerary?
                  </h2>
                  <p className="text-primary text-lg max-w-xl font-light">
                    Members receive priority handling on all bespoke requests. Our team can curate multiple properties for large groups or long-term relocation needs.
                  </p>
                </div>
                <div className="shrink-0">
                  <Button size="lg" className="bg-white text-secondary hover:bg-primary hover:text-white h-16 px-12 text-lg font-bold rounded-2xl shadow-2xl shadow-primary/20 transition-all active:scale-95">
                    Contact Concierge
                  </Button>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </SiteShell>
  );
}
