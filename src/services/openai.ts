import OpenAI from 'openai';
import { WizardData } from '@/types/wizard';

const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
});

export const OpenAIService = {
    /**
     * Generates a high-fidelity revenue intelligence report based on property data and market data.
     */
    async generateIntelligence(data: WizardData, marketData: any) {
        if (!process.env.OPENAI_API_KEY) {
            console.warn('OPENAI_API_KEY is missing. AI intelligence generation skipped.');
            return null;
        }

        const isJerseyShore = marketData.isShore || false;
        
        // Construct the prompt based on the provided SYSTEM INSTRUCTIONS
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
● Think like a revenue manager + STR operator
● Use Jersey Shore seasonality logic (70–80% of revenue comes from June–August)
● Be confident but realistic
● Always tie recommendations → direct revenue impact

TONE:
● Sharp, Professional, Investor-minded, Slightly persuasive, Clear and decisive.

JERSEY SHORE RULES:
● ~$1,000/week per bedroom peak baseline
● Parking = huge value driver
● Outdoor space = conversion driver
● Design = biggest differentiator

OUTPUT STRUCTURE (STRICT JSON):
Return a JSON object with the following structure:
{
  "positioning": {
    "description": "Short description of the property",
    "marketPositioning": "Budget / mid-tier / premium potential",
    "strengths": "Key strengths (location, size, etc.)",
    "limitations": "Key limitations (design, lack of amenities, etc.)"
  },
  "missedOpportunities": ["List of 3-4 specific missed opportunities"],
  "optimizedProjection": {
    "revenueRange": "$X - $Y",
    "newPeakWeeklyRate": "$X"
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
  "whySuiteCapacity": "Concise summary ofSC as the institutional unlock"
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

        try {
            const response = await openai.chat.completions.create({
                model: "gpt-4o",
                messages: [
                    { role: "system", content: systemPrompt },
                    { role: "user", content: userPrompt }
                ],
                response_format: { type: "json_object" }
            });

            const content = response.choices[0].message.content;
            if (!content) throw new Error("Empty response from OpenAI");

            return JSON.parse(content);
        } catch (error) {
            console.error("OpenAI Intelligence Error:", error);
            return null;
        }
    }
};
