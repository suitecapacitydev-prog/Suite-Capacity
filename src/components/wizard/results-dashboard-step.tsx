import React from 'react';
import { Button } from '@/components/ui/button';
import { BrainCircuit, Star, Zap, ShieldCheck, ArrowRight, TrendingUp, Users, DollarSign } from 'lucide-react';
import { RevenueProjection } from '@/types/wizard';

interface ResultsDashboardProps {
    projection: RevenueProjection;
}

export function ResultsDashboardStep({ projection }: ResultsDashboardProps) {
    const formatCurrency = (val: number) =>
        new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 }).format(val);

    return (
        <div className="space-y-12 animate-in zoom-in-95 duration-700">
            {/* Section 1: Revenue Comparison */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="p-8 rounded-3xl border border-border bg-muted/20 space-y-4">
                    <p className="text-sm font-bold text-muted-foreground uppercase tracking-widest">Current Performance</p>
                    <div className="space-y-1">
                        <h4 className="text-4xl font-bold">{formatCurrency(projection.currentRevenue)}</h4>
                        <p className="text-sm text-muted-foreground">Estimated Annual Revenue</p>
                    </div>
                </div>
                <div className="p-8 rounded-3xl border border-primary bg-primary/5 space-y-4 relative overflow-hidden group">
                    <div className="absolute top-0 right-0 p-4">
                        <TrendingUp className="text-primary w-8 h-8 animate-pulse" />
                    </div>
                    <p className="text-sm font-bold text-primary uppercase tracking-widest">Optimized Projection</p>
                    <div className="space-y-1">
                        <h4 className="text-4xl font-bold text-primary">{formatCurrency(projection.optimizedRevenue)}</h4>
                        <p className="text-sm text-primary/80">Projected with Suite Capacity System</p>
                    </div>
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary text-primary-foreground text-xs font-bold">
                        +{Math.round((projection.optimizedRevenue / projection.currentRevenue - 1) * 100)}% Lift
                    </div>
                </div>
            </div>

            {/* Section 2: Revenue Lift Breakdown */}
            <div className="space-y-6">
                <h4 className="text-xl font-bold flex items-center gap-2">
                    <Zap className="text-primary w-5 h-5" />
                    Revenue Lift Breakdown
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                    {[
                        { label: 'Pricing Optimization', value: projection.pricingLift, icon: DollarSign, color: 'text-blue-500' },
                        { label: 'Listing Conversion', value: projection.conversionLift, icon: Star, color: 'text-amber-500' },
                        { label: 'Design Optimization', value: projection.designLift, icon: Zap, color: 'text-purple-500' },
                        { label: 'Automation Efficiency', value: projection.automationLift, icon: ShieldCheck, color: 'text-emerald-500' },
                    ].map((item) => (
                        <div key={item.label} className="p-5 rounded-2xl border border-border bg-card hover:border-primary/50 transition-all">
                            <item.icon className={`${item.color} w-6 h-6 mb-3`} />
                            <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-tighter">{item.label}</p>
                            <p className="text-lg font-bold">{formatCurrency(item.value)}</p>
                        </div>
                    ))}
                </div>
            </div>

            {/* Section 3: Ecosystem & Conversion Layer */}
            <div className="glass-panel p-10 intelligence-border space-y-8 bg-gradient-to-br from-primary/5 via-background to-background">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    <div className="space-y-4">
                        <Users className="text-primary w-10 h-10" />
                        <h4 className="text-2xl font-bold">Guest Ecosystem Export</h4>
                        <p className="text-secondary-foreground leading-relaxed">
                            Beyond marketplace revenue, your asset joins our central guest network. We project an additional
                            <span className="text-primary font-bold"> {formatCurrency(projection.ecosystemLift)}</span> from
                            repeat bookings and off-platform demand.
                        </p>
                    </div>
                    <div className="flex flex-col justify-center space-y-4">
                        <div className="space-y-2">
                            <p className="text-sm font-bold uppercase tracking-widest text-muted-foreground">Strategic Positioning</p>
                            <p className="text-lg font-medium italic">"You could implement this strategy yourself... Or our platform can deploy the entire system in 14 days."</p>
                        </div>
                        <div className="flex flex-col sm:flex-row gap-4 pt-4">
                            <Button size="lg" variant="intelligence" className="flex-1 gap-2 shadow-glow">
                                Activate My Property
                                <ArrowRight className="w-5 h-5" />
                            </Button>
                            <Button size="lg" variant="outline" className="flex-1">
                                Book Strategy Call
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
