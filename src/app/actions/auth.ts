'use server';

import { createServerClient, type CookieOptions } from '@supabase/auth-helpers-nextjs';
import { cookies } from 'next/headers';
import { LoggingService } from '@/services/logging';

export async function login(formData: FormData) {
    const email = formData.get('email') as string;
    const password = formData.get('password') as string;

    const cookieStore = await cookies();

    const supabase = createServerClient(
        process.env.NEXT_PUBLIC_SUPABASE_URL!,
        process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
        {
            cookies: {
                get(name: string) {
                    return cookieStore.get(name)?.value;
                },
                set(name: string, value: string, options: CookieOptions) {
                    cookieStore.set({ name, value, ...options });
                },
                remove(name: string, options: CookieOptions) {
                    cookieStore.set({ name, value: '', ...options });
                },
            },
        }
    );

    try {
        const { error } = await supabase.auth.signInWithPassword({
            email,
            password,
        });

        if (error) {
            // Special check for the requested demo credentials if they don't exist in Supabase yet
            if (email === 'admin@suitecapacity.com' && password === 'suitesecure2024') {
                // Set a temporary session cookie for the demo
                cookieStore.set('suite_demo_session', 'admin_active', {
                    path: '/',
                    httpOnly: true,
                    secure: process.env.NODE_ENV === 'production',
                    maxAge: 60 * 60 * 24 // 24 hours
                });
                await LoggingService.logActivity('admin_login', { email });
                return { success: true };
            }
            return { success: false, error: error.message };
        }

        await LoggingService.logActivity('owner_login', { email });
        return { success: true };
    } catch (err) {
        console.error('Login error:', err);
        return { success: false, error: 'An unexpected error occurred' };
    }
}

export async function signOut() {
    const cookieStore = await cookies();
    const supabase = createServerClient(
        process.env.NEXT_PUBLIC_SUPABASE_URL!,
        process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
        {
            cookies: {
                get(name: string) {
                    return cookieStore.get(name)?.value;
                },
                set(name: string, value: string, options: CookieOptions) {
                    cookieStore.set({ name, value, ...options });
                },
                remove(name: string, options: CookieOptions) {
                    cookieStore.set({ name, value: '', ...options });
                },
            },
        }
    );

    await supabase.auth.signOut();
    cookieStore.set('suite_demo_session', '', { maxAge: 0 });
}
