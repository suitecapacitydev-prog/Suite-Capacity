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
    marketComparison: {
        marketMedianAdr: number;
        topQuartileAdr: number;
        marketOccupancy: number;
        demandIndex: number;
    };
}

// Backwards-compatible alias used by API routes
export type WizardSubmission = WizardData;

// Aliases for older type names used elsewhere
export type PerformanceBaseline = RevenueBaseline;
export type AssetOptimization = OperationsAudit;
