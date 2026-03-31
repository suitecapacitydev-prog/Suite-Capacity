'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import SiteShell from '@/components/layout/site-shell';
import { ShieldCheck, Zap, ArrowRight, CheckCircle2, Star, Lock, Calendar, Clock, Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { signUpGuestMember } from '@/app/actions/guest-signup';

export default function GuestListPage() {
  const router = useRouter();
  const [form, setForm] = useState({ firstName: '', email: '', phone: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.firstName.trim() || !form.email.trim()) {
      setError('Please enter your first name and email address.');
      return;
    }
    setIsSubmitting(true);
    setError(null);
    try {
      const result = await signUpGuestMember({
        firstName: form.firstName.trim(),
        email: form.email.trim(),
        phone: form.phone.trim() || undefined,
      });
      if (result.success) {
        router.push('/guest-list/welcome');
      } else {
        setError(result.error || 'Something went wrong. Please try again.');
      }
    } catch {
      setError('Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <SiteShell>
      {/* Hero Section */}
      <section className="pt-32 pb-24 relative overflow-hidden bg-white">
        <div className="absolute inset-x-0 top-0 h-[600px] bg-gradient-to-b from-primary/10 to-transparent pointer-events-none" />

        <div className="container mx-auto px-6 relative z-10 text-center max-w-4xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-black/10 bg-primary/5 text-black text-xs font-bold uppercase tracking-widest mb-8">
            <Star className="w-4 h-4 text-primary fill-primary" />
            The Guest List
          </div>
          <h1 className="text-5xl md:text-7xl font-black mb-6 tracking-tighter leading-tight">
            Book Direct.{'\n'}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Get More From Your Stay.</span>
          </h1>
          <p className="text-xl text-black/60 mb-10 max-w-2xl mx-auto leading-relaxed">
            Join our private guest network for better rates, priority booking, and exclusive perks you won't find on Airbnb.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              variant="intelligence"
              className="h-14 px-10 text-lg font-bold shadow-xl shadow-primary/20"
              onClick={() => document.getElementById('signup')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Join Free
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="h-14 px-10 text-lg font-bold"
              onClick={() => document.getElementById('signup')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Unlock Member Rates
            </Button>
          </div>
        </div>
      </section>

      {/* Why Book Direct Comparison */}
      <section className="py-24 bg-black text-white relative overflow-hidden">
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">Airbnb vs. Booking Direct</h2>
            <p className="text-white/50 text-lg">Why thousands of travelers are joining our private network.</p>
          </div>
          <div className="grid md:grid-cols-2 gap-px bg-white/10 rounded-2xl overflow-hidden border border-white/10">
            <div className="bg-white/5 p-10 space-y-8 opacity-50">
              <h3 className="text-2xl font-bold mb-6 text-white/80">Other Platforms</h3>
              <ul className="space-y-6">
                {['Higher platform service fees', 'No member-only perks', 'No relationship or priority access'].map((item, i) => (
                  <li key={i} className="flex items-center gap-4 text-white/60">
                    <div className="w-6 h-6 rounded-full bg-red-500/10 flex items-center justify-center shrink-0">
                      <span className="text-red-500 text-xs font-bold">✕</span>
                    </div>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-primary p-10 space-y-8 relative">
              <div className="absolute top-6 right-8 text-[10px] font-bold uppercase tracking-widest text-primary bg-white px-2 py-1 border border-white rounded-full">Recommended</div>
              <h3 className="text-2xl font-bold mb-6 text-white">Booking Direct</h3>
              <ul className="space-y-6">
                {['Lower rates (5-10% savings)', 'Exclusive member-only perks', 'Priority access to new properties'].map((item, i) => (
                  <li key={i} className="flex items-center gap-4 text-white">
                    <CheckCircle2 className="w-6 h-6 text-white shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Grid */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: 'Better Rates', desc: 'Consistently save 5-10% compared to major booking platforms.', icon: Zap },
              { title: 'Priority Access', desc: 'Get first dibs on our newest property launches and seasonal dates.', icon: Calendar },
              { title: 'Flexible Stays', desc: 'Complimentary early check-in or late checkout when available.', icon: Clock },
              { title: 'Member Perks', desc: 'Unlock exclusive rewards and local experiences during your stay.', icon: ShieldCheck },
            ].map((benefit, i) => (
              <div key={i} className="flex flex-col items-center text-center p-8 rounded-2xl glass-panel border-black/5">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6 text-primary">
                  <benefit.icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-black">{benefit.title}</h3>
                <p className="text-sm text-black/50 leading-relaxed">{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-24 bg-primary/5 border-y border-black/5">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">How It Works</h2>
            <p className="text-black/50">Joining is free and takes less than 30 seconds.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-12">
            {[
              { step: '01', title: 'Join', desc: "Enter your first name and email — that's it." },
              { step: '02', title: 'Explore', desc: 'Get access to our full portfolio of high-end rentals.' },
              { step: '03', title: 'Save', desc: 'Book direct and enjoy member-exclusive rates.' },
            ].map((step, i) => (
              <div key={i} className="text-center space-y-4">
                <div className="w-12 h-12 rounded-full bg-black text-white flex items-center justify-center font-bold mx-auto">{step.step}</div>
                <h4 className="font-bold text-lg text-black">{step.title}</h4>
                <p className="text-sm text-black/60 leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Signup Section */}
      <section id="signup" className="py-24 container mx-auto px-6">
        <div className="max-w-xl mx-auto">
          <div className="glass-panel p-10 bg-white shadow-2xl rounded-3xl border-primary/20 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-3xl -mr-16 -mt-16" />
            <div className="relative z-10 space-y-8">
              <div className="text-center">
                <h2 className="text-3xl font-black mb-2 text-black tracking-tight leading-tight">Join The Guest List</h2>
                <p className="text-black/50">Start saving on your next STR stay.</p>
              </div>
              <form className="space-y-4" onSubmit={handleSubmit}>
                {/* First Name */}
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-black/60 px-1">First Name</label>
                  <input
                    type="text"
                    className="w-full bg-black/5 border-0 rounded-xl px-4 py-3.5 focus:ring-2 focus:ring-primary outline-none transition-all"
                    placeholder="Enter your first name"
                    required
                    value={form.firstName}
                    onChange={(e) => setForm(f => ({ ...f, firstName: e.target.value }))}
                  />
                </div>
                {/* Email */}
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-black/60 px-1">Email Address</label>
                  <input
                    type="email"
                    className="w-full bg-black/5 border-0 rounded-xl px-4 py-3.5 focus:ring-2 focus:ring-primary outline-none transition-all"
                    placeholder="Enter your email"
                    required
                    value={form.email}
                    onChange={(e) => setForm(f => ({ ...f, email: e.target.value }))}
                  />
                </div>
                {/* Phone (optional) */}
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-black/60 px-1">
                    Phone Number <span className="font-normal normal-case text-black/40">(Optional — recommended)</span>
                  </label>
                  <input
                    type="tel"
                    className="w-full bg-black/5 border-0 rounded-xl px-4 py-3.5 focus:ring-2 focus:ring-primary outline-none transition-all"
                    placeholder="+1 (855) 303-4545"
                    value={form.phone}
                    onChange={(e) => setForm(f => ({ ...f, phone: e.target.value }))}
                  />
                </div>
                {error && (
                  <div className="rounded-xl bg-red-50 border border-red-200 text-red-700 p-3 text-sm font-medium">
                    {error}
                  </div>
                )}
                <Button
                  variant="intelligence"
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full h-14 text-lg font-bold mt-4 shadow-xl shadow-primary/20 hover:scale-[1.02] transition-all"
                >
                  {isSubmitting ? (
                    <><Loader2 className="w-4 h-4 mr-2 animate-spin" /> Unlocking Access...</>
                  ) : (
                    <>Get Member Access <Lock className="w-4 h-4 ml-2" /></>
                  )}
                </Button>
                <p className="text-[10px] text-center text-black/60 mt-6 leading-relaxed">
                  By joining, you agree to receive direct booking updates and member-exclusive offers. Unsubscribe anytime.
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Property Preview */}
      <section className="py-24 bg-white container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Member Property Preview</h2>
          <p className="text-black/50">A few of the high-end properties in our direct network.</p>
        </div>
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {[
            { name: 'Waterfront Estate', location: 'Jersey Shore', price: '$420', memberPrice: '$380' },
            { name: 'Tropical Oasis', location: 'Florida Coastal', price: '$350', memberPrice: '$315' },
          ].map((item, i) => (
            <div key={i} className="glass-panel overflow-hidden group border-black/5">
              <div className="h-64 bg-black/5 relative">
                <div className="absolute top-4 left-4 bg-primary text-white font-bold text-xs px-3 py-1.5 rounded-full z-10 shadow-lg">Save 10%</div>
                <img
                  src={i === 0 ? "/images/properties/waterfront.jpg" : "/images/properties/beachside.jpg"}
                  alt={item.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="p-8 flex justify-between items-end">
                <div className="space-y-1">
                  <p className="text-xs font-bold text-primary uppercase tracking-widest">{item.location}</p>
                  <h3 className="text-xl font-bold">{item.name}</h3>
                </div>
                <div className="text-right">
                  <p className="text-xs text-black/50 line-through">Standard {item.price}/nt</p>
                  <p className="text-xl font-bold text-black">Member {item.memberPrice}<span className="text-xs text-black/60 font-normal">/nt</span></p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <Button variant="outline" className="h-12 px-10 font-bold">View All Properties</Button>
        </div>
      </section>
    </SiteShell>
  );
}
