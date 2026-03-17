import { createServerClient, type CookieOptions } from '@supabase/auth-helpers-nextjs';
import { cookies } from 'next/headers';

export type ActivityType = 'owner_login' | 'guest_access' | 'admin_login';

export const LoggingService = {
    logActivity: async (type: ActivityType, details: any = {}) => {
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
            const { error } = await supabase
                .from('platform_activity')
                .insert([
                    {
                        type,
                        details,
                        timestamp: new Date().toISOString()
                    }
                ]);

            if (error) {
                console.error('Database Logging Error:', error);
                // We'll swallow the error to prevent the main action from failing
            }
        } catch (err) {
            console.error('Logging Service Failed:', err);
        }
    }
};
