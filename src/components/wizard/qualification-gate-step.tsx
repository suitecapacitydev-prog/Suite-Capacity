'use client';

import React from 'react';
import { QualificationData, OperatingStatus, OwnershipStatus, Timeline } from '@/types/wizard';
import { cn } from '@/lib/utils';
import { Home, Key, Rocket, Search } from 'lucide-react';

interface QualificationGateStepProps {
    data: Partial<QualificationData>;
    updateData: (data: Partial<QualificationData>) => void;
}

export function QualificationGateStep({ data, updateData }: QualificationGateStepProps) {
    const operatingOptions: { value: OperatingStatus; label: string; icon: React.ReactNode }[] = [
        { value: 'yes', label: 'Yes, actively operating', icon: <Rocket className="w-5 h-5" /> },
        { value: 'considering', label: 'No, but considering converting', icon: <Key className="w-5 h-5" /> },
        { value: 'researching', label: 'No, just exploring', icon: <Search className="w-5 h-5" /> },
    ];

    const ownershipOptions: { value: OwnershipStatus; label: string }[] = [
        { value: 'own', label: 'I own it' },
        { value: 'contract', label: 'Under contract' },
        { value: 'shopping', label: 'Actively shopping' },
        { value: 'researching', label: 'Just researching' },
    ];

    const timelineOptions: { value: Timeline; label: string }[] = [
        { value: 'immediately', label: 'Immediately' },
        { value: '30-days', label: 'Within 30 days' },
        { value: '1-3-months', label: '1–3 months' },
        { value: 'just-researching', label: 'Just researching' },
    ];

    return (
        <div className="space-y-10 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div className="space-y-4">
                <label className="text-sm font-semibold text-secondary-foreground uppercase tracking-wider">
                    Are you currently operating this property as a short-term rental?
                </label>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {operatingOptions.map((option) => (
                        <button
                            key={option.value}
                            onClick={() => updateData({ isOperating: option.value })}
                            className={cn(
                                "flex flex-col items-center justify-center p-6 rounded-xl border-2 transition-all gap-3 group relative overflow-hidden",
                                data.isOperating === option.value
                                    ? "bg-primary/10 border-primary text-primary shadow-glow"
                                    : "border-border hover:border-primary/50 text-muted-foreground"
                            )}
                        >
                            <div className={cn(
                                "p-3 rounded-full transition-all duration-300",
                                data.isOperating === option.value
                                    ? "bg-primary text-white scale-110 shadow-lg"
                                    : "bg-muted group-hover:bg-primary/20"
                            )}>
                                {option.icon}
                            </div>
                            <span className={cn(
                                "text-sm font-bold text-center transition-colors",
                                data.isOperating === option.value ? "text-primary" : "text-muted-foreground"
                            )}>{option.label}</span>
                        </button>
                    ))}
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-4">
                    <label className="text-sm font-semibold text-secondary-foreground uppercase tracking-wider">
                        Property Ownership Status
                    </label>
                    <div className="grid grid-cols-2 gap-3">
                        {ownershipOptions.map((option) => (
                            <button
                                key={option.value}
                                onClick={() => updateData({ ownershipStatus: option.value })}
                                className={cn(
                                    "p-3 rounded-lg border text-sm font-medium transition-all text-center",
                                    data.ownershipStatus === option.value
                                        ? "bg-primary border-primary text-primary-foreground"
                                        : "border-border hover:border-primary/50 text-muted-foreground"
                                )}
                            >
                                {option.label}
                            </button>
                        ))}
                    </div>
                </div>

                <div className="space-y-4">
                    <label className="text-sm font-semibold text-secondary-foreground uppercase tracking-wider">
                        Timeline to Optimize or Launch
                    </label>
                    <div className="grid grid-cols-2 gap-3">
                        {timelineOptions.map((option) => (
                            <button
                                key={option.value}
                                onClick={() => updateData({ timeline: option.value })}
                                className={cn(
                                    "p-3 rounded-lg border text-sm font-medium transition-all text-center",
                                    data.timeline === option.value
                                        ? "bg-primary border-primary text-primary-foreground"
                                        : "border-border hover:border-primary/50 text-muted-foreground"
                                )}
                            >
                                {option.label}
                            </button>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
