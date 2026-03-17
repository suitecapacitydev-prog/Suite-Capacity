'use client';

import React, { useState, useEffect } from 'react';
import { RevenueProjection, WizardData } from '@/types/wizard';
import { cn } from '@/lib/utils';
import {
    TrendingUp, TrendingDown, DollarSign, Star,
    Zap, Users, ShieldCheck, MapPin, BarChart3,
    ChevronLeft, ChevronRight, Sparkles, ArrowRight
} from 'lucide-react';
import { Button } from '@/components/ui/button';

interface ResultsDashboardStepProps {
    projection: RevenueProjection;
    wizardData: WizardData;
    submissionStatus?: {
        emailSent?: boolean;
        emailError?: string | null;
        emailHint?: string | null;
        emailId?: string | null;
        emailStatus?: any;
    } | null;
}

export function ResultsDashboardStep({ projection, wizardData, submissionStatus }: ResultsDashboardStepProps) {
    const [animatedRevenue, setAnimatedRevenue] = useState(0);
    const [sliderPos, setSliderPos] = useState(50);

    const formatEmailStatus = (status: any) => {
        if (!status) return null;
        if (typeof status === 'string') return status;
        if (typeof status === 'object') {
            if (status.status) return status.status;
            if (status.state) return status.state;
            if (status.delivered !== undefined) return status.delivered ? 'delivered' : 'undelivered';
            if (status.message) return status.message;
            return JSON.stringify(status);
        }
        return String(status);
    };

    const deliveryStatusText = formatEmailStatus(submissionStatus?.emailStatus);

    useEffect(() => {
        const duration = 2000;
        const start = 0;
        const end = projection.optimizedRevenue;
        const startTime = performance.now();

        const animate = (currentTime: number) => {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const current = Math.floor(progress * (end - start) + start);
            setAnimatedRevenue(current);

            if (progress < 1) {
                requestAnimationFrame(animate);
            }
        };

        requestAnimationFrame(animate);
    }, [projection.optimizedRevenue]);

    const formatCurrency = (val: number) =>
        new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 }).format(val);

    return (
        <div className="space-y-12 animate-in zoom-in-95 duration-700">
            {submissionStatus && (
                <div
                    className={cn(
                        'rounded-xl border p-4 text-sm',
                        submissionStatus.emailSent
                            ? 'bg-emerald-50 border-emerald-200 text-emerald-900'
                            : 'bg-amber-50 border-amber-200 text-amber-900'
                    )}
                >
                    {submissionStatus.emailSent ? (
                        <div className="font-semibold">Submission succeeded! Your report email was sent.</div>
                    ) : (
                        <div className="font-semibold">Submission completed, but email was not delivered.</div>
                    )}
                    {submissionStatus.emailHint && (
                        <p className="mt-1 text-xs">{submissionStatus.emailHint}</p>
                    )}
                    {submissionStatus.emailError && (
                        <p className="mt-1 text-xs">Error: {submissionStatus.emailError}</p>
                    )}
                    {submissionStatus.emailId && (
                        <p className="mt-1 text-xs">
                            Message ID: <span className="font-mono">{submissionStatus.emailId}</span>
                        </p>
                    )}
                    {deliveryStatusText && (
                        <p className="mt-1 text-xs">
                            Delivery status: <span className="font-mono">{deliveryStatusText}</span>
                        </p>
                    )}
                </div>
            )}

            {projection.usingMockData && (
                <div className="rounded-xl border border-amber-200 bg-amber-50 p-4 text-xs text-amber-900">
                    <div className="font-semibold">Note: Market data is estimated.</div>
                    <p className="mt-1">
                        The dashboard is using mock market data because AirDNA could not be accessed.
                        Ensure <code>AIRDNA_API_KEY</code> is configured and the address is valid.
                    </p>
                </div>
            )}

            {/* Section 1: Revenue Overview */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="glass-panel p-8 space-y-4 border-border/50">
                    <p className="text-xs font-bold text-muted-foreground uppercase tracking-widest">Current Estimated Revenue</p>
                    <div className="space-y-1">
                        <h4 className="text-4xl font-black text-foreground">{formatCurrency(projection.currentRevenue)}</h4>
                        <p className="text-sm text-muted-foreground">Based on your provided baseline</p>
                    </div>
                </div>
                <div className="p-8 rounded-3xl border-2 border-primary bg-primary/5 space-y-4 relative overflow-hidden group shadow-glow">
                    <div className="absolute top-0 right-0 p-4">
                        <TrendingUp className="text-primary w-8 h-8 animate-bounce" />
                    </div>
                    <p className="text-xs font-bold text-black uppercase tracking-widest opacity-70">Optimized Revenue Potential</p>
                    <div className="space-y-1">
                        <h4 className="text-5xl font-black text-black">{formatCurrency(animatedRevenue)}</h4>
                        <p className="text-sm text-black opacity-80">Projected with Suite Capacity System</p>
                    </div>
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary text-black text-sm font-black italic">
                        +{Math.round((projection.optimizedRevenue / projection.currentRevenue - 1) * 100)}% LIFT
                    </div>
                </div>
            </div>

            {/* Section 2: Market Positioning */}
            <div className="space-y-6">
                <h3 className="text-xl font-bold flex items-center gap-2">
                    <MapPin className="text-primary w-5 h-5" />
                    Market Positioning
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {[
                        { label: "Your ADR vs Market Median", value: formatCurrency(wizardData.baseline.adr || 0), target: formatCurrency(projection.marketComparison.marketMedianAdr), icon: <DollarSign className="w-4 h-4" /> },
                        { label: "Occupancy vs Market", value: `${wizardData.baseline.occupancy || 0}%`, target: `${projection.marketComparison.marketOccupancy}%`, icon: <BarChart3 className="w-4 h-4" /> },
                        { label: "Top Quartile ADR", value: "-", target: formatCurrency(projection.marketComparison.topQuartileAdr), icon: <Star className="w-4 h-4" /> },
                    ].map((stat, idx) => (
                        <div key={idx} className="glass-panel p-6 border-border/30 hover:border-primary/30 transition-all">
                            <div className="flex items-center gap-2 text-xs font-bold text-muted-foreground uppercase tracking-widest mb-4">
                                {stat.icon}
                                {stat.label}
                            </div>
                            <div className="flex items-end justify-between">
                                <div>
                                    <p className="text-2xl font-bold">{stat.value !== "-" ? stat.value : stat.target}</p>
                                    <p className="text-[10px] text-muted-foreground">Your Input</p>
                                </div>
                                <div className="text-right">
                                    <p className="text-xl font-bold text-black">{stat.target}</p>
                                    <p className="text-[10px] text-black opacity-70">Market Leader</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Section 3: Revenue Lift Breakdown */}
            <div className="space-y-6">
                <h4 className="text-xl font-bold flex items-center gap-2">
                    <Zap className="text-primary w-5 h-5" />
                    Strategic Opportunity Breakdown
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
                    {[
                        { label: 'Pricing Intelligence', value: projection.pricingLift, icon: DollarSign, color: 'text-blue-500', desc: 'Dynamic adjustments' },
                        { label: 'Conversion Optimization', value: projection.conversionLift, icon: Star, color: 'text-amber-500', desc: 'Listing SEO & Copy' },
                        { label: 'Guest Ecosystem', value: projection.ecosystemLift, icon: Users, color: 'text-emerald-500', desc: 'Direct booking network' },
                        { label: 'Design Enhancement', value: projection.designLift, icon: Sparkles, color: 'text-purple-500', desc: 'Visual conversion' },
                        { label: 'Operational Efficiency', value: projection.efficiencyLift, icon: ShieldCheck, color: 'text-rose-500', desc: 'Cost & response time' },
                    ].map((item) => (
                        <div key={item.label} className="p-5 rounded-2xl border border-border bg-card/50 hover:border-primary/50 transition-all group">
                            <item.icon className={cn(item.color, "w-6 h-6 mb-3 transition-transform group-hover:scale-110")} />
                            <p className="text-[10px] font-black text-muted-foreground uppercase tracking-tighter mb-1">{item.label}</p>
                            <p className="text-xl font-black text-black mb-1">+{formatCurrency(item.value)}</p>
                            <p className="text-[9px] text-muted-foreground leading-tight">{item.desc}</p>
                        </div>
                    ))}
                </div>
            </div>

            {/* Section 4: Visual Revenue Enhancement Preview */}
            <div className="space-y-6">
                <div className="flex justify-between items-end">
                    <h3 className="text-xl font-bold flex items-center gap-2">
                        <Sparkles className="text-primary w-5 h-5" />
                        Visual Revenue Enhancement Preview™
                    </h3>
                    <p className="text-xs text-black font-bold opacity-70">Design lift can drive 5-12% higher conversion</p>
                </div>

                <div className="relative aspect-[21/9] rounded-3xl overflow-hidden border-4 border-primary/20 bg-muted group">
                    {/* Original */}
                    <div className="absolute inset-0">
                        <img
                            src={wizardData.aiDesign.images[0]?.url || "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=80"}
                            alt="Original"
                            className="w-full h-full object-cover grayscale-[50%]"
                        />
                        <div className="absolute top-4 left-4 bg-primary/60 backdrop-blur px-3 py-1 rounded-full text-[10px] font-bold text-white uppercase tracking-widest border border-white/20">
                            Original Data
                        </div>
                    </div>

                    {/* Enhanced (Masked by Slider) */}
                    <div
                        className="absolute inset-0 z-10"
                        style={{ clipPath: `inset(0 ${100 - sliderPos}% 0 0)` }}
                    >
                        <img
                            src={wizardData.aiDesign.images[0]?.enhancedUrl || wizardData.aiDesign.images[0]?.url || "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1200&q=80"}
                            alt="Enhanced"
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute top-4 right-4 bg-primary/90 backdrop-blur px-3 py-1 rounded-full text-[10px] font-bold text-white uppercase tracking-widest shadow-glow">
                            Optimized Target Concept
                        </div>
                    </div>

                    {/* Slider Handle */}
                    <div
                        className="absolute top-0 bottom-0 w-1 bg-primary z-20 cursor-ew-resize group-active:scale-x-150 transition-transform"
                        style={{ left: `${sliderPos}%` }}
                    >
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-primary rounded-full flex items-center justify-center shadow-glow border-4 border-background">
                            <ChevronLeft className="w-3 h-3 text-white -mr-1" />
                            <ChevronRight className="w-3 h-3 text-white -ml-1" />
                        </div>
                    </div>

                    {/* invisible input for slider control */}
                    <input
                        type="range"
                        min="0"
                        max="100"
                        value={sliderPos}
                        onChange={(e) => setSliderPos(parseInt(e.target.value))}
                        className="absolute inset-0 z-30 opacity-0 cursor-ew-resize"
                    />
                </div>
            </div>
        </div>
    );
}
