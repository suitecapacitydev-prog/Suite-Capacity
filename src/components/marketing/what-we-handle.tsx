"use client";
import { motion } from 'framer-motion';
import {
    Megaphone,
    TrendingUp,
    MessageSquare,
    Sparkles,
    ClipboardCheck,
    Wrench,
    ShieldCheck,
    BarChart3,
} from 'lucide-react';

const services = [
    { label: 'Marketing & Listings', detail: 'Distribution to over 15 OTAs', icon: Megaphone },
    { label: 'Pricing Strategy', detail: 'Rates tuned to maximize your income', icon: TrendingUp },
    { label: 'Guest Communication', icon: MessageSquare },
    { label: 'Cleaning & Turnovers', icon: Sparkles },
    { label: 'Property Inspections', icon: ClipboardCheck },
    { label: 'Maintenance Coordination', icon: Wrench },
    { label: 'Compliance', icon: ShieldCheck },
    { label: 'Owner Reporting', icon: BarChart3 },
];

export function WhatWeHandle() {
    return (
        <section id="what-we-handle" className="py-24 bg-white relative overflow-hidden">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="max-w-3xl mx-auto text-center mb-16"
                >
                    <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4 leading-tight">
                        Everything Your Vacation Rental Needs. One Local Management Team.{' '}
                        <span className="text-primary">All done for you!</span>
                    </h2>
                </motion.div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 max-w-6xl mx-auto">
                    {services.map((service, i) => (
                        <motion.div
                            key={service.label}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.05 }}
                            className="glass-panel p-6 border border-black/5 hover:border-primary/30 transition-all group bg-white"
                        >
                            <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                                <service.icon className="w-5 h-5 text-primary" />
                            </div>
                            <h3 className="text-base font-bold text-black leading-snug">{service.label}</h3>
                            {service.detail && (
                                <p className="text-sm text-black/60 mt-1 font-medium">{service.detail}</p>
                            )}
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
