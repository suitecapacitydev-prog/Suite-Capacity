-- Revenue Intelligence System Database Schema

-- 1. Leads Table (Sales/Marketing focus)
CREATE TABLE IF NOT EXISTS public.leads (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    name TEXT NOT NULL,
    email TEXT NOT NULL UNIQUE,
    phone TEXT,
    timeline TEXT,
    switching_management TEXT,
    operating_status TEXT,
    ownership_status TEXT,
    current_manager TEXT,
    estimated_revenue NUMERIC,
    has_pricing_software BOOLEAN,
    direct_booking_pct INTEGER,
    crm_tags TEXT[],
    lead_score INTEGER DEFAULT 0,
    created_at TIMESTAMPTZ DEFAULT now(),
    updated_at TIMESTAMPTZ DEFAULT now()
);

-- 2. Properties Table (Asset focus)
CREATE TABLE IF NOT EXISTS public.properties (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    lead_id UUID REFERENCES public.leads(id) ON DELETE CASCADE,
    address TEXT NOT NULL,
    property_type TEXT,
    bedrooms INTEGER,
    bathrooms NUMERIC,
    max_occupancy INTEGER,
    amenities TEXT[],
    parking TEXT,
    created_at TIMESTAMPTZ DEFAULT now()
);

-- 3. Wizard Submissions (Full data capture)
CREATE TABLE IF NOT EXISTS public.wizard_submissions (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    lead_id UUID REFERENCES public.leads(id) ON DELETE CASCADE,
    property_id UUID REFERENCES public.properties(id) ON DELETE CASCADE,
    qualification_data JSONB,
    baseline_data JSONB,
    audit_data JSONB,
    projection_results JSONB,
    status TEXT DEFAULT 'draft',
    created_at TIMESTAMPTZ DEFAULT now()
);

-- 4. AI Rendering Management
CREATE TABLE IF NOT EXISTS public.ai_enhancements (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    property_id UUID REFERENCES public.properties(id) ON DELETE CASCADE,
    category TEXT, -- living-room, bedroom, etc.
    original_url TEXT NOT NULL,
    enhanced_url TEXT,
    processing_status TEXT DEFAULT 'pending', -- pending, processing, completed, failed
    metadata JSONB,
    created_at TIMESTAMPTZ DEFAULT now()
);

-- Enable Row Level Security (RLS)
ALTER TABLE public.leads ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.properties ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.wizard_submissions ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.ai_enhancements ENABLE ROW LEVEL SECURITY;

-- Policies (Simplified for now - allowed for anon/authenticated for the wizard flow)
DO $$
BEGIN
    IF NOT EXISTS (
        SELECT 1 FROM pg_policies
        WHERE schemaname = 'public' AND tablename = 'leads' AND policyname = 'Allow anon insert leads'
    ) THEN
        CREATE POLICY "Allow anon insert leads" ON public.leads FOR INSERT WITH CHECK (true);
    END IF;

    IF NOT EXISTS (
        SELECT 1 FROM pg_policies
        WHERE schemaname = 'public' AND tablename = 'properties' AND policyname = 'Allow anon insert properties'
    ) THEN
        CREATE POLICY "Allow anon insert properties" ON public.properties FOR INSERT WITH CHECK (true);
    END IF;

    IF NOT EXISTS (
        SELECT 1 FROM pg_policies
        WHERE schemaname = 'public' AND tablename = 'wizard_submissions' AND policyname = 'Allow anon insert submissions'
    ) THEN
        CREATE POLICY "Allow anon insert submissions" ON public.wizard_submissions FOR INSERT WITH CHECK (true);
    END IF;

    IF NOT EXISTS (
        SELECT 1 FROM pg_policies
        WHERE schemaname = 'public' AND tablename = 'ai_enhancements' AND policyname = 'Allow anon insert enhancements'
    ) THEN
        CREATE POLICY "Allow anon insert enhancements" ON public.ai_enhancements FOR INSERT WITH CHECK (true);
    END IF;
END;
$$;

-- Functions for lead scoring (Automatic)
CREATE OR REPLACE FUNCTION calculate_lead_score() RETURNS TRIGGER AS $$
BEGIN
    -- Start with a base score
    NEW.lead_score := 0;

    -- Ownership status
    IF NEW.ownership_status IN ('own', 'contract') THEN
        NEW.lead_score := NEW.lead_score + 3;
    END IF;

    -- Active STR
    IF NEW.operating_status = 'yes' THEN
        NEW.lead_score := NEW.lead_score + 3;
    END IF;

    -- Immediate timeline
    IF NEW.timeline = 'immediately' THEN
        NEW.lead_score := NEW.lead_score + 3;
    END IF;

    -- Revenue threshold
    IF COALESCE(NEW.estimated_revenue, 0) > 75000 THEN
        NEW.lead_score := NEW.lead_score + 2;
    END IF;

    -- No pricing software (more qualified if not using any)
    IF NEW.has_pricing_software = FALSE THEN
        NEW.lead_score := NEW.lead_score + 2;
    END IF;

    -- Low direct booking percentage
    IF COALESCE(NEW.direct_booking_pct, 0) < 30 THEN
        NEW.lead_score := NEW.lead_score + 2;
    END IF;

    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

DO $$
BEGIN
    IF NOT EXISTS (
        SELECT 1 FROM pg_trigger
        WHERE tgname = 'tr_calculate_lead_score'
    ) THEN
        CREATE TRIGGER tr_calculate_lead_score
        BEFORE INSERT OR UPDATE ON public.leads
        FOR EACH ROW EXECUTE FUNCTION calculate_lead_score();
    END IF;
END;
$$;
