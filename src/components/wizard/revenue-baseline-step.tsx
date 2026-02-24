'use client';

import React from 'react';
import { RevenueBaseline } from '@/types/wizard';
import { cn } from '@/lib/utils';
import { Smartphone, Globe, CreditCard, Star, Calendar, Home } from 'lucide-react';

interface RevenueBaselineStepProps {
    data: Partial<RevenueBaseline>;
    updateData: (data: Partial<RevenueBaseline>) => void;
    isOperating: boolean;
}

export function RevenueBaselineStep({ data, updateData, isOperating }: RevenueBaselineStepProps) {
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
            updateData({ platforms: current.filter(p => p !== id) });
        } else {
            updateData({ platforms: [...current, id] });
        }
    };

    if (!isOperating) {
        return (
            <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
                <div className="space-y-4">
                    <label className="text-sm font-semibold text-secondary-foreground uppercase tracking-wider">Current Monthly Rent (LTR)</label>
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
                    <label className="text-sm font-semibold text-secondary-foreground uppercase tracking-wider">Lease Structure</label>
                    <div className="flex gap-4">
                        {(['annual', 'month-to-month'] as const).map(l => (
                            <button
                                key={l}
                                onClick={() => updateData({ leaseStructure: l, type: 'ltr' })}
                                className={cn(
                                    "flex-1 p-4 rounded-xl border-2 transition-all capitalize font-bold",
                                    data.leaseStructure === l
                                        ? "bg-primary/10 border-primary text-primary shadow-glow"
                                        : "border-border hover:border-primary/50 text-muted-foreground"
                                )}
                            >
                                {l.replace('-', ' ')}
                            </button>
                        ))}
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                    <label className="text-sm font-semibold text-secondary-foreground uppercase tracking-wider">Average Nightly Rate (ADR)</label>
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
                    <label className="text-sm font-semibold text-secondary-foreground uppercase tracking-wider">Average Occupancy (%)</label>
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
            </div>

            <div className="space-y-4">
                <label className="text-sm font-semibold text-secondary-foreground uppercase tracking-wider">Platforms Used</label>
                <div className="flex flex-wrap gap-2">
                    {platforms.map(p => (
                        <button
                            key={p.id}
                            onClick={() => togglePlatform(p.id)}
                            className={cn(
                                "px-4 py-2 rounded-full text-xs font-bold transition-all border",
                                data.platforms?.includes(p.id)
                                    ? "bg-primary border-primary text-primary-foreground shadow-glow"
                                    : "border-border hover:border-primary/50 text-muted-foreground"
                            )}
                        >
                            {p.label}
                        </button>
                    ))}
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                    <label className="text-sm font-semibold text-secondary-foreground uppercase tracking-wider">% Direct Bookings</label>
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
                    <label className="text-sm font-semibold text-secondary-foreground uppercase tracking-wider">Avg Review Rating</label>
                    <select
                        className="w-full bg-background border border-border rounded-lg p-3 focus:ring-2 focus:ring-primary focus:outline-none"
                        value={data.reviewRating || 5}
                        onChange={(e) => updateData({ reviewRating: parseFloat(e.target.value), type: 'str' })}
                    >
                        {[5, 4.5, 4, 3.5, 3, 2, 1].map(r => (
                            <option key={r} value={r}>{r} Stars</option>
                        ))}
                    </select>
                </div>
            </div>
        </div>
    );
}
