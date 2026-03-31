'use server';

import { supabase } from '@/lib/supabase';

export async function signUpGuestMember(data: {
  firstName: string;
  email: string;
  phone?: string;
}) {
  try {
    const { error } = await supabase
      .from('platform_activity')
      .insert([
        {
          type: 'guest_list_signup',
          details: {
            first_name: data.firstName,
            email: data.email,
            phone: data.phone || null,
            description: `Guest List Signup: ${data.firstName} (${data.email})`,
          },
        },
      ]);

    if (error) {
      console.error('Guest signup DB error:', error);
      // Still return success so the user gets through — DB logging is best-effort
    }

    return { success: true };
  } catch (error) {
    console.error('Guest signup error:', error);
    return { success: false, error: 'Something went wrong. Please try again.' };
  }
}
