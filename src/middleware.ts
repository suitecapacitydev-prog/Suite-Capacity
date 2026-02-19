import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

/**
 * Suite Capacity Middleware
 * Handles:
 * 1. Auth session refresh (Supabase)
 * 2. Role-based access control (RBAC)
 * 3. API Route protection
 */
export async function middleware(request: NextRequest) {
    // Placeholder for Supabase auth logic
    // const { data: { session } } = await supabase.auth.getSession();

    const { pathname } = request.nextUrl;

    // 1. Public Routes
    if (pathname === '/' || pathname.startsWith('/login') || pathname.startsWith('/wizard')) {
        return NextResponse.next();
    }

    // 2. Protected Dashboard Routes (Placeholder Logic)
    if (pathname.startsWith('/dashboard')) {
        // Redirect to login if no session (when auth is implemented)
        // return NextResponse.redirect(new URL('/login', request.url));
    }

    // 3. Admin Protected Routes
    if (pathname.startsWith('/admin')) {
        // Check role from profile (when auth is implemented)
        // if (userRole !== 'ADMIN' && userRole !== 'SUPER_ADMIN') {
        //   return NextResponse.redirect(new URL('/dashboard', request.url));
        // }
    }

    return NextResponse.next();
}

export const config = {
    matcher: [
        /*
         * Match all request paths except for the ones starting with:
         * - api (API routes)
         * - _next/static (static files)
         * - _next/image (image optimization files)
         * - favicon.ico (favicon file)
         */
        '/((?!api|_next/static|_next/image|favicon.ico).*)',
    ],
};
