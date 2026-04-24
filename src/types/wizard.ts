export type PropertyType =
    | 'single-family'
    | 'condo'
    | 'townhome'
    | 'multi-unit'
    | 'luxury-estate'
    | 'boutique-hotel'
    | 'other';

export type OperatingStatus = 'yes' | 'considering' | 'researching';
export type OwnershipStatus = 'own' | 'contract' | 'shopping' | 'researching';
export type Timeline = 'immediately' | '30-days' | '1-3-months' | 'just-researching';

export interface QualificationData {
    isOperating: OperatingStatus;
    ownershipStatus: OwnershipStatus;
    timeline: Timeline;
}

export interface PropertyProfile {
    address: string;
    marketId?: string;
    propertyType: PropertyType;
    bedrooms: number;
    bathrooms: number;
    maxOccupancy: number;
    amenities: string[];
    parking: 'ample' | 'limited' | 'none';
}

export interface RevenueBaseline {
    type: 'str' | 'ltr';
    // STR specific
    adr?: number;
    occupancy?: number;
    annualRevenue?: number;
    platforms?: ('airbnb' | 'vrbo' | 'booking' | 'direct' | 'other')[];
    directPercentage?: number;
    reviewRating?: number;
    hasPricingSoftware?: boolean;
    // LTR specific
    monthlyRent?: number;
    leaseStructure?: 'annual' | 'month-to-month';
}

export interface OperationsAudit {
    photography: 'yes-recent' | 'yes-old' | 'no';
    designLevel: 'basic' | 'updated' | 'pro' | 'luxury';
    listingOptimization: 'basic' | 'seo' | 'pro' | 'ai';
    targetDemographic: 'families' | 'couples' | 'groups' | 'luxury' | 'none';
    seasonalPricing: 'yes' | 'somewhat' | 'no';
    dynamicPricing: 'yes' | 'no' | 'manual';
    guestMessaging: 'automated' | 'partial' | 'manual';
    cleaningModel: 'dedicated' | 'marketplace' | 'owner';
    maintenance: 'quarterly' | 'annual' | 'reactive';
    responseTime: 'under-10' | '10-60' | '1-hour-plus';
}

export interface AIDesignUpload {
    images: {
        id: string;
        category: 'living-room' | 'bedroom' | 'outdoor' | 'kitchen' | 'bathroom' | 'exterior';
        url: string;
        enhancedUrl?: string;
        enhancedStatus?: 'pending' | 'completed' | 'failed';
    }[];
}

export interface LeadCapture {
    name: string;
    email: string;
    phone: string;
    timeline: Timeline;
    switchingManagement: 'yes' | 'maybe' | 'no';
    currentManager?: string;
}

export interface WizardData {
    qualification: QualificationData;
    property: PropertyProfile;
    baseline: RevenueBaseline;
    audit: OperationsAudit;
    aiDesign: AIDesignUpload;
    lead: LeadCapture;
}

export interface RevenueProjection {
    currentRevenue: number;
    optimizedRevenue: number;
    pricingLift: number;
    conversionLift: number;
    ecosystemLift: number;
    designLift: number;
    efficiencyLift: number;
    usingMockData?: boolean;
    marketComparison: {
        marketMedianAdr: number;
        topQuartileAdr: number;
        marketOccupancy: number;
        demandIndex: number;
    };
    performanceBreakdown: {
        peakContribution: number;
        shoulderContribution: number;
        offSeasonContribution: number;
        peakWeeklyRate: number;
    };
    intelligence?: {
        positioning: {
            description: string;
            marketPositioning: string;
            strengths: string;
            limitations: string;
        };
        marketPerformance?: {
            baselineContext: string;
        };
        missedOpportunities: string[];
        optimizedProjection: {
            revenueRange: string;
            newPeakWeeklyRate: string;
            occupancyTarget: string;
        };
        designStrategy: {
            recommendation: string;
            impact: string;
            tags: string[];
        };
        listingStrategy: {
            titleStrategy: { bad: string; good: string };
            descriptionStrategy: string[];
        };
        whySuiteCapacity: string;
    };
    volatilityIndex?: number;
}

// Backwards-compatible alias used by API routes
export type WizardSubmission = WizardData;

// Aliases for older type names used elsewhere
export type PerformanceBaseline = RevenueBaseline;
export type AssetOptimization = OperationsAudit;
