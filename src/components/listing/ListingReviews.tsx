'use client';

import React from 'react';
import { Star, User } from 'lucide-react';
import { PropertyReview } from '@/data/properties';

interface ListingReviewsProps {
  reviews: PropertyReview[];
}

export function ListingReviews({ reviews }: ListingReviewsProps) {
  if (!reviews || reviews.length === 0) {
    return (
      <div className="bg-white rounded-2xl p-10 text-center border border-black/5">
        <p className="text-secondary/40 font-light italic text-sm">No reviews yet for this listing. Be one of the first to stay!</p>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {reviews.map((review, idx) => (
          <div key={idx} className="bg-white border border-black/5 p-6 rounded-2xl relative overflow-hidden group hover:border-primary/20 transition-all duration-500 shadow-sm hover:shadow-md">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary border border-primary/20">
                <User className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-bold text-foreground mb-0.5">{review.author}</h4>
                <p className="text-[10px] text-secondary/40 font-bold uppercase tracking-widest">{new Date(review.date).toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}</p>
              </div>
              <div className="ml-auto flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-primary/10 text-primary font-black text-sm border border-primary/20 shadow-lg shadow-primary/5">
                <Star className="w-4 h-4 fill-current" />
                {review.rating / 2}
              </div>
            </div>
            <p className="text-secondary/70 text-sm leading-relaxed font-light italic">
              "{review.comment.length > 300 ? review.comment.slice(0, 300) + '...' : review.comment}"
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
