'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import SiteShell from '@/components/layout/site-shell';
import { ShieldCheck, Star, MapPin, Bed, Bath, Users, ArrowRight, Zap, Sparkles, Lock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';

export default function ExclusivePropertiesPage() {
  const router = useRouter();
  const [isUnlocked, setIsUnlocked] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Check if the user has unlocked access
    const unlocked = localStorage.getItem('guest_list_unlocked') === 'true';
    if (!unlocked) {
      router.push('/guest-list?reason=locked');
    } else {
      setIsUnlocked(true);
      setIsLoading(false);
    }
  }, [router]);

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
      </div>
    );
  }

  const properties = [
    {
      id: 1,
      name: 'The Waterfront Retreat',
      location: 'Jersey Shore, NJ',
      image: '/images/properties/waterfront.jpg',
      beds: 5,
      baths: 4.5,
      guests: 12,
      standardPrice: '$1,250',
      memberPrice: '$1,100',
      tag: 'Oceanfront'
    },
    {
      id: 2,
      name: 'Tropical Coastal Oasis',
      location: 'Palm Beach, FL',
      image: '/images/properties/beachside.jpg',
      beds: 4,
      baths: 3,
      guests: 10,
      standardPrice: '$850',
      memberPrice: '$765',
      tag: 'Heated Pool'
    },
    {
      id: 3,
      name: 'Modern Skyline Villa',
      location: 'Miami, FL',
      image: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?q=80&w=2071&auto=format&fit=crop',
      beds: 6,
      baths: 5,
      guests: 14,
      standardPrice: '$2,100',
      memberPrice: '$1,890',
      tag: 'Chef Kitchen'
    },
    {
      id: 4,
      name: 'Mountain Peak Lodge',
      location: 'Smoky Mountains, TN',
      image: 'https://images.unsplash.com/photo-1518780664697-55e3ad937233?q=80&w=1965&auto=format&fit=crop',
      beds: 4,
      baths: 3.5,
      guests: 8,
      standardPrice: '$550',
      memberPrice: '$495',
      tag: 'Hot Tub'
    }
  ];

  return (
    <SiteShell>
      <section className="pt-32 pb-24 bg-white relative overflow-hidden">
        {/* Decorative Background Elements */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] -mr-64 -mt-64" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[120px] -ml-64 -mb-64" />

        <div className="container mx-auto px-6 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/20 bg-primary/5 text-primary text-xs font-bold uppercase tracking-widest mb-6">
              <ShieldCheck className="w-4 h-4" />
              Member-Exclusive Access
            </div>
            <h1 className="text-4xl md:text-6xl font-black mb-6 tracking-tight leading-tight">
              Our Premium <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Guest Network</span>
            </h1>
            <p className="text-black/60 text-lg leading-relaxed">
              As a Guest List member, you unlock exclusive direct rates and priority access to our most sought-after properties.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-10">
            {properties.map((property, idx) => (
              <motion.div
                key={property.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                className="group glass-panel overflow-hidden border-black/5 hover:border-primary/20 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/10 rounded-3xl"
              >
                <div className="h-80 relative overflow-hidden">
                  <div className="absolute top-6 left-6 z-10">
                    <span className="bg-primary text-white font-bold text-[10px] uppercase tracking-widest px-4 py-2 rounded-full shadow-lg backdrop-blur-md">
                      Member Rate Unlocked
                    </span>
                  </div>
                  <div className="absolute top-6 right-6 z-10">
                    <span className="bg-white/90 text-black font-bold text-[10px] uppercase tracking-widest px-3 py-1.5 rounded-lg shadow-sm backdrop-blur-sm flex items-center gap-1.5">
                      <Star className="w-3 h-3 text-primary fill-primary" />
                      5.0
                    </span>
                  </div>
                  <img
                    src={property.image}
                    alt={property.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60" />
                  <div className="absolute bottom-6 left-6 text-white">
                    <div className="flex items-center gap-2 text-white/80 text-xs font-bold mb-1">
                      <MapPin className="w-3 h-3" />
                      {property.location}
                    </div>
                    <p className="text-xs font-bold uppercase tracking-widest px-2 py-1 bg-white/20 backdrop-blur-md rounded inline-block">
                      {property.tag}
                    </p>
                  </div>
                </div>

                <div className="p-8">
                  <div className="flex justify-between items-start mb-6">
                    <div>
                      <h3 className="text-2xl font-black mb-2">{property.name}</h3>
                      <div className="flex items-center gap-4 text-black/40 text-sm font-medium">
                        <span className="flex items-center gap-1.5"><Bed className="w-4 h-4" /> {property.beds} Beds</span>
                        <span className="flex items-center gap-1.5"><Bath className="w-4 h-4" /> {property.baths} Baths</span>
                        <span className="flex items-center gap-1.5"><Users className="w-4 h-4" /> Up to {property.guests}</span>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-xs text-black/30 line-through mb-1">Standard {property.standardPrice}</p>
                      <p className="text-2xl font-black text-primary">{property.memberPrice}</p>
                      <p className="text-[10px] font-bold text-black/40 uppercase tracking-tighter">Per Night (Member)</p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <Button 
                      className="flex-1 h-14 text-lg font-bold shadow-xl shadow-primary/10 hover:scale-[1.02] transition-all"
                      variant="intelligence"
                      onClick={() => window.open('https://suitecapacity.holidayfuture.com/', '_blank')}
                    >
                      Instant Booking <Zap className="w-4 h-4 ml-2" />
                    </Button>
                    <Button 
                      variant="outline" 
                      className="h-14 w-14 p-0 rounded-2xl border-black/10 hover:bg-black hover:text-white transition-all"
                    >
                      <ArrowRight className="w-5 h-5" />
                    </Button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-20 text-center">
            <div className="glass-panel inline-flex flex-col md:flex-row items-center gap-6 p-8 bg-black text-white rounded-3xl border-white/10 max-w-4xl mx-auto shadow-2xl">
              <div className="text-center md:text-left">
                <h4 className="text-xl font-bold mb-1 flex items-center gap-2 justify-center md:justify-start">
                  <Sparkles className="w-5 h-5 text-primary" /> 
                  Need a custom quote?
                </h4>
                <p className="text-white/50 text-sm">Members get priority handling on all bespoke requests via our concierge.</p>
              </div>
              <Button size="lg" className="bg-white text-black hover:bg-primary hover:text-white h-12 px-10 font-bold ml-auto shrink-0">
                Contact Concierge
              </Button>
            </div>
          </div>
        </div>
      </section>
    </SiteShell>
  );
}
