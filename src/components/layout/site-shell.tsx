"use client";

import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { LayoutGrid, BarChart3, Users2, ShieldCheck, Map, Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

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

                    <nav className="hidden md:flex items-center gap-6 text-sm font-semibold text-black">
                        <Link href="/platform" className="px-3 py-2 hover:bg-black/5 rounded-lg transition-all active:scale-95">Platform</Link>
                        <Link href="/markets" className="px-3 py-2 hover:bg-black/5 rounded-lg transition-all active:scale-95">Markets</Link>
                        <Link href="/solutions" className="px-3 py-2 hover:bg-black/5 rounded-lg transition-all active:scale-95">Solutions</Link>
                        <Link href="/case-studies" className="px-3 py-2 hover:bg-black/5 rounded-lg transition-all active:scale-95">Performance</Link>
                        <Link href="/about" className="px-3 py-2 hover:bg-black/5 rounded-lg transition-all active:scale-95">About</Link>
                    </nav>

                    <div className="flex items-center gap-4">
                        <Link href="/login" className="hidden sm:inline-block text-sm font-semibold text-black px-4 py-2 hover:bg-black/5 rounded-lg transition-all active:scale-95">Owner Login</Link>
                        <Link href="/wizard">
                            <Button variant="intelligence" size="sm" className="hidden sm:inline-flex shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all active:scale-95">
                                Initial Audit
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
                            <Link href="/platform" onClick={() => setIsMenuOpen(false)} className="px-4 py-3 rounded-xl hover:bg-black/5 active:bg-black/10 transition-all text-black">Platform</Link>
                            <Link href="/markets" onClick={() => setIsMenuOpen(false)} className="px-4 py-3 rounded-xl hover:bg-black/5 active:bg-black/10 transition-all text-black">Markets</Link>
                            <Link href="/solutions" onClick={() => setIsMenuOpen(false)} className="px-4 py-3 rounded-xl hover:bg-black/5 active:bg-black/10 transition-all text-black">Solutions</Link>
                            <Link href="/case-studies" onClick={() => setIsMenuOpen(false)} className="px-4 py-3 rounded-xl hover:bg-black/5 active:bg-black/10 transition-all text-black">Performance</Link>
                            <Link href="/about" onClick={() => setIsMenuOpen(false)} className="px-4 py-3 rounded-xl hover:bg-black/5 active:bg-black/10 transition-all text-black">About</Link>
                            <div className="pt-4 mt-2 border-t border-black/5 flex flex-col gap-4">
                                <Link href="/login" onClick={() => setIsMenuOpen(false)} className="px-4 py-2 font-semibold text-black transition-colors">Owner Login</Link>
                                <Link href="/wizard" onClick={() => setIsMenuOpen(false)}>
                                    <Button variant="intelligence" className="w-full">Initial Audit</Button>
                                </Link>
                            </div>
                        </nav>
                    </div>
                )}
            </header>

            <main className="flex-grow pt-20">
                {children}
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
                        <p className="text-sm text-black leading-relaxed">
                            The centralized STR operating platform combining revenue intelligence and local market expertise.
                        </p>
                    </div>

                    <div>
                        <h4 className="font-semibold mb-4">Platform</h4>
                        <ul className="space-y-2 text-sm text-secondary-foreground">
                            <li><Link href="/platform/central-brain" className="hover:text-primary transition-colors">The Central Brain</Link></li>
                            <li><Link href="/platform/revenue-intelligence" className="hover:text-primary transition-colors">Revenue Intelligence</Link></li>
                            <li><Link href="/platform/guest-ecosystem" className="hover:text-primary transition-colors">Guest Ecosystem</Link></li>
                            <li><Link href="/platform/local-layer" className="hover:text-primary transition-colors">Local Market Layer</Link></li>
                            <li><Link href="/platform/deployment" className="hover:text-primary transition-colors">Deployment Process</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-semibold mb-4">Markets</h4>
                        <ul className="space-y-2 text-sm text-secondary-foreground">
                            <li><Link href="/markets/jersey-shore" className="hover:text-primary transition-colors">Jersey Shore</Link></li>
                            <li><Link href="#" className="hover:text-primary transition-colors opacity-50 cursor-not-allowed" onClick={(e) => e.preventDefault()}>Florida (Future)</Link></li>
                            <li><Link href="#" className="hover:text-primary transition-colors opacity-50 cursor-not-allowed" onClick={(e) => e.preventDefault()}>Arizona (Future)</Link></li>
                            <li><Link href="#" className="hover:text-primary transition-colors opacity-50 cursor-not-allowed" onClick={(e) => e.preventDefault()}>Carolinas (Future)</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-semibold mb-4">Contact</h4>
                        <p className="text-sm text-secondary-foreground">
                            info@suitecapacity.com<br />
                            Central Command Center
                        </p>
                    </div>
                </div>
                <div className="container mx-auto px-6 mt-12 pt-8 border-t border-border flex justify-between items-center text-xs text-black">
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
