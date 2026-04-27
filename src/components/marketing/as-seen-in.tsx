"use client";

import { motion, Variants } from 'framer-motion';
import Image from 'next/image';

const logos = [
    { name: 'CEO Weekly', logo: '/images/logos/ceo-weekly.svg' },
    { name: 'USA Today', logo: '/images/logos/usa-today.svg' },
    { name: 'Business Insider', logo: '/images/logos/business-insider.svg' },
    { name: 'Fortune', logo: '/images/logos/fortune.svg' },
    { name: 'Yahoo Finance', logo: '/images/logos/yahoo-finance.svg' },
];

const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
        },
    },
};

const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.6,
            ease: "easeOut",
        },
    },
};

export function AsSeenIn() {
    return (
        <section className="py-16 border-y border-black/5 bg-white/30 backdrop-blur-sm relative z-20 overflow-hidden">
            <div className="container mx-auto px-6">
                <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-24">
                    <motion.div 
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="shrink-0 text-center lg:text-left"
                    >
                        <p className="text-[10px] font-black uppercase tracking-[0.4em] text-primary/60 mb-2">Global Media Presence</p>
                        <h3 className="text-2xl font-bold tracking-tight text-slate-900">As Seen In</h3>
                    </motion.div>
                    
                    <motion.div 
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="flex-1 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-x-12 gap-y-10 items-center justify-items-center w-full"
                    >
                        {logos.map((logo) => (
                            <motion.div 
                                key={logo.name}
                                variants={itemVariants}
                                whileHover={{ scale: 1.05, y: -5 }}
                                className="h-8 md:h-9 flex items-center justify-center group relative cursor-default"
                            >
                                <div className="relative h-full transition-all duration-500 grayscale opacity-40 group-hover:grayscale-0 group-hover:opacity-100">
                                    <Image
                                        src={logo.logo}
                                        alt={logo.name}
                                        width={180}
                                        height={40}
                                        className="h-full w-auto object-contain"
                                        priority
                                    />
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </div>
            
            {/* Subtle background flair */}
            <div className="absolute top-0 right-0 w-1/4 h-full bg-gradient-to-l from-primary/5 to-transparent pointer-events-none" />
        </section>
    );
}
