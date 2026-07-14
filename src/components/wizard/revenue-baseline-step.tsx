'use client';

import React from 'react';
import { RevenueBaseline } from '@/types/wizard';
import { cn } from '@/lib/utils';

interface RevenueBaselineStepProps {
    data: Partial<RevenueBaseline>;
    updateData: (data: Partial<RevenueBaseline>) => void;
    operatingMode: 'yes' | 'considering' | 'researching';
}

export function RevenueBaselineStep({ data, updateData, operatingMode }: RevenueBaselineStepProps) {
    const isLtr = operatingMode === 'researching';
    const isConverting = operatingMode === 'considering';

    const ltrAnnualIncome = (data.monthlyRent || 0) * 12;
    const projectedStrRevenue = data.annualRevenue
        ? data.annualRevenue
        : (data.adr || 0) * ((data.occupancy || 0) / 100) * 365;

    const platforms: { id: 'airbnb' | 'vrbo' | 'booking' | 'direct' | 'other'; label: string }[] = [
        { id: 'airbnb', label: 'Airbnb' },
        { id: 'vrbo', label: 'VRBO' },
        { id: 'booking', label: 'Booking.com' },
        { id: 'direct', label: 'Direct Booking' },
        { id: 'other', label: 'Other' },
    ];

    const togglePlatform = (id: any) => {
        const current = data.platforms || [];
        if (current.includes(id)) {
            updateData({ platforms: current.filter((p) => p !== id) });
        } else {
            updateData({ platforms: [...current, id] });
        }
    };

    const renderLtrSection = () => (
        <div className="space-y-6">
            <div className="space-y-4">
                <label className="text-sm font-semibold text-secondary-foreground uppercase tracking-wider">
                    Current Monthly Rent (LTR)
                </label>
                <div className="relative">
                    <span className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">$</span>
                    <input
                        type="number"
                        className="w-full bg-background border border-border rounded-lg p-3 pl-8 focus:ring-2 focus:ring-primary focus:outline-none"
                        placeholder="e.g. 2500"
                        value={data.monthlyRent || ''}
                        onChange={(e) => updateData({ monthlyRent: parseInt(e.target.value), type: 'ltr' })}
                    />
                </div>
            </div>

            <div className="space-y-4">
                <label className="text-sm font-semibold text-secondary-foreground uppercase tracking-wider">
                    Lease Structure
                </label>
                <div className="flex gap-4">
                    {(['annual', 'month-to-month'] as const).map((l) => (
                        <button
                            key={l}
                            onClick={() => updateData({ leaseStructure: l, type: 'ltr' })}
                            className={cn(
                                'flex-1 p-4 rounded-xl border-2 transition-all capitalize font-bold',
                                data.leaseStructure === l
                                    ? 'bg-primary/10 border-primary text-primary shadow-glow'
                                    : 'border-border hover:border-primary/50 text-muted-foreground'
                            )}
                        >
                            {l.replace('-', ' ')}
                        </button>
                    ))}
                </div>
            </div>
        </div>
    );

    const renderStrSection = () => (
        <div className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                    <label className="text-sm font-semibold text-secondary-foreground uppercase tracking-wider">
                        Average Nightly Rate (ADR)
                    </label>
                    <div className="relative">
                        <span className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">$</span>
                        <input
                            type="number"
                            className="w-full bg-background border border-border rounded-lg p-3 pl-8 focus:ring-2 focus:ring-primary focus:outline-none"
                            value={data.adr || ''}
                            onChange={(e) => updateData({ adr: parseInt(e.target.value), type: 'str' })}
                        />
                    </div>
                </div>

                <div className="space-y-2">
                    <label className="text-sm font-semibold text-secondary-foreground uppercase tracking-wider">
                        Average Occupancy (%)
                    </label>
                    <div className="space-y-4 pt-2">
                        <input
                            type="range"
                            min="0"
                            max="100"
                            className="w-full h-2 bg-muted rounded-lg appearance-none cursor-pointer accent-primary"
                            value={data.occupancy || 0}
                            onChange={(e) => updateData({ occupancy: parseInt(e.target.value), type: 'str' })}
                        />
                        <div className="flex justify-between text-xs font-bold text-muted-foreground">
                            <span>0%</span>
                            <span className="text-primary text-lg">{data.occupancy || 0}%</span>
                            <span>100%</span>
                        </div>
                    </div>
                </div>

                <div className="space-y-2 md:col-span-2">
                    <label className="text-sm font-semibold text-secondary-foreground uppercase tracking-wider">
                        Estimated Annual Revenue (optional)
                    </label>
                    <div className="relative">
                        <span className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">$</span>
                        <input
                            type="number"
                            className="w-full bg-background border border-border rounded-lg p-3 pl-8 focus:ring-2 focus:ring-primary focus:outline-none"
                            value={data.annualRevenue || ''}
                            onChange={(e) => updateData({ annualRevenue: parseInt(e.target.value), type: 'str' })}
                            placeholder="e.g. 120000"
                        />
                    </div>
                    <p className="text-xs text-muted-foreground">
                        Optional — helps us estimate revenue potential more accurately.
                    </p>
                </div>
            </div>

            <div className="space-y-4">
                <label className="text-sm font-semibold text-secondary-foreground uppercase tracking-wider">
                    Platforms Used
                </label>
                <div className="flex flex-wrap gap-2">
                    {platforms.map((p) => (
                        <button
                            key={p.id}
                            onClick={() => togglePlatform(p.id)}
                            className={cn(
                                'px-4 py-2 rounded-full text-xs font-bold transition-all border',
                                data.platforms?.includes(p.id)
                                    ? 'bg-primary border-primary text-primary-foreground shadow-glow'
                                    : 'border-border hover:border-primary/50 text-muted-foreground'
                            )}
                        >
                            {p.label}
                        </button>
                    ))}
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                    <label className="text-sm font-semibold text-secondary-foreground uppercase tracking-wider">
                        % Direct Bookings
                    </label>
                    <input
                        type="range"
                        min="0"
                        max="100"
                        className="w-full h-2 bg-muted rounded-lg appearance-none cursor-pointer accent-primary"
                        value={data.directPercentage || 0}
                        onChange={(e) => updateData({ directPercentage: parseInt(e.target.value), type: 'str' })}
                    />
                    <div className="text-center text-primary font-bold">{data.directPercentage || 0}%</div>
                </div>
                <div className="space-y-2">
                    <label className="text-sm font-semibold text-secondary-foreground uppercase tracking-wider">
                        Avg Review Rating
                    </label>
                    <select
                        className="w-full bg-background border border-border rounded-lg p-3 focus:ring-2 focus:ring-primary focus:outline-none"
                        value={data.reviewRating || 5}
                        onChange={(e) => updateData({ reviewRating: parseFloat(e.target.value), type: 'str' })}
                    >
                        {[5, 4, 3, 2, 1].map((r) => (
                            <option key={r} value={r}>
                                {r} Stars
                            </option>
                        ))}
                    </select>
                </div>

                <div className="space-y-2">
                    <label className="text-sm font-semibold text-secondary-foreground uppercase tracking-wider">
                        Do you use pricing software?
                    </label>
                    <div className="flex gap-3">
                        {['yes', 'no'].map((v) => (
                            <button
                                key={v}
                                onClick={() => updateData({ hasPricingSoftware: v === 'yes', type: 'str' })}
                                className={cn(
                                    'flex-1 px-4 py-3 rounded-xl border text-sm font-bold transition-all',
                                    data.hasPricingSoftware === (v === 'yes')
                                        ? 'bg-primary/10 border-primary text-primary shadow-glow'
                                        : 'border-border hover:border-primary/50 text-muted-foreground'
                                )}
                            >
                                {v === 'yes' ? 'Yes' : 'No'}
                            </button>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );

    const renderConversionSummary = () => {
        const delta = projectedStrRevenue - ltrAnnualIncome;
        const deltaLabel = delta >= 0 ? `+${delta.toLocaleString()}` : delta.toLocaleString();

        return (
            <div className="space-y-6">
                <div className="rounded-xl border border-primary/30 bg-primary/5 p-6">
                    <h3 className="text-lg font-bold text-primary">LTR → STR Comparison</h3>
                    <p className="text-sm text-muted-foreground mt-1">
                        Enter your current LTR rent + lease details and your estimated STR inputs below. We’ll compare projected STR revenue to your current LTR income.
                    </p>

                    <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="rounded-lg bg-background/50 border border-border p-4">
                            <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">Current LTR Income</p>
                            <p className="text-2xl font-bold mt-2">${ltrAnnualIncome.toLocaleString()}</p>
                            <p className="text-xs text-muted-foreground mt-1">Based on monthly rent x 12</p>
                        </div>
                        <div className="rounded-lg bg-background/50 border border-border p-4">
                            <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">Projected STR Revenue</p>
                            <p className="text-2xl font-bold mt-2">${projectedStrRevenue.toLocaleString()}</p>
                            <p className="text-xs text-muted-foreground mt-1">
                                Based on ADR, occupancy &amp; annual revenue inputs
                            </p>
                        </div>
                    </div>

                    <div className="mt-4 rounded-lg border border-border bg-background/60 p-4">
                        <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">Difference</p>
                        <p
                            className={cn(
                                'text-2xl font-bold mt-1',
                                delta >= 0 ? 'text-success' : 'text-destructive'
                            )}
                        >
                            {deltaLabel}
                        </p>
                    </div>
                </div>
            </div>
        );
    };

    if (isLtr) {
        return (
            <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
                {renderLtrSection()}
            </div>
        );
    }

    if (isConverting) {
        return (
            <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
                {renderConversionSummary()}
                {renderLtrSection()}
                {renderStrSection()}
            </div>
        );
    }

    return (
        <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
            {renderStrSection()}
        </div>
    );
}
