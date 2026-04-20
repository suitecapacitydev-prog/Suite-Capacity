import { PropertyProfile, PerformanceBaseline, AssetOptimization, RevenueProjection } from '@/types/wizard';
export class RevenueEngine {
    /**
     * Calculates the projected revenue lift based on local data and market benchmarks.
     */
    static calculateProjection(
        property: PropertyProfile,
        performance: PerformanceBaseline,
        asset: AssetOptimization,
        marketData: { adr: number; demandIndex: number }
    ): RevenueProjection {
        const adr = performance.adr ?? 0;
        const occupancy = performance.occupancy ?? 0;
        const currentAnnualRevenue = adr * (occupancy / 100) * 365;

        // Multipliers based on optimization logic
        const pricingEfficiencyFactor = 1.15; // 15% lift from dynamic pricing
        // Map qualitative asset fields to numeric scores
        const photoScore = asset.photography === 'yes-recent' ? 8 : asset.photography === 'yes-old' ? 4 : 0;
        const designScore = asset.designLevel === 'luxury' ? 8 : asset.designLevel === 'pro' ? 6 : asset.designLevel === 'updated' ? 3 : 1;
        const conversionMultiplier = 1 + (photoScore + designScore) / 20;
        const improvedOccupancy = Math.min(occupancy + 15, 85); // Target 85% or +15%

        const ecosystemLift = currentAnnualRevenue * 0.12; // 12% lift from direct guest ecosystem
        const efficiencyLift = currentAnnualRevenue * 0.08; // 8% efficiency gain

        const optimizedRevenue =
            marketData.adr *
            pricingEfficiencyFactor *
            (improvedOccupancy / 100) *
            365 *
            conversionMultiplier;

        return {
            currentRevenue: currentAnnualRevenue,
            optimizedRevenue: optimizedRevenue + ecosystemLift,
            pricingLift: (optimizedRevenue * 0.15) / 1,
            conversionLift: optimizedRevenue * (conversionMultiplier - 1),
            ecosystemLift,
            efficiencyLift,
            designLift: optimizedRevenue * (designScore / 10),
            marketComparison: {
                marketMedianAdr: marketData.adr,
                topQuartileAdr: marketData.adr * 1.2,
                marketOccupancy: improvedOccupancy,
                demandIndex: marketData.demandIndex,
            },
            performanceBreakdown: {
                peakContribution: 70,
                shoulderContribution: 20,
                offSeasonContribution: 10,
                peakWeeklyRate: marketData.adr * 7 * 1.25,
            }
        };
    }
}
