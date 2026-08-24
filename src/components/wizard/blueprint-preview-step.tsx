'use client';

import React, { useEffect, useState } from 'react';
import { RevenueProjection, WizardData } from '@/types/wizard';
import {
    Sparkles, TrendingUp, MapPin, BarChart3, Calendar, ArrowRight, Lock
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { MARKETS } from '@/data/markets';

interface BlueprintPreviewStepProps {
    projection: RevenueProjection;
    wizardData: WizardData;
    onSchedule: () => void;
}

function formatCurrency(val: number) {
    return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 }).format(val);
}

function computeBlueprintScore(projection: RevenueProjection): number {
    const liftRatio = projection.currentRevenue > 0
        ? projection.optimizedRevenue / projection.currentRevenue
        : 1;
    const liftScore = Math.min(Math.max((liftRatio - 1) * 200, 0), 40);
    const demandScore = Math.min(projection.marketComparison.demandIndex * 0.35, 35);
    const opportunityCount = projection.intelligence?.missedOpportunities?.length ?? 2;
    const opportunityScore = Math.min(opportunityCount * 5, 25);
    return Math.round(Math.min(liftScore + demandScore + opportunityScore, 100));
}

function getScoreLabel(score: number): string {
    if (score >= 80) return 'High Growth Potential';
    if (score >= 60) return 'Strong Opportunity';
    if (score >= 40) return 'Moderate Upside';
    return 'Optimization Ready';
}

export function BlueprintPreviewStep({ projection, wizardData, onSchedule }: BlueprintPreviewStepProps) {
    const [animatedScore, setAnimatedScore] = useState(0);
    const score = computeBlueprintScore(projection);
    const liftPct = projection.currentRevenue > 0
        ? Math.round((projection.optimizedRevenue / projection.currentRevenue - 1) * 100)
        : 0;

    const selectedMarket = MARKETS.find(m => m.id === wizardData.property.marketId);
    const opportunityPreview = projection.intelligence?.missedOpportunities?.slice(0, 2) ?? [
        'Revenue optimization opportunities identified across pricing and occupancy.',
        'Listing and operational gaps detected that may be limiting performance.',
    ];

    useEffect(() => {
        const duration = 1500;
        const startTime = performance.now();

        const animate = (currentTime: number) => {
            const progress = Math.min((currentTime - startTime) / duration, 1);
            setAnimatedScore(Math.round(progress * score));
            if (progress < 1) requestAnimationFrame(animate);
        };

        requestAnimationFrame(animate);
    }, [score]);

    return (
        <div className="space-y-10 animate-in fade-in slide-in-from-bottom-4 duration-700 max-w-3xl mx-auto text-center">
            <div className="space-y-4">
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-black uppercase tracking-widest border border-primary/20">
                    <Sparkles className="w-4 h-4" />
                    Analysis Complete
                </div>
                <h3 className="text-3xl md:text-4xl font-black tracking-tighter text-foreground">
                    Your STR Blueprint Is Ready
                </h3>
                <p className="text-base md:text-lg text-muted-foreground font-medium leading-relaxed max-w-2xl mx-auto">
                    We&apos;ve completed your property&apos;s analysis. Schedule a quick call with our team to review your property&apos;s performance, opportunities, and full recommendations.
                </p>
            </div>

            <div className="glass-panel p-8 md:p-10 border-primary/20 bg-gradient-to-b from-card/80 to-background space-y-8">
                <div className="flex flex-col items-center gap-4">
                    <div className="relative w-36 h-36">
                        <svg className="w-full h-full -rotate-90" viewBox="0 0 120 120">
                            <circle cx="60" cy="60" r="52" fill="none" stroke="currentColor" strokeWidth="8" className="text-black/5" />
                            <circle
                                cx="60"
                                cy="60"
                                r="52"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="8"
                                strokeLinecap="round"
                                className="text-primary transition-all duration-1000"
                                strokeDasharray={`${(animatedScore / 100) * 327} 327`}
                            />
                        </svg>
                        <div className="absolute inset-0 flex flex-col items-center justify-center">
                            <span className="text-4xl font-black text-primary">{animatedScore}</span>
                            <span className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">Blueprint Score</span>
                        </div>
                    </div>
                    <p className="text-sm font-black uppercase tracking-widest text-primary">{getScoreLabel(score)}</p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-left">
                    <div className="p-4 rounded-2xl bg-white border border-black/5 space-y-1">
                        <div className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-muted-foreground">
                            <TrendingUp className="w-3.5 h-3.5 text-primary" />
                            Revenue Upside
                        </div>
                        <p className="text-2xl font-black text-foreground">+{Math.max(liftPct, 0)}%</p>
                        <p className="text-[11px] text-muted-foreground font-medium">Projected optimization lift</p>
                    </div>
                    <div className="p-4 rounded-2xl bg-white border border-black/5 space-y-1">
                        <div className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-muted-foreground">
                            <BarChart3 className="w-3.5 h-3.5 text-primary" />
                            Demand Index
                        </div>
                        <p className="text-2xl font-black text-foreground">{projection.marketComparison.demandIndex.toFixed(0)}%</p>
                        <p className="text-[11px] text-muted-foreground font-medium">{selectedMarket?.name || 'Local market'} demand</p>
                    </div>
                    <div className="p-4 rounded-2xl bg-white border border-black/5 space-y-1">
                        <div className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-muted-foreground">
                            <MapPin className="w-3.5 h-3.5 text-primary" />
                            Property
                        </div>
                        <p className="text-sm font-bold text-foreground truncate" title={wizardData.property.address}>
                            {wizardData.property.address.split(',')[0]}
                        </p>
                        <p className="text-[11px] text-muted-foreground font-medium">{wizardData.property.bedrooms} bed · {wizardData.property.bathrooms} bath</p>
                    </div>
                </div>

                <div className="text-left p-5 rounded-2xl bg-primary/5 border border-primary/10 space-y-3">
                    <p className="text-[10px] font-black uppercase tracking-widest text-primary">High-Level Preview</p>
                    <ul className="space-y-2">
                        {opportunityPreview.map((item, i) => (
                            <li key={i} className="flex items-start gap-2 text-sm text-foreground/80 font-medium">
                                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                                {item}
                            </li>
                        ))}
                    </ul>
                    <div className="flex items-center gap-2 pt-2 text-xs font-bold uppercase tracking-widest text-muted-foreground">
                        <Lock className="w-3.5 h-3.5" />
                        Full audit, charts, and recommendations unlock after you schedule your review
                    </div>
                </div>

                <div className="space-y-3 pt-2">
                    <Button
                        variant="intelligence"
                        size="lg"
                        className="w-full h-14 text-sm font-black uppercase tracking-widest gap-2 shadow-glow"
                        onClick={onSchedule}
                    >
                        <Calendar className="w-5 h-5" />
                        Schedule My Blueprint Review
                        <ArrowRight className="w-4 h-4" />
                    </Button>
                    <p className="text-[11px] text-muted-foreground font-medium">
                        Current baseline: {formatCurrency(projection.currentRevenue)} → Full optimized breakdown unlocks after booking.
                    </p>
                </div>
            </div>
        </div>
    );
}
