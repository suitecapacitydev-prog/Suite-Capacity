import React from 'react';
import { Button } from '@/components/ui/button';
import { BrainCircuit, Star, Zap, ShieldCheck, ArrowRight } from 'lucide-react';

export function ResultsDashboardStep() {
    return (
        <div className="space-y-10 animate-in zoom-in-95 duration-700">
            <div className="text-center space-y-4">
                <h3 className="text-4xl font-bold tracking-tight">Deployment Strategy Ready.</h3>
                <p className="text-secondary-foreground text-lg max-w-xl mx-auto">
                    You could implement this strategy yourself... or our platform can deploy the entire system in under 14 days.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="glass-panel p-6 space-y-4">
                    <Star className="text-warning-amber w-8 h-8" />
                    <h4 className="font-bold">Asset Optimization</h4>
                    <p className="text-xs text-secondary-foreground">Photography, furnishing, and design upgrades to maximize listing conversion.</p>
                </div>
                <div className="glass-panel p-6 space-y-4 intelligence-border">
                    <Zap className="text-primary w-8 h-8" />
                    <h4 className="font-bold">Dynamic Revenue</h4>
                    <p className="text-xs text-secondary-foreground">Intelligence-driven pricing nodes updated every 6 hours based on demand.</p>
                </div>
                <div className="glass-panel p-6 space-y-4">
                    <ShieldCheck className="text-success-teal w-8 h-8" />
                    <h4 className="font-bold">Local Operations</h4>
                    <p className="text-xs text-secondary-foreground">Elite turnover teams and maintenance experts deployed for every booking.</p>
                </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-6">
                <Button size="lg" variant="intelligence" className="w-full sm:w-auto gap-2">
                    Activate My Property
                    <ArrowRight className="w-5 h-5" />
                </Button>
                <Button size="lg" variant="outline" className="w-full sm:w-auto">
                    Book Strategy Call
                </Button>
            </div>
        </div>
    );
}
