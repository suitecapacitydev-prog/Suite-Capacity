"use client";
import { motion } from 'framer-motion';
import { TrendingUp, Hotel, Coffee } from 'lucide-react';

const differentiators = [
    {
        title: 'Better Performance',
        desc: 'Technology, pricing strategy, and professional marketing designed to maximize revenue.',
        icon: TrendingUp,
    },
    {
        title: 'Hotel-Level Operations',
        desc: 'Dedicated teams managing guests, turnovers, inspections, and property operations.',
        icon: Hotel,
    },
    {
        title: 'Truly Passive Ownership',
        desc: "Owners shouldn't have to manage their property manager. Our team takes ownership of the operation.",
        icon: Coffee,
    },
];

export function WhySuiteCapacity() {
    return (
        <section id="why-suite-capacity" className="py-24 bg-black/2 relative overflow-hidden">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="max-w-3xl mx-auto text-center mb-16"
                >
                    <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">
                        Professional Hospitality.{' '}
                        <span className="text-primary">Built for Vacation Rentals.</span>
                    </h2>
                </motion.div>

                <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {differentiators.map((item, i) => (
                        <motion.div
                            key={item.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="glass-panel p-10 border border-black/5 bg-white hover:-translate-y-1 transition-all shadow-xl shadow-black/2"                        >
                            <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
                                <item.icon className="w-7 h-7 text-primary" />
                            </div>
                            <h3 className="text-xl font-black text-black mb-3">{item.title}</h3>
                            <p className="text-sm text-black/75 font-medium leading-relaxed">{item.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
