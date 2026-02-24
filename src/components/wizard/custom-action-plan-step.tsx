'use client';

import React from 'react';
import { WizardData } from '@/types/wizard';
import { cn } from '@/lib/utils';
import {
    CheckCircle2, ArrowRight, Zap, Target,
    Camera, Paintbrush, Globe, ShieldCheck, Clock
} from 'lucide-react';

interface CustomActionPlanStepProps {
    data: WizardData;
}

export function CustomActionPlanStep({ data }: CustomActionPlanStepProps) {
    const generateActions = (data: WizardData) => {
        const actions = [];

        if (data.audit.dynamicPricing !== 'yes') {
            actions.push({
                title: 'Activate Dynamic Pricing Intelligence',
                desc: 'Switch to algorithmic pricing to capture market demand spikes.',
                icon: <Zap className="w-5 h-5" />,
                priority: 'high'
            });
        }

        if (data.audit.photography === 'no' || data.audit.photography === 'yes-old') {
            actions.push({
                title: 'Refresh Professional Photography',
                desc: 'New imagery can increase booking conversion by up to 40%.',
                icon: <Camera className="w-5 h-5" />,
                priority: 'high'
            });
        }

        if (data.audit.listingOptimization === 'basic') {
            actions.push({
                title: 'Optimize Listing SEO & Copy',
                desc: 'Implement high-intent keywords to rank higher on search results.',
                icon: <Target className="w-5 h-5" />,
                priority: 'medium'
            });
        }

        if (data.baseline.directPercentage && data.baseline.directPercentage < 20) {
            actions.push({
                title: 'Implement Direct Booking Funnel',
                desc: 'Reduce dependency on OTAs and eliminate 15% booking fees.',
                icon: <Globe className="w-5 h-5" />,
                priority: 'high'
            });
        }

        if (data.audit.guestMessaging === 'manual') {
            actions.push({
                title: 'Install Response Automation',
                desc: 'Target <10 min response time to win more guest inquiries.',
                icon: <Clock className="w-5 h-5" />,
                priority: 'medium'
            });
        }

        if (data.audit.designLevel === 'basic' || data.audit.designLevel === 'updated') {
            actions.push({
                title: 'Deploy Design Enhancement Concept',
                desc: 'Modernize furnishings and staging to align with luxury demographics.',
                icon: <Paintbrush className="w-5 h-5" />,
                priority: 'medium'
            });
        }

        actions.push({
            title: 'Implement Preventative Inspections',
            desc: 'Move to quarterly proactive maintenance to protect asset value.',
            icon: <ShieldCheck className="w-5 h-5" />,
            priority: 'low'
        });

        return actions;
    };

    const actions = generateActions(data);

    return (
        <div className="space-y-10 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div className="space-y-4">
                <h3 className="text-2xl font-bold tracking-tight">Your Custom Revenue Action Plan</h3>
                <p className="text-muted-foreground">
                    Based on our analysis, we have identified your primary "Revenue Leaks" and the fastest path to optimization.
                </p>
            </div>

            <div className="grid grid-cols-1 gap-4">
                {actions.map((action, idx) => (
                    <div
                        key={idx}
                        className={cn(
                            "group relative p-6 rounded-2xl border transition-all hover:border-primary/50 bg-card/50",
                            action.priority === 'high' ? "border-primary/30" : "border-border"
                        )}
                    >
                        <div className="flex gap-4 items-start">
                            <div className={cn(
                                "p-3 rounded-xl",
                                action.priority === 'high' ? "bg-primary/20 text-primary" : "bg-muted text-muted-foreground"
                            )}>
                                {action.icon}
                            </div>
                            <div className="flex-1 space-y-1">
                                <div className="flex items-center gap-3">
                                    <h4 className="font-bold text-lg">{action.title}</h4>
                                    <span className={cn(
                                        "px-2 py-0.5 rounded-full text-[10px] font-black uppercase tracking-widest",
                                        action.priority === 'high' ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground"
                                    )}>
                                        {action.priority} Priority
                                    </span>
                                </div>
                                <p className="text-sm text-muted-foreground">{action.desc}</p>
                            </div>
                            <CheckCircle2 className="w-6 h-6 text-muted-foreground/30 group-hover:text-primary transition-colors" />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
