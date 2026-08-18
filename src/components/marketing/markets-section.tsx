"use client";
import { motion } from 'framer-motion';
import { MapPin, ArrowRight } from 'lucide-react';

const currentlyServing = [
    'Seaside Heights',
    'Seaside Park',
    'Lavallette',
    'Ortley Beach',
    'Mantoloking',
    'Bay Head',
    'Point Pleasant',
    'Ocean Gate',
];

const comingSoon = [
    'Belmar',
    'Asbury Park',
    'Wildwood & Cape May',
    'Long Beach Island & Beach Haven',
];

export function MarketsSection() {
    return (
        <section id="markets" className="py-24 bg-black/2 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-px bg-linear-to-r from-transparent via-black/5 to-transparent" />

            <div className="container mx-auto px-6 relative z-10">
                <div className="max-w-3xl mx-auto text-center mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/20 bg-primary/5 text-primary text-[11px] font-black uppercase tracking-widest mb-6"
                    >
                        <MapPin className="w-3 h-3 text-primary" />
                        Our Markets
                    </motion.div>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-3xl md:text-5xl font-bold tracking-tight mb-4"
                    >
                        Where We Operate
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-lg text-black/80 font-medium"
                    >
                        Local teams on the Jersey Shore — with more markets on the way.
                    </motion.p>
                </div>

                <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="glass-panel p-8 border border-primary/20 bg-white"
                    >
                        <div className="flex items-center gap-2 mb-6">
                            <span className="text-[10px] font-black uppercase tracking-widest px-2.5 py-1 rounded-full bg-primary/10 text-primary">
                                Currently Serving
                            </span>
                        </div>
                        <ul className="space-y-3">
                            {currentlyServing.map((market) => (
                                <li key={market} className="flex items-center gap-3 text-black font-bold">
                                    <ArrowRight className="w-4 h-4 text-primary shrink-0" />
                                    {market}
                                </li>
                            ))}
                        </ul>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="glass-panel p-8 border border-black/5 bg-white"
                    >
                        <div className="flex items-center gap-2 mb-6">
                            <span className="text-[10px] font-black uppercase tracking-widest px-2.5 py-1 rounded-full bg-black/10 text-black/60">
                                Coming Soon / Expanding
                            </span>
                        </div>
                        <ul className="space-y-3">
                            {comingSoon.map((market) => (
                                <li key={market} className="flex items-center gap-3 text-black/70 font-bold">
                                    <ArrowRight className="w-4 h-4 text-black/30 shrink-0" />
                                    {market}
                                </li>
                            ))}
                        </ul>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
