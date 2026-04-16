'use client';

import { useState, useMemo } from 'react';
import SiteShell from '@/components/layout/site-shell';
import { Home, Sparkles, Filter, Building2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { properties } from '@/data/properties';
import PropertyCard from '@/components/marketing/property-card';
import BoutiqueHotelSpotlight from '@/components/marketing/boutique-hotel-spotlight';
import { Button } from '@/components/ui/button';

export default function ShowcasePage() {
  const [activeFilter, setActiveFilter] = useState('All');

  const locations = useMemo(() => {
    return ['All', ...new Set(properties.map(p => p.location.split(',')[0]))];
  }, []);

  const filteredProperties = useMemo(() => {
    if (activeFilter === 'All') return properties;
    return properties.filter(p => p.location.startsWith(activeFilter));
  }, [activeFilter]);

  return (
    <SiteShell>
      <section className="pt-32 pb-24 bg-[#F4F3F2] relative overflow-hidden min-h-screen">
        {/* Decorative Background Elements */}
        <div className="absolute top-0 left-0 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[120px] -ml-96 -mt-96 pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-accent/5 rounded-full blur-[120px] -mr-64 -mb-64 pointer-events-none" />

        <div className="container mx-auto px-6 relative z-10">
          {/* Header Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-4xl mx-auto mb-12"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/20 bg-primary/5 text-primary text-[10px] font-bold uppercase tracking-widest mb-8">
              <Building2 className="w-4 h-4" />
              Our Portfolio
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-8 tracking-tight leading-tight text-foreground font-playfair">
              Managing <span className="text-primary italic">70+ Premium</span> Units
            </h1>
            <p className="text-secondary/60 text-xl leading-relaxed max-w-2xl mx-auto font-light">
              Explore a selection of our top-performing coastal properties and boutique hotel units, meticulously managed to deliver 5-star experiences and maximized revenue.
            </p>
          </motion.div>

          {/* Boutique Hotel Spotlight */}
          <BoutiqueHotelSpotlight />

          {/* Title for Grid */}
          <div className="text-center mb-12 mt-24">
            <h2 className="text-3xl font-bold font-playfair tracking-tight">Explore The Collection</h2>
            <p className="text-secondary/50 mt-2">A curated look at our diverse management portfolio.</p>
          </div>

          {/* Filter Bar */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-wrap items-center justify-center gap-3 mb-16"
          >
            <div className="flex items-center gap-2 mr-4 text-secondary/40 font-bold uppercase text-[10px] tracking-widest pt-1">
              <Filter className="w-3 h-3" /> Filter by location:
            </div>
            {locations.slice(0, 6).map((loc) => ( // limit locations for public display if needed, but we'll show all
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
              Showing {filteredProperties.length} Properties
            </div>
          </motion.div>

          {/* Properties Grid */}
          <div className="grid lg:grid-cols-2 gap-x-12 gap-y-16">
            <AnimatePresence mode="popLayout">
              {filteredProperties.map((property, idx) => (
                <PropertyCard key={property.id} property={property} index={idx} publicView />
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

          {/* CTA Section */}
          <div className="mt-32">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="glass-panel p-10 md:p-16 bg-primary text-white rounded-[40px] border-white/10 relative overflow-hidden shadow-2xl shadow-primary/20"
            >
              <div className="flex flex-col md:flex-row items-center gap-12 relative z-10">
                <div className="md:flex-1 text-center md:text-left">
                  <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-black/20 bg-black/10 text-black text-[10px] font-bold uppercase tracking-widest mb-6">
                    <Home className="w-3.5 h-3.5" />
                    Property Management
                  </div>
                  <h2 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight text-black font-playfair">
                    Maximize <span className=" italic">Your</span> Revenue
                  </h2>
                  <p className="text-black/80 text-lg max-w-xl font-medium">
                    We bring the same luxury standards and operational excellence shown here to every property we manage. Let us optimize your asset.
                  </p>
                </div>
                <div className="shrink-0">
                  <a
                    href="https://calendly.com/suitecapacity/consultation-and-discovery-call?month=2026-03"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button size="lg" className="bg-black text-white hover:bg-white hover:text-black h-16 px-12 text-lg font-bold rounded-2xl shadow-2xl transition-all active:scale-95">
                      Get Your Free Analysis
                    </Button>
                  </a>
                </div>
              </div>
            </motion.div>
          </div>

        </div>
      </section>
    </SiteShell>
  );
}
