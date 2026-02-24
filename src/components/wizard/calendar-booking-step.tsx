'use client';

import React from 'react';
import { Button } from '@/components/ui/button';
import { Calendar, MessageSquare, ArrowRight, ShieldCheck, Sparkles } from 'lucide-react';

export function CalendarBookingStep() {
    return (
        <div className="space-y-10 animate-in fade-in slide-in-from-bottom-4 duration-500 text-center max-w-3xl mx-auto">
            <div className="space-y-4">
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-black uppercase tracking-widest border border-primary/20">
                    <Sparkles className="w-4 h-4" /> Final Strategy Activation
                </div>
                <h3 className="text-4xl font-black tracking-tighter">You Could Execute This Plan Yourself...</h3>
                <p className="text-xl text-muted-foreground">
                    Or our platform can deploy everything in under 14 days.
                    Book your 1:1 Revenue Strategy session to unlock the full platform deployment.
                </p>
            </div>

            <div className="glass-panel p-1 border-primary/20 bg-muted/30 overflow-hidden relative">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-background -z-10" />
                <div className="bg-background rounded-2xl p-12 space-y-8">
                    <div className="flex flex-col md:flex-row items-center justify-center gap-8 text-left">
                        <div className="space-y-2">
                            <div className="flex items-center gap-2 font-bold text-primary">
                                <ShieldCheck className="w-5 h-5" />
                                Guaranteed Optimization
                            </div>
                            <p className="text-sm text-muted-foreground max-w-xs">
                                Our experts will walk you through the precise steps to capture the projected +18-25% revenue lift.
                            </p>
                        </div>
                        <div className="w-px h-12 bg-border hidden md:block" />
                        <div className="space-y-2 text-center md:text-left">
                            <div className="text-3xl font-black tracking-tight">Available Today</div>
                            <p className="text-sm text-muted-foreground">Multiple slots available for immediate consultation.</p>
                        </div>
                    </div>

                    <div className="space-y-4">
                        <div className="w-full aspect-[16/9] bg-muted/50 rounded-xl border-2 border-dashed border-border flex flex-col items-center justify-center gap-4 group hover:bg-muted transition-all cursor-pointer">
                            <Calendar className="w-12 h-12 text-muted-foreground group-hover:text-primary transition-colors" />
                            <p className="font-bold text-muted-foreground uppercase tracking-widest">[ Calendar Embed Widget ]</p>
                            <p className="text-xs text-muted-foreground/50">Calendly / SavvyCal integration would load here</p>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-4">
                            <Button size="lg" variant="intelligence" className="flex-1 h-16 text-lg font-black gap-2 shadow-glow uppercase tracking-widest">
                                Activate My Property
                                <ArrowRight className="w-5 h-5" />
                            </Button>
                            <Button size="lg" variant="outline" className="flex-1 h-16 text-lg font-bold gap-2">
                                <MessageSquare className="w-5 h-5" />
                                Chat With Consultant
                            </Button>
                        </div>
                    </div>
                </div>
            </div>

            <p className="text-xs text-muted-foreground uppercase tracking-widest font-bold">
                High-Priority Lead Tag: STACK-OPT-QUALIFIED
            </p>
        </div>
    );
}
