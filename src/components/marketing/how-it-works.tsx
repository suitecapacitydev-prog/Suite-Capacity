import { ArrowRight, CheckCircle, FileText, FileTextIcon, Settings, TrendingUp } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

export const HowItWorks = () => {
    return (
        <section id="how-it-works" className="py-24 container mx-auto px-6">
            <div className="text-center mb-16 max-w-xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold text-black tracking-tight mb-3">How It Works</h2>
                <p className="text-base text-black/55">Three phases. Fully done for you. You collect the income.</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-16">
                {[
                    {
                        step: '01',
                        title: 'Analyze',
                        subtitle: 'Your STR Blueprint',
                        icon: FileText,
                        color: 'text-blue-600 bg-blue-500/10',
                        items: ['Revenue Projections', 'Market Demand Analysis', 'Personalized STR Strategy'],
                    },
                    {
                        step: '02',
                        title: 'Setup',
                        subtitle: 'Full Property Activation',
                        icon: Settings,
                        color: 'text-primary bg-primary/10',
                        items: ['Furnishing & Interior Design', 'Professional Photography', 'Listing Creation & Optimization'],
                    },
                    {
                        step: '03',
                        title: 'Operate',
                        subtitle: 'Ongoing Management',
                        icon: TrendingUp,
                        color: 'text-green-600 bg-green-500/10',
                        items: ['Dynamic Pricing & Automation', 'Guest Management & Concierge', 'Cleaning, Inspections & Compliance'],
                    },
                ].map((phase, i) => (
                    <div key={i} className="glass-panel p-8 border-black/5 bg-white relative overflow-hidden group hover:-translate-y-1 transition-all">
                        <div className="absolute top-6 right-6 text-7xl font-black text-black/[0.04] leading-none select-none">{phase.step}</div>
                        <div className={`w-11 h-11 rounded-xl flex items-center justify-center mb-5 ${phase.color}`}>
                            <phase.icon className="w-5 h-5" />
                        </div>
                        <div className="text-xs font-semibold text-black/35 uppercase tracking-widest mb-1.5">Step {phase.step}</div>
                        <h3 className="text-xl font-semibold mb-1">{phase.title}</h3>
                        <p className="text-sm text-primary font-medium mb-5">{phase.subtitle}</p>
                        <ul className="space-y-2.5">
                            {phase.items.map((item, j) => (
                                <li key={j} className="flex items-center gap-2 text-sm text-black/55">
                                    <div className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>

            {/* Result Row */}
            <div className="pt-16 border-t border-black/5">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold text-black tracking-tight">The Result</h2>
                </div>
                <div className="grid md:grid-cols-3 gap-10">
                    {[
                        { title: 'Passive income', desc: 'Your property works for you. We handle the complexity — you collect the revenue.' },
                        { title: 'More revenue', desc: 'Our pricing tools and automation consistently outperform the market average by 24%+.' },
                        { title: 'Zero headaches', desc: 'Standardized protocols ensure institutional-grade hospitality across every unit, every time.' },
                    ].map((result) => (
                        <div key={result.title} className="text-center space-y-3 p-6 glass-panel border-transparent hover:border-black/5 transition-colors">
                            <div className="text-xl font-semibold text-black">{result.title}</div>
                            <p className="text-black/55 text-sm leading-relaxed">{result.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
