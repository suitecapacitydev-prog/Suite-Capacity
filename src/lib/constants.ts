import { UserRole } from '@/types';

export const ROLE_PERMISSIONS: Record<UserRole, string[]> = {
    SUPER_ADMIN: ['*'],
    ADMIN: ['manage:all_properties', 'view:analytics', 'manage:users', 'manage:markets'],
    LOCAL_OPERATOR: ['manage:own_market_properties', 'view:local_analytics', 'manage:vendors'],
    OWNER: ['view:own_properties', 'view:own_analytics', 'manage:deployment'],
    GUEST: ['view:bookings'],
};

export const PLATFORM_CONFIG = {
    DEPLOYMENT_TIMELINE_DAYS: 14,
    MAX_WIZARD_STEPS: 5,
    CACHING_TTL_SECONDS: 3600 * 24, // 24 hours for market data
};
