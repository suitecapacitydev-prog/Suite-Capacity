import { NextResponse } from 'next/server';
import { WizardSubmission } from '@/types/wizard';

export async function POST(request: Request) {
    try {
        const body: WizardSubmission = await request.json();

        // This is where you would normally save to Supabase
        console.log('Wizard Submission Received:', body);

        // Simulate database delay
        await new Promise(resolve => setTimeout(resolve, 1000));

        return NextResponse.json({
            success: true,
            message: 'Lead captured successfully',
            id: 'ws_' + Math.random().toString(36).substr(2, 9)
        });
    } catch (error) {
        return NextResponse.json({ success: false, error: 'Failed to process submission' }, { status: 500 });
    }
}
