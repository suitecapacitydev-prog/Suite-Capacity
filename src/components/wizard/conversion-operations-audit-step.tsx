'use client';

import React from 'react';
import { OperationsAudit } from '@/types/wizard';
import { cn } from '@/lib/utils';
import {
    Camera, Paintbrush, FileText, Users, Calendar,
    Zap, MessageSquare, Brush, Drill, Clock
} from 'lucide-react';

interface ConversionOperationsAuditStepProps {
    data: Partial<OperationsAudit>;
    updateData: (data: Partial<OperationsAudit>) => void;
}

export function ConversionOperationsAuditStep({ data, updateData }: ConversionOperationsAuditStepProps) {
    const auditSections = [
        {
            title: 'Conversion Audit',
            questions: [
                {
                    id: 'photography',
                    label: 'Professional Photography?',
                    options: [
                        { value: 'yes-recent', label: 'Yes (within 12mo)' },
                        { value: 'yes-old', label: 'Yes (older than 12mo)' },
                        { value: 'no', label: 'No' },
                    ],
                    icon: <Camera className="w-5 h-5" />
                },
                {
                    id: 'designLevel',
                    label: 'Interior Design Level',
                    options: [
                        { value: 'basic', label: 'Basic functional' },
                        { value: 'updated', label: 'Updated' },
                        { value: 'pro', label: 'Professionally designed' },
                        { value: 'luxury', label: 'Luxury curated' },
                    ],
                    icon: <Paintbrush className="w-5 h-5" />
                },
                {
                    id: 'listingOptimization',
                    label: 'Listing Optimization',
                    options: [
                        { value: 'basic', label: 'Basic description' },
                        { value: 'seo', label: 'SEO optimized' },
                        { value: 'pro', label: 'Professionally written' },
                        { value: 'ai', label: 'Intelligence enhanced' },
                    ],
                    icon: <FileText className="w-5 h-5" />
                },
            ]
        },
        {
            title: 'Operational Audit',
            questions: [
                {
                    id: 'dynamicPricing',
                    label: 'Dynamic Pricing Software?',
                    options: [
                        { value: 'yes', label: 'Yes (Software)' },
                        { value: 'no', label: 'No' },
                        { value: 'manual', label: 'Manual only' },
                    ],
                    icon: <Zap className="w-5 h-5" />
                },
                {
                    id: 'guestMessaging',
                    label: 'Guest Messaging System',
                    options: [
                        { value: 'automated', label: 'Fully automated' },
                        { value: 'partial', label: 'Partially automated' },
                        { value: 'manual', label: 'Fully manual' },
                    ],
                    icon: <MessageSquare className="w-5 h-5" />
                },
                {
                    id: 'cleaningModel',
                    label: 'Cleaning Model',
                    options: [
                        { value: 'dedicated', label: 'Dedicated team' },
                        { value: 'marketplace', label: 'Marketplace' },
                        { value: 'owner', label: 'Owner managed' },
                    ],
                    icon: <Brush className="w-5 h-5" />
                },
                {
                    id: 'maintenance',
                    label: 'Preventative Maintenance Inspections',
                    options: [
                        { value: 'quarterly', label: 'Quarterly' },
                        { value: 'annual', label: 'Annual' },
                        { value: 'reactive', label: 'Reactive only' },
                    ],
                    icon: <Drill className="w-5 h-5" />
                },
                {
                    id: 'responseTime',
                    label: 'Response Time to Guest Inquiries',
                    options: [
                        { value: 'under-10', label: 'Under 10 minutes' },
                        { value: '10-60', label: '10–60 minutes' },
                        { value: '1-hour-plus', label: '1+ hour' },
                    ],
                    icon: <Clock className="w-5 h-5" />
                },
            ]
        }
    ];

    return (
        <div className="space-y-12 animate-in fade-in slide-in-from-bottom-4 duration-500">
            {auditSections.map((section, sIdx) => (
                <div key={sIdx} className="space-y-6">
                    <h3 className="text-xl font-bold text-primary flex items-center gap-2">
                        <span className="w-8 h-1 bg-primary rounded-full" />
                        {section.title}
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {section.questions.map((q) => (
                            <div key={q.id} className="space-y-4">
                                <div className="flex items-center gap-2 text-sm font-semibold text-secondary-foreground uppercase tracking-wider">
                                    {q.icon}
                                    {q.label}
                                </div>
                                <div className="grid grid-cols-2 gap-2">
                                    {q.options.map((opt) => (
                                        <button
                                            key={opt.value}
                                            onClick={() => updateData({ [q.id]: opt.value })}
                                            className={cn(
                                                "p-3 rounded-lg border text-xs font-bold transition-all text-center",
                                                data[q.id as keyof OperationsAudit] === opt.value
                                                    ? "bg-primary border-primary text-primary-foreground shadow-glow"
                                                    : "border-border hover:border-primary/50 text-muted-foreground"
                                            )}
                                        >
                                            {opt.label}
                                        </button>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            ))}

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-4">
                    <label className="text-sm font-semibold text-secondary-foreground uppercase tracking-wider flex items-center gap-2">
                        <Users className="w-5 h-5" /> Target Guest Demographic?
                    </label>
                    <select
                        className="w-full bg-background border border-border rounded-lg p-3 focus:ring-2 focus:ring-primary focus:outline-none"
                        value={data.targetDemographic || 'none'}
                        onChange={(e) => updateData({ targetDemographic: e.target.value as any })}
                    >
                        <option value="none">No defined demographic</option>
                        <option value="families">Families</option>
                        <option value="couples">Couples</option>
                        <option value="groups">Groups</option>
                        <option value="luxury">Luxury travelers</option>
                    </select>
                </div>
                <div className="space-y-4">
                    <label className="text-sm font-semibold text-secondary-foreground uppercase tracking-wider flex items-center gap-2">
                        <Calendar className="w-5 h-5" /> Seasonal Pricing Strategy?
                    </label>
                    <div className="flex gap-2">
                        {(['yes', 'somewhat', 'no'] as const).map(v => (
                            <button
                                key={v}
                                onClick={() => updateData({ seasonalPricing: v })}
                                className={cn(
                                    "flex-1 p-3 rounded-lg border text-xs font-bold transition-all capitalize",
                                    data.seasonalPricing === v
                                        ? "bg-primary border-primary text-primary-foreground shadow-glow"
                                        : "border-border hover:border-primary/50 text-muted-foreground"
                                )}
                            >
                                {v}
                            </button>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
