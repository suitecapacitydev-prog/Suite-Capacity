'use client';

import React, { useEffect, useState, useMemo } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import { 
  Users, Bed, Bath, Globe, ShieldCheck, 
  ChevronLeft, Info, Calendar, Star,
  MessageCircle, MapPin, Share2, Heart,
  BedDouble, Home as HomeIcon, Share
} from 'lucide-react';
import SiteShell from '@/components/layout/site-shell';
import { Button } from '@/components/ui/button';
import { properties, Property } from '@/data/properties';
import { ListingHeroGrid } from '@/components/listing/ListingHeroGrid';
import { ListingAmenities } from '@/components/listing/ListingAmenities';
import { ListingReviews } from '@/components/listing/ListingReviews';
import { BookingSidebar } from '@/components/listing/BookingSidebar';

export default function ListingDetailPage() {
  const params = useParams();
  const router = useRouter();
  const [property, setProperty] = useState<Property | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Member access check
    const unlocked = localStorage.getItem('guest_list_unlocked') === 'true';
    if (!unlocked) {
      router.push('/guest-list?reason=locked');
      return;
    }

    const found = properties.find(p => p.id === Number(params.id));
    if (found) {
      setProperty(found);
      setIsLoading(false);
    } else {
      router.push('/guest-list/exclusive');
    }
  }, [params.id, router]);

  if (isLoading || !property) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-950">
        <motion.div 
          animate={{ rotate: 360 }}
          transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
          className="w-12 h-12 border-t-2 border-primary rounded-full"
        />
      </div>
    );
  }

  return (
    <SiteShell>
      <main className="bg-background min-h-screen pb-24 pt-24 relative overflow-hidden">
        {/* Decorative Background Elements */}
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[120px] -mr-96 -mt-96 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-accent/5 rounded-full blur-[120px] -ml-64 -mb-64 pointer-events-none" />

        <div className="relative z-10">
          {/* Navigation Bar */}
          <div className="container mx-auto px-6 mb-8">
            <Button 
              variant="ghost" 
              className="text-secondary/60 hover:text-foreground gap-2 pl-0 transition-colors"
              onClick={() => router.back()}
            >
              <ChevronLeft className="w-5 h-5" />
              Back to Collection
            </Button>
          </div>

          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
              {/* Left Column: Content */}
              <div className="lg:col-span-8 space-y-12">
                {/* Header Section */}
                <div className="space-y-6">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/5 border border-primary/10 text-primary text-[10px] font-bold uppercase tracking-widest">
                    <ShieldCheck className="w-3.5 h-3.5" />
                    Verified Suite Capacity Listing
                  </div>
                  
                  <h1 className="text-4xl md:text-5xl font-bold text-foreground font-playfair tracking-tight mb-4 leading-tight max-w-4xl">
                    {property.name}
                  </h1>

                  <div className="flex flex-wrap items-center gap-6 text-sm text-secondary/60">
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 text-primary fill-current" />
                      <span className="font-bold text-foreground">{property.rating / 2}</span>
                      <span className="text-secondary/40">({property.reviews.length} reviews)</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <MapPin className="w-4 h-4 text-primary" />
                      <span className="text-foreground font-medium">{property.location}</span>
                    </div>
                    <div className="flex items-center gap-4 ml-auto">
                      <button className="flex items-center gap-2 hover:text-primary transition-colors">
                        <Share2 className="w-4 h-4" />
                        <span className="font-medium underline underline-offset-4">Share</span>
                      </button>
                      <button className="flex items-center gap-2 hover:text-primary transition-colors">
                        <Heart className="w-4 h-4" />
                        <span className="font-medium underline underline-offset-4">Save</span>
                      </button>
                    </div>
                  </div>
                </div>

                {/* Hero Grid */}
                <ListingHeroGrid images={property.images} name={property.name} />

                {/* Property Stats */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 py-8 border-y border-black/5">
                  {[
                    { label: 'Guests', value: property.guests, icon: Users },
                    { label: 'Bedrooms', value: property.bedrooms, icon: BedDouble },
                    { label: 'Beds', value: property.beds, icon: HomeIcon },
                    { label: 'Baths', value: property.bathrooms, icon: Bath },
                  ].map((stat, i) => (
                    <div key={i} className="flex flex-col items-center p-4 rounded-2xl bg-white/40 border border-black/5">
                      <stat.icon className="w-6 h-6 text-primary mb-2" />
                      <span className="text-xl font-bold text-foreground">{stat.value}</span>
                      <span className="text-[10px] text-secondary/40 font-bold uppercase tracking-widest">{stat.label}</span>
                    </div>
                  ))}
                </div>

                {/* About Section */}
                <div className="space-y-6">
                  <h2 className="text-3xl font-bold text-foreground font-playfair">About this space</h2>
                  
                  <div className="relative bg-white border border-black/5 rounded-[2rem] p-8 md:p-10 shadow-sm hover:shadow-md transition-shadow">
                    {/* Decorative Quote Icon or Element */}
                    <div className="absolute top-8 right-8 opacity-5 text-primary pointer-events-none">
                      <Info className="w-24 h-24" />
                    </div>
                    
                    {/* Inner Scrollable Container */}
                    <div className="max-h-[340px] overflow-y-auto pr-6 pb-4 relative z-10 hidden-scrollbar">
                      <div className="prose prose-slate max-w-none">
                        <p className="text-secondary/70 text-[17px] leading-[1.8] font-light whitespace-pre-line">
                          {property.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Amenities Section */}
                <div className="pt-12 border-t border-black/5">
                  <h2 className="text-3xl font-bold text-foreground font-playfair mb-10">What this place offers</h2>
                  <ListingAmenities amenities={property.amenities} />
                </div>

                {/* Reviews Section */}
                <div className="pt-12 border-t border-black/5">
                  <div className="flex items-center gap-4 mb-10">
                    <h2 className="text-3xl font-bold text-foreground font-playfair">
                      <Star className="w-8 h-8 text-primary inline-block mr-2 fill-current mb-1" />
                      {property.rating / 2} · {property.reviews.length} reviews
                    </h2>
                  </div>
                  <ListingReviews reviews={property.reviews} />
                </div>
              </div>

              {/* Right Column: Booking Sidebar */}
              <div className="lg:col-span-4">
                <div className="sticky top-32 space-y-6">
                  <BookingSidebar property={property} />
                  
                  {/* Additional Member Info */}
                  <div className="p-8 rounded-[2rem] bg-white border border-black/5 shadow-xl">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                        <Star className="w-6 h-6" />
                      </div>
                      <h4 className="font-bold text-foreground">Experience the Suite Difference</h4>
                    </div>
                    <p className="text-sm text-secondary/60 leading-relaxed font-light mb-6">
                      Every stay booked through our exclusive member network includes priority guest support, early check-in (when available), and member-only credits for local experiences.
                    </p>
                    <Button variant="outline" className="w-full h-14 rounded-xl border-primary/20 text-primary font-bold hover:bg-primary/5 transition-all">
                      Inquire About This Property
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Membership Footer Invitation */}
          <div className="container mx-auto px-6 mt-24 mb-12">
            <div className="p-12 rounded-[2rem] bg-white text-black text-center relative overflow-hidden group shadow-2xl">
              <h2 className="text-4xl font-bold font-playfair mb-6">Experience the Suite Difference</h2>
              <p className="text-black/60 max-w-2xl mx-auto mb-10 leading-relaxed text-lg">
                Every stay booked through our exclusive member network includes priority guest support, early check-in (when available), and member-only credits for local experiences.
              </p>
              <Button size="lg" className="bg-primary hover:bg-primary-hover text-white h-16 px-12 rounded-xl font-bold text-xl transition-all hover:scale-105 active:scale-95 shadow-xl shadow-primary/20">
                Inquire About This Property
              </Button>
            </div>
          </div>
        </div>
      </main>
    </SiteShell>
  );
}
