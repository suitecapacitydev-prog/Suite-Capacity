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
        const currentAnnualRevenue = performance.adr * (performance.occupancy / 100) * 365;

        // Multipliers based on optimization logic
        const pricingEfficiencyFactor = 1.15; // 15% lift from dynamic pricing
        const conversionMultiplier = 1 + (asset.photographyQuality + asset.designLevel) / 20; // Up to 50% lift from visuals
        const improvedOccupancy = Math.min(performance.occupancy + 15, 85); // Target 85% or +15%

        const ecosystemLift = currentAnnualRevenue * 0.12; // 12% lift from direct guest ecosystem
        const automationLift = currentAnnualRevenue * 0.08; // 8% efficiency gain

        const optimizedRevenue =
            marketData.adr *
            pricingEfficiencyFactor *
            (improvedOccupancy / 100) *
            365 *
            conversionMultiplier;

        return {
            currentRevenue: currentAnnualRevenue,
            optimizedRevenue: optimizedRevenue + ecosystemLift,
            pricingLift: (optimizedRevenue * 0.15) / 1, // Normalized lift components
            conversionLift: optimizedRevenue * (conversionMultiplier - 1),
            ecosystemLift,
            automationLift,
            designLift: optimizedRevenue * (asset.designLevel / 10),
            marketComparison: {
                marketAverageAdr: marketData.adr,
                demandIndex: marketData.demandIndex,
                seasonalityCurve: [0.6, 0.7, 1.2, 1.5, 1.8, 1.5, 1.2, 0.9, 0.8, 0.7, 0.6, 0.5], // Normalized monthly seasonality
            }
        };
    }
}
