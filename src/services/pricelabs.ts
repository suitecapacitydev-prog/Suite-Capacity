/**
 * PriceLabs Intelligence Service
 * Handles data syncing for dynamic pricing strategies and revenue optimization.
 */

export interface PricingIntelligence {
    marketHigh: number;
    marketLow: number;
    recommendedBasePrice: number;
    volatilityIndex: number;
}

export const PriceLabsService = {
    /**
     * Fetches pricing strategy data from PriceLabs.
     */
    getPricingStrategy: async (addressOrId: string): Promise<PricingIntelligence> => {
        const apiKey = process.env.PRICELABS_API_KEY;

        if (!apiKey || apiKey === 'your-pricelabs-key') {
            console.warn('PriceLabs API Key missing or invalid. Returning mock data.');
            return {
                marketHigh: 600,
                marketLow: 280,
                recommendedBasePrice: 425,
                volatilityIndex: 0.12
            };
        }

        try {
            // Note: PriceLabs often requires a specific listing ID or coordinates.
            // If we only have an address, we might need to search or use a different endpoint.
            // For now, we attempt to use it as a query parameter or fallback to mock on 404.
            const response = await fetch(`https://api.pricelabs.co/v1/market_data?address=${encodeURIComponent(addressOrId)}`, {
                headers: {
                    'X-API-KEY': apiKey,
                    'Accept': 'application/json'
                }
            });

            if (!response.ok) {
                const errorText = await response.text();

                if (response.status === 404) {
                    console.warn(`PriceLabs: Data not found for (${addressOrId}). Falling back to mock.`);
                    return {
                        marketHigh: 600,
                        marketLow: 280,
                        recommendedBasePrice: 425,
                        volatilityIndex: 0.12
                    };
                }

                throw new Error(`PriceLabs API Error (${response.status}): ${errorText}`);
            }

            const data = await response.json();

            return {
                marketHigh: data.market_high || 600,
                marketLow: data.market_low || 280,
                recommendedBasePrice: data.recommended_price || 425,
                volatilityIndex: data.volatility || 0.12
            };
        } catch (error) {
            console.error('PriceLabs Service Error:', error);
            if (process.env.NODE_ENV === 'development') {
                return {
                    marketHigh: 600,
                    marketLow: 280,
                    recommendedBasePrice: 425,
                    volatilityIndex: 0.12
                };
            }
            throw error;
        }
    }
};
