import { ArrowRight, CheckCircle, FileText, FileTextIcon, Settings, TrendingUp } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

export const HowItWorks = () => {
    return (
        <section id="how-it-works" className="py-24 relative overflow-hidden bg-primary border-y border-white/10">
            <div className="text-center mb-16 max-w-xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-black text-white tracking-tight mb-3">How It Works</h2>
                <p className="text-base text-white/85 font-medium">Three phases. Fully done for you. You collect the income.</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mx-20">
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
                    <div key={i} className="glass-panel p-10 border-black/5 bg-white relative overflow-hidden group hover:-translate-y-1 transition-all shadow-xl shadow-black/[0.02]">
                        <div className="absolute top-8 right-8 text-8xl font-black text-black/[0.03] leading-none select-none italic">{phase.step}</div>
                        <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-8 bg-primary text-white shadow-lg shadow-primary/20`}>
                            <phase.icon className="w-6 h-6" />
                        </div>
                        <div className="text-[10px] font-black text-primary uppercase tracking-[0.2em] mb-2">Phase {phase.step}</div>
                        <h3 className="text-2xl font-black mb-1 text-primary">{phase.title}</h3>
                        <p className="text-sm text-black/70 font-bold mb-8 italic">{phase.subtitle}</p>
                        <ul className="space-y-4">
                            {phase.items.map((item, j) => (
                                <li key={j} className="flex items-start gap-3 text-sm text-black/85 font-bold">
                                    <div className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 shrink-0" />
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
                    <h2 className="text-3xl font-bold text-white tracking-tight">The Result</h2>
                </div>
                <div className="grid md:grid-cols-3 gap-10">
                    {[
                        { title: 'Passive income', desc: 'Your property works for you. We handle the complexity — you collect the revenue.' },
                        { title: 'More revenue', desc: 'Our pricing tools and automation consistently outperform the market average by 24%+.' },
                        { title: 'Zero headaches', desc: 'Standardized protocols ensure institutional-grade hospitality across every unit, every time.' },
                    ].map((result) => (
                        <div key={result.title} className="text-center space-y-3 p-8 rounded-3xl border border-primary/10 bg-white shadow-xl shadow-black/[0.02] hover:-translate-y-1 transition-all">
                            <div className="text-xl font-black text-primary">{result.title}</div>
                            <p className="text-black/80 text-sm font-medium leading-relaxed">{result.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
