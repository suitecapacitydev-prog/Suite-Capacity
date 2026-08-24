'use client';

import { useRef } from 'react'
import { ArrowRight, TrendingUp, MapPin, Clock, Phone, Calendar } from 'lucide-react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { useSyncExternalStore } from 'react'
import Autocomplete from 'react-google-autocomplete'
import { Button } from '@/components/ui/button'
import { CALENDLY_URL } from '@/lib/constants'

const LAST_SEARCHED_ADDRESS_KEY = 'lastSearchedAddress'
const LAST_SEARCHED_ADDRESS_EVENT = 'lastSearchedAddressChange'

function subscribeLastAddress(onStoreChange: () => void) {
    window.addEventListener(LAST_SEARCHED_ADDRESS_EVENT, onStoreChange)
    window.addEventListener('storage', onStoreChange)
    return () => {
        window.removeEventListener(LAST_SEARCHED_ADDRESS_EVENT, onStoreChange)
        window.removeEventListener('storage', onStoreChange)
    }
}

function getLastAddressSnapshot() {
    return localStorage.getItem(LAST_SEARCHED_ADDRESS_KEY)
}

function getLastAddressServerSnapshot() {
    return null
}

export const STRBlueprint = () => {
    const router = useRouter();
    const addressInputRef = useRef<HTMLInputElement>(null);
    const lastAddress = useSyncExternalStore(
        subscribeLastAddress,
        getLastAddressSnapshot,
        getLastAddressServerSnapshot,
    );

    const handleAddressSubmit = (address: string) => {
        if (!address) return;
        localStorage.setItem(LAST_SEARCHED_ADDRESS_KEY, address);
        window.dispatchEvent(new Event(LAST_SEARCHED_ADDRESS_EVENT));
        router.push(`/wizard?address=${encodeURIComponent(address)}`);
    };

    const submitCurrentAddress = () => {
        const address = addressInputRef.current?.value?.trim();
        if (address) {
            handleAddressSubmit(address);
        }
    };

    return (
        <section className="py-24 bg-white border-y border-black/5">
            <div className="container mx-auto px-6">
                <div className="grid lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
                    <div>
                        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 text-primary text-[11px] font-bold uppercase tracking-widest mb-6 border border-primary/20">
                            Immediate Access
                        </div>
                        <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6 leading-tight">
                            Ready to Scale? <br />
                            <span className="text-primary">Book Your Free Call Today.</span>
                        </h2>
                        <p className="text-lg text-black/60 mb-8 leading-relaxed font-medium">
                            Don&apos;t wait for a report. Speak directly with our property strategists to see how we can maximize your revenue immediately.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 mb-10">
                            <a
                                href={CALENDLY_URL}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex-1"
                            >
                                <Button size="lg" className="w-full gap-2 group h-14 rounded-2xl font-bold text-lg shadow-xl shadow-primary/20 hover:scale-[1.02] transition-all">
                                    <Calendar className="w-5 h-5" />
                                    Book Your Call
                                    <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                                </Button>
                            </a>
                            
                            <a href="tel:+18553034545" className="flex-1">
                                <Button size="lg" variant="outline" className="w-full gap-2 h-14 rounded-2xl font-bold text-lg border-2 hover:bg-primary/5 transition-all">
                                    <Phone className="w-5 h-5" />
                                    Call Now
                                </Button>
                            </a>
                        </div>

                        <div className="pt-8 border-t border-black/5">
                            <p className="text-sm font-bold text-black/40 uppercase tracking-widest mb-4">Or get your full AI analysis:</p>
                            <div className="relative max-w-md">
                                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                                    <MapPin className="h-5 w-5 text-black/40" />
                                </div>
                                <Autocomplete
                                    ref={addressInputRef}
                                    apiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}
                                    onPlaceSelected={(place) => {
                                        if (place && place.formatted_address) {
                                            handleAddressSubmit(place.formatted_address);
                                        }
                                    }}
                                    options={{
                                        types: ['address'],
                                    }}
                                    placeholder="Enter property address for analysis"
                                    className="w-full pl-11 pr-32 py-4 rounded-xl border border-black/10 shadow-sm focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all text-xs sm:text-base truncate"
                                    onKeyDown={(e) => {
                                        if (e.key === 'Enter') {
                                            e.preventDefault();
                                            submitCurrentAddress();
                                        }
                                    }}
                                />
                                <button
                                    type="button"
                                    onClick={submitCurrentAddress}
                                    className="absolute right-2 top-2 bottom-2 px-4 bg-primary/10 text-primary rounded-lg font-bold text-sm hover:bg-primary/20 transition-colors flex items-center gap-2"
                                >
                                    Analyze <ArrowRight className="w-4 h-4" />
                                </button>
                            </div>

                            {lastAddress && (
                                <div className="flex items-center gap-2 text-sm text-black/60 mt-3 pl-2">
                                    <Clock className="w-4 h-4 text-black/40" />
                                    <span>Recent:</span>
                                    <button
                                        onClick={() => handleAddressSubmit(lastAddress)}
                                        className="text-primary hover:underline font-medium truncate max-w-62.5"
                                    >
                                        {lastAddress}
                                    </button>
                                </div>
                            )}
                        </div>

                    </div>
                    <div className="relative group">
                        <div className="relative z-10 aspect-4/3 rounded-3xl overflow-hidden shadow-2xl transition-transform group-hover:scale-[1.02] duration-500">
                            <Image
                                src="/images/beach-house.png"
                                alt="Luxury Beach House"
                                fill
                                className="object-cover"
                            />
                            <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent" />
                            <div className="absolute bottom-8 left-8 right-8 p-6 glass-panel border-white/20 bg-white/10 backdrop-blur-xl">
                                <div className="flex justify-between items-center text-white">
                                    <div>
                                        <div className="text-[10px] uppercase font-bold tracking-[0.2em] text-white/80 mb-1">Projected Annual Revenue</div>
                                        <div className="text-3xl font-black text-white">$108,400+</div>
                                    </div>
                                    <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center border border-white/20 shadow-glow">
                                        <TrendingUp className="w-5 h-5 text-white" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="absolute -top-6 -right-6 bg-white rounded-2xl shadow-2xl px-8 py-5 border border-black/5 z-20 hover:-translate-y-1 transition-transform">
                            <div className="text-sm font-black text-primary uppercase tracking-widest">Free Strategy</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}