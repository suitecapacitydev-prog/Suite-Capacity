"use client";
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { BrainCircuit, ArrowRight, Zap, Target, Activity } from 'lucide-react';
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
        <section className="relative overflow-hidden py-24 md:py-32">
            {/* Background Data Overlay Visuals */}
            <div className="absolute inset-0 z-0 opacity-10 pointer-events-none">
                <div className="absolute top-0 left-0 w-full h-full bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20" />
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
                        className="text-5xl md:text-7xl font-bold tracking-tight leading-tight"
                    >
                        Centralized STR <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Operating Platform.</span>
                        <br />
                        <span className="text-black">Hyper-Localized Execution.</span>
                    </motion.h1>

                    <motion.p 
                        variants={fadeInUp}
                        className="text-xl md:text-2xl text-black opacity-70 max-w-2xl mx-auto leading-relaxed"
                    >
                        Data-driven strategy from our central command center.
                        Boots-on-the-ground teams in every market.
                    </motion.p>

                    <motion.div 
                        variants={fadeInUp}
                        className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4"
                    >
                        <Link href="/wizard" className="w-full sm:w-auto">
                            <Button size="lg" variant="intelligence" className="w-full gap-2 group">
                                Get My Revenue Intelligence Report
                                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                            </Button>
                        </Link>
                        <Button
                            size="lg"
                            variant="outline"
                            className="w-full sm:w-auto"
                            onClick={() => {
                                document.getElementById('how-it-works')?.scrollIntoView({ behavior: 'smooth' });
                            }}
                        >
                            See How the Platform Works
                        </Button>
                    </motion.div>

                    {/* Quick Metrics / Stats Overlay */}
                    <motion.div 
                        variants={fadeInUp}
                        className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-16 border-t border-border/50"
                    >
                        <div className="space-y-1">
                            <p className="text-3xl font-bold text-black">$42M+</p>
                            <p className="text-xs text-black uppercase tracking-widest opacity-60">Revenue Managed</p>
                        </div>
                        <div className="space-y-1">
                            <p className="text-3xl font-bold text-black">24.2%</p>
                            <p className="text-xs text-black uppercase tracking-widest opacity-60">Avg Revenue Lift</p>
                        </div>
                        <div className="space-y-1">
                            <p className="text-3xl font-bold text-black">1,200+</p>
                            <p className="text-xs text-black uppercase tracking-widest opacity-60">Active Units</p>
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}
