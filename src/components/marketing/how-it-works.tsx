import { Search, SlidersHorizontal, Building2 } from 'lucide-react'

export const HowItWorks = () => {
    return (
        <section id="how-it-works" className="py-24 relative overflow-hidden bg-primary border-y border-white/10">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16 max-w-xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-black text-white tracking-tight mb-3">How It Works</h2>
                    <p className="text-base text-white/85 font-medium">Three steps. Fully done for you.</p>
                </div>

                <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {[
                        {
                            step: '01',
                            title: 'Analyze',
                            desc: 'We evaluate your property, market, competition, and revenue potential.',
                            icon: Search,
                        },
                        {
                            step: '02',
                            title: 'Optimize',
                            desc: 'We optimize pricing, marketing, distribution, and the guest experience.',
                            icon: SlidersHorizontal,
                        },
                        {
                            step: '03',
                            title: 'Operate',
                            desc: 'Our team handles the day-to-day operation from booking through checkout.',
                            icon: Building2,
                        },
                    ].map((phase, i) => (
                        <div key={i} className="glass-panel p-10 border-black/5 bg-white relative overflow-hidden group hover:-translate-y-1 transition-all shadow-xl shadow-black/2">
                            <div className="absolute top-8 right-8 text-8xl font-black text-black/3 leading-none select-none italic">{phase.step}</div>
                           <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-8 bg-primary text-white shadow-lg shadow-primary/20">
                                <phase.icon className="w-6 h-6" />
                            </div>
                            <div className="text-[10px] font-black text-primary uppercase tracking-[0.2em] mb-2">Step {phase.step}</div>
                            <h3 className="text-2xl font-black mb-4 text-primary">{phase.title}</h3>
                            <p className="text-sm text-black/80 font-medium leading-relaxed">{phase.desc}</p>
                        </div>
                    ))}
                </div>

                <p className="text-center text-xl md:text-2xl font-bold text-white mt-16 italic">
                    You own it. We operate it. You receive the income.
                </p>
            </div>
        </section>
    )
}
