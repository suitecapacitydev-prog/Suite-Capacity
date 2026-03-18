"use client";
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight, Zap, FileText } from 'lucide-react';
import Link from 'next/link';

const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
};

const staggerContainer = {
    animate: {
        transition: {
            staggerChildren: 0.1
        }
    }
};

export function Hero() {
    return (
        <section className="relative overflow-hidden py-24 md:py-36">
            {/* Background */}
            <div className="absolute inset-0 z-0 pointer-events-none">
                <img
                    src="/images/hero-bg.jpg"
                    alt="Jersey Shore Property"
                    className="absolute inset-0 w-full h-full object-cover opacity-20"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-white/80 via-white/40 to-white" />
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
                    initial="initial"
                    animate="animate"
                    variants={staggerContainer}
                    className="max-w-4xl mx-auto text-center space-y-8"
                >

                    <motion.h1
                        variants={fadeInUp}
                        className="text-5xl md:text-7xl font-black tracking-tight leading-[1.1]"
                    >
                        Turn Your Property Into{' '}
                        <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                            Passive Income
                        </span>{' '}
                        — Without Lifting a Finger
                    </motion.h1>

                    <motion.p
                        variants={fadeInUp}
                        className="text-xl md:text-2xl text-black/60 max-w-2xl mx-auto leading-relaxed"
                    >
                        We install a full-service short-term rental operating system into your property — handling everything from setup to guests, with optional data-driven optimization to increase revenue.
                    </motion.p>

                    <motion.div
                        variants={fadeInUp}
                        className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4"
                    >
                        <Link href="/wizard" className="w-full sm:w-auto">
                            <Button size="lg" variant="intelligence" className="w-full gap-2 group h-14 px-8 rounded-2xl font-black text-base">
                                <FileText className="w-5 h-5" />
                                Get Your STR Blueprint
                                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                            </Button>
                        </Link>
                        <a href="https://calendly.com/suitecapacity/consultation-and-discovery-call?month=2026-03" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
                            <Button
                                size="lg"
                                variant="outline"
                                className="w-full h-14 px-8 rounded-2xl font-black text-base"
                            >
                                Activate Your Property
                            </Button>
                        </a>
                    </motion.div>

                    {/* Social Proof Stats */}
                    <motion.div
                        variants={fadeInUp}
                        className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-16 border-t border-black/5"
                    >
                        <div className="space-y-1">
                            <p className="text-3xl font-black text-black">$42M+</p>
                            <p className="text-xs text-black uppercase tracking-widest opacity-60">Revenue Generated</p>
                        </div>
                        <div className="space-y-1">
                            <p className="text-3xl font-black text-black">24.2%</p>
                            <p className="text-xs text-black uppercase tracking-widest opacity-60">Avg Revenue Increase</p>
                        </div>
                        <div className="space-y-1">
                            <p className="text-3xl font-black text-black">1,200+</p>
                            <p className="text-xs text-black uppercase tracking-widest opacity-60">Active Units Managed</p>
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}
