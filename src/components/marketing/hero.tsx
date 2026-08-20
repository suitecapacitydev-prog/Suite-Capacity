"use client";
import { motion } from 'framer-motion';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { ArrowRight, Phone } from 'lucide-react';
import { CALENDLY_URL } from '@/lib/constants';

const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6 },
    },
};

const staggerContainer = {
    hidden: { opacity: 1 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
        },
    },
};

const HERO_STATS = [
    { value: '$6.4M+', label: 'Revenue Generated' },
    { value: '70+', label: 'Properties' },
    { value: '15.9%', label: 'Avg. Revenue Increase After Optimization' },
] as const;

export function Hero() {
    return (
        <section className="relative overflow-hidden py-24 md:py-36">
            {/* Background */}
            <div className="absolute inset-0 z-0 pointer-events-none">
                <div className="relative w-full h-full">
                    <Image
                        src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&q=80&w=1920"
                        alt="Luxury Property Interior"
                        fill
                        priority
                        className="object-cover opacity-40"
                    />
                </div>
                <div className="absolute inset-0 bg-linear-to-b from-white/90 via-white/50 to-white" />
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1.5, repeat: Infinity, repeatType: "reverse" }}
                    className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 blur-[100px] rounded-full"
                />
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 2, repeat: Infinity, repeatType: "reverse", delay: 0.5 }}
                    className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/20 blur-[100px] rounded-full"
                />
            </div>

            <div className="container relative z-10 mx-auto px-6">
                <motion.div
                    initial="hidden"
                    animate="visible"
                    variants={staggerContainer}
                    className="max-w-4xl mx-auto text-center space-y-8"
                >
                    <motion.h1
                        variants={fadeInUp}
                        className="text-5xl md:text-7xl font-bold tracking-tight leading-[1.1]"
                    >
                        Turn Your Vacation Rental Into{' '}
                        <span className="text-transparent bg-clip-text bg-linear-to-r from-primary to-accent">
                            Passive Income!
                        </span>
                    </motion.h1>

                    <motion.p
                        variants={fadeInUp}
                        className="text-lg md:text-xl text-black/85 max-w-3xl mx-auto leading-relaxed font-medium"
                    >
                        Suite Capacity maximizes your property&apos;s performance while handling the entire operation — marketing, pricing, guests, cleaning, maintenance, and everything in between.
                    </motion.p>

                    <motion.div
                        variants={fadeInUp}
                        className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4"
                    >
                        <a
                            href={CALENDLY_URL}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-full sm:w-auto"
                        >
                            <Button
                                size="lg"
                                variant="intelligence"
                                className="w-full gap-2 group h-12 px-10 rounded-2xl font-bold text-lg shadow-xl shadow-primary/20 hover:scale-105 transition-all"
                            >
                                See What Your Property Could Earn
                                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                            </Button>
                        </a>

                        <a
                            href={CALENDLY_URL}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-full sm:w-auto"
                        >
                            <Button
                                size="lg"
                                variant="outline"
                                className="w-full gap-2 h-12 px-10 rounded-2xl font-bold text-lg border-2 hover:bg-primary/5 transition-all"
                            >
                                <Phone className="w-5 h-5" />
                                Speak With Our Team
                            </Button>
                        </a>
                    </motion.div>

                    {/* Stats + tagline */}
                    <motion.div
                        variants={fadeInUp}
                        className="pt-8 w-full max-w-4xl mx-auto"
                    >
                        <p className="mb-6 text-lg md:text-2xl font-bold leading-snug tracking-tight font-playfair">
                            &ldquo;Everything Your Vacation Rental Needs. One Local Management Team.{' '}
                            <span className="text-primary">All done for you!&rdquo;</span>
                        </p>
                        <div className="glass-panel grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-black/10 px-4 sm:px-6 py-5 rounded-2xl shadow-sm">
                            {HERO_STATS.map((stat) => (
                                <div
                                    key={stat.value}
                                    className="flex flex-col items-center justify-center text-center py-4 first:pt-0 last:pb-0 sm:py-0 sm:px-4"
                                >
                                    <span className="text-2xl md:text-3xl font-black tracking-tight leading-none tabular-nums">
                                        {stat.value}
                                    </span>
                                    <p className="mt-2 min-h-10 flex items-center justify-center max-w-44 text-xs md:text-sm font-bold text-black/60 leading-snug">
                                        {stat.label}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}
