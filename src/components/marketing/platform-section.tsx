"use client";
import { motion } from 'framer-motion';
import { MapPin, ConciergeBell, BarChart3, LayoutDashboard } from 'lucide-react';

const pillars = [
    {
        title: 'Local Teams',
        desc: 'Real people in your market who know the area and respond when guests need help.',
        icon: MapPin,
    },
    {
        title: 'Hospitality Operations',
        desc: 'Guest stays, cleaning, and upkeep handled professionally—without you lifting a finger.',
        icon: ConciergeBell,
    },
    {
        title: 'Revenue Technology',
        desc: 'Smart pricing and marketing that bring in more bookings and steady income.',
        icon: BarChart3,
    },
    {
        title: 'Centralized Management',
        desc: 'One team coordinating everything behind the scenes so you stay hands-off.',
        icon: LayoutDashboard,
    },
];

export function PlatformSection() {
    return (
        <section id="platform" className="py-24 relative overflow-hidden bg-white">
            <div className="absolute inset-0 bg-grid-white/2 bg-size-[40px_40px]" />
            <div className="container mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="max-w-3xl mx-auto text-center mb-16"
                >
                    <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">
                        Local Operations.{' '}
                        <span className="text-transparent bg-clip-text bg-linear-to-r from-primary to-accent">
                            Powered by Technology.
                        </span>
                    </h2>
                    <p className="text-lg text-black/70 font-medium leading-relaxed">
                        Local Teams + Hospitality Operations + Revenue Technology + Centralized Management
                    </p>
                </motion.div>

                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
                    {pillars.map((pillar, i) => (
                        <motion.div
                            key={pillar.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.08 }}
                            className="glass-panel p-8 border border-black/5 hover:border-primary/30 transition-all bg-white text-center"
                        >
                            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5 mx-auto">
                                <pillar.icon className="w-6 h-6 text-primary" />
                            </div>
                            <h3 className="text-lg font-bold text-black mb-2">{pillar.title}</h3>
                            <p className="text-sm text-black/70 font-medium leading-relaxed">{pillar.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
