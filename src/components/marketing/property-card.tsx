import { useRouter } from 'next/navigation';
import { Property } from '@/data/properties';
import { motion } from 'framer-motion';
import { ArrowRight, MapPin, Sparkles, Star, Zap } from 'lucide-react';
import PropertyCarousel from './property-carousel';
import PropertyDetailsGrid from './property-details-grid';
import { Button } from '../ui/button';

interface PropertyCardProps {
  property: Property;
  index: number;
  publicView?: boolean;
}

export default function PropertyCard({ property, index, publicView = false }: PropertyCardProps) {
  const router = useRouter();
  
  // Flatten amenities for the tags
  const allAmenities = Object.values(property.amenities).flat();

  const handleNavigate = () => {
    if (publicView && property.link) {
      window.open(property.link, '_blank', 'noopener,noreferrer');
    } else {
      router.push(`/guest-list/exclusive/listings/${property.id}`);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.05, duration: 0.5 }}
      className="group glass-panel overflow-hidden border-black/5 hover:border-primary/20 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/10 rounded-3xl cursor-pointer"
      onClick={handleNavigate}
    >
      {/* Visual Header / Carousel */}
      <div className="h-80 relative overflow-hidden">
        {!publicView && (
          <div className="absolute top-6 left-6 z-20">
            <span className="bg-primary/90 text-white font-bold text-[10px] uppercase tracking-widest px-4 py-2 rounded-full shadow-lg backdrop-blur-md flex items-center gap-1.5 border border-white/10">
              <Sparkles className="w-3.5 h-3.5 fill-white" />
              Member Rate Unlocked
            </span>
          </div>
        )}

        {property.rating && (
          <div className="absolute top-6 right-6 z-20">
            <span className="bg-white/90 text-black font-bold text-[10px] uppercase tracking-widest px-3 py-1.5 rounded-lg shadow-sm backdrop-blur-sm flex items-center gap-1.5 border border-black/5">
              <Star className="w-3 h-3 text-primary fill-primary" />
              {property.rating}
            </span>
          </div>
        )}

        <PropertyCarousel images={property.images} name={property.name} />

        <div className="absolute bottom-6 left-6 text-white z-20">
          <div className="flex items-center gap-2 text-white/90 text-[10px] font-bold mb-1 uppercase tracking-widest">
            <MapPin className="w-3.5 h-3.5" />
            {property.location}
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="p-8">
        <div className="flex justify-between items-start mb-6">
          <div className="max-w-[70%]">
            <h3 className="text-2xl font-bold mb-3 tracking-tight leading-tight group-hover:text-primary transition-colors">
              {property.name}
            </h3>
            <PropertyDetailsGrid
              guests={property.guests}
              bedrooms={property.bedrooms}
              bathrooms={property.bathrooms}
              beds={property.beds}
            />
          </div>
          <div className="text-right">
            {!publicView && <p className="text-xs text-secondary/30 line-through mb-1">Standard ${Math.round(property.price * 1.15)}</p>}
            <p className="text-2xl font-bold text-primary">${property.price}</p>
            <p className="text-[10px] font-bold text-secondary/40 uppercase tracking-tighter">Per Night {publicView ? '' : '(Member)'}</p>
          </div>
        </div>

        {/* Feature Tags */}
        <div className="flex flex-wrap gap-2 mb-8">
          {allAmenities.slice(0, 3).map((amenity, i) => (
            <span key={i} className="px-3 py-1 rounded-md bg-secondary/5 text-secondary/60 text-[10px] font-bold uppercase tracking-wider border border-secondary/5">
              {amenity}
            </span>
          ))}
          {allAmenities.length > 3 && (
            <span className="px-3 py-1 rounded-md bg-secondary/5 text-secondary/40 text-[10px] font-bold">
              +{allAmenities.length - 3} More
            </span>
          )}
        </div>

        {/* Action Buttons */}
        <div className="flex gap-4">
          <Button
            className="flex-1 h-12 text-lg font-bold shadow-xl shadow-primary/10 hover:scale-[1.02] transition-all bg-primary hover:bg-primary-hover text-white rounded-2xl"
          >
            {publicView ? 'View Property' : 'Direct Booking'} <Zap className="w-4 h-4 ml-2" />
          </Button>
          <Button
            variant="outline"
            className="h-12 w-12 p-0 rounded-2xl border-black/10 hover:bg-black hover:text-white transition-all shrink-0"
          >
            <ArrowRight className="w-5 h-5" />
          </Button>
        </div>
      </div>
    </motion.div>
  );
}
