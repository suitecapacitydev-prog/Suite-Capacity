'use client';

import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { CheckCircle2, ArrowRight, Sparkles } from 'lucide-react';
import { PropertyProfileStep } from './property-profile-step';
import { CurrentPerformanceStep } from './current-performance-step';
import { AssetOptimizationStep } from './asset-optimization-step';
import { IntelligenceAnalysisStep } from './intelligence-analysis-step';
import { ResultsDashboardStep } from './results-dashboard-step';
import { PropertyProfile, PerformanceBaseline, AssetOptimization, RevenueProjection } from '@/types/wizard';

/**
 * Revenue Intelligence Wizard
 * The primary lead engine of the Suite Capacity platform.
 */
export function RevenueIntelligenceWizard() {
    const [currentStep, setCurrentStep] = useState(1);
    const [propertyData, setPropertyData] = useState<Partial<PropertyProfile>>({
        propertyType: 'house',
        amenities: [],
        bedrooms: 2,
        bathrooms: 2,
        sleeps: 4
    });
    const [performanceData, setPerformanceData] = useState<Partial<PerformanceBaseline>>({
        platforms: [],
        adr: 250,
        occupancy: 60,
        cancellationPolicy: 'moderate'
    });
    const [assetData, setAssetData] = useState<Partial<AssetOptimization>>({
        photographyQuality: 3,
        designLevel: 3,
        furnishingLevel: 3,
        descriptionStrength: 3,
        automationLevel: 3,
        reviewScore: 4.5
    });
    const [projection, setProjection] = useState<RevenueProjection | null>(null);
    const [email, setEmail] = useState('');

    const totalSteps = 5;

    const steps = [
        { id: 1, title: 'Profile', description: 'Asset characteristics' },
        { id: 2, title: 'Performance', description: 'Historical baseline' },
        { id: 3, title: 'Optimization', description: 'Design & automation' },
        { id: 4, title: 'Analysis', description: 'Market intelligence' },
        { id: 5, title: 'Dashboard', description: 'Intelligence report' },
    ];

    const nextStep = () => {
        if (currentStep === 3 && !email) {
            // Force email before analysis
            setShowEmailModal(true);
            return;
        }
        setCurrentStep((prev) => Math.min(prev + 1, totalSteps));
    };

    const prevStep = () => setCurrentStep((prev) => Math.max(prev - 1, 1));

    const [showEmailModal, setShowEmailModal] = useState(false);

    return (
        <div className="max-w-4xl mx-auto py-12 px-6">
            <div className="space-y-10">
                {/* Wizard Progress Header */}
                <div className="flex justify-between items-start">
                    {steps.map((step) => (
                        <div key={step.id} className="flex flex-col items-center gap-3 w-full text-center group">
                            <div className={cn(
                                "w-10 h-10 rounded-full border-2 flex items-center justify-center transition-all duration-500",
                                currentStep >= step.id ? "bg-primary border-primary text-primary-foreground shadow-glow" : "border-muted text-muted-foreground"
                            )}>
                                {currentStep > step.id ? <CheckCircle2 className="w-6 h-6" /> : <span className="text-sm font-bold">{step.id}</span>}
                            </div>
                            <div className="space-y-1 px-2 hidden md:block">
                                <p className={cn(
                                    "text-[10px] font-bold uppercase tracking-widest",
                                    currentStep >= step.id ? "text-primary" : "text-muted-foreground"
                                )}>
                                    {step.title}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Wizard Content Shell */}
                <div className="glass-panel p-8 md:p-12 min-h-[500px] flex flex-col justify-between intelligence-border bg-gradient-to-b from-card/50 to-background relative overflow-hidden">
                    <div className="absolute top-0 right-0 p-8 opacity-5">
                        <Sparkles className="w-32 h-32 text-primary" />
                    </div>

                    <div className="space-y-8 relative z-10">
                        <div className="space-y-2">
                            <h2 className="text-3xl font-bold tracking-tight text-foreground">
                                {steps[currentStep - 1].title}
                            </h2>
                            <p className="text-muted-foreground text-lg">
                                {steps[currentStep - 1].description}
                            </p>
                        </div>

                        <div className="min-h-[300px]">
                            {currentStep === 1 && (
                                <PropertyProfileStep
                                    data={propertyData}
                                    updateData={(newData) => setPropertyData(prev => ({ ...prev, ...newData }))}
                                />
                            )}
                            {currentStep === 2 && (
                                <CurrentPerformanceStep
                                    data={performanceData}
                                    updateData={(newData) => setPerformanceData(prev => ({ ...prev, ...newData }))}
                                />
                            )}
                            {currentStep === 3 && (
                                <AssetOptimizationStep
                                    data={assetData}
                                    updateData={(newData) => setAssetData(prev => ({ ...prev, ...newData }))}
                                />
                            )}
                            {currentStep === 4 && (
                                <IntelligenceAnalysisStep
                                    propertyData={propertyData as PropertyProfile}
                                    performanceData={performanceData as PerformanceBaseline}
                                    assetData={assetData as AssetOptimization}
                                    onAnalysisComplete={(res) => {
                                        setProjection(res);
                                        setTimeout(nextStep, 1000); // Auto-advance after a small delay
                                    }}
                                />
                            )}
                            {currentStep === 5 && projection && (
                                <ResultsDashboardStep projection={projection} />
                            )}
                        </div>
                    </div>

                    {currentStep < 4 && (
                        <div className="flex justify-between items-center pt-10 mt-8 border-t border-border/50">
                            <Button
                                variant="outline"
                                onClick={prevStep}
                                disabled={currentStep === 1}
                                className="px-8"
                            >
                                Back
                            </Button>
                            <Button
                                variant="intelligence"
                                onClick={nextStep}
                                className="px-10 gap-2 shadow-glow"
                            >
                                {currentStep === 3 ? 'Generate Intelligence Report' : 'Next Stage'}
                                <ArrowRight className="w-4 h-4" />
                            </Button>
                        </div>
                    )}
                </div>
            </div>

            {/* Email Capture Modal */}
            {showEmailModal && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-background/80 backdrop-blur-sm animate-in fade-in duration-300">
                    <div className="glass-panel p-10 max-w-md w-full intelligence-border space-y-6 shadow-2xl">
                        <div className="text-center space-y-2">
                            <Sparkles className="w-12 h-12 text-primary mx-auto mb-4" />
                            <h3 className="text-2xl font-bold">Secure Your Analysis</h3>
                            <p className="text-muted-foreground">We need your email to save these projections to your account and send the full report.</p>
                        </div>
                        <div className="space-y-4">
                            <input
                                type="email"
                                placeholder="owner@example.com"
                                className="w-full bg-background border border-border p-3 rounded-lg focus:ring-2 focus:ring-primary focus:outline-none"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                            <Button
                                variant="intelligence"
                                className="w-full h-12 text-lg font-bold shadow-glow"
                                onClick={() => {
                                    if (email) {
                                        setShowEmailModal(false);
                                        nextStep();
                                    }
                                }}
                            >
                                Generate Report
                            </Button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
