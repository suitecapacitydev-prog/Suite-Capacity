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
    const [submissionError, setSubmissionError] = useState<string | null>(null);
    const [submissionStatus, setSubmissionStatus] = useState<{
        emailSent?: boolean;
        emailError?: string | null;
        emailHint?: string | null;
        emailId?: string | null;
        emailStatus?: any;
    } | null>(null);

    const totalSteps = 5;
    const steps = [
        { id: 1, title: 'Property', description: 'Asset Profile' },
        { id: 2, title: 'Performance', description: 'Baseline' },
        { id: 3, title: 'Audit', description: 'Operations' },
        { id: 4, title: 'Capture', description: 'Secure Results' },
        { id: 5, title: 'Results', description: 'Intelligence' },
    ];

    const validateStep = (): string | null => {
        if (currentStep === 1) {
            if (!wizardData.property.address?.trim()) return 'Please enter a property address.';
        }

        if (currentStep === 2) {
            if (wizardData.baseline.type === 'str') {
                if (!wizardData.baseline.adr) return 'Please enter an average nightly rate (ADR).';
                if (!wizardData.baseline.occupancy) return 'Please enter your average occupancy.';
            } else {
                if (!wizardData.baseline.monthlyRent) return 'Please enter your current monthly rent.';
                if (!wizardData.baseline.leaseStructure) return 'Please select your lease structure.';
            }
        }

        if (currentStep === 4) {
            if (!wizardData.lead.name?.trim()) return 'Please enter your full name.';
            if (!wizardData.lead.email?.trim()) return 'Please enter your email address.';
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(wizardData.lead.email)) return 'Please enter a valid email address.';
        }

        return null;
    };

    const nextStep = async () => {
        const validationError = validateStep();
        if (validationError) {
            setSubmissionError(validationError);
            return;
        }

        setSubmissionError(null);
        window.scrollTo({ top: 0, behavior: 'smooth' });

        if (currentStep === 3) {
            setIsSubmitting(true);
            try {
                const proj = await calculateRevenueIntelligence(wizardData);
                setProjection(proj);
                setCurrentStep((prev) => prev + 1);
            } catch (error) {
                console.error('Intelligence failed:', error);
                setCurrentStep((prev) => prev + 1);
            } finally {
                setIsSubmitting(false);
            }
            return;
        }

        if (currentStep === 4) {
            setSubmissionStatus(null);
            setIsSubmitting(true);
            try {
                const res = await submitWizardData(wizardData, projection!);

                if (res.success) {
                    setSubmissionStatus({
                        emailSent: res.emailSent,
                        emailError: res.emailError,
                        emailHint: res.emailHint,
                        emailId: res.emailResponseId,
                        emailStatus: res.emailStatus,
                    });
                    setCurrentStep((prev) => prev + 1);
                } else {
                    setSubmissionError(res.error || 'Submission failed. Please try again.');
                }
            } catch (error: any) {
                setSubmissionError(error?.message || String(error));
            } finally {
                setIsSubmitting(false);
            }
            return;
        }

        if (currentStep === totalSteps) {
            setSubmissionStatus(null);
            setSubmissionError(null);
            setProjection(null);
            setCurrentStep(1);
            return;
        }

        setCurrentStep((prev) => Math.min(prev + 1, totalSteps));
    };

    const prevStep = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
        setCurrentStep((prev) => Math.max(prev - 1, 1));
    };

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
                                <PropertyProfileStep
                                    data={wizardData.property}
                                    qualification={wizardData.qualification}
                                    updateData={(d) => setWizardData(prev => ({ ...prev, property: { ...prev.property, ...d } }))}
                                    updateQualification={(d) => setWizardData(prev => ({ ...prev, qualification: { ...prev.qualification, ...d } }))}
                                />
                            )}
                            {currentStep === 2 && (
                                <RevenueBaselineStep
                                    data={wizardData.baseline}
                                    updateData={(d) => setWizardData(prev => ({ ...prev, baseline: { ...prev.baseline, ...d } }))}
                                    operatingMode={wizardData.qualification.isOperating}
                                />
                            )}
                            {currentStep === 3 && (
                                <ConversionOperationsAuditStep
                                    data={wizardData.audit}
                                    updateData={(d) => setWizardData(prev => ({ ...prev, audit: { ...prev.audit, ...d } }))}
                                />
                            )}
                            {currentStep === 4 && (
                                <LeadCaptureGateStep
                                    data={wizardData.lead}
                                    updateData={(d) => setWizardData(prev => ({ ...prev, lead: { ...prev.lead, ...d } }))}
                                />
                            )}
                            {currentStep === 5 && (
                                <div className="space-y-12">
                                    {!projection ? (
                                        <div className="flex flex-col items-center justify-center py-24 animate-pulse">
                                            <Loader2 className="w-16 h-16 text-primary animate-spin mb-6" />
                                            <h3 className="text-2xl font-black text-primary tracking-tight">Your intelligence report is being generated...</h3>
                                            <p className="text-black/60 font-medium">Analyzing market data and property potential for {wizardData.property.address}.</p>
                                        </div>
                                    ) : (
                                        <ResultsDashboardStep
                                            projection={projection}
                                            wizardData={wizardData}
                                            submissionStatus={submissionStatus}
                                        />
                                    )}
                                </div>
                            )}
                        </div>
                    </div>

                    {currentStep !== 5 && (
                        <div className="space-y-3">
                            {submissionError && (
                                <div className="rounded-lg bg-destructive/10 border border-destructive text-destructive-foreground p-3 text-sm">
                                    <strong className="font-semibold">Submission error:</strong> {submissionError}
                                </div>
                            )}
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
                                disabled={isSubmitting}
                            >
                                {isSubmitting ? (
                                    <>
                                        <Loader2 className="w-4 h-4 animate-spin" />
                                        Processing...
                                    </>
                                ) : (
                                    <>
                                        {currentStep === 5
                                            ? 'Process Intelligence'
                                            : currentStep === 7
                                            ? 'Generate Dashboard'
                                            : currentStep === 10
                                            ? 'Restart' 
                                            : 'Continue'}
                                        <ArrowRight className="w-4 h-4" />
                                    </>
                                )}
                            </Button>
                        </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
