export type UserRole = 'SUPER_ADMIN' | 'ADMIN' | 'LOCAL_OPERATOR' | 'OWNER' | 'GUEST';

export interface UserProfile {
    id: string;
    email: string;
    role: UserRole;
    full_name?: string;
    avatar_url?: string;
    created_at: string;
}

export interface Property {
    id: string;
    owner_id: string;
    market_id: string;
    name: string;
    address: string;
    bedrooms: number;
    bathrooms: number;
    sleeps: number;
    status: 'PENDING' | 'DEPLOYING' | 'ACTIVE' | 'INACTIVE';
    created_at: string;
}

export interface DeploymentTask {
    id: string;
    property_id: string;
    title: string;
    description?: string;
    status: 'TODO' | 'IN_PROGRESS' | 'COMPLETED';
    due_date?: string;
    assigned_to?: string;
}
