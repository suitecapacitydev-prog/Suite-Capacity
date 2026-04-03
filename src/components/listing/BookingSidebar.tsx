'use client';

import React from 'react';
import { Calendar as CalendarIcon, Users, CreditCard, ShieldCheck, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface BookingSidebarProps {
  price: number;
  guests: number;
}

export function BookingSidebar({ property }: any) {
  const { price } = property;
  return (
    <div className="bg-white p-8 rounded-3xl space-y-6 border border-black/5 shadow-2xl overflow-hidden group">
      <div className="flex items-baseline justify-between relative">
        <div className="flex items-baseline gap-1">
          <span className="text-3xl font-bold text-primary font-playfair">${price}</span>
          <span className="text-secondary/40 text-sm">/ night</span>
        </div>
        <div className="px-3 py-1 bg-primary/10 text-primary rounded-full text-[10px] font-bold uppercase tracking-wider">
          Direct Rate
        </div>
      </div>

      <div className="space-y-4 relative text-foreground">
        <div className="grid grid-cols-2 gap-0 rounded-2xl border border-black/5 overflow-hidden bg-background/50">
          <div className="p-3 border-r border-black/5 hover:bg-black/5 transition-colors cursor-pointer group/item">
            <label className="block text-[10px] font-bold text-secondary/40 uppercase tracking-widest mb-1">Check-in</label>
            <div className="flex items-center gap-2 text-foreground/80 text-sm font-semibold">
              <CalendarIcon className="w-4 h-4 text-primary" />
              Add Date
            </div>
          </div>
          <div className="p-3 hover:bg-black/5 transition-colors cursor-pointer group/item">
            <label className="block text-[10px] font-bold text-secondary/40 uppercase tracking-widest mb-1">Checkout</label>
            <div className="flex items-center gap-2 text-foreground/80 text-sm font-semibold">
              <CalendarIcon className="w-4 h-4 text-primary" />
              Add Date
            </div>
          </div>
          <div className="col-span-2 p-3 border-t border-black/5 hover:bg-black/5 transition-colors cursor-pointer">
            <label className="block text-[10px] font-bold text-secondary/40 uppercase tracking-widest mb-1">Guests</label>
            <div className="flex items-center justify-between text-foreground/80 text-sm font-semibold">
              <div className="flex items-center gap-2">
                <Users className="w-4 h-4 text-primary" />
                1 Guest
              </div>
            </div>
          </div>
        </div>

        <Button className="w-full h-14 text-lg font-bold bg-primary hover:bg-primary-hover text-white rounded-2xl shadow-lg shadow-primary/20 transition-all hover:scale-[1.02] active:scale-[0.98]">
          Reserve Now
        </Button>

        <p className="text-center text-[10px] text-secondary/40 uppercase tracking-widest">No hidden booking fees</p>
      </div>

      <div className="space-y-3 pt-6 border-t border-black/5">
        <div className="flex justify-between text-sm text-secondary/60">
          <span className="underline decoration-black/5 underline-offset-4">${price} x 5 nights</span>
          <span className="text-foreground font-medium">${price * 5}</span>
        </div>
        <div className="flex justify-between text-sm text-secondary/60">
          <span className="underline decoration-black/5 underline-offset-4">Cleaning fee</span>
          <span className="text-foreground font-medium">$250</span>
        </div>
        <div className="flex justify-between text-sm text-secondary/60">
          <span className="underline decoration-black/5 underline-offset-4">Service fee</span>
          <span className="text-primary font-bold">Waived</span>
        </div>
        <div className="flex justify-between items-center pt-4 border-t border-black/5">
          <span className="font-bold text-foreground">Total</span>
          <span className="text-2xl font-bold text-primary font-playfair">${price * 5 + 250}</span>
        </div>
      </div>

      <div className="pt-6 space-y-4">
        <div className="flex items-start gap-4">
          <ShieldCheck className="w-5 h-5 text-primary shrink-0" />
          <div className="text-[11px] text-secondary/40 leading-tight">
            <span className="text-foreground font-semibold block mb-1">Suite Capacity Direct Protection</span>
            Your booking is protected by our global health and safety guarantee.
          </div>
        </div>
      </div>
    </div>
  );
}
