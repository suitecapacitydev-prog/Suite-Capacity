'use client';

import React, { useState, useEffect, useRef } from 'react';
import { cn } from '@/lib/utils';
import { Sparkles, BarChart3, Search, Zap, CheckCircle2, X } from 'lucide-react';

export function ProcessingScreenStep({
    onComplete,
    onCancel,
}: {
    onComplete: () => void;
    onCancel?: () => void;
}) {
    const [progress, setProgress] = useState(0);
    const [currentMessageIdx, setCurrentMessageIdx] = useState(0);
    const cancelledRef = useRef(false);

    const messages = [
        { text: "Analyzing Market Demand", icon: <Search className="w-5 h-5" /> },
        { text: "Scanning Comparable Listings", icon: <BarChart3 className="w-5 h-5" /> },
        { text: "Evaluating Revenue Gaps", icon: <Zap className="w-5 h-5" /> },
        { text: "Optimizing Design Rendering", icon: <Sparkles className="w-5 h-5" /> },
        { text: "Generating Custom Growth Plan", icon: <CheckCircle2 className="w-5 h-5" /> },
    ];

    useEffect(() => {
        const totalDuration = 10000; // 10 seconds
        const interval = 50;
        const increment = (interval / totalDuration) * 100;

        const timer = setInterval(() => {
            setProgress((prev) => {
                if (prev >= 100 || cancelledRef.current) {
                    clearInterval(timer);
                    return 100;
                }
                return prev + increment;
            });
        }, interval);

        const messageInterval = totalDuration / messages.length;
        const msgTimer = setInterval(() => {
            setCurrentMessageIdx((prev) => (prev < messages.length - 1 ? prev + 1 : prev));
        }, messageInterval);

        return () => {
            clearInterval(timer);
            clearInterval(msgTimer);
        };
    }, [messages.length]);

    useEffect(() => {
        if (progress >= 100 && !cancelledRef.current) {
            onComplete();
        }
    }, [progress, onComplete]);

    const handleCancel = () => {
        cancelledRef.current = true;
        onCancel?.();
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-[400px] space-y-12 animate-in fade-in duration-1000">
            <div className="relative w-48 h-48">
                <div className="absolute inset-0 rounded-full border-4 border-primary/20" />
                <svg className="w-full h-full -rotate-90">
                    <circle
                        cx="96"
                        cy="96"
                        r="92"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="8"
                        className="text-primary shadow-glow transition-all duration-300 ease-out"
                        strokeDasharray={578}
                        strokeDashoffset={578 - (578 * progress) / 100}
                    />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                    <div className="relative">
                        <Sparkles className="w-16 h-16 text-primary animate-pulse" />
                        <div className="absolute -inset-4 bg-primary/20 blur-2xl rounded-full -z-10 animate-pulse" />
                    </div>
                </div>
            </div>

            <div className="space-y-6 w-full max-w-md">
                <div className="space-y-4">
                    {messages.map((msg, idx) => (
                        <div
                            key={idx}
                            className={cn(
                                "flex items-center gap-4 p-4 rounded-xl border transition-all duration-500",
                                idx === currentMessageIdx
                                    ? "bg-primary/10 border-primary text-primary shadow-glow scale-105"
                                    : idx < currentMessageIdx
                                        ? "bg-muted/50 border-muted opacity-50"
                                        : "bg-transparent border-transparent opacity-20"
                            )}
                        >
                            <div className={cn(
                                "p-2 rounded-full",
                                idx === currentMessageIdx ? "bg-primary text-primary-foreground" : "bg-muted"
                            )}>
                                {msg.icon}
                            </div>
                            <span className="font-bold tracking-wide">{msg.text}</span>
                            {idx < currentMessageIdx && <CheckCircle2 className="w-5 h-5 ml-auto text-primary" />}
                        </div>
                    ))}
                </div>

                <div className="text-center text-xs font-bold uppercase tracking-[0.2em] text-muted-foreground animate-pulse">
                    Processing Intelligence Data... {Math.round(progress)}%
                </div>
            </div>

            <div className="flex justify-center">
                <button
                    type="button"
                    onClick={handleCancel}
                    className="inline-flex items-center gap-2 px-6 py-2 rounded-full border border-muted bg-muted/60 text-sm font-bold text-muted-foreground hover:bg-muted hover:text-foreground transition"
                >
                    <X className="w-4 h-4" />
                    Cancel
                </button>
            </div>
        </div>
    );
}
