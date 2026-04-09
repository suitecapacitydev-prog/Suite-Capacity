'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Mail, Lock, Loader2, ArrowRight, CheckCircle2, Copy, ExternalLink, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useRouter } from 'next/navigation';
import { signUpGuestMember, validatePromoCode } from '@/app/actions/guest-signup';

interface GuestListModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export default function GuestListModal({ isOpen, onClose }: GuestListModalProps) {
    const router = useRouter();
    const [error, setError] = useState<string | null>(null);
    const [promoError, setPromoError] = useState<string | null>(null);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isValidating, setIsValidating] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);
    const [showPromoInput, setShowPromoInput] = useState(false);
    const [promoInput, setPromoInput] = useState('');
    const [promoCode, setPromoCode] = useState('');
    const [isExisting, setIsExisting] = useState(false);
    const [form, setForm] = useState({ firstName: '', email: '', phone: '' })
    const [copied, setCopied] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!form.firstName.trim() || !form.email.trim()) {
            setError('Please enter your Full Name and email address.');
            return;
        }
        setIsSubmitting(true);
        setError(null);
        try {
            const result = await signUpGuestMember({
                firstName: form.firstName.trim(),
                email: form.email.trim(),
                phone: form.phone.trim() || undefined,
            });
            if (result.success) {
                setPromoCode(result.promoCode || '');
                setIsExisting(result.isExisting || false);
                setIsSuccess(true);
                localStorage.setItem('guest_list_unlocked', 'true');
            } else {
                setError(result.error || 'Something went wrong. Please try again.');
            }
        } catch {
            setError('Something went wrong. Please try again.');
        } finally {
            setIsSubmitting(false);
        }
    };

    const handleValidateCode = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!promoInput.trim()) return;

        setIsValidating(true);
        setPromoError(null);
        try {
            const result = await validatePromoCode(promoInput.trim());
            if (result.success) {
                localStorage.setItem('guest_list_unlocked', 'true');
                onClose();
                router.push('/guest-list/exclusive');
            } else {
                setPromoError(result.error || 'Invalid promo code.');
            }
        } catch {
            setPromoError('Something went wrong. Please try again.');
        } finally {
            setIsValidating(false);
        }
    };

    const copyToClipboard = () => {
        navigator.clipboard.writeText(promoCode);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };


    return (
        <AnimatePresence>
            {isOpen && (
                <div id="signup-modal" className="fixed inset-0 z-[100] flex items-center justify-center p-6">
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="absolute inset-0 bg-primary/60 backdrop-blur-sm"
                    />

                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: 20 }}
                        transition={{ type: 'spring', damping: 25, stiffness: 300 }}
                        className="w-full max-w-xl relative z-10"
                    >
                        <div className="glass-panel p-10 bg-white shadow-2xl rounded-3xl border-primary/20 relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-3xl " />
                            <div className="relative z-10">
                                <button
                                    onClick={() => {
                                        setError(null);
                                        onClose();
                                    }}
                                    className="absolute -top-4 -right-4 p-2 hover:bg-primary/5 rounded-full transition-colors z-20"
                                >
                                    <X className="w-6 h-6 text-black/60" />
                                </button>

                                <AnimatePresence mode="wait">
                                    {!isSuccess ? (
                                        <motion.div
                                            key="form"
                                            initial={{ opacity: 0, x: -20 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            exit={{ opacity: 0, x: 20 }}
                                            className="space-y-8"
                                        >
                                            <div className="text-center">
                                                <h2 className="text-3xl font-black mb-2 text-black tracking-tight leading-tight">Join The Guest List</h2>
                                                <p className="text-black/50">Start saving on your next STR stay.</p>
                                            </div>

                                            {!showPromoInput ? (
                                                <>
                                                    <form className="space-y-4" onSubmit={handleSubmit}>
                                                        {/* Full Name */}
                                                        <div className="space-y-2">
                                                            <label className="text-xs font-bold uppercase tracking-widest text-black/60 px-1">Full Name</label>
                                                            <input
                                                                type="text"
                                                                className="w-full bg-black/5 border-0 rounded-xl px-4 py-3.5 focus:ring-2 focus:ring-primary outline-none transition-all"
                                                                placeholder="Enter your Full Name"
                                                                required
                                                                value={form.firstName}
                                                                onChange={(e) => setForm(f => ({ ...f, firstName: e.target.value }))}
                                                            />
                                                        </div>
                                                        {/* Email */}
                                                        <div className="space-y-2">
                                                            <label className="text-xs font-bold uppercase tracking-widest text-black/60 px-1">Email Address</label>
                                                            <input
                                                                type="email"
                                                                className="w-full bg-black/5 border-0 rounded-xl px-4 py-3.5 focus:ring-2 focus:ring-primary outline-none transition-all"
                                                                placeholder="Enter your email"
                                                                required
                                                                value={form.email}
                                                                onChange={(e) => setForm(f => ({ ...f, email: e.target.value }))}
                                                            />
                                                        </div>
                                                        {/* Phone (optional) */}
                                                        <div className="space-y-2">
                                                            <label className="text-xs font-bold uppercase tracking-widest text-black/60 px-1">
                                                                Phone Number <span className="font-normal normal-case text-black/40">(Optional   recommended)</span>
                                                            </label>
                                                            <input
                                                                type="tel"
                                                                className="w-full bg-black/5 border-0 rounded-xl px-4 py-3.5 focus:ring-2 focus:ring-primary outline-none transition-all"
                                                                placeholder="+1 (855) 303-4545"
                                                                value={form.phone}
                                                                onChange={(e) => setForm(f => ({ ...f, phone: e.target.value }))}
                                                            />
                                                        </div>
                                                        {error && (
                                                            <div className=" text-red-700 text-center text-md font-medium">
                                                                {error}
                                                            </div>
                                                        )}
                                                        <Button
                                                            variant="intelligence"
                                                            type="submit"
                                                            disabled={isSubmitting}
                                                            className="w-full h-14 text-lg font-bold mt-4 shadow-xl shadow-primary/20 hover:scale-[1.02] transition-all"
                                                        >
                                                            {isSubmitting ? (
                                                                <><Loader2 className="w-4 h-4 mr-2 animate-spin" /> Unlocking Access...</>
                                                            ) : (
                                                                <>Get Member Access <Lock className="w-4 h-4 ml-2" /></>
                                                            )}
                                                        </Button>
                                                    </form>
                                                    <div className="text-center pt-4">
                                                        <button
                                                            onClick={() => setShowPromoInput(true)}
                                                            className="text-xs font-bold text-primary hover:underline underline-offset-4"
                                                        >
                                                            Already have a promo code? Enter it here
                                                        </button>
                                                    </div>
                                                </>
                                            ) : (
                                                <div className="space-y-6 py-4">
                                                    <div className="flex items-center gap-4 text-black/20">
                                                        <div className="h-px flex-1 bg-current" />
                                                        <span className="text-[10px] font-bold uppercase tracking-[0.2em] whitespace-nowrap">Unlock with code</span>
                                                        <div className="h-px flex-1 bg-current" />
                                                    </div>
                                                    <form onSubmit={handleValidateCode} className="relative group">
                                                        <input
                                                            type="text"
                                                            placeholder="Enter Promo Code"
                                                            value={promoInput}
                                                            onChange={(e) => setPromoInput(e.target.value.toUpperCase())}
                                                            className="w-full bg-white border border-black/10 rounded-2xl px-6 py-4 text-center font-mono font-bold tracking-widest focus:ring-2 focus:ring-primary outline-none transition-all shadow-sm group-hover:shadow-md h-16"
                                                        />
                                                        <button
                                                            disabled={isValidating || !promoInput.trim()}
                                                            type="submit"
                                                            className="absolute right-2 top-2 bottom-2 px-6 bg-black text-white rounded-xl font-bold text-sm hover:bg-primary transition-all disabled:opacity-50 disabled:hover:bg-black"
                                                        >
                                                            {isValidating ? <Loader2 className="w-4 h-4 animate-spin" /> : 'Unlock'}
                                                        </button>
                                                    </form>
                                                    {promoError && (
                                                        <p className="text-xs font-bold text-red-500 text-center">{promoError}</p>
                                                    )}
                                                    <div className="text-center">
                                                        <button
                                                            onClick={() => setShowPromoInput(false)}
                                                            className="text-xs font-bold text-black/40 hover:text-black transition-colors"
                                                        >
                                                            Back to sign up
                                                        </button>
                                                    </div>
                                                </div>
                                            )}
                                        </motion.div>
                                    ) : (
                                        <motion.div
                                            key="success"
                                            initial={{ opacity: 0, scale: 0.9 }}
                                            animate={{ opacity: 1, scale: 1 }}
                                            className="text-center space-y-8 py-4"
                                        >
                                            <div className="relative inline-block">
                                                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-2">
                                                    <CheckCircle2 className="w-10 h-10 text-green-600" />
                                                </div>
                                                <motion.div
                                                    animate={{ rotate: 360 }}
                                                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                                                    className="absolute -top-2 -right-2 text-primary"
                                                >
                                                </motion.div>
                                            </div>

                                            <div className="space-y-4">
                                                <h2 className="text-4xl font-black text-black tracking-tight leading-tight">
                                                    Congratulations!
                                                </h2>
                                                <p className="text-black/60 text-lg">
                                                    {isExisting
                                                        ? "Welcome back! Your member access is active."
                                                        : "You've successfully joined the private guest list."}
                                                </p>
                                            </div>

                                            <div className="bg-black/5 rounded-2xl p-6 border border-black/5 space-y-4 relative overflow-hidden group">
                                                <p className="text-xs font-bold uppercase tracking-widest text-black/40">Your One-Time Promo Code</p>
                                                <div className="flex items-center justify-between gap-4 bg-white border border-primary/20 rounded-xl p-4 shadow-inner">
                                                    <span className="text-2xl font-black text-primary tracking-widest font-mono">{promoCode}</span>
                                                    <button
                                                        onClick={copyToClipboard}
                                                        className="p-2 hover:bg-primary/10 rounded-lg transition-colors flex items-center gap-2 group/btn"
                                                    >
                                                        {copied ? <CheckCircle2 className="w-4 h-4 text-green-600" /> : <Copy className="w-4 h-4 text-primary" />}
                                                        <span className="text-xs font-bold text-primary group-hover/btn:underline">{copied ? 'Copied!' : 'Copy'}</span>
                                                    </button>
                                                </div>
                                                <p className="text-[10px] text-black/40">Use this code to unlock All Properties.</p>
                                                <input
                                                    type="promocode"
                                                    required
                                                    onChange={(e) => setPromoInput(e.target.value)}
                                                    className="w-full bg-primary/5 border-none rounded-2xl py-4 pl-4 pr-4 text-black focus:ring-2 focus:ring-primary/20 transition-all outline-none"
                                                    placeholder="Enter Promo Code"
                                                />
                                                {error && <p className="text-md py-4 pl-4 pr-4 text-destructive transition-all outline-none">{error}</p>}

                                            </div>

                                            <div className="flex flex-col gap-3">
                                                <Button
                                                    variant="intelligence"
                                                    size="lg"
                                                    className="h-14 text-lg font-bold shadow-xl shadow-primary/20"
                                                    onClick={() => {
                                                        if (promoInput === promoCode) {
                                                            onClose();
                                                            setPromoInput("");
                                                            setError(null);
                                                            router.push('/guest-list/exclusive');
                                                        }
                                                        else if (promoInput === "") {
                                                            setError("Please Enter Promo Code!");
                                                        } else {
                                                            setError("Invalid Promo Code");
                                                        }
                                                    }}
                                                >
                                                    Unlock Member Properties <ArrowRight className="w-4 h-4 ml-2" />
                                                </Button>
                                                <button
                                                    onClick={() => {
                                                        setError(null);
                                                        setIsSuccess(false);
                                                        localStorage.setItem('guest_list_unlocked', 'false');
                                                        onClose()

                                                    }}
                                                    className="text-sm font-bold text-black/40 hover:text-black transition-colors"
                                                >
                                                    Dismiss
                                                </button>
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    )
}
