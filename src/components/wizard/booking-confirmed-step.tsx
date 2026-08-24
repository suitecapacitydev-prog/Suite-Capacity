'use client';

import React from 'react';
import { CheckCircle2, Calendar, Mail, MessageSquare } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { CALENDLY_URL } from '@/lib/constants';

interface BookingConfirmedStepProps {
    scheduledAt?: string;
    leadEmail: string;
    leadPhone?: string;
}

function formatScheduledTime(isoDate?: string): string {
    if (!isoDate) return 'your selected time';
    try {
        return new Date(isoDate).toLocaleString('en-US', {
            weekday: 'long',
            month: 'long',
            day: 'numeric',
            hour: 'numeric',
            minute: '2-digit',
            timeZoneName: 'short',
        });
    } catch {
        return 'your selected time';
    }
}

export function BookingConfirmedStep({ scheduledAt, leadEmail, leadPhone }: BookingConfirmedStepProps) {
    const timeLabel = formatScheduledTime(scheduledAt);

    return (
        <div className="space-y-8 animate-in fade-in zoom-in-95 duration-500 max-w-2xl mx-auto text-center py-8">
            <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-10 h-10 text-primary" />
            </div>
            <div className="space-y-3">
                <h3 className="text-3xl font-black tracking-tighter">You&apos;re All Set!</h3>
                <p className="text-muted-foreground font-medium leading-relaxed">
                    Your Blueprint review is confirmed for <strong className="text-foreground">{timeLabel}</strong>.
                </p>
            </div>

            <div className="glass-panel p-6 space-y-4 text-left">
                <p className="text-[10px] font-black uppercase tracking-widest text-primary">Confirmation Sent</p>
                <div className="flex items-center gap-3 text-sm text-foreground/80">
                    <Mail className="w-4 h-4 text-primary shrink-0" />
                    <span>Full STR Blueprint audit emailed to <strong>{leadEmail}</strong></span>
                </div>
                {leadPhone && (
                    <div className="flex items-center gap-3 text-sm text-foreground/80">
                        <MessageSquare className="w-4 h-4 text-primary shrink-0" />
                        <span>Text confirmation sent to {leadPhone}</span>
                    </div>
                )}
                <div className="flex items-center gap-3 text-sm text-foreground/80">
                    <Calendar className="w-4 h-4 text-primary shrink-0" />
                    <span>Our team has your complete Blueprint results before the call</span>
                </div>
            </div>

            <a href={CALENDLY_URL} target="_blank" rel="noopener noreferrer">
                <Button variant="outline" className="text-xs font-black uppercase tracking-widest">
                    Manage Appointment
                </Button>
            </a>
        </div>
    );
}
