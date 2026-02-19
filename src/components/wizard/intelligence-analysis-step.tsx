import React, { useEffect, useState } from 'react';
import { RevenueEngine } from '@/engine/revenue/projection';
import { Loader2, Zap, BarChart3, TrendingUp, ShieldCheck, Search } from 'lucide-react';
import { PropertyProfile, PerformanceBaseline, AssetOptimization, RevenueProjection } from '@/types/wizard';

interface AnalysisProps {
    propertyData: PropertyProfile;
    performanceData: PerformanceBaseline;
    assetData: AssetOptimization;
    onAnalysisComplete: (projection: RevenueProjection) => void;
}

export function IntelligenceAnalysisStep({
    propertyData,
    performanceData,
    assetData,
    onAnalysisComplete
}: AnalysisProps) {
    const [analyzing, setAnalyzing] = useState(true);
    const [progress, setProgress] = useState(0);
    const [statusText, setStatusText] = useState('Initializing market scan...');

    useEffect(() => {
        const runAnalysis = async () => {
            setAnalyzing(true);

            const stages = [
                { text: 'Accessing AirDNA market nodes...', delay: 1500, progress: 25 },
                { text: 'Compiling PriceLabs seasonality data...', delay: 1500, progress: 50 },
                { text: 'Running Suite Capacity Revenue Engine...', delay: 1500, progress: 75 },
                { text: 'Finalizing Ecosystem projections...', delay: 1000, progress: 100 },
            ];

            for (const stage of stages) {
                setStatusText(stage.text);
                await new Promise(resolve => setTimeout(resolve, stage.delay));
                setProgress(stage.progress);
            }

            // Mock market data for now
            const projection = RevenueEngine.calculateProjection(
                propertyData,
                performanceData,
                assetData,
                { adr: (performanceData.adr || 200) * 1.12, demandIndex: 88 }
            );

            onAnalysisComplete(projection);
            setAnalyzing(false);
        };

        runAnalysis();
    }, []);

    return (
        <div className="flex flex-col items-center justify-center py-20 space-y-10">
            <div className="relative w-32 h-32 flex items-center justify-center">
                <div className="absolute inset-0 border-4 border-primary/20 rounded-full" />
                <div
                    className="absolute inset-0 border-4 border-primary rounded-full border-t-transparent animate-spin"
                    style={{ animationDuration: '2s' }}
                />
                <div className="scan-line" />
                <Search className="w-10 h-10 text-primary animate-pulse" />
            </div>

            <div className="space-y-4 text-center max-w-sm">
                <h3 className="text-2xl font-bold tracking-tight">{statusText}</h3>
                <div className="w-full bg-secondary h-1.5 rounded-full overflow-hidden">
                    <div
                        className="bg-primary h-full transition-all duration-500 ease-out"
                        style={{ width: `${progress}%` }}
                    />
                </div>
                <div className="flex justify-between items-center text-[10px] uppercase font-bold text-muted-foreground tracking-widest">
                    <span>Market Data</span>
                    <span>Brain Logic</span>
                    <span>Ready</span>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full max-w-2xl opacity-50 grayscale transition-all duration-1000">
                <div className="p-4 border border-border rounded-xl flex items-center gap-3">
                    <TrendingUp className="w-5 h-5 text-primary" />
                    <span className="text-xs font-semibold">ADR Optimized</span>
                </div>
                <div className="p-4 border border-border rounded-xl flex items-center gap-3">
                    <ShieldCheck className="w-5 h-5 text-primary" />
                    <span className="text-xs font-semibold">Security Verified</span>
                </div>
                <div className="p-4 border border-border rounded-xl flex items-center gap-3">
                    <Zap className="w-5 h-5 text-primary" />
                    <span className="text-xs font-semibold">Yield Maxed</span>
                </div>
            </div>
        </div>
    );
}
