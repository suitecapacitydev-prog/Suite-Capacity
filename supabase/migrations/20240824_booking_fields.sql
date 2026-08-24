-- Booking tracking for STR Blueprint consultation funnel

ALTER TABLE public.wizard_submissions
    ADD COLUMN IF NOT EXISTS calendly_event_uri TEXT,
    ADD COLUMN IF NOT EXISTS calendly_invitee_uri TEXT,
    ADD COLUMN IF NOT EXISTS booking_scheduled_at TIMESTAMPTZ,
    ADD COLUMN IF NOT EXISTS booking_confirmed_at TIMESTAMPTZ;

-- status values: draft | pending_booking | booking_scheduled | complete

CREATE INDEX IF NOT EXISTS idx_wizard_submissions_status ON public.wizard_submissions(status);
CREATE INDEX IF NOT EXISTS idx_wizard_submissions_lead_id ON public.wizard_submissions(lead_id);
