"use client";
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight, FileText, Phone } from 'lucide-react';
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
                        className="text-5xl md:text-7xl font-bold tracking-tight leading-[1.1]"
                    >
                        Turn Your Property Into{' '}
                        <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                            Passive Income
                        </span>{' '}
                        — Without Lifting a Finger
                    </motion.h1>

                    <motion.p
                        variants={fadeInUp}
                        className="text-lg md:text-xl text-black/55 max-w-4xl mx-auto leading-relaxed"
                    >
                        Suite Capacity is a vacation rental property management and optimization platform.
                        We specialize in providing a hotel-level experience to guests while allowing property owners to receive passive income.
                        Our system combines local market operations and central intelligence to create a seamless experience for any property owner.
                    </motion.p>

                    <motion.div
                        variants={fadeInUp}
                        className="flex flex-col items-center gap-6 pt-4"
                    >
                        <Link href="/wizard" className="w-full sm:w-auto">
                            <Button size="lg" variant="intelligence" className="w-full gap-2 group h-14 px-10 rounded-2xl font-bold text-lg shadow-xl shadow-primary/20 hover:scale-105 transition-all">
                                <FileText className="w-5 h-5" />
                                Exploring? Get Your STR Blueprint
                                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                            </Button>
                        </Link>
                        <div className="flex flex-wrap justify-center gap-x-8 gap-y-4 text-sm font-semibold pt-2">
                            <Link
                                href="/invest"
                                className="text-black/60 hover:text-primary transition-colors flex items-center gap-2 group/link"
                            >
                                <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                                New to STRs? <span className="underline decoration-primary/30 underline-offset-4 group-hover/link:decoration-primary"><b>Invest With Us</b></span>
                            </Link>

                            <Link
                                href="/guest-list"
                                className="text-black/60 hover:text-primary transition-colors flex items-center gap-2 group/link"
                            >
                                <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                                Looking to book? <span className="underline decoration-accent/30 underline-offset-4 group-hover/link:decoration-accent"><b>Join the Exclusive Guest List</b></span>
                            </Link>
                        </div>

                        <div className="mt-4 flex items-center gap-3 text-black font-bold bg-white/50 backdrop-blur-sm px-6 py-3 rounded-2xl border border-black/5">
                            <div className="p-2 rounded-full bg-primary/10">
                                <Phone className="w-4 h-4 text-primary" />
                            </div>
                            Call us today: <span className="text-primary">+1 (833) 408-6840</span>
                        </div>
                    </motion.div>

                    {/* Social Proof Stats */}
                    <motion.div
                        variants={fadeInUp}
                        className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-16 pt-8 w-full max-w-4xl"
                    >
                        <div className="text-center group">
                            <div className="text-3xl md:text-5xl font-black mb-1 group-hover:scale-110 transition-transform">$6.4M+</div>
                            <div className="text-xs uppercase tracking-widest font-bold text-black opacity-40">Revenue Generated</div>
                        </div>
                        <div className="text-center group">
                            <div className="text-3xl md:text-5xl font-black mb-1 group-hover:scale-110 transition-transform">15.9%</div>
                            <div className="text-xs uppercase tracking-widest font-bold text-black opacity-40">Average Revenue Increase</div>
                        </div>
                        <div className="text-center group">
                            <div className="text-3xl md:text-5xl font-black mb-1 group-hover:scale-110 transition-transform">50+</div>
                            <div className="text-xs uppercase tracking-widest font-bold text-black opacity-40">Active Units Managed</div>
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}
