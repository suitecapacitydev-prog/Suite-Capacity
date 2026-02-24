/**
 * AI Design Rendering Service
 * Handles visual optimization of property photos using AI.
 */

export interface AIRenderingRequest {
    imageUrl: string;
    category: 'living-room' | 'bedroom' | 'outdoor' | 'kitchen' | 'bathroom' | 'exterior';
    targetStyle?: string;
}

export interface AIRenderingResponse {
    enhancedUrl: string;
    id: string;
    status: 'completed' | 'failed' | 'processing';
}

export const AIREnderingService = {
    /**
     * Triggers an AI enhancement for a property photo via Replicate.
     */
    enhanceImage: async (request: AIRenderingRequest): Promise<AIRenderingResponse> => {
        const apiToken = process.env.REPLICATE_API_TOKEN;

        if (!apiToken) {
            console.warn('Replicate API Token missing. Returning mock result.');
            return {
                id: 'mock-replicate-id',
                enhancedUrl: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1200&q=80",
                status: 'completed'
            };
        }

        try {
            // Replicate Prediction API call (e.g., using ControlNet or SDXL)
            // Model: stability-ai/sdxl
            const response = await fetch('https://api.replicate.com/v1/predictions', {
                method: 'POST',
                headers: {
                    'Authorization': `Token ${apiToken}`,
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    version: "39ed52f2a78e934b3ba6e2a89f5b1d712de74a53d7492f96931f3a1d3523a131", // SDXL version
                    input: {
                        image: request.imageUrl,
                        prompt: `Professional high-end real estate listing photo, luxury interior design, ${request.category}, high resolution, sharp focus`,
                        negative_prompt: "blurry, low quality, distorted, watermark",
                    }
                })
            });

            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(`Replicate API Error: ${JSON.stringify(errorData)}`);
            }

            const data = await response.json();

            return {
                id: data.id,
                enhancedUrl: data.output ? data.output[0] : "",
                status: data.status === 'succeeded' ? 'completed' : 'processing'
            };
        } catch (error) {
            console.error('AIREnderingService Error:', error);
            throw error;
        }
    },

    /**
     * Polls for the status of a rendering job on Replicate.
     */
    checkStatus: async (jobId: string): Promise<AIRenderingResponse['status']> => {
        const apiToken = process.env.REPLICATE_API_TOKEN;
        if (!apiToken) return 'completed';

        try {
            const response = await fetch(`https://api.replicate.com/v1/predictions/${jobId}`, {
                headers: { 'Authorization': `Token ${apiToken}` }
            });
            const data = await response.json();

            if (data.status === 'succeeded') return 'completed';
            if (data.status === 'failed') return 'failed';
            return 'processing';
        } catch (error) {
            console.error('Replicate Status Check Error:', error);
            return 'failed';
        }
    }
};
