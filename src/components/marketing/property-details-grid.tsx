'use client';

import { Users, Bed, Bath, Sparkles, MapPin, Star, ArrowUpRight } from 'lucide-react';

interface PropertyDetailsGridProps {
  guests: number;
  bedrooms: number;
  bathrooms: number;
  beds: number;
  className?: string;
}

export default function PropertyDetailsGrid({ guests, bedrooms, bathrooms, beds, className = "flex items-center gap-4 text-secondary/60 text-sm font-medium" }: PropertyDetailsGridProps) {
  return (
    <div className={className}>
      <span className="flex items-center gap-1.5"><Users className="w-4 h-4 text-primary" /> {guests} Guests</span>
      <span className="flex items-center gap-1.5"><Bed className="w-4 h-4 text-primary" /> {bedrooms} Bedrooms</span>
      <span className="flex items-center gap-1.5"><Bath className="w-4 h-4 text-primary" /> {bathrooms} Baths</span>
    </div>
  );
}
