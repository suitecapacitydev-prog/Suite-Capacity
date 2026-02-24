/**
 * AirDNA Service Provider
 * Handles authentication and data retrieval from AirDNA Market Dashboards.
 */

export interface MarketDataResponse {
    adr: number;
    occupancyRate: number;
    revpar: number;
    seasonalityIndex: number;
    demandIndex: number;
}

export const AirDNAService = {
    /**
     * Fetches market intelligence data from AirDNA.
     * @param address The property address to analyze.
     */
    fetchMarketData: async (address: string): Promise<MarketDataResponse> => {
        const apiKey = process.env.AIRDNA_API_KEY;

        // Check for missing or placeholder keys
        if (!apiKey || apiKey === 'your-airdna-key') {
            console.warn('AirDNA API Key missing or invalid. Returning mock data.');
            return {
                adr: 320,
                occupancyRate: 68,
                revpar: 217.6,
                seasonalityIndex: 0.75,
                demandIndex: 0.88
            };
        }

        try {
            // Updated to use the Rentalizer Summary endpoint which is better for address-based lookups
            const response = await fetch(`https://api.airdna.co/v1/rentalizer/summary?address=${encodeURIComponent(address)}`, {
                headers: {
                    'Authorization': `Bearer ${apiKey}`,
                    'Accept': 'application/json'
                }
            });

            if (!response.ok) {
                const errorText = await response.text();
                // If 404, it might mean the address wasn't found or the endpoint is slightly different
                // In dev, we fallback to mock rather than crashing the whole wizard
                if (response.status === 404) {
                    console.warn(`AirDNA: Address not found (${address}). Falling back to mock.`);
                    return {
                        adr: 320,
                        occupancyRate: 68,
                        revpar: 217.6,
                        seasonalityIndex: 0.75,
                        demandIndex: 0.88
                    };
                }
                throw new Error(`AirDNA API Error (${response.status}): ${errorText}`);
            }

            const data = await response.json();

            // Mapping AirDNA response fields (Rentalizer Summary format)
            return {
                adr: data.adr || 320,
                occupancyRate: (data.occupancy || 0.68) * 100, // Convert to percentage if stored as decimal
                revpar: data.revpar || 217.6,
                seasonalityIndex: data.seasonality_index || 0.75,
                demandIndex: data.demand_index || 0.88
            };
        } catch (error) {
            console.error('AirDNA Service Error:', error);
            if (process.env.NODE_ENV === 'development') {
                return {
                    adr: 320,
                    occupancyRate: 68,
                    revpar: 217.6,
                    seasonalityIndex: 0.75,
                    demandIndex: 0.88
                };
            }
            throw error;
        }
    }
};
