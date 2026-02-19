import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { BrainCircuit, LayoutGrid, BarChart3, Users2, ShieldCheck, Map } from 'lucide-react';

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="min-h-screen flex flex-col">
            <header className="fixed top-0 w-full z-50 border-b border-white/5 glass-panel">
                <div className="container mx-auto px-6 h-20 flex items-center justify-between">
                    <Link href="/" className="flex items-center gap-2 group">
                        <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center intelligence-border transition-transform group-hover:scale-105">
                            <BrainCircuit className="text-white w-6 h-6" />
                        </div>
                        <span className="text-xl font-bold tracking-tight">SUITE CAPACITY</span>
                    </Link>

                    <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-secondary-foreground">
                        <Link href="/platform" className="hover:text-foreground transition-colors">Platform</Link>
                        <Link href="/markets" className="hover:text-foreground transition-colors">Markets</Link>
                        <Link href="/solutions" className="hover:text-foreground transition-colors">Solutions</Link>
                        <Link href="/case-studies" className="hover:text-foreground transition-colors">Performance</Link>
                    </nav>

                    <div className="flex items-center gap-4">
                        <Link href="/login" className="text-sm font-medium hover:text-primary transition-colors">Owner Login</Link>
                        <Button variant="intelligence" size="sm" className="hidden sm:inline-flex">
                            Initial Audit
                        </Button>
                    </div>
                </div>
            </header>

            <main className="flex-grow pt-20">
                {children}
            </main>

            <footer className="bg-card border-t border-border py-12">
                <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12">
                    <div className="space-y-4">
                        <div className="flex items-center gap-2">
                            <BrainCircuit className="text-primary w-6 h-6" />
                            <span className="font-bold">SUITE CAPACITY</span>
                        </div>
                        <p className="text-sm text-secondary-foreground leading-relaxed">
                            The centralized STR operating platform combining revenue intelligence and local market expertise.
                        </p>
                    </div>

                    <div>
                        <h4 className="font-semibold mb-4">Platform</h4>
                        <ul className="space-y-2 text-sm text-secondary-foreground">
                            <li><Link href="#" className="hover:text-primary transition-colors">The Central Brain</Link></li>
                            <li><Link href="#" className="hover:text-primary transition-colors">Guest Ecosystem</Link></li>
                            <li><Link href="#" className="hover:text-primary transition-colors">Deployment Process</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-semibold mb-4">Markets</h4>
                        <ul className="space-y-2 text-sm text-secondary-foreground">
                            <li><Link href="#" className="hover:text-primary transition-colors">Jersey Shore</Link></li>
                            <li><Link href="#" className="hover:text-primary transition-colors">Florida</Link></li>
                            <li><Link href="#" className="hover:text-primary transition-colors">Arizona</Link></li>
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
                <div className="container mx-auto px-6 mt-12 pt-8 border-t border-border flex justify-between items-center text-xs text-secondary-foreground">
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
