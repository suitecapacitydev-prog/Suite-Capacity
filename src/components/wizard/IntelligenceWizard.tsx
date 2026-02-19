'use client';

import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { CheckCircle2, Circle } from 'lucide-react';
import { PropertyProfileStep, PropertyProfileData } from './PropertyProfileStep';
import { CurrentPerformanceStep, CurrentPerformanceData } from './CurrentPerformanceStep';
import { AssetOptimizationStep, AssetOptimizationData } from './AssetOptimizationStep';
import { IntelligenceAnalysisStep } from './IntelligenceAnalysisStep';
import { ResultsDashboardStep } from './ResultsDashboardStep';

type WizardData = Partial<PropertyProfileData & CurrentPerformanceData & AssetOptimizationData>;

/**
 * Revenue Intelligence Wizard
 * A multi-step funnel for lead generation and property auditing.
 */
export function RevenueIntelligenceWizard() {
    const [currentStep, setCurrentStep] = useState(1);
    const [wizardData, setWizardData] = useState<WizardData>({});
    const totalSteps = 5;

    const steps = [
        { id: 1, title: 'Property Profile', description: 'Basic property characteristics' },
        { id: 2, title: 'Current Performance', description: 'Historical revenue data' },
        { id: 3, title: 'Asset Optimization', description: 'Design and amenity scan' },
        { id: 4, title: 'Intelligence Analysis', description: 'Data-driven projection' },
        { id: 5, title: 'Results Dashboard', description: 'Final revenue lift report' },
    ];

    const nextStep = () => setCurrentStep((prev) => Math.min(prev + 1, totalSteps));
    const prevStep = () => setCurrentStep((prev) => Math.max(prev - 1, 1));

    return (
        <div className="max-w-4xl mx-auto py-12 px-6">
            <div className="space-y-8">
                {/* Wizard Progress Header */}
                <div className="flex justify-between items-start">
                    {steps.map((step) => (
                        <div key={step.id} className="flex flex-col items-center gap-2 w-full text-center group">
                            <div className={cn(
                                "w-8 h-8 rounded-full border-2 flex items-center justify-center transition-all",
                                currentStep >= step.id ? "bg-primary border-primary text-white" : "border-muted text-muted-foreground"
                            )}>
                                {currentStep > step.id ? <CheckCircle2 className="w-5 h-5" /> : <span>{step.id}</span>}
                            </div>
                            <div className="space-y-1 px-2">
                                <p className={cn(
                                    "text-xs font-bold uppercase tracking-tighter",
                                    currentStep >= step.id ? "text-primary" : "text-muted-foreground"
                                )}>
                                    {step.title}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Wizard Content Shell */}
                <div className="glass-panel p-12 min-h-[400px] flex flex-col justify-between intelligence-border bg-gradient-to-b from-card to-background">
                    <div className="space-y-6">
                        <h2 className="text-3xl font-bold tracking-tight">
                            {steps[currentStep - 1].title}
                        </h2>
                        <p className="text-secondary-foreground text-lg">
                            {steps[currentStep - 1].description}
                        </p>

                        <div className="py-8">
                            {currentStep === 1 && (
                                <PropertyProfileStep
                                    data={wizardData}
                                    updateData={(newData) => setWizardData(prev => ({ ...prev, ...newData }))}
                                />
                            )}
                            {currentStep === 2 && (
                                <CurrentPerformanceStep
                                    data={wizardData}
                                    updateData={(newData) => setWizardData(prev => ({ ...prev, ...newData }))}
                                />
                            )}
                            {currentStep === 3 && (
                                <AssetOptimizationStep
                                    data={wizardData}
                                    updateData={(newData) => setWizardData(prev => ({ ...prev, ...newData }))}
                                />
                            )}
                            {currentStep === 4 && (
                                <IntelligenceAnalysisStep
                                    wizardData={wizardData}
                                />
                            )}
                            {currentStep === 5 && (
                                <ResultsDashboardStep />
                            )}
                        </div>
                    </div>
                </div>

                <div className="flex justify-between items-center pt-8 border-t border-border/50">
                    <Button
                        variant="outline"
                        onClick={prevStep}
                        disabled={currentStep === 1}
                    >
                        Back
                    </Button>
                    <Button
                        variant="intelligence"
                        onClick={nextStep}
                    >
                        {currentStep === totalSteps ? 'View Report' : 'Save & Continue'}
                    </Button>
                </div>
            </div>
        </div>
    );
}
