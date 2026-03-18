'use server';

import { createClient } from '@supabase/supabase-js';
import { HostawayService, GuestReservationData } from '@/services/hostaway';

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

export async function captureGuestLead(data: {
  fullName: string;
  email: string;
  phoneNumber: string;
  reservationCode: string;
}) {
  try {
    // Log the lead to the platform_activity table (or a dedicated leads table)
    const { error } = await supabase
      .from('platform_activity')
      .insert([
        {
          type: 'guest_lead_capture',
          details: {
            ...data,
            description: `Guest Lead Captured: ${data.fullName} (${data.email})`
          }
        }
      ]);

    if (error) throw error;

    // Fetch the real booking data from Hostaway
    const bookingDetails = await HostawayService.getBookingDetails(
      data.reservationCode,
      data.email
    );

    return {
      success: true,
      data: bookingDetails
    };
  } catch (error) {
    console.error('Lead Capture Error:', error);
    return {
      success: false,
      error: 'Failed to capture lead or fetch booking data'
    };
  }
}
