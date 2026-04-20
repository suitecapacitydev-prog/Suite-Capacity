'use client';

import React, { useState, useEffect } from 'react';
import { RevenueProjection, WizardData } from '@/types/wizard';
import { cn } from '@/lib/utils';
import {
    TrendingUp, TrendingDown, DollarSign, Star,
    Zap, Users, ShieldCheck, MapPin, BarChart3,
    ChevronLeft, ChevronRight, Sparkles, ArrowRight, ArrowLeft
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { MARKETS } from '@/data/markets';

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
    onBack?: () => void;
}

export function ResultsDashboardStep({ projection, wizardData, submissionStatus, onBack }: ResultsDashboardStepProps) {
    const [animatedRevenue, setAnimatedRevenue] = useState(0);
    const [sliderPos, setSliderPos] = useState(50);

    const isShoreTown = (addr: string) => {
        const shoreTowns = ['seaside', 'lavallette', 'ortley', 'point pleasant', 'belmar', 'spring lake', 'asbury', 'long branch'];
        return shoreTowns.some(t => addr.toLowerCase().includes(t));
    };

    const isShore = isShoreTown(wizardData.property.address);

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

            if (progress < 1) requestAnimationFrame(animate);
        };
        requestAnimationFrame(animate);
    }, [projection.optimizedRevenue]);

    const formatCurrency = (val: number) =>
        new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 }).format(val);

    // helpers for Content Generation (Fallback if AI is missing)
    const getPositioningContent = () => {
        if (projection.intelligence?.positioning) {
            return projection.intelligence.positioning;
        }

        const type = wizardData.property.propertyType.replace('-', ' ');
        const br = wizardData.property.bedrooms;
        const location = isShore ? "the high-yield Jersey Shore barrier island market" : "its local competitive set";
        const city = wizardData.property.address.split(',')[0];
        const occupancyContext = isShore ? "massive summer demand spikes" : "steady year-round demand";

        return {
            description: `A ${br}-bedroom ${type} property located in ${city}, positioned to capture ${occupancyContext} within ${location}.`,
            marketPositioning: wizardData.audit.designLevel === 'basic' ? "Budget to Mid-tier Asset (High Upside)" : "Premium-Tier Potential",
            strengths: `Strategic ${isShore ? "coastal" : "local"} location, ${br} guest rooms, and ${wizardData.property.parking} parking a critical value driver in ${city}.`,
            limitations: wizardData.audit.designLevel === 'basic' || wizardData.audit.designLevel === 'updated'
                ? "Outdated interior staging and lack of 'Tulum-inspired' lifestyle amenities currently capping nightly rate potential."
                : "Under-optimized listing SEO and lack of dynamic pricing, leading to occupancy leakage during shoulder periods."
        };
    };

    const pos = getPositioningContent();
    const intelligence = projection.intelligence;
    const liftPct = Math.round((projection.optimizedRevenue / projection.currentRevenue - 1) * 100);

    const selectedMarket = MARKETS.find(m => m.id === wizardData.property.marketId) || MARKETS.find(m => wizardData.property.address.toLowerCase().includes(m.name.toLowerCase()));

    return (
        <div className="space-y-20 animate-in fade-in slide-in-from-bottom-4 duration-1000">
            {/* Market Index Analysis - NEW SECTION */}
            <div className="p-8 rounded-[2rem] bg-slate-50 border border-slate-200">
                <div className="flex flex-col md:flex-row justify-between items-center gap-8">
                    <div className="flex items-center gap-4">
                        <div className={cn("w-16 h-16 rounded-2xl flex items-center justify-center shadow-lg", selectedMarket?.color || 'bg-primary text-white')}>
                            {selectedMarket?.icon ? React.createElement(selectedMarket.icon, { className: "w-8 h-8" }) : <MapPin className="w-8 h-8" />}
                        </div>
                        <div>
                            <h3 className="text-2xl font-black tracking-tight">{selectedMarket?.name || 'Local Market'} Analysis</h3>
                            <p className="text-xs font-bold text-muted-foreground uppercase tracking-widest">{selectedMarket?.detail || 'General Market Context'}</p>
                        </div>
                    </div>
                    <div className="flex gap-12">
                        <div className="text-center">
                            <p className="text-[10px] font-black text-muted-foreground uppercase tracking-widest mb-1">Market Multiplier</p>
                            <p className="text-3xl font-black text-primary">{selectedMarket?.multiplier || '1.15'}x</p>
                        </div>
                        <div className="text-center">
                            <p className="text-[10px] font-black text-muted-foreground uppercase tracking-widest mb-1">Demand Index</p>
                            <p className="text-3xl font-black text-emerald-600">{(projection.marketComparison.demandIndex).toFixed(0)}%</p>
                        </div>
                        <div className="text-center">
                            <p className="text-[10px] font-black text-muted-foreground uppercase tracking-widest mb-1">Status</p>
                            <div className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-700 text-[10px] font-black uppercase tracking-widest">
                                <Zap className="w-2.5 h-2.5 fill-emerald-600" />
                                {selectedMarket?.status || 'Active'}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* 1. PROPERTY POSITIONING SNAPSHOT */}
            <section className="space-y-6">
                <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                        <MapPin className="text-primary w-5 h-5" />
                    </div>
                    <div>
                        <h2 className="text-2xl font-black tracking-tight text-foreground uppercase">1. Property Positioning Snapshot</h2>
                        <p className="text-xs font-bold text-muted-foreground uppercase tracking-widest">Market Context & Asset Assessment</p>
                    </div>
                </div>

                <div className="glass-panel p-8 grid md:grid-cols-2 gap-10 intelligence-border">
                    <div className="space-y-6">
                        <div>
                            <p className="text-[10px] font-black text-primary uppercase tracking-widest mb-2">Description</p>
                            <p className="text-lg font-medium leading-relaxed">{pos.description}</p>
                        </div>
                        <div>
                            <p className="text-[10px] font-black text-primary uppercase tracking-widest mb-2">Market Positioning</p>
                            <p className="text-xl font-black">{pos.marketPositioning}</p>
                        </div>
                    </div>
                    <div className="space-y-6 border-l border-border/50 pl-10">
                        <div>
                            <p className="text-[10px] font-black text-emerald-600 uppercase tracking-widest mb-2">Key Strengths</p>
                            <p className="text-sm font-medium">{pos.strengths}</p>
                        </div>
                        <div>
                            <p className="text-[10px] font-black text-rose-600 uppercase tracking-widest mb-2">Key Limitations</p>
                            <p className="text-sm font-medium">{pos.limitations}</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* High-Fidelity Comparison Chart Section */}
            <section className="space-y-8">
                <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-slate-100 flex items-center justify-center">
                        <BarChart3 className="text-slate-600 w-5 h-5" />
                    </div>
                    <div>
                        <h2 className="text-2xl font-black tracking-tight text-foreground uppercase">Revenue Comparison & Depth</h2>
                        <p className="text-xs font-bold text-muted-foreground uppercase tracking-widest">AirDNA Standard vs. Suite Capacity Optimized</p>
                    </div>
                </div>

                <div className="grid md:grid-cols-5 gap-6">
                    <div className="md:col-span-3 glass-panel p-8 intelligence-border h-full flex flex-col">
                        <div className="flex justify-between items-center mb-12">
                            <div>
                                <h4 className="text-sm font-black uppercase tracking-tight">Projected Trajectory</h4>
                                <p className="text-[10px] text-muted-foreground font-bold uppercase tracking-widest">12-Month Impact Analysis</p>
                            </div>
                            <div className="flex gap-4">
                                <div className="flex items-center gap-2">
                                    <div className="w-3 h-3 rounded-full bg-slate-300" />
                                    <span className="text-[10px] font-bold text-muted-foreground uppercase">AirDNA Average</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <div className="w-3 h-3 rounded-full bg-primary shadow-glow" />
                                    <span className="text-[10px] font-bold text-primary uppercase">Suite Capacity</span>
                                </div>
                            </div>
                        </div>

                        {/* Custom SVG Line Chart for High-Fidelity look */}
                        <div className="flex-1 relative min-h-[250px] w-full">
                            <svg className="w-full h-full" viewBox="0 0 400 200" preserveAspectRatio="none">
                                {/* AirDNA Path (Median) */}
                                <path
                                    d="M 0 160 Q 100 150, 200 140 T 400 130"
                                    fill="none"
                                    stroke="#cbd5e1"
                                    strokeWidth="3"
                                    strokeDasharray="4 2"
                                />
                                {/* Suite Capacity Path (Optimized) */}
                                <path
                                    d="M 0 160 Q 100 130, 200 100 T 400 60"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="5"
                                    className="text-primary animate-draw shadow-glow"
                                    style={{ 
                                        filter: 'drop-shadow(0px 4px 8px rgba(59, 130, 246, 0.5))',
                                    }}
                                />
                                {/* Data points */}
                                <circle cx="400" cy="130" r="4" fill="#64748b" />
                                <circle cx="400" cy="60" r="6" fill="currentColor" className="text-primary shadow-glow" />
                            </svg>
                            
                            {/* Overlay labels */}
                            <div className="absolute top-2 right-0 bg-primary text-white text-[10px] font-black px-2 py-1 rounded-lg animate-bounce">
                                Optimized Target: {formatCurrency(projection.optimizedRevenue)}
                            </div>
                            <div className="absolute bottom-16 right-0 bg-slate-100 text-slate-500 text-[10px] font-black px-2 py-1 rounded-lg">
                                AirDNA Baseline: {formatCurrency(projection.marketComparison.marketMedianAdr * 0.6 * 365)}
                            </div>
                        </div>

                        <div className="mt-8 grid grid-cols-4 gap-2">
                            {['Spring', 'Summer', 'Fall', 'Winter'].map((season, i) => (
                                <div key={season} className="text-center">
                                    <p className="text-[10px] font-black text-muted-foreground uppercase tracking-widest">{season}</p>
                                    <div className="h-1.5 w-full bg-slate-100 rounded-full mt-1 overflow-hidden">
                                        <div 
                                            className="h-full bg-primary transition-all duration-1000" 
                                            style={{ width: `${60 + (i === 1 ? 40 : i === 0 ? 20 : 10)}%` }}
                                        />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="md:col-span-2 space-y-6">
                        <div className="glass-panel p-6 border-slate-200">
                            <p className="text-[10px] font-black text-muted-foreground uppercase tracking-widest mb-4">Market Benchmark (Top 10%)</p>
                            <div className="space-y-4">
                                <div className="flex justify-between items-end">
                                    <div>
                                        <p className="text-2xl font-black text-foreground">{formatCurrency(projection.marketComparison.topQuartileAdr)}</p>
                                        <p className="text-[10px] font-bold text-muted-foreground uppercase">Top Tier ADR</p>
                                    </div>
                                    <div className="text-right">
                                        <p className="text-lg font-bold text-emerald-600">Peak</p>
                                        <p className="text-[9px] font-bold text-muted-foreground uppercase tracking-tighter">Competitive Edge</p>
                                    </div>
                                </div>
                                <div className="h-1 w-full bg-slate-100 rounded-full">
                                    <div className="h-full bg-emerald-500 rounded-full w-[85%]" />
                                </div>
                            </div>
                        </div>

                        <div className="p-8 rounded-3xl bg-black text-white space-y-4 relative overflow-hidden">
                            <div className="absolute top-0 right-0 p-4 opacity-20">
                                <Sparkles className="w-24 h-24" />
                            </div>
                            <h4 className="text-lg font-black uppercase tracking-tight relative z-10">Direct Booking Engine Upside</h4>
                            <p className="text-xs text-white/60 font-medium leading-relaxed relative z-10">We shift 30%+ of OTA traffic to your direct portal, saving 15-18% in distribution fees alone.</p>
                            <div className="pt-2 flex items-center gap-2">
                                <DollarSign className="text-primary w-5 h-5" />
                                <p className="text-2xl font-black text-white">{liftPct}% <span className="text-[10px] text-white/40 uppercase tracking-widest">Commission Recovery</span></p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 2. CURRENT MARKET PERFORMANCE (BASELINE) */}
            <section className="space-y-6">
                <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                        <BarChart3 className="text-primary w-5 h-5" />
                    </div>
                    <div>
                        <h2 className="text-2xl font-black tracking-tight text-foreground uppercase">2. Current Market Performance (Baseline)</h2>
                        <p className="text-xs font-bold text-muted-foreground uppercase tracking-widest">Historical Asset Performance</p>
                    </div>
                </div>

                <div className="grid md:grid-cols-4 gap-4">
                    <div className="glass-panel p-6 intelligence-border">
                        <p className="text-[10px] font-black text-muted-foreground uppercase tracking-widest mb-3">Est. Annual Revenue</p>
                        <p className="text-3xl font-black">{formatCurrency(projection.currentRevenue)}</p>
                    </div>
                    <div className="glass-panel p-6 border-border/30">
                        <p className="text-[10px] font-black text-muted-foreground uppercase tracking-widest mb-3">Peak Season Weekly</p>
                        <p className="text-2xl font-bold">{formatCurrency(projection.performanceBreakdown?.peakWeeklyRate || (projection.currentRevenue * 0.7) / 12)}</p>
                        <p className="text-[9px] font-bold text-primary italic mt-1 uppercase">{projection.performanceBreakdown?.peakContribution || 70}% Impact Window</p>
                    </div>
                    <div className="glass-panel p-6 border-border/30">
                        <p className="text-[10px] font-black text-muted-foreground uppercase tracking-widest mb-3">Shoulder Contribution</p>
                        <p className="text-2xl font-bold">{projection.performanceBreakdown?.shoulderContribution || 20}%</p>
                        <p className="text-[9px] font-medium text-muted-foreground mt-1 uppercase">Sept-Oct / April-May</p>
                    </div>
                    <div className="glass-panel p-6 border-border/30">
                        <p className="text-[10px] font-black text-muted-foreground uppercase tracking-widest mb-3">Off-Season contribution</p>
                        <p className="text-2xl font-bold">{projection.performanceBreakdown?.offSeasonContribution || 10}%</p>
                        <p className="text-[9px] font-medium text-muted-foreground mt-1 uppercase">Winter Anchor Strategy</p>
                    </div>
                </div>
                <p className="text-sm text-black/60 font-medium italic">
                    “Based on real-time data for {selectedMarket?.name || 'this market'}, this property is currently performing within its baseline bracket. There is a verified {liftPct}% upside available through active institutional management.”
                </p>
            </section>

            {/* 3. MISSED REVENUE OPPORTUNITIES */}
            <section className="space-y-6">
                <div className="flex items-center gap-3 text-rose-600">
                    <div className="w-10 h-10 rounded-xl bg-rose-50 flex items-center justify-center">
                        <TrendingDown className="w-5 h-5" />
                    </div>
                    <div>
                        <h2 className="text-2xl font-black tracking-tight uppercase">3. Missed Revenue Opportunities</h2>
                        <p className="text-xs font-bold uppercase tracking-widest opacity-70">Identified Leakage Areas</p>
                    </div>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                    <div className="space-y-4">
                        {(intelligence?.missedOpportunities || [
                            { title: "Outdated Visual Identity", desc: "Current photography and interior staging fail to capture the premium 'lifestyle' pricing bracket." },
                            { title: "Sub-Optimal Amenity Mix", desc: "Lack of experiential outdoor or workspace features reduces booking conversion by 18-22%." },
                            { title: "Static Pricing Model", desc: "Manual rate management results in significant compression during mid-week and shoulder periods." }
                        ]).map((item, i) => {
                            const title = typeof item === 'string' ? item : item.title;
                            const desc = typeof item === 'string' ? "" : item.desc;
                            return (
                                <div key={i} className="flex gap-4 p-4 rounded-2xl bg-rose-50/50 border border-rose-100">
                                    <Zap className="w-5 h-5 text-rose-500 shrink-0" />
                                    <div>
                                        <p className="font-black text-sm uppercase text-rose-900">{title}</p>
                                        {desc && <p className="text-xs text-rose-800/80 leading-relaxed mt-1">{desc}</p>}
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                    <div className="flex flex-col justify-center items-center text-center p-8 bg-black rounded-3xl text-white space-y-4">
                        <DollarSign className="w-12 h-12 text-primary" />
                        <h4 className="text-2xl font-black">Average Loss: {formatCurrency(projection.optimizedRevenue - projection.currentRevenue)}</h4>
                        <p className="text-sm opacity-70 max-w-xs uppercase font-bold tracking-tighter">Revenue left on the table annually due to sub-professional optimization.</p>
                    </div>
                </div>
            </section>

            {/* 4. SUITE CAPACITY OPTIMIZED PROJECTION */}
            <section className="space-y-8">
                <div className="flex items-center gap-3 text-primary">
                    <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                        <TrendingUp className="w-5 h-5" />
                    </div>
                    <div>
                        <h2 className="text-2xl font-black tracking-tight uppercase">4. Suite Capacity Optimized Projection</h2>
                        <p className="text-xs font-bold uppercase tracking-widest opacity-70">Projected Delta with Institutional Management</p>
                    </div>
                </div>

                <div className="p-12 rounded-[2rem] bg-primary intelligence-border relative overflow-hidden group">
                    <div className="absolute top-0 right-0 p-10 opacity-10 pointer-events-none">
                        <Zap className="w-64 h-64 text-white" />
                    </div>

                    <div className="relative z-10 grid md:grid-cols-2 gap-12 items-center">
                        <div className="space-y-2">
                            <p className="text-[10px] font-black text-white uppercase tracking-widest">Optimized Annual Target</p>
                            <h3 className="text-7xl font-black text-white tracking-tighter">{formatCurrency(animatedRevenue)}</h3>
                            <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-white text-primary text-xs font-black uppercase tracking-widest">
                                +{liftPct}% Growth Projection
                            </div>
                        </div>
                        <div className="glass-panel bg-white p-8 space-y-6 text-black border-none shadow-2xl relative">
                            <div className="absolute top-0 right-0 p-4 opacity-10">
                                <TrendingUp className="w-12 h-12 text-primary" />
                            </div>
                            <div>
                                <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest mb-1">New Peak Weekly Rate</p>
                                <p className="text-4xl font-black text-black">{intelligence?.optimizedProjection?.newPeakWeeklyRate || formatCurrency((projection.optimizedRevenue * 0.75) / 12)}</p>
                            </div>
                            <div className="pt-6 border-t border-slate-100 grid grid-cols-2 gap-4">
                                <div>
                                    <p className="text-[9px] font-bold text-slate-500 uppercase">Projected Range</p>
                                    <p className="text-xl font-bold text-black">{intelligence?.optimizedProjection?.revenueRange || "At Market Cap"}</p>
                                </div>
                                <div>
                                    <p className="text-[9px] font-bold text-slate-500 uppercase">Occupancy Target</p>
                                    <p className="text-xl font-bold text-black">78%+</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 5. REVENUE LIFT SUMMARY */}
            <section className="glass-panel p-10 bg-gradient-to-r from-background to-card border-l-8 border-l-primary intelligence-border">
                <div className="grid md:grid-cols-3 gap-8 text-center md:text-left">
                    <div className="space-y-1">
                        <p className="text-[10px] font-black text-muted-foreground uppercase tracking-widest">Baseline Revenue</p>
                        <p className="text-3xl font-black text-slate-400 line-through">{formatCurrency(projection.currentRevenue)}</p>
                    </div>
                    <div className="space-y-1">
                        <p className="text-[10px] font-black text-primary uppercase tracking-widest">Optimized Revenue</p>
                        <p className="text-4xl font-black text-primary">{formatCurrency(projection.optimizedRevenue)}</p>
                    </div>
                    <div className="space-y-1 bg-primary/5 p-4 rounded-2xl border border-primary/20">
                        <p className="text-[10px] font-black text-primary uppercase tracking-widest">Net Revenue Lift</p>
                        <p className="text-4xl font-black text-primary">+{formatCurrency(projection.optimizedRevenue - projection.currentRevenue)}</p>
                        <p className="text-[10px] font-black text-primary uppercase tracking-widest opacity-70">Per Annum</p>
                    </div>
                </div>
                <p className="text-sm font-bold text-black/80 mt-10 text-center uppercase tracking-tight">
                    “With professional optimization, this property has the potential to outperform the current market average by approximately {liftPct - 5}–{liftPct + 5}%.”
                </p>
            </section>

            {/* 6. DESIGN & AMENITY STRATEGY */}
            <section className="space-y-8">
                <div className="flex justify-between items-end">
                    <div className="space-y-2">
                        <div className="flex items-center gap-3">
                            <Sparkles className="text-primary w-6 h-6" />
                            <h2 className="text-2xl font-black tracking-tight uppercase">6. Design & Amenity Strategy</h2>
                        </div>
                        <p className="text-xs font-bold text-muted-foreground uppercase tracking-widest">Visual Revenue Enhancement Preview™</p>
                    </div>
                    <div className="text-right hidden md:block">
                        <p className="text-3xl font-black text-primary">+{formatCurrency(projection.designLift)}</p>
                        <p className="text-[10px] font-bold text-muted-foreground uppercase">Estimated Value Lift</p>
                    </div>
                </div>

                <div className="grid lg:grid-cols-2 gap-10">
                    <div className="relative aspect-video rounded-3xl overflow-hidden border-4 border-primary/20 bg-muted group shadow-2xl">
                        {/* Image Comparison Slider logic (kept but refined) */}
                        <div className="absolute inset-0">
                            <img src={wizardData.aiDesign.images[0]?.url || "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0"} alt="Original" className="w-full h-full object-cover grayscale-[50%]" />
                            <div className="absolute top-4 left-4 bg-primary/60 backdrop-blur px-3 py-1 rounded-full text-[10px] font-bold text-white uppercase tracking-widest border border-white/20">Original Asset</div>
                        </div>
                        <div className="absolute inset-0 z-10" style={{ clipPath: `inset(0 ${100 - sliderPos}% 0 0)` }}>
                            <img src={wizardData.aiDesign.images[0]?.enhancedUrl || wizardData.aiDesign.images[0]?.url || "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d"} alt="Enhanced" className="w-full h-full object-cover" />
                            <div className="absolute top-4 right-4 bg-primary/90 backdrop-blur px-3 py-1 rounded-full text-[10px] font-bold text-white uppercase tracking-widest shadow-glow">Optimized Target Concept</div>
                        </div>
                        <div className="absolute top-0 bottom-0 w-1 bg-primary z-20 cursor-ew-resize group-active:scale-x-150 transition-transform" style={{ left: `${sliderPos}%` }}>
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-primary rounded-full flex items-center justify-center shadow-glow border-4 border-background">
                                <ChevronLeft className="w-3 h-3 text-white -mr-1" />
                                <ChevronRight className="w-3 h-3 text-white -ml-1" />
                            </div>
                        </div>
                        <input type="range" min="0" max="100" value={sliderPos} onChange={(e) => setSliderPos(parseInt(e.target.value))} className="absolute inset-0 z-30 opacity-0 cursor-ew-resize" />
                    </div>

                    <div className="glass-panel p-8 space-y-8 intelligence-border">
                        <div className="space-y-4">
                            <h4 className="text-xl font-black uppercase tracking-tighter">
                                {intelligence?.designStrategy?.recommendation.split(':')[0] || (wizardData.aiDesign.images[0]?.category === 'outdoor' || wizardData.aiDesign.images[0]?.category === 'exterior' ? 'Experiential Lounge Strategy' : 'Tulum Tropical Modern direction')}
                            </h4>
                            <p className="text-sm text-black/70 leading-relaxed font-medium">
                                {intelligence?.designStrategy?.recommendation || (wizardData.aiDesign.images[0]?.category === 'outdoor' || wizardData.aiDesign.images[0]?.category === 'exterior'
                                    ? "We recommend implementing a fire pit lounge with string lighting and outdoor dining zones to drive higher off-season conversion. A signature differentiator like professional mini-golf or hammocks directly supports premium nightly rates."
                                    : "Focus on a neutral palette (sand, beige, warm whites) combined with natural woods and textures like linen and jute. Statement lighting and greenery will create the 'experience-first' aesthetic that commands top-tier pricing.")}
                            </p>
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                            {(intelligence?.designStrategy?.tags || ['Neutral Palette', 'Natural Woods', 'Textured Jute', 'Statement Lighting']).map(tag => (
                                <div key={tag} className="flex items-center gap-2 px-3 py-2 rounded-xl bg-primary/5 text-primary text-[10px] font-black uppercase tracking-widest">
                                    <Sparkles className="w-3 h-3" />
                                    {tag}
                                </div>
                            ))}
                        </div>
                        <p className="text-xs font-bold italic text-primary">
                            {intelligence?.designStrategy?.impact || "“These upgrades directly support higher nightly rates and significantly improved booking conversion via platform algorithms.”"}
                        </p>
                    </div>
                </div>
            </section>

            {/* 7. LISTING OPTIMIZATION STRATEGY */}
            <section className="space-y-6">
                <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                        <Zap className="text-primary w-5 h-5" />
                    </div>
                    <div>
                        <h2 className="text-2xl font-black tracking-tight uppercase">7. Listing Optimization Strategy</h2>
                        <p className="text-xs font-bold text-muted-foreground uppercase tracking-widest">Performance Copy & SEO Stacking</p>
                    </div>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                    <div className="glass-panel p-8 space-y-6">
                        <p className="text-[10px] font-black text-primary uppercase tracking-widest">Proposed Title Strategy</p>
                        <div className="space-y-4">
                            <div className="p-4 rounded-xl border border-rose-100 bg-rose-50 text-rose-900 line-through opacity-50">
                                <p className="text-xs font-bold uppercase mb-1">Standard (Ineffective)</p>
                                <p className="text-lg font-medium">{intelligence?.listingStrategy?.titleStrategy?.bad || `${wizardData.property.bedrooms} Bedroom ${wizardData.property.propertyType.replace('-', ' ')} in ${wizardData.property.address.split(',')[0]}`}</p>
                            </div>
                            <div className="p-4 rounded-xl border border-emerald-200 bg-emerald-50 text-emerald-900">
                                <p className="text-xs font-bold uppercase mb-1 text-emerald-600">Optimized (Suite Capacity Standard)</p>
                                <p className="text-lg font-black">{intelligence?.listingStrategy?.titleStrategy?.good || (isShore ? 'Tulum-Inspired Coastal Retreat w/ Fire Pit + Game Room' : 'Designer Urban Sanctuary w/ Chef\'s Kitchen + Workspace')}</p>
                            </div>
                        </div>
                    </div>
                    <div className="glass-panel p-8 space-y-6">
                        <p className="text-[10px] font-black text-primary uppercase tracking-widest">Description Logic</p>
                        <ul className="space-y-4">
                            {(intelligence?.listingStrategy?.descriptionStrategy || [
                                "Experience-First: Leading with the feeling of the stay, not just square footage.",
                                "Emotion-Driven: Crafting a narrative for family or retreat demographics.",
                                "Conversion Stacking: Strategic keyword placement to win performance SEO."
                            ]).map((item, i) => {
                                const [title, desc] = typeof item === 'string' && item.includes(':') ? item.split(':') : [item, ""];
                                return (
                                    <li key={i} className="flex gap-4">
                                        <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center text-[10px] font-black text-primary shrink-0">{i + 1}</div>
                                        <div className="space-y-0.5">
                                            <p className="text-xs font-black uppercase text-foreground">{title}</p>
                                            {desc && <p className="text-[11px] text-muted-foreground font-medium">{desc}</p>}
                                        </div>
                                    </li>
                                );
                            })}
                        </ul>
                    </div>
                </div>
            </section>

            {/* 8. WHY SUITE CAPACITY */}
            <section className="p-12 rounded-[2rem] bg-black text-white space-y-10 relative overflow-hidden">
                <div className="relative z-10 grid lg:grid-cols-2 gap-16 items-center">
                    <div className="space-y-6">
                        <h2 className="text-4xl font-black tracking-tighter leading-none">
                            {intelligence?.whySuiteCapacity?.split('.')[0] || "Most properties in this market underperform because they lack professional optimization."}
                        </h2>
                        <p className="text-lg text-white/70 font-medium">
                            {intelligence?.whySuiteCapacity || "Suite Capacity is the institutional unlock for individual owners who want to run their asset like a high-end luxury hotel."}
                        </p>
                        <div className="grid grid-cols-2 gap-8 pt-6">
                            {[
                                { title: "Dynamic Pricing", desc: "Daily adjustment logic" },
                                { title: "Multi-Platform", desc: "Global distribution reach" },
                                { title: "Guest Ops v2", desc: "Hotel-level automation" },
                                { title: "Review Engine", desc: "Automated 5-star scaling" }
                            ].map((item, i) => (
                                <div key={i} className="space-y-1">
                                    <p className="text-xs font-bold uppercase text-primary tracking-widest">{item.title}</p>
                                    <p className="text-[11px] text-white/50">{item.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="space-y-6">
                        <div className="p-8 rounded-3xl bg-white/5 border border-white/10 space-y-4">
                            <h4 className="text-xl font-bold italic">“Professional management isn't a cost it's the only way to capture the remaining 30%+ of your property's value.”</h4>
                        </div>
                        <div className="flex flex-col gap-4">
                            <Link href="/invest#accelerator">
                                <Button variant="intelligence" size="lg" className="w-full text-xs font-black uppercase tracking-widest gap-3 h-16">
                                    Apply for Accelerator
                                    <ArrowRight className="w-4 h-4" />
                                </Button>
                            </Link>
                            <a href="https://calendly.com/suitecapacity/consultation-and-discovery-call" target="_blank" rel="noopener noreferrer">
                                <Button variant="outline" size="lg" className="w-full text-xs font-black uppercase tracking-widest h-16 border-white/20 hover:bg-white/5 text-white">
                                    Book Strategy Session
                                </Button>
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer Control */}
            <div className="flex justify-between items-center pt-10 border-t border-border/30">
                <Button variant="outline" onClick={onBack} className="gap-2 text-[10px] font-black uppercase tracking-widest px-8">
                    <ArrowLeft className="w-4 h-4" /> Edit Inputs
                </Button>
                <div className="flex items-center gap-4 text-[10px] font-bold text-muted-foreground uppercase tracking-widest">
                    <span>Generated by Suite Capacity Intel®</span>
                    <div className="w-1 h-1 rounded-full bg-primary" />
                    <span>Real-Time Market Data Active</span>
                </div>
            </div>
        </div>
    );
}
