'use client';

import React from 'react';
import { LeadCapture, Timeline } from '@/types/wizard';
import { cn } from '@/lib/utils';
import { User, Mail, Phone, Calendar, SwitchCamera, Sparkles } from 'lucide-react';

interface LeadCaptureGateStepProps {
    data: Partial<LeadCapture>;
    updateData: (data: Partial<LeadCapture>) => void;
}

export function LeadCaptureGateStep({ data, updateData }: LeadCaptureGateStepProps) {
    const timelineOptions: { value: Timeline; label: string }[] = [
        { value: 'immediately', label: 'Immediately' },
        { value: '30-days', label: 'Within 30 days' },
        { value: '1-3-months', label: '1–3 months' },
        { value: 'just-researching', label: 'Just researching' },
    ];

    return (
        <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500 max-w-2xl mx-auto">
            <div className="text-center space-y-3">
                <Sparkles className="w-12 h-12 text-primary mx-auto mb-2" />
                <h3 className="text-3xl font-bold tracking-tight">Your Revenue Intelligence Report is Ready</h3>
                <p className="text-muted-foreground text-lg">
                    Unlock your full Market Analysis, Revenue Projections, and AI Design Enhancements.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                    <label className="text-sm font-semibold text-secondary-foreground uppercase tracking-wider">Full Name</label>
                    <div className="relative">
                        <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                        <input
                            type="text"
                            className="w-full bg-background border border-border rounded-lg p-3 pl-10 focus:ring-2 focus:ring-primary focus:outline-none transition-all"
                            placeholder="John Doe"
                            value={data.name || ''}
                            onChange={(e) => updateData({ name: e.target.value })}
                        />
                    </div>
                </div>
                <div className="space-y-2">
                    <label className="text-sm font-semibold text-secondary-foreground uppercase tracking-wider">Email Address</label>
                    <div className="relative">
                        <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                        <input
                            type="email"
                            className="w-full bg-background border border-border rounded-lg p-3 pl-10 focus:ring-2 focus:ring-primary focus:outline-none transition-all"
                            placeholder="john@example.com"
                            value={data.email || ''}
                            onChange={(e) => updateData({ email: e.target.value })}
                        />
                    </div>
                </div>
                <div className="space-y-2">
                    <label className="text-sm font-semibold text-secondary-foreground uppercase tracking-wider">Phone Number</label>
                    <div className="relative">
                        <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                        <input
                            type="tel"
                            className="w-full bg-background border border-border rounded-lg p-3 pl-10 focus:ring-2 focus:ring-primary focus:outline-none transition-all"
                            placeholder="(555) 123-4567"
                            value={data.phone || ''}
                            onChange={(e) => updateData({ phone: e.target.value })}
                        />
                    </div>
                </div>
                <div className="space-y-2">
                    <label className="text-sm font-semibold text-secondary-foreground uppercase tracking-wider">Timeline to Optimize</label>
                    <div className="relative">
                        <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                        <select
                            className="w-full bg-background border border-border rounded-lg p-3 pl-10 focus:ring-2 focus:ring-primary focus:outline-none appearance-none"
                            value={data.timeline || 'immediately'}
                            onChange={(e) => updateData({ timeline: e.target.value as any })}
                        >
                            {timelineOptions.map(opt => (
                                <option key={opt.value} value={opt.value}>{opt.label}</option>
                            ))}
                        </select>
                    </div>
                </div>
            </div>

            <div className="space-y-4 pt-4 border-t border-border/50">
                <label className="text-sm font-semibold text-secondary-foreground uppercase tracking-wider flex items-center gap-2">
                    <SwitchCamera className="w-5 h-5" /> Are you considering switching management?
                </label>
                <div className="flex gap-4">
                    {(['yes', 'maybe', 'no'] as const).map(v => (
                        <button
                            key={v}
                            onClick={() => updateData({ switchingManagement: v })}
                            className={cn(
                                "flex-1 p-3 rounded-lg border text-sm font-bold transition-all capitalize",
                                data.switchingManagement === v
                                    ? "bg-primary border-primary text-primary-foreground shadow-glow"
                                    : "border-border hover:border-primary/50 text-muted-foreground"
                            )}
                        >
                            {v}
                        </button>
                    ))}
                </div>
            </div>

            <div className="space-y-2">
                <label className="text-sm font-semibold text-secondary-foreground uppercase tracking-wider">Current Manager (Optional)</label>
                <input
                    type="text"
                    className="w-full bg-background border border-border rounded-lg p-3 focus:ring-2 focus:ring-primary focus:outline-none transition-all"
                    placeholder="e.g. Vacasa, Evolve, Self-managed"
                    value={data.currentManager || ''}
                    onChange={(e) => updateData({ currentManager: e.target.value })}
                />
            </div>
        </div>
    );
}
