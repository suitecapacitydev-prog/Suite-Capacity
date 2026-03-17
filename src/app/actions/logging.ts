'use server';

import { LoggingService, ActivityType } from '@/services/logging';

export async function logClientActivity(type: ActivityType, details: any = {}) {
    await LoggingService.logActivity(type, details);
}
