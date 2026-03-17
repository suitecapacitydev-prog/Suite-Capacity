-- SQL to create the platform_activity table in the public schema
-- Run this in your Supabase SQL Editor

CREATE TABLE IF NOT EXISTS public.platform_activity (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    type TEXT NOT NULL, -- 'owner_login', 'guest_access', 'admin_login'
    details JSONB DEFAULT '{}'::jsonb,
    timestamp TIMESTAMPTZ DEFAULT now(),
    created_at TIMESTAMPTZ DEFAULT now()
);

-- Enable Realtime for this table
ALTER PUBLICATION supabase_realtime ADD TABLE public.platform_activity;

-- Optional: Add a friendly comment
COMMENT ON TABLE public.platform_activity IS 'Logs real-time platform activity for owners and guests.';
