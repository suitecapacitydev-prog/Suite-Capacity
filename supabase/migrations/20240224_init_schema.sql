-- Revenue Intelligence System Database Schema

-- 1. Leads Table (Sales/Marketing focus)
CREATE TABLE IF NOT EXISTS public.leads (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    name TEXT NOT NULL,
    email TEXT NOT NULL UNIQUE,
    phone TEXT,
    timeline TEXT,
    switching_management TEXT,
    current_manager TEXT,
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
CREATE POLICY "Allow anon insert leads" ON public.leads FOR INSERT WITH CHECK (true);
CREATE POLICY "Allow anon insert properties" ON public.properties FOR INSERT WITH CHECK (true);
CREATE POLICY "Allow anon insert submissions" ON public.wizard_submissions FOR INSERT WITH CHECK (true);
CREATE POLICY "Allow anon insert enhancements" ON public.ai_enhancements FOR INSERT WITH CHECK (true);

-- Functions for lead scoring (Automatic)
CREATE OR REPLACE FUNCTION calculate_lead_score() RETURNS TRIGGER AS $$
BEGIN
    -- Base scoring logic
    NEW.lead_score := 0;
    IF NEW.timeline = 'immediately' THEN NEW.lead_score := NEW.lead_score + 10; END IF;
    IF NEW.switching_management = 'yes' THEN NEW.lead_score := NEW.lead_score + 15; END IF;
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER tr_calculate_lead_score
BEFORE INSERT OR UPDATE ON public.leads
FOR EACH ROW EXECUTE FUNCTION calculate_lead_score();
