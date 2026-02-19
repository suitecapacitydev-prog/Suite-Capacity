export type PropertyType = 'house' | 'apartment' | 'condo' | 'townhouse' | 'other';

export interface PropertyProfile {
    address: string;
    bedrooms: number;
    bathrooms: number;
    sleeps: number;
    propertyType: PropertyType;
    amenities: string[];
    hasPool: boolean;
    hasHotTub: boolean;
    isWaterfront: boolean;
    hoaRestrictions: boolean;
    parkingSpaces: number;
}

export interface PerformanceBaseline {
    adr: number;
    occupancy: number;
    platforms: ('airbnb' | 'vrbo' | 'direct' | 'other')[];
    cleaningFee: number;
    cancellationPolicy: 'flexible' | 'moderate' | 'strict';
    directBookingPercentage: number;
}

export interface AssetOptimization {
    photographyQuality: number; // 1-5
    designLevel: number; // 1-5
    furnishingLevel: number; // 1-5
    descriptionStrength: number; // 1-5
    automationLevel: number; // 1-5
    reviewScore: number;
}

export interface WizardSubmission {
    id?: string;
    ownerEmail: string;
    propertyData: PropertyProfile;
    performanceData: PerformanceBaseline;
    assetData: AssetOptimization;
    status: 'draft' | 'processing' | 'complete';
}

export interface RevenueProjection {
    currentRevenue: number;
    optimizedRevenue: number;
    pricingLift: number;
    conversionLift: number;
    ecosystemLift: number;
    automationLift: number;
    designLift: number;
    marketComparison: {
        marketAverageAdr: number;
        demandIndex: number;
        seasonalityCurve: number[];
    };
}
