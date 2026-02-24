'use client';

import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { CheckCircle2, ArrowRight, Sparkles, BrainCircuit, Loader2 } from 'lucide-react';
import { QualificationGateStep } from './qualification-gate-step';
import { PropertyProfileStep } from './property-profile-step';
import { RevenueBaselineStep } from './revenue-baseline-step';
import { ConversionOperationsAuditStep } from './conversion-operations-audit-step';
import { AIDesignUploadStep } from './ai-design-upload-step';
import { ProcessingScreenStep } from './processing-screen-step';
import { LeadCaptureGateStep } from './lead-capture-gate-step';
import { ResultsDashboardStep } from './results-dashboard-step';
import { CustomActionPlanStep } from './custom-action-plan-step';
import { CalendarBookingStep } from './calendar-booking-step';
import { WizardData, RevenueProjection } from '@/types/wizard';
import { submitWizardData, calculateRevenueIntelligence } from '@/app/actions/wizard-actions';

/**
 * Revenue Intelligence Wizard™ V2
 * The primary lead engine of the Suite Capacity platform.
 */
export function RevenueIntelligenceWizard() {
    const [currentStep, setCurrentStep] = useState(1);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [wizardData, setWizardData] = useState<WizardData>({
        qualification: {
            isOperating: 'yes',
            ownershipStatus: 'own',
            timeline: 'immediately'
        },
        property: {
            address: '',
            propertyType: 'single-family',
            bedrooms: 2,
            bathrooms: 2,
            maxOccupancy: 4,
            amenities: [],
            parking: 'ample'
        },
        baseline: {
            type: 'str',
            adr: 250,
            occupancy: 60,
            platforms: ['airbnb'],
            directPercentage: 5,
            reviewRating: 4.8
        },
        audit: {
            photography: 'yes-old',
            designLevel: 'updated',
            listingOptimization: 'seo',
            targetDemographic: 'families',
            seasonalPricing: 'somewhat',
            dynamicPricing: 'manual',
            guestMessaging: 'partial',
            cleaningModel: 'dedicated',
            maintenance: 'annual',
            responseTime: '10-60'
        },
        aiDesign: {
            images: []
        },
        lead: {
            name: '',
            email: '',
            phone: '',
            timeline: 'immediately',
            switchingManagement: 'maybe'
        }
    });

    const [projection, setProjection] = useState<RevenueProjection | null>(null);

    const totalSteps = 10;

    const steps = [
        { id: 1, title: 'Qualification', description: 'Lead Gate' },
        { id: 2, title: 'Profile', description: 'Asset Profile' },
        { id: 3, title: 'Baseline', description: 'Performance' },
        { id: 4, title: 'Audit', description: 'Revenue Leaks' },
        { id: 5, title: 'Visuals', description: 'AI Design' },
        { id: 6, title: 'Intelligence', description: 'Analysis' },
        { id: 7, title: 'Capture', description: 'Secure Results' },
        { id: 8, title: 'Dashboard', description: 'Market Analysis' },
        { id: 9, title: 'Action Plan', description: 'Growth steps' },
        { id: 10, title: 'Booking', description: 'Strategy Call' },
    ];

    const nextStep = async () => {
        if (currentStep === 5) {
            setIsSubmitting(true);
            try {
                const proj = await calculateRevenueIntelligence(wizardData);
                setProjection(proj);
                setCurrentStep((prev) => prev + 1);
            } catch (error) {
                console.error('Intelligence failed:', error);
                // Fallback will be handled by server action
                setCurrentStep((prev) => prev + 1);
            } finally {
                setIsSubmitting(false);
            }
            return;
        }

        if (currentStep === 7) {
            setIsSubmitting(true);
            try {
                const res = await submitWizardData(wizardData, projection!);
                if (res.success) {
                    setCurrentStep((prev) => prev + 1);
                } else {
                    console.error('Submission failed:', res.error);
                }
            } finally {
                setIsSubmitting(false);
            }
            return;
        }

        setCurrentStep((prev) => Math.min(prev + 1, totalSteps));
    };

    const prevStep = () => setCurrentStep((prev) => Math.max(prev - 1, 1));

    return (
        <div className="max-w-6xl mx-auto py-12 px-6">
            <div className="space-y-10">
                {/* Wizard Progress Header */}
                <div className="flex justify-between items-start gap-2">
                    {steps.map((step) => (
                        <div key={step.id} className="flex flex-col items-center gap-3 flex-1 text-center group">
                            <div className={cn(
                                "w-8 h-8 rounded-full border-2 flex items-center justify-center transition-all duration-500",
                                currentStep >= step.id ? "bg-primary border-primary text-primary-foreground shadow-glow" : "border-muted text-muted-foreground"
                            )}>
                                {currentStep > step.id ? <CheckCircle2 className="w-4 h-4" /> : <span className="text-xs font-bold">{step.id}</span>}
                            </div>
                            <div className="hidden lg:block">
                                <p className={cn(
                                    "text-[9px] font-bold uppercase tracking-widest",
                                    currentStep >= step.id ? "text-primary" : "text-muted-foreground"
                                )}>
                                    {step.title}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Wizard Content Shell */}
                <div className="glass-panel p-8 md:p-12 min-h-[600px] flex flex-col justify-between intelligence-border bg-gradient-to-b from-card/50 to-background relative overflow-hidden">
                    <div className="absolute top-0 right-0 p-8 opacity-[0.03] pointer-events-none">
                        <BrainCircuit className="w-64 h-64 text-primary" />
                    </div>

                    <div className="space-y-8 relative z-10 w-full">
                        <div className="space-y-2">
                            <div className="flex items-center gap-2">
                                <span className="px-2 py-0.5 rounded bg-primary text-[10px] font-black text-primary-foreground uppercase tracking-widest">
                                    Step {currentStep} of {totalSteps}
                                </span>
                                <h2 className="text-2xl font-bold tracking-tight text-foreground">
                                    {steps[currentStep - 1].title}
                                </h2>
                            </div>
                        </div>

                        <div className="min-h-[400px]">
                            {currentStep === 1 && (
                                <QualificationGateStep
                                    data={wizardData.qualification}
                                    updateData={(d) => setWizardData(prev => ({ ...prev, qualification: { ...prev.qualification, ...d } }))}
                                />
                            )}
                            {currentStep === 2 && (
                                <PropertyProfileStep
                                    data={wizardData.property}
                                    updateData={(d) => setWizardData(prev => ({ ...prev, property: { ...prev.property, ...d } }))}
                                />
                            )}
                            {currentStep === 3 && (
                                <RevenueBaselineStep
                                    data={wizardData.baseline}
                                    updateData={(d) => setWizardData(prev => ({ ...prev, baseline: { ...prev.baseline, ...d } }))}
                                    isOperating={wizardData.qualification.isOperating === 'yes'}
                                />
                            )}
                            {currentStep === 4 && (
                                <ConversionOperationsAuditStep
                                    data={wizardData.audit}
                                    updateData={(d) => setWizardData(prev => ({ ...prev, audit: { ...prev.audit, ...d } }))}
                                />
                            )}
                            {currentStep === 5 && (
                                <AIDesignUploadStep
                                    data={wizardData.aiDesign}
                                    updateData={(d) => setWizardData(prev => ({ ...prev, aiDesign: { ...prev.aiDesign, ...d } }))}
                                />
                            )}
                            {currentStep === 6 && (
                                <ProcessingScreenStep onComplete={nextStep} />
                            )}
                            {currentStep === 7 && (
                                <LeadCaptureGateStep
                                    data={wizardData.lead}
                                    updateData={(d) => setWizardData(prev => ({ ...prev, lead: { ...prev.lead, ...d } }))}
                                />
                            )}
                            {currentStep === 8 && projection && (
                                <ResultsDashboardStep projection={projection} wizardData={wizardData} />
                            )}
                            {currentStep === 9 && (
                                <CustomActionPlanStep data={wizardData} />
                            )}
                            {currentStep === 10 && (
                                <CalendarBookingStep />
                            )}
                        </div>
                    </div>

                    {currentStep !== 6 && (
                        <div className="flex justify-between items-center pt-10 mt-8 border-t border-border/50 bg-background/50 backdrop-blur-md sticky bottom-0 z-20">
                            <Button
                                variant="outline"
                                onClick={prevStep}
                                disabled={currentStep === 1}
                                className="px-8 font-bold uppercase tracking-widest text-xs"
                            >
                                Back
                            </Button>
                            <Button
                                variant="intelligence"
                                onClick={nextStep}
                                className="px-10 gap-2 shadow-glow font-black uppercase tracking-widest text-xs"
                                disabled={currentStep === 10 || isSubmitting}
                            >
                                {isSubmitting ? (
                                    <>
                                        <Loader2 className="w-4 h-4 animate-spin" />
                                        Processing...
                                    </>
                                ) : (
                                    <>
                                        {currentStep === 5 ? 'Process Intelligence' : currentStep === 7 ? 'Generate Dashboard' : 'Continue'}
                                        <ArrowRight className="w-4 h-4" />
                                    </>
                                )}
                            </Button>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
