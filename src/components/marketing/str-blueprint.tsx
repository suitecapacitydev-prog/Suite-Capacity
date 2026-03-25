import { section } from 'framer-motion/client'
import { ArrowRight, CheckCircle, FileText } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

export const STRBlueprint = () => {
    return (
        <section className="py-24 bg-primary/5 border-y border-black/5">
            <div className="container mx-auto px-6">
                <div className="grid lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
                    <div>
                        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 text-primary text-[11px] font-semibold uppercase tracking-widest mb-6 border border-primary/20">
                            <FileText className="w-3 h-3" /> Free STR Blueprint
                        </div>
                        <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-5 leading-tight">
                            See Exactly What Your Property Can Make.
                        </h2>
                        <p className="text-base text-black/55 mb-8 leading-relaxed">
                            Before you commit to anything, we give you a free personalized STR Blueprint. Real revenue projections, a design plan, and an optimization strategy tailored to your specific property.
                        </p>
                        <ul className="space-y-3 mb-10">
                            {[
                                'Revenue Projections & Market Comparison',
                                'Design + Setup Plan for Maximum Bookings',
                                'Pricing & Optimization Strategy',
                            ].map((item, i) => (
                                <li key={i} className="flex items-center gap-3 text-black/65 text-sm">
                                    <CheckCircle className="w-4 h-4 text-primary shrink-0" />
                                    {item}
                                </li>
                            ))}
                        </ul>
                        <Link href="/wizard">
                            <button className="inline-flex items-center gap-2 px-7 py-4 bg-primary text-black rounded-2xl font-semibold text-base hover:bg-primary/90 hover:-translate-y-0.5 transition-all shadow-lg shadow-primary/20">
                                <FileText className="w-4 h-4" /> Generate Your Report
                                <ArrowRight className="w-4 h-4" />
                            </button>
                        </Link>
                    </div>
                    <div className="relative">
                        <div className="glass-panel p-8 border-primary/20 bg-white shadow-xl rounded-2xl">
                            <div className="flex items-center gap-3 mb-8">
                                <div className="w-9 h-9 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                                    <FileText className="w-4 h-4" />
                                </div>
                                <div>
                                    <div className="font-semibold text-base">STR Blueprint</div>
                                    <div className="text-xs text-black/40 uppercase tracking-wider">Personalized Report</div>
                                </div>
                            </div>
                            <div className="space-y-0">
                                {[
                                    { label: 'Projected Monthly Revenue', value: '$8,400 – $12,200', positive: true },
                                    { label: 'Estimated Annual Income', value: '$100,800+', positive: true },
                                    { label: 'Vs. Long-Term Rental', value: '+$4,200/mo', positive: true },
                                    { label: 'Market ADR (Area Average)', value: '$320/night', positive: false },
                                    { label: 'Occupancy Projection', value: '78 – 92%', positive: false },
                                ].map((stat, i) => (
                                    <div key={i} className="flex justify-between items-center py-3.5 border-b border-black/5 last:border-0">
                                        <span className="text-sm text-black/50">{stat.label}</span>
                                        <span className={`text-sm font-semibold ${stat.positive ? 'text-green-600' : 'text-black'}`}>{stat.value}</span>
                                    </div>
                                ))}
                            </div>
                            <div className="mt-6 p-3.5 rounded-xl bg-primary/5 border border-primary/10 text-center">
                                <div className="text-xs font-semibold text-primary mb-0.5">Blueprint Status</div>
                                <div className="text-xs text-black/50">Personalized for your property address & market</div>
                            </div>
                        </div>
                        <div className="absolute -bottom-4 -right-4 bg-white rounded-xl shadow-lg px-4 py-3 border border-green-100">
                            <div className="text-xs font-semibold text-green-600">Free — No Commitment</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}