import { ArrowRight, CheckCircle, FileText, TrendingUp } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

export const STRBlueprint = () => {
    return (
        <section className="py-24 bg-white border-y border-black/5">
            <div className="container mx-auto px-6">
                <div className="grid lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
                    <div>
                        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 text-primary text-[11px] font-bold uppercase tracking-widest mb-6 border border-primary/20">
                            Professional Analysis
                        </div>
                        <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6 leading-tight">
                            See Exactly What Your Property Can Make.
                        </h2>
                        <p className="text-lg text-black/60 mb-8 leading-relaxed">
                            Before you commit, we provide a personalized STR Blueprint—real revenue projections, a design plan, and an optimization strategy tailored to your specific market.
                        </p>
                        <ul className="space-y-4 mb-10">
                            {[
                                'Revenue Projections & Market Comparison',
                                'Design + Setup Plan for Maximum Bookings',
                                'Full-Service Operational Management',
                            ].map((item, i) => (
                                <li key={i} className="flex items-center gap-3 text-black font-medium">
                                    <CheckCircle className="w-5 h-5 text-primary shrink-0" />
                                    {item}
                                </li>
                            ))}
                        </ul>
                        <Link href="/wizard">
                            <button className="inline-flex items-center gap-3 px-8 py-4 bg-primary text-white rounded-2xl font-bold text-base hover:bg-primary/90 hover:-translate-y-0.5 transition-all shadow-xl shadow-primary/20">
                                <FileText className="w-5 h-5" /> Get My STR Blueprint
                                <ArrowRight className="w-5 h-5" />
                            </button>
                        </Link>
                    </div>
                    <div className="relative group">
                        <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl transition-transform group-hover:scale-[1.02] duration-500">
                            <img 
                                src="/images/beach-house.png" 
                                alt="Luxury Beach House" 
                                className="w-full aspect-[4/3] object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                            <div className="absolute bottom-8 left-8 right-8 p-6 glass-panel border-white/20 bg-white/10 backdrop-blur-xl">
                                <div className="flex justify-between items-center text-white">
                                    <div>
                                        <div className="text-[10px] uppercase font-bold tracking-[0.2em] text-white/80 mb-1">Projected Annual Revenue</div>
                                        <div className="text-3xl font-black text-white">$108,400+</div>
                                    </div>
                                    <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center border border-white/20 shadow-glow">
                                        <TrendingUp className="w-5 h-5 text-white" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="absolute -top-6 -right-6 bg-white rounded-2xl shadow-2xl px-8 py-5 border border-black/5 z-20 hover:-translate-y-1 transition-transform">
                            <div className="text-sm font-black text-primary uppercase tracking-widest">Free Analysis</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}