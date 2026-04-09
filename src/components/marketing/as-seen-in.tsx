"use client";

import { motion } from 'framer-motion';

const logos = [
    { name: 'Bloomberg', logo: '/images/logos/bloomberg.svg' },
    { name: 'Yahoo Finance', logo: '/images/logos/yahoo-finance.svg' },
    { name: 'Forbes', logo: '/images/logos/forbes.svg' },
    { name: 'WSJ', logo: '/images/logos/wsj.svg' },
    { name: 'Skift', logo: '/images/logos/skift.svg' },
    { name: 'Entrepreneur', logo: '/images/logos/entrepreneur.svg' },
];

export function AsSeenIn() {
    return (
        <section className="py-12 border-y border-black/5 bg-white/30 backdrop-blur-sm relative z-20">
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row items-center justify-between gap-12">
                    <div className="shrink-0">
                        <p className="text-[10px] font-black uppercase tracking-[0.3em] text-primary/60 mb-1">Media Coverage</p>
                        <h3 className="text-xl font-bold tracking-tight">As Seen In</h3>
                    </div>
                    
                    <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-8 grayscale opacity-40 hover:opacity-100 transition-all duration-700">
                        {logos.map((logo) => (
                            <div key={logo.name} className="h-6 md:h-8 flex items-center group">
                                {/* Using text as placeholder since SVGs aren't available yet */}
                                <span className="text-lg md:text-xl font-black tracking-tighter hover:text-primary transition-colors cursor-default">
                                    {logo.name}
                                </span>
                            </div>
                        ))}
                    </div>
                    
                    <div className="hidden lg:block shrink-0">
                        <div className="w-12 h-px bg-black/10" />
                    </div>
                </div>
            </div>
        </section>
    );
}
