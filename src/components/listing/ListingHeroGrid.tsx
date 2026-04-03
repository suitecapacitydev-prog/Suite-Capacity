'use client';

import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Grid, Image as ImageIcon, X, ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface ListingHeroGridProps {
  images: string[];
  name: string;
}

export function ListingHeroGrid({ images, name }: ListingHeroGridProps) {
  const [showModal, setShowModal] = useState(false);
  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const displayImages = images.slice(0, 5);

  return (
    <>
      <div className="relative group rounded-3xl overflow-hidden aspect-[21/9] md:aspect-[24/10] border border-black/5 shadow-2xl">
        <div className="grid grid-cols-4 grid-rows-2 gap-2 h-full p-2 bg-white">
          {/* Main Large Image */}
          <div className="col-span-2 row-span-2 relative overflow-hidden rounded-2xl cursor-pointer" onClick={() => setShowModal(true)}>
            <img
              src={displayImages[0]}
              alt={name}
              className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
            />
          </div>

          {/* Smaller Images */}
          {displayImages.slice(1).map((img, idx) => (
            <div
              key={idx}
              className="relative overflow-hidden rounded-xl cursor-pointer"
              onClick={() => setShowModal(true)}
            >
              <img
                src={img}
                alt={`${name} ${idx + 2}`}
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
              />
            </div>
          ))}
        </div>

        {/* View All Button */}
        <Button
          variant="secondary"
          className="absolute bottom-6 right-6 gap-2 bg-white/90 hover:bg-white text-secondary border border-black/5 shadow-xl backdrop-blur-md px-6 py-2 rounded-xl text-xs font-bold uppercase tracking-widest transition-all"
          onClick={() => setShowModal(true)}
        >
          <Grid className="w-4 h-4 text-primary" />
          Show all {images.length} photos
        </Button>
      </div>

      {/* Gallery Modal */}
      {mounted && createPortal(
        <AnimatePresence>
          {showModal && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[100] bg-black/80 flex flex-col backdrop-blur-2xl overflow-hidden shadow-2xl"
            >
              {/* Photo Count */}
              <div className="absolute top-6 left-6 z-[110]">
                <span className="text-white/80 font-bold uppercase tracking-widest text-xs bg-black/40 px-4 py-2 rounded-full backdrop-blur-md border border-white/10">
                  Photo {currentPhotoIndex + 1} of {images.length}
                </span>
              </div>

              {/* Close Button */}
              <button
                className="absolute top-6 right-6 z-[110] flex items-center justify-center text-white shadow-xl bg-white/10 hover:bg-white/20 backdrop-blur-md rounded-full w-14 h-14 transition-all border border-white/30 hover:scale-105"
                onClick={() => setShowModal(false)}
              >
                <X className="w-8 h-8" />
              </button>

              <div className="flex-1 flex items-center justify-center p-4 relative group/modal z-10 h-full w-full">
                <motion.img
                  key={currentPhotoIndex}
                  initial={{ opacity: 0, scale: 0.95, y: 10 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  src={images[currentPhotoIndex]}
                  className="max-h-[90vh] max-w-[90vw] object-contain shadow-2xl rounded-sm"
                />

                <button
                  className="absolute left-8 p-4 rounded-full bg-white/10 hover:bg-white/20 text-white shadow-lg backdrop-blur-md transition-all border border-white/20"
                  onClick={() => setCurrentPhotoIndex((prev) => (prev > 0 ? prev - 1 : images.length - 1))}
                >
                  <ChevronLeft className="w-8 h-8" />
                </button>

                <button
                  className="absolute right-8 p-4 rounded-full bg-white/10 hover:bg-white/20 text-white shadow-lg backdrop-blur-md transition-all border border-white/20"
                  onClick={() => setCurrentPhotoIndex((prev) => (prev < images.length - 1 ? prev + 1 : 0))}
                >
                  <ChevronRight className="w-8 h-8" />
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>,
        document.body
      )}
    </>
  );
}
