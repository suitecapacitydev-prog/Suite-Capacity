import OpenAI from 'openai';
import { WizardData } from '@/types/wizard';

export const OpenAIService = {
    /**
     * Generates a high-fidelity revenue intelligence report based on property data and market data.
     */
    async generateIntelligence(data: WizardData, marketData: any) {
        const apiKey = process.env.OPENAI_API_KEY;
        if (!apiKey) {
            console.warn('OPENAI_API_KEY is missing. AI intelligence generation skipped.');
            return {
                error: "API Key Missing",
                positioning: { 
                    description: "ERROR: OPENAI_API_KEY is not set in the environment variables. Please check your .env file and restart your dev server." 
                }
            };
        }

        // Initialize inside the function to ensure the latest process.env is captured
        const openai = new OpenAI({ apiKey });
        const isJerseyShore = marketData.isShore || false;
        
        const systemPrompt = `
You are Suite Capacity STR Intelligence, an expert in short-term rental performance optimization specializing in the Jersey Shore market (Seaside Heights, Seaside Park, Lavallette, Ortley Beach, Point Pleasant, etc.).

Your role is to:
● Analyze property inputs + AirDNA data
● Estimate current market performance (baseline)
● Identify missed revenue opportunities
● Project optimized revenue under Suite Capacity management
● Provide clear, actionable recommendations
● Suggest design + amenity upgrades
● Analyze 1 uploaded image (if provided) and recommend improvements
● Quantify revenue lift (%) and dollar amount

PRIMARY OBJECTIVE:
Position Suite Capacity as the reason the property can go from:
“average performer” → “top-tier revenue generator”

THINKING RULES:
● Think like a revenue manager + STR operator.
● Use Jersey Shore seasonality logic (70–80% of revenue comes from June–August) ONLY if it's a coastal property.
● If it's an inland/urban property, use balanced year-round seasonality logic.
● Be confident but realistic; avoid generic templates.
● Always tie recommendations → direct revenue impact.
● Provide UNIQUE design suggestions based on the property's specific Type and Condition.

TONE:
● Sharp, Professional, Investor-minded, Slightly persuasive, Clear and decisive.

ANALYSIS RULES:
● ~$1,000/week per bedroom peak baseline (For high-end Shore only; adjust for urban/budget).
● Parking = huge value driver in coastal markets.
● Outdoor space = conversion driver.
● Design = biggest differentiator. DO NOT default to "Tulum" unless it fits; suggest Mid-Century, Industrial, Scandi, or Classic-Coastal based on context.

OUTPUT STRUCTURE (STRICT JSON):
Return a JSON object with the following structure:
{
  "positioning": {
    "description": "Short description of the property",
    "marketPositioning": "Budget / mid-tier / premium potential",
    "strengths": "Key strengths (location, size, etc.)",
    "limitations": "Key limitations (design, lack of amenities, etc.)"
  },
  "marketPerformance": {
    "baselineContext": "Context on current market trends vs property performance"
  },
  "missedOpportunities": ["List of 3-4 specific missed opportunities"],
  "optimizedProjection": {
    "revenueRange": "$X - $Y",
    "newPeakWeeklyRate": "$X",
    "occupancyTarget": "X%"
  },
  "designStrategy": {
    "recommendation": "Detailed recommendation based on if it's an interior or exterior image",
    "impact": "Explanation of how upgrades drive pricing power",
    "tags": ["Neutral Palette", "Natural Woods", etc. (list of 4 keywords)]
  },
  "listingStrategy": {
    "titleStrategy": {
      "bad": "3 Bedroom Beach House",
      "good": "Optimized Suite Capacity Standard Title"
    },
    "descriptionStrategy": ["Point 1 about emotion", "Point 2 about conversion", "Point 3 about experience"]
  },
  "performanceBreakdown": {
    "peakWeeklyRate": "The dollar value for peak season (e.g., $1,050)",
    "peakContribution": "The percentage of revenue from peak season (e.g., 75%)",
    "shoulderContribution": "The percentage of revenue from shoulder season (e.g., 16%)",
    "offSeasonContribution": "The percentage of revenue from off-season (e.g., 9%)"
  },
  "whySuiteCapacity": "Concise summary of SC as the institutional unlock"
}
`;

        const userPrompt = `
PROPERTY DATA:
- Address: ${data.property.address}
- Type: ${data.property.propertyType}
- Bedrooms: ${data.property.bedrooms}
- Bathrooms: ${data.property.bathrooms}
- Parking: ${data.property.parking}
- Condition: ${data.audit.designLevel}
- Amenities: ${data.property.amenities.join(', ')}

MARKET DATA (AirDNA):
- Avg Annual Revenue: $${marketData.annualRevenue || 'N/A'}
- ADR: $${marketData.adr || 'N/A'}
- Occupancy: ${marketData.occupancyRate || 'N/A'}%

IMAGE DATA:
- Category: ${data.aiDesign.images[0]?.category || 'None'}
- Image URL: ${data.aiDesign.images[0]?.url || 'None'}

Please generate the report content in strictly valid JSON format.
`;

        const callModel = async (model: string) => {
            console.log(`DEBUG: Calling OpenAI model ${model}...`);
            const response = await openai.chat.completions.create({
                model: model,
                messages: [
                    { role: "system", content: systemPrompt },
                    { role: "user", content: userPrompt }
                ],
                response_format: { type: "json_object" }
            });
            const content = response.choices[0].message.content;
            if (!content) throw new Error("Empty response from OpenAI");
            return JSON.parse(content);
        };

        try {
            console.log("DEBUG: OpenAI Intelligence Request Prompt:", userPrompt);
            try {
                // Try the flagship model first
                return await callModel("gpt-4o");
            } catch (error1) {
                console.warn("DEBUG: gpt-4o failed, trying gpt-4o-mini...", error1);
                try {
                    // Try the more accessible mini model
                    return await callModel("gpt-4o-mini");
                } catch (error2) {
                    console.warn("DEBUG: gpt-4o-mini failed, falling back to gpt-3.5-turbo...", error2);
                    // Guaranteed fallback for all accounts
                    return await callModel("gpt-3.5-turbo-0125");
                }
            }
        } catch (error: any) {
            console.error("DEBUG: OpenAI Intelligence Error:", error);
            const errorMsg = error.message || "Unable to reach OpenAI";
            return {
                error: errorMsg,
                positioning: { 
                    description: `AI ERROR: ${errorMsg}. Please ensure your API key is active and your quota has not been exceeded.`,
                    marketPositioning: "Error State",
                    strengths: "Data connection interrupted.",
                    limitations: "Unable to analyze limitations due to API error."
                },
                marketPerformance: {
                    baselineContext: "Real-time market trend analysis is currently unavailable."
                },
                missedOpportunities: [
                    { title: "API Connection Error", desc: "We could not generate specific missed opportunities due to a connection issue with OpenAI." }
                ],
                optimizedProjection: {
                    revenueRange: "N/A",
                    newPeakWeeklyRate: "N/A",
                    occupancyTarget: "N/A"
                },
                designStrategy: { 
                    recommendation: "AI analysis unavailable.",
                    impact: "Unable to calculate design lift logic.",
                    tags: ["Connection", "Error"]
                },
                listingStrategy: { 
                    titleStrategy: { good: "Connection Error", bad: "N/A" },
                    descriptionStrategy: ["Check API Key", "Check Model Availability", "Check Internet Connection"]
                },
                whySuiteCapacity: "Professional management is the institutional unlock for individual owners."
            };
        }
    }
};
