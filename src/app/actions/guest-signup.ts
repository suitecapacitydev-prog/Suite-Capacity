'use server';

import { supabase } from '@/lib/supabase';

// Helper to generate a unique-ish promo code
function generatePromoCode() {
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
  const randomChars = Array.from({ length: 5 }, () => characters.charAt(Math.floor(Math.random() * characters.length))).join('');
  return `SC-WELCOME-${randomChars}`;
}

export async function signUpGuestMember(data: {
  firstName: string;
  email: string;
  phone?: string;
}) {
  try {
    const Email = data.email;
    const Phone = data.phone;
    let Errormsg = "";

    // 1. Check for existing lead by email or phone
    const { data: existingLead, error: checkError } = await supabase
      .from('leads')
      .select('id, promo_code, email, phone')
      .or(`email.eq.${Email}${Phone ? `,phone.eq.${Phone}` : ''}`)
      .limit(1)
      .single();


    if (existingLead) {
      if (existingLead.email === Email) {
        Errormsg = "Email Already Exist";
      }
      else if (existingLead.phone === Phone) {
        Errormsg = "Phone Already Exist";
      }

      // If they already exist, dont return anything 
      return {
        error: Errormsg,
        success: false,
        promoCode: existingLead.promo_code,
        isExisting: true
      };
    }

    // 2. Generate new promo code
    const newPromoCode = generatePromoCode();

    // 3. Insert new lead into the existing 'leads' table
    const { error: insertError } = await supabase
      .from('leads')
      .insert([
        {
          name: data.firstName, // Map firstName to the existing 'name' column
          email: Email,
          phone: Phone || null,
          promo_code: newPromoCode,
          lead_type: 'guest_list',
          created_at: new UTCDate().toISOString(),
        },
      ]);

    if (insertError) {
      console.error('Lead insert error:', insertError);
      return { success: false, error: 'Failed to join guest list. Please try again.' };
    }

    // 4. Also log to platform_activity for historical reasons
    await supabase
      .from('platform_activity')
      .insert([
        {
          type: 'guest_list_signup',
          details: {
            first_name: data.firstName,
            email: data.email,
            phone: data.phone || null,
            promo_code: newPromoCode,
            description: `Guest List Signup: ${data.firstName} (${data.email})`,
          },
        },
      ]);

    return {
      success: true,
      promoCode: newPromoCode
    };
  } catch (error) {
    console.error('Guest signup error:', error);
    return { success: false, error: 'Something went wrong. Please try again.' };
  }
}

export async function validatePromoCode(promoCode: string) {
  try {
    const trimmedCode = promoCode.trim().toUpperCase();

    // Check if the promo code exists in the leads table
    const { data: lead, error } = await supabase
      .from('leads')
      .select('id, name, email')
      .eq('promo_code', trimmedCode)
      .limit(1)
      .single();

    if (error || !lead) {
      return { success: false, error: 'Invalid or expired promo code.' };
    }

    return {
      success: true,
      lead: {
        id: lead.id,
        name: lead.name,
        email: lead.email
      }
    };
  } catch (error) {
    console.error('Promo code validation error:', error);
    return { success: false, error: 'Something went wrong. Please try again.' };
  }
}

// Simple helper to avoid timezone issues during build if needed
class UTCDate extends Date {
  toISOString() {
    return super.toISOString();
  }
}
