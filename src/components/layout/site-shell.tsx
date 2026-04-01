"use client";

import React from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { LayoutGrid, BarChart3, Users2, ShieldCheck, Map, Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';
import LoginModal from '@/components/auth/login-modal';
import { signOut } from '@/app/actions/auth';
import { useRouter } from 'next/navigation';

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const router = useRouter();

    // Check for login state on mount and when modal closes
    useEffect(() => {
        const checkAuth = () => {
            const cookies = document.cookie.split('; ');
            const hasDemoSession = cookies.some(c => c.startsWith('suite_demo_session=admin_active'));
            const hasSupaSession = cookies.some(c => c.startsWith('sb-')); // Basic check for Supabase cookie
            setIsLoggedIn(hasDemoSession || hasSupaSession);
        };
        checkAuth();
    }, [isLoginModalOpen]);

    const handleLogout = async () => {
        await signOut();
        setIsLoggedIn(false);
        router.push('/');
        router.refresh();
    };

    return (
        <div className="min-h-screen flex flex-col">
            <header className="fixed top-0 w-full z-50 border-b border-black/5 bg-white">
                <div className="container mx-auto px-6 h-20 flex items-center justify-between">
                    <Link href="/" className="flex items-center group">
                        <img
                            src="/logo.png"
                            alt="Suite Capacity Logo"
                            className="h-10 md:h-12 w-auto transition-transform group-hover:scale-105"
                        />
                    </Link>

                    <nav className="hidden md:flex items-center gap-6 text-sm font-black text-primary uppercase tracking-widest">
                        <Link href="/invest" className="px-3 py-2 hover:bg-primary/5 rounded-lg transition-all active:scale-95">Invest</Link>
                        <Link href="/guest-list" className="px-3 py-2 hover:bg-primary/5 rounded-lg transition-all active:scale-95">Guest List</Link>
                        <Link href="/markets" className="px-3 py-2 hover:bg-primary/5 rounded-lg transition-all active:scale-95">Markets</Link>
                        <Link href="/solutions" className="px-3 py-2 hover:bg-primary/5 rounded-lg transition-all active:scale-95">Services</Link>
                        <Link href="/case-studies" className="px-3 py-2 hover:bg-primary/5 rounded-lg transition-all active:scale-95">Properties</Link>
                        <Link href="/about" className="px-3 py-2 hover:bg-primary/5 rounded-lg transition-all active:scale-95">About</Link>
                    </nav>

                    <div className="flex items-center gap-4">
                        {isLoggedIn ? (
                            <button
                                onClick={handleLogout}
                                className="hidden sm:inline-block text-sm font-semibold text-red-600 px-4 py-2 hover:bg-red-50 rounded-lg transition-all active:scale-95"
                            >
                                Logout
                            </button>
                        ) : (
                            <button
                                onClick={() => setIsLoginModalOpen(true)}
                                className="hidden sm:inline-block text-sm font-semibold text-black px-4 py-2 hover:bg-primary/5 rounded-lg transition-all active:scale-95"
                            >
                                Owner Login
                            </button>
                        )}
                        <Link href="/wizard">
                            <Button variant="intelligence" size="sm" className="hidden sm:inline-flex shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all active:scale-95">
                                Property Audit
                            </Button>
                        </Link>
                        <button
                            className="md:hidden p-2 text-black"
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                        >
                            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                        </button>
                    </div>
                </div>

                {/* Mobile Navigation */}
                {isMenuOpen && (
                    <div className="md:hidden bg-white border-t border-black/5 absolute top-20 left-0 w-full animate-in slide-in-from-top duration-300">
                        <nav className="flex flex-col p-6 gap-2 text-lg font-semibold">
                            <Link href="/invest" onClick={() => setIsMenuOpen(false)} className="px-4 py-3 rounded-xl hover:bg-primary/5 active:bg-primary/10 transition-all text-primary font-bold">Invest</Link>
                            <Link href="/guest-list" onClick={() => setIsMenuOpen(false)} className="px-4 py-3 rounded-xl hover:bg-primary/5 active:bg-primary/10 transition-all text-black">Guest List</Link>
                            <Link href="/markets" onClick={() => setIsMenuOpen(false)} className="px-4 py-3 rounded-xl hover:bg-primary/5 active:bg-primary/10 transition-all text-black">Markets</Link>
                            <Link href="/solutions" onClick={() => setIsMenuOpen(false)} className="px-4 py-3 rounded-xl hover:bg-primary/5 active:bg-primary/10 transition-all text-black">Solutions</Link>
                            <Link href="/case-studies" onClick={() => setIsMenuOpen(false)} className="px-4 py-3 rounded-xl hover:bg-primary/5 active:bg-primary/10 transition-all text-black">Performance</Link>
                            <Link href="/about" onClick={() => setIsMenuOpen(false)} className="px-4 py-3 rounded-xl hover:bg-primary/5 active:bg-primary/10 transition-all text-black">About</Link>
                            <div className="pt-4 mt-2 border-t border-black/5 flex flex-col gap-4">
                                {isLoggedIn ? (
                                    <button
                                        onClick={() => {
                                            setIsMenuOpen(false);
                                            handleLogout();
                                        }}
                                        className="px-4 py-2 font-semibold text-red-600 text-left transition-colors"
                                    >
                                        Logout
                                    </button>
                                ) : (
                                    <button
                                        onClick={() => {
                                            setIsMenuOpen(false);
                                            setIsLoginModalOpen(true);
                                        }}
                                        className="px-4 py-2 font-semibold text-black text-left transition-colors"
                                    >
                                        Owner Login
                                    </button>
                                )}
                                <Link href="/wizard" onClick={() => setIsMenuOpen(false)}>
                                    <Button variant="intelligence" className="w-full">Initial Audit</Button>
                                </Link>
                            </div>
                        </nav>
                    </div>
                )}
            </header>

            <LoginModal
                isOpen={isLoginModalOpen}
                onClose={() => setIsLoginModalOpen(false)}
            />

            <main className="flex-grow pt-20">
                <AnimatePresence mode="wait">
                    <motion.div
                        key="content"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.3 }}
                    >
                        {children}
                    </motion.div>
                </AnimatePresence>
            </main>

            <footer className="bg-card border-t border-border py-12">
                <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12">
                    <div className="space-y-4">
                        <div className="flex items-center">
                            <img
                                src="/logo.png"
                                alt="Suite Capacity Logo"
                                className="h-16 w-auto"
                            />
                        </div>
                        <p className="text-sm text-primary font-bold leading-relaxed">
                            The centralized STR operating platform combining revenue intelligence and local market expertise.
                        </p>
                    </div>

                    <div>
                        <h4 className="font-semibold mb-4">Platform</h4>
                        <ul className="space-y-2 text-sm text-secondary-foreground">
                            <li><Link href="/invest" className="hover:text-primary transition-colors font-bold text-primary">STR Investment</Link></li>
                            <li><Link href="/platform/revenue-intelligence" className="hover:text-primary transition-colors">Revenue Intelligence</Link></li>
                            <li><Link href="/guest-list" className="hover:text-primary transition-colors">Guest List (Book Direct)</Link></li>
                            <li><Link href="/platform/deployment" className="hover:text-primary transition-colors">7-Day Deployment</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-semibold mb-4">Markets</h4>
                        <ul className="space-y-2 text-sm text-secondary-foreground">
                            <li><Link href="/markets/jersey-shore" className="hover:text-primary transition-colors">Jersey Shore</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-semibold mb-4">Resources</h4>
                        <ul className="space-y-2 text-sm text-secondary-foreground">
                            <li><Link href="/blog" className="hover:text-primary transition-colors">Blog</Link></li>
                            <li><Link href="/showcase" className="hover:text-primary transition-colors">Video Showcase</Link></li>
                            <li><Link href="/about" className="hover:text-primary transition-colors">About Us</Link></li>
                            <li><Link href="/case-studies" className="hover:text-primary transition-colors">Case Studies</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-semibold mb-4">Contact</h4>
                        <p className="text-sm text-secondary-foreground">
                            info@suitecapacity.com<br />
                            +1 (855) 303-4545<br />
                            Central Command Center
                        </p>
                    </div>
                </div>
                <div className="container mx-auto px-6 mt-12 pt-8 border-t border-border flex justify-between items-center text-xs text-primary font-bold">
                    <p>© 2024 Suite Capacity. All rights reserved.</p>
                    <div className="flex gap-6">
                        <Link href="#">Privacy Policy</Link>
                        <Link href="#">Terms of Service</Link>
                    </div>
                </div>
            </footer>
        </div>
    );
}
