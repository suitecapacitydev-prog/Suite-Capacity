'use client';

import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Wifi, Utensils, Home, Tv, WashingMachine, Coffee, 
  Wind, MapPin, ShieldCheck, Gamepad2, Dumbbell, 
  Car, Baby, Waves, Thermometer, Mic, Trees, 
  Waves as SeaWaves, Mountain, Briefcase, Dog, HelpCircle,
  X
} from 'lucide-react';
import { Button } from '@/components/ui/button';

const categoryIcons: Record<string, React.ReactNode> = {
  'Kitchen & dining': <Utensils className="w-5 h-5 text-primary" />,
  'General': <Home className="w-5 h-5 text-primary" />,
  'Entertainment': <Tv className="w-5 h-5 text-primary" />,
  'Connectivity': <Wifi className="w-5 h-5 text-primary" />,
  'Laundry': <WashingMachine className="w-5 h-5 text-primary" />,
  'Heating & cooling': <Thermometer className="w-5 h-5 text-primary" />,
  'Parking & facilities': <Car className="w-5 h-5 text-primary" />,
  'Family': <Baby className="w-5 h-5 text-primary" />,
  'Outdoor & views': <Trees className="w-5 h-5 text-primary" />,
  'Pets': <Dog className="w-5 h-5 text-primary" />,
  'Business & office': <Briefcase className="w-5 h-5 text-primary" />,
  'Security & guest safety': <ShieldCheck className="w-5 h-5 text-primary" />
};

interface ListingAmenitiesProps {
  amenities: Record<string, string[]>;
}

export function ListingAmenities({ amenities }: ListingAmenitiesProps) {
  const [showModal, setShowModal] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const categories = Object.keys(amenities);
  const allAmenitiesFlat = Object.values(amenities).flat();
  const previewAmenities = allAmenitiesFlat.slice(0, 10);

  return (
    <>
      {/* Preview Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
        {previewAmenities.map((item, idx) => (
          <div key={idx} className="flex items-center gap-3 text-secondary/80 font-light">
            <span className="p-2 rounded-lg bg-primary/5 border border-primary/10">
              <span className="block w-2.5 h-2.5 rounded-full bg-primary/60" />
            </span>
            <span>{item}</span>
          </div>
        ))}
      </div>
      
      {allAmenitiesFlat.length > 10 && (
        <Button 
          variant="outline" 
          className="h-14 px-10 rounded-xl font-bold border-black/10 hover:border-black/20 hover:bg-black/5"
          onClick={() => setShowModal(true)}
        >
          Show all {allAmenitiesFlat.length} amenities
        </Button>
      )}

      {/* Full Modal via Portal */}
      {mounted && createPortal(
        <AnimatePresence>
          {showModal && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[100] bg-black/60 flex items-center justify-center p-4 backdrop-blur-sm"
              onClick={() => setShowModal(false)}
            >
              <motion.div
                initial={{ opacity: 0, y: 50, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 20, scale: 0.95 }}
                transition={{ type: "spring", damping: 25, stiffness: 300 }}
                className="bg-white w-full max-w-3xl max-h-[85vh] rounded-3xl shadow-2xl flex flex-col overflow-hidden"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="p-6 border-b border-black/5 flex items-center justify-between sticky top-0 bg-white z-10 hidden-scrollbar">
                  <h2 className="text-2xl font-bold text-foreground font-playfair">What this place offers</h2>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="rounded-full w-10 h-10 p-0 flex items-center justify-center hover:bg-black/5 transition-colors"
                    onClick={() => setShowModal(false)}
                  >
                    <X className="w-5 h-5 text-secondary" />
                  </Button>
                </div>

                <div className="p-8 overflow-y-auto hidden-scrollbar">
                  <div className="space-y-10">
                    {categories.map((category) => (
                      <div key={category} className="space-y-4 group/cat">
                        <div className="flex items-center gap-3">
                          <span className="p-2.5 rounded-xl bg-primary/5 border border-primary/10 transition-all">
                            {categoryIcons[category] || <HelpCircle className="w-5 h-5 text-secondary/40" />}
                          </span>
                          <h3 className="text-xl font-bold font-playfair text-foreground">
                            {category}
                          </h3>
                        </div>
                        <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 pl-14">
                          {amenities[category].map((item, idx) => (
                            <li key={idx} className="text-secondary/70 text-[15px] flex items-center gap-3 font-light pb-2 border-b border-black/[0.03]">
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>,
        document.body
      )}
    </>
  );
}
