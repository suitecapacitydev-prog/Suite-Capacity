'use client';

import React, { useEffect, useRef, useCallback, useState, useMemo } from 'react';
import { WizardData } from '@/types/wizard';
import { CALENDLY_URL } from '@/lib/constants';
import { Calendar, Loader2, ShieldCheck, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { markBookingScheduled } from '@/app/actions/wizard-actions';

interface BlueprintBookingStepProps {
    wizardData: WizardData;
    submissionId: string;
    onBookingConfirmed: (scheduledAt?: string) => void;
    onBack?: () => void;
}

function buildCalendlyEmbedUrl(wizardData: WizardData, submissionId: string): string {
    const url = new URL(CALENDLY_URL);
    url.searchParams.set('embed_type', 'Inline');
    url.searchParams.set('hide_gdpr_banner', '1');

    if (typeof window !== 'undefined') {
        url.searchParams.set('embed_domain', window.location.hostname || 'localhost');
    }

    if (wizardData.lead.name) url.searchParams.set('name', wizardData.lead.name);
    if (wizardData.lead.email) url.searchParams.set('email', wizardData.lead.email);
    url.searchParams.set('utm_content', submissionId);
    url.searchParams.set('utm_campaign', 'str-blueprint');

    return url.toString();
}

export function BlueprintBookingStep({
    wizardData,
    submissionId,
    onBookingConfirmed,
    onBack,
}: BlueprintBookingStepProps) {
    const bookingProcessed = useRef(false);
    const [loadStatus, setLoadStatus] = useState<'loading' | 'ready' | 'error'>('loading');

    const calendlyEmbedUrl = useMemo(
        () => buildCalendlyEmbedUrl(wizardData, submissionId),
        [wizardData, submissionId],
    );

    const handleBookingScheduled = useCallback(async (payload: any) => {
        if (bookingProcessed.current) return;
        bookingProcessed.current = true;

        const eventUri = payload?.event?.uri;
        const inviteeUri = payload?.invitee?.uri;
        const scheduledAt = payload?.event?.start_time;

        try {
            await markBookingScheduled(submissionId, {
                calendlyEventUri: eventUri,
                calendlyInviteeUri: inviteeUri,
                scheduledAt,
                inviteeEmail: wizardData.lead.email,
            });
        } catch (err) {
            console.error('Failed to record booking:', err);
        }

        onBookingConfirmed(scheduledAt);
    }, [submissionId, wizardData.lead.email, onBookingConfirmed]);

    useEffect(() => {
        const handleMessage = (event: MessageEvent) => {
            if (event.origin !== 'https://calendly.com') return;
            if (event.data?.event !== 'calendly.event_scheduled') return;
            handleBookingScheduled(event.data.payload);
        };

        window.addEventListener('message', handleMessage);
        return () => window.removeEventListener('message', handleMessage);
    }, [handleBookingScheduled]);

    useEffect(() => {
        const timeout = setTimeout(() => {
            setLoadStatus((current) => (current === 'loading' ? 'error' : current));
        }, 12000);

        return () => clearTimeout(timeout);
    }, [calendlyEmbedUrl]);

    return (
        <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500 max-w-4xl mx-auto">
            <div className="text-center space-y-3">
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-black uppercase tracking-widest border border-primary/20">
                    <Calendar className="w-4 h-4" />
                    Schedule Your Review
                </div>
                <h3 className="text-2xl md:text-3xl font-black tracking-tighter">
                    Schedule My Blueprint Review
                </h3>
                <p className="text-sm md:text-base text-muted-foreground font-medium max-w-xl mx-auto">
                    Pick a time below to unlock your full STR Blueprint audit. A confirmation will be sent to {wizardData.lead.email}.
                </p>
            </div>

            <div className="flex items-center justify-center gap-2 text-xs font-bold uppercase tracking-widest text-primary bg-primary/5 border border-primary/10 rounded-xl py-3 px-4">
                <ShieldCheck className="w-4 h-4" />
                Required to access your complete audit &amp; recommendations
            </div>

            <div className="relative w-full min-h-[680px] rounded-2xl overflow-hidden border border-black/5 bg-white">
                {loadStatus === 'loading' && (
                    <div className="absolute inset-0 z-10 flex flex-col items-center justify-center gap-4 text-muted-foreground bg-white">
                        <Loader2 className="w-10 h-10 animate-spin text-primary" />
                        <p className="text-sm font-medium">Loading calendar…</p>
                    </div>
                )}

                {loadStatus === 'error' && (
                    <div className="absolute inset-0 z-10 flex flex-col items-center justify-center gap-4 p-8 text-center bg-white">
                        <p className="text-sm font-medium text-muted-foreground max-w-md">
                            The calendar couldn&apos;t load here. Use the button below to open booking in a new tab.
                        </p>
                        <a href={calendlyEmbedUrl} target="_blank" rel="noopener noreferrer">
                            <Button variant="intelligence" className="gap-2 font-black uppercase tracking-widest text-xs">
                                <ExternalLink className="w-4 h-4" />
                                Open Booking Calendar
                            </Button>
                        </a>
                    </div>
                )}

                {loadStatus !== 'error' && (
                    <iframe
                        title="Schedule STR Blueprint Review"
                        src={calendlyEmbedUrl}
                        width="100%"
                        height="680"
                        frameBorder="0"
                        className="w-full border-0"
                        onLoad={() => setLoadStatus('ready')}
                    />
                )}
            </div>

            <div className="text-center">
                <a
                    href={calendlyEmbedUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-bold uppercase tracking-widest text-muted-foreground hover:text-primary transition-colors inline-flex items-center gap-1"
                >
                    <ExternalLink className="w-3.5 h-3.5" />
                    Open calendar in new tab
                </a>
            </div>

            {onBack && (
                <div className="text-center">
                    <button
                        type="button"
                        onClick={onBack}
                        className="text-xs font-bold uppercase tracking-widest text-muted-foreground hover:text-primary transition-colors"
                    >
                        ← Back to preview
                    </button>
                </div>
            )}
        </div>
    );
}
