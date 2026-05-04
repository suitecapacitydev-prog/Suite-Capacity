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
            // Replicate Prediction API call using nightmareai/real-esrgan to enhance image resolution and quality
            const response = await fetch('https://api.replicate.com/v1/predictions', {
                method: 'POST',
                headers: {
                    'Authorization': `Token ${apiToken}`,
                    'Content-Type': 'application/json',
                    'Prefer': 'wait' // Tell Replicate to wait for the prediction to finish
                },
                body: JSON.stringify({
                    version: "42fed1c4974146d4d2414e2be2c5277c7fcf05fcc3a73abf41610695738c1d7b", // nightmareai/real-esrgan
                    input: {
                        image: request.imageUrl,
                        scale: 4, // 4x upscale to target 4K resolution
                        face_enhance: false
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
                enhancedUrl: data.output ? (Array.isArray(data.output) ? data.output[0] : data.output) : "",
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
