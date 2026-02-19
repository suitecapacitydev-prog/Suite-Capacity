import { Button } from '@/components/ui/button';
import { BrainCircuit, ArrowRight, Zap, Target, Activity } from 'lucide-react';
import Link from 'next/link';

export function Hero() {
    return (
        <section className="relative overflow-hidden py-24 md:py-32">
            {/* Background Data Overlay Visuals */}
            <div className="absolute inset-0 z-0 opacity-10 pointer-events-none">
                <div className="absolute top-0 left-0 w-full h-full bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20" />
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 blur-[100px] rounded-full" />
                <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/20 blur-[100px] rounded-full" />
            </div>

            <div className="container relative z-10 mx-auto px-6">
                <div className="max-w-4xl mx-auto text-center space-y-8">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/20 bg-primary/5 text-primary text-xs font-bold tracking-widest uppercase mb-4 animate-fade-in">
                        <Activity className="w-3 h-3" />
                        Platform v2.0 Live
                    </div>

                    <h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-tight">
                        Centralized STR <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Operating Platform.</span>
                        <br />
                        <span className="text-secondary-foreground">Hyper-Localized Execution.</span>
                    </h1>

                    <p className="text-xl md:text-2xl text-secondary-foreground max-w-2xl mx-auto leading-relaxed">
                        Data-driven strategy from our central command center.
                        Boots-on-the-ground teams in every market.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
                        <Button size="lg" variant="intelligence" className="w-full sm:w-auto gap-2 group">
                            Get My Revenue Intelligence Report
                            <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                        </Button>
                        <Button size="lg" variant="outline" className="w-full sm:w-auto">
                            See How the Platform Works
                        </Button>
                    </div>

                    {/* Quick Metrics / Stats Overlay */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-16 border-t border-border/50">
                        <div className="space-y-1">
                            <p className="text-3xl font-bold text-primary">$42M+</p>
                            <p className="text-xs text-secondary-foreground uppercase tracking-widest">Revenue Managed</p>
                        </div>
                        <div className="space-y-1">
                            <p className="text-3xl font-bold text-success-teal">24.2%</p>
                            <p className="text-xs text-secondary-foreground uppercase tracking-widest">Avg Revenue Lift</p>
                        </div>
                        <div className="space-y-1">
                            <p className="text-3xl font-bold">14 Days</p>
                            <p className="text-xs text-secondary-foreground uppercase tracking-widest">Deployment Speed</p>
                        </div>
                        <div className="space-y-1">
                            <p className="text-3xl font-bold">1,200+</p>
                            <p className="text-xs text-secondary-foreground uppercase tracking-widest">Active Units</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
