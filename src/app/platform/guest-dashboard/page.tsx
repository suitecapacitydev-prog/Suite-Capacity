'use client';

import React, { useState } from 'react';
import SiteShell from '@/components/layout/site-shell';
import {
  Calendar,
  MapPin,
  Wifi,
  Phone,
  Home,
  ExternalLink,
  Sparkles,
  ChevronRight,
  ShieldCheck,
  Zap
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { captureGuestLead } from '@/app/actions/leads';
import { GuestReservationData } from '@/services/hostaway';

export default function GuestDashboardPage() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [reservationCode, setReservationCode] = useState('');
  const [email, setEmail] = useState('');
  const [fullName, setFullName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const [activeGuestData, setActiveGuestData] = useState<GuestReservationData | null>(null);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    const result = await captureGuestLead({
      fullName,
      email,
      phoneNumber,
      reservationCode
    });

    if (result.success && result.data) {
      setActiveGuestData(result.data);
      setIsLoggedIn(true);
    } else {
      setError(result.error || 'Invalid reservation details. Please check and try again.');
    }
    
    setIsSubmitting(false);
  };

  const displayData = activeGuestData || {
    guestName: 'Guest',
    propertyTitle: 'Your Luxury Rental',
    checkIn: 'TBD',
    checkOut: 'TBD',
    address: 'Fetching address...',
    wifiName: 'Fetching...',
    wifiPass: 'Fetching...',
    hostPhone: 'Searching...',
    directBookingUrl: 'https://suitecapacity.holidayfuture.com/',
    status: 'Confirmed'
  };

  if (!isLoggedIn) {
    return (
      <SiteShell>
        <section className="pt-40 pb-24 relative overflow-hidden bg-primary/5 min-h-screen">
          <div className="container mx-auto px-6 relative z-10 flex flex-col items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="max-w-md w-full glass-panel p-10 border-black/5"
            >
              <div className="text-center mb-10">
                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-6 text-primary">
                  <Home className="w-8 h-8" />
                </div>
                <h1 className="text-3xl font-black tracking-tight mb-2">Guest Access</h1>
                <p className="text-black/50">Enter your booking details to access your luxury guest experience.</p>
              </div>

              <form onSubmit={handleLogin} className="space-y-5">
                {error && (
                  <div className="p-4 bg-red-500/10 border border-red-500/20 rounded-2xl text-red-600 text-xs font-bold text-center">
                    {error}
                  </div>
                )}
                
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-black/40 px-1">Full Name</label>
                  <input
                    type="text"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    required
                    className="w-full bg-primary/5 border-none rounded-2xl py-4 px-6 text-black focus:ring-2 focus:ring-primary/20 transition-all"
                    placeholder="John Doe"
                    disabled={isSubmitting}
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-black/40 px-1">Email</label>
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      className="w-full bg-primary/5 border-none rounded-2xl py-4 px-6 text-black focus:ring-2 focus:ring-primary/20 transition-all text-sm"
                      placeholder="guest@email.com"
                      disabled={isSubmitting}
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-black/40 px-1">Phone</label>
                    <input
                      type="tel"
                      value={phoneNumber}
                      onChange={(e) => setPhoneNumber(e.target.value)}
                      required
                      className="w-full bg-primary/5 border-none rounded-2xl py-4 px-6 text-black focus:ring-2 focus:ring-primary/20 transition-all text-sm"
                      placeholder="(555) 000-0000"
                      disabled={isSubmitting}
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-black/40 px-1">Reservation Code</label>
                  <input
                    type="text"
                    value={reservationCode}
                    onChange={(e) => setReservationCode(e.target.value)}
                    required
                    className="w-full bg-primary/5 border-none rounded-2xl py-4 px-6 text-black focus:ring-2 focus:ring-primary/20 transition-all font-mono uppercase tracking-widest"
                    placeholder="SC-XXXXXX"
                    disabled={isSubmitting}
                  />
                  <p className="text-[10px] text-black/30 px-1">Found in your confirmation email.</p>
                </div>

                <Button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="w-full h-12 rounded-2xl bg-primary hover:bg-primary/90 text-white font-bold text-lg shadow-xl shadow-black/10 active:scale-95 transition-all mt-4 disabled:opacity-50"
                >
                  {isSubmitting ? 'Authenticating...' : 'Access Dashboard'}
                </Button>
              </form>
            </motion.div>
          </div>
        </section>
      </SiteShell>
    );
  }

  return (
    <SiteShell>
      <section className="pt-32 pb-24 relative overflow-hidden bg-primary/5 min-h-screen">
        <div className="container mx-auto px-6 relative z-10">
          {/* Header */}
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-12">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-[10px] font-black uppercase tracking-[0.2em] mb-4 border border-primary/20">
                <Sparkles className="w-3 h-3" /> Stay Status: {displayData.status || 'Confirmed'}
              </div>
              <h1 className="text-4xl md:text-5xl font-black tracking-tight mb-4 text-black">
                Welcome, <span className="text-primary">{displayData.guestName.split(' ')[0]}</span>.
              </h1>
              <p className="text-xl text-black/60 font-medium">
                Your luxury experience at <span className="text-black">{displayData.propertyTitle}</span> is ready for you.
              </p>
            </div>
            <div className="flex gap-4">
              <a href={displayData.directBookingUrl} target="_blank" rel="noopener noreferrer" className="contents">
                <Button variant="intelligence" className="h-12 px-8 rounded-2xl font-black uppercase tracking-widest gap-2 shadow-xl shadow-primary/20 hover:-translate-y-1 transition-all active:scale-95 border-none">
                  <Zap className="w-5 h-5" /> Book Direct & Save 15%
                </Button>
              </a>
            </div>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Left Column: Essential Info */}
            <div className="lg:col-span-2 space-y-8">
              {/* Quick Access Grid */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {[
                  { icon: Wifi, label: 'Wi-Fi Info', color: 'bg-blue-500/10 text-blue-600' },
                  { icon: MapPin, label: 'Directions', color: 'bg-green-500/10 text-green-600' },
                  { icon: Phone, label: 'Support', color: 'bg-purple-500/10 text-purple-600' },
                  { icon: ShieldCheck, label: 'Manuals', color: 'bg-orange-500/10 text-orange-600' },
                ].map((item, i) => (
                  <div key={i} className="glass-panel p-4 border-black/5 bg-white flex flex-col items-center justify-center gap-2 text-center group cursor-pointer hover:bg-primary hover:text-white transition-all">
                    <item.icon className={`w-6 h-6 ${item.color} group-hover:text-white transition-colors`} />
                    <span className="text-[10px] font-black uppercase tracking-widest">{item.label}</span>
                  </div>
                ))}
              </div>
              {/* Check-in/Out Card */}
              <div className="grid md:grid-cols-2 gap-6">
                <div className="glass-panel p-8 border-black/5 bg-white">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 rounded-2xl bg-primary/5 flex items-center justify-center text-black">
                      <Calendar className="w-6 h-6" />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-black/40 uppercase tracking-widest">Check-In</div>
                      <div className="font-bold text-lg">{displayData.checkIn}</div>
                    </div>
                  </div>
                </div>
                <div className="glass-panel p-8 border-black/5 bg-white">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 rounded-2xl bg-primary/5 flex items-center justify-center text-black">
                      <Calendar className="w-6 h-6" />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-black/40 uppercase tracking-widest">Check-Out</div>
                      <div className="font-bold text-lg">{displayData.checkOut}</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Property Details */}
              <div className="glass-panel p-10 border-black/5 bg-white relative overflow-hidden group">
                <div className="absolute top-0 right-0 p-8 opacity-[0.03] group-hover:scale-110 transition-transform duration-700">
                  <Home className="w-48 h-48 text-black" />
                </div>
                <h3 className="text-2xl font-black mb-8 border-b border-black/5 pb-6">Your Property Access</h3>

                <div className="grid md:grid-cols-2 gap-10 relative z-10">
                  <div className="space-y-8">
                    <div className="space-y-2">
                       <div className="flex items-center gap-2 text-xs font-black uppercase tracking-widest text-black/40">
                        <MapPin className="w-3.5 h-3.5" /> Address
                      </div>
                      <p className="text-lg font-bold leading-tight">{displayData.address}</p>
                      <button className="text-primary text-xs font-black uppercase tracking-widest flex items-center gap-1.5 hover:translate-x-1 transition-transform">
                        Open Maps <ChevronRight className="w-3 h-3" />
                      </button>
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2 text-xs font-black uppercase tracking-widest text-black/40">
                        <Phone className="w-3.5 h-3.5" /> 24/7 Concierge Support
                      </div>
                      <p className="text-lg font-bold">{displayData.hostPhone}</p>
                    </div>
                  </div>

                  <div className="space-y-8">
                    <div className="space-y-4 p-6 rounded-3xl bg-primary/5 border border-black/5">
                      <div className="flex items-center gap-2 text-xs font-black uppercase tracking-widest text-black/40">
                        <Wifi className="w-4 h-4" /> Property Wi-Fi
                      </div>
                      <div className="space-y-1">
                        <div className="text-sm text-black/40">Network</div>
                        <div className="font-black text-lg">{displayData.wifiName}</div>
                      </div>
                      <div className="space-y-1">
                        <div className="text-sm text-black/40">Password</div>
                        <div className="font-black text-lg tracking-widest">{displayData.wifiPass}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Local Guides Teaser */}
              <div className="grid md:grid-cols-3 gap-6">
                {[
                  { title: 'Best Dining', img: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=400' },
                  { title: 'Beach Access', img: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&q=80&w=400' },
                  { title: 'Local Events', img: 'https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?auto=format&fit=crop&q=80&w=400' }
                ].map((item, i) => (
                  <div key={i} className="glass-panel overflow-hidden border-black/5 h-48 relative group cursor-pointer hover:-translate-y-1 transition-all">
                    <img src={item.img} className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" alt={item.title} />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-6">
                      <div className="text-white font-black uppercase tracking-widest text-sm">{item.title}</div>
                      <div className="text-white/60 text-[10px] font-bold uppercase tracking-widest mt-1">Explore Guide</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column: CTA & Ecosystem */}
            <div className="space-y-8">
              <div className="glass-panel p-8 border-primary/20 bg-primary/5 relative overflow-hidden group">
                <div className="absolute top-0 right-0 p-4 rotate-12 opacity-[0.07] group-hover:rotate-0 transition-transform duration-500">
                  <ShieldCheck className="w-32 h-32 text-primary" />
                </div>
                <h4 className="text-xl font-black mb-4 flex items-center gap-2">
                  <ShieldCheck className="w-5 h-5 text-primary" /> The Suite Promise
                </h4>
                <p className="text-black/60 text-sm mb-6 font-medium">
                  Love your stay? Become a direct member today and unlock exclusive rates for all properties in our jersey shore collection.
                </p>
                <a href={displayData.directBookingUrl} target="_blank" rel="noopener noreferrer">
                  <Button className="w-full h-12 rounded-2xl bg-primary text-white font-black uppercase tracking-widest flex items-center justify-center gap-2 hover:bg-primary/90 transition-all border-none">
                    Join Ecosystem <ExternalLink className="w-4 h-4" />
                  </Button>
                </a>
              </div>

              <div className="glass-panel p-8 border-black/5 bg-white">
                <h4 className="text-lg font-black mb-6">Key Stay Rules</h4>
                <div className="space-y-4">
                  {[
                    'No Smoking inside property',
                    'Quiet hours: 10PM - 8AM',
                    'Check-out strictly by 11AM',
                    'Discard trash in main bins'
                  ].map((rule, i) => (
                    <div key={i} className="flex gap-3 text-sm font-medium text-black/60">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary shrink-0 mt-1.5" />
                      {rule}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </SiteShell>
  );
}
