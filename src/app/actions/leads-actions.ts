'use server';

import { supabase } from '@/lib/supabase';
import { cookies } from 'next/headers';

export async function getLeads() {
  const cookieStore = await cookies();
  const demoSession = cookieStore.get('suite_demo_session')?.value;

  // Simple RBAC for the demo - only admins see all leads
  if (demoSession !== 'admin_active') {
    // In a real app, we would check the session user's role
    // For now, if not admin, we return empty or filtered (to be implemented)
    // return { success: false, error: 'Unauthorized' };
  }

  try {
    const { data: leads, error } = await supabase
      .from('leads')
      .select('*')
      .order('created_at', { ascending: false });

    if (error) throw error;

    return {
      success: true,
      leads: leads || []
    };
  } catch (error) {
    console.error('Fetch leads error:', error);
    return { success: false, error: 'Failed to fetch leads' };
  }
}
