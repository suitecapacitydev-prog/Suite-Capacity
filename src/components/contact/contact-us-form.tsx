'use client';

import { useState } from 'react';
import { ContactPageSmsConsent } from '@/components/contact/contact-page-sms-consent';
import { phoneRequiresSmsConsent } from '@/lib/legal';
import { Loader2 } from 'lucide-react';

const INQUIRY_TYPES = [
  'Full-service property management',
  'Consultation',
  'Co-hosting',
  'General inquiry',
] as const;

function FieldLabel({ children, required }: { children: React.ReactNode; required?: boolean }) {
  return (
    <label className="block text-sm font-medium text-black/60 mb-1.5">
      {children}
      {required && <span className="text-red-600 ml-0.5">*</span>}
    </label>
  );
}

const inputClass =
  'w-full rounded-md border border-black/15 bg-white px-3 py-2.5 text-sm text-black placeholder:text-black/35 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary/40';

export function ContactUsForm() {
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    company: '',
    email: '',
    phone: '',
    propertyZip: '',
    marketZip: '',
    inquiryType: INQUIRY_TYPES[0],
    message: '',
  });
  const [smsConsent, setSmsConsent] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  const update = (key: keyof typeof form, value: string) => {
    setForm((prev) => ({ ...prev, [key]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.firstName.trim() || !form.lastName.trim() || !form.email.trim()) {
      setError('Please complete all required fields.');
      return;
    }
    if (phoneRequiresSmsConsent(form.phone) && !smsConsent) {
      setError('Please agree to receive SMS messages to continue with a phone number on file.');
      return;
    }

    setIsSubmitting(true);
    setError(null);

    try {
      const res = await fetch('/api/contact/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...form,
          smsConsent: phoneRequiresSmsConsent(form.phone) ? smsConsent : false,
        }),
      });
      const data = await res.json();
      if (!res.ok || !data.success) {
        setError(data.error || 'Something went wrong. Please try again.');
        return;
      }
      setSuccess(true);
      setForm({
        firstName: '',
        lastName: '',
        company: '',
        email: '',
        phone: '',
        propertyZip: '',
        marketZip: '',
        inquiryType: INQUIRY_TYPES[0],
        message: '',
      });
      setSmsConsent(false);
    } catch {
      setError('Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (success) {
    return (
      <div className="rounded-xl border border-primary/20 bg-primary/5 p-8 text-center">
        <p className="text-lg font-semibold text-black mb-2">Thank you — your message was sent.</p>
        <p className="text-sm text-black/60 mb-6">Our team will follow up shortly.</p>
        <button
          type="button"
          onClick={() => setSuccess(false)}
          className="text-sm font-semibold text-primary hover:underline"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <p className="text-center text-black/50 text-sm font-medium">Fill out the form below</p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <FieldLabel required>First Name</FieldLabel>
          <input
            type="text"
            className={inputClass}
            placeholder="First Name"
            value={form.firstName}
            onChange={(e) => update('firstName', e.target.value)}
            required
          />
        </div>
        <div>
          <FieldLabel required>Last Name</FieldLabel>
          <input
            type="text"
            className={inputClass}
            placeholder="Last Name"
            value={form.lastName}
            onChange={(e) => update('lastName', e.target.value)}
            required
          />
        </div>
      </div>

      <div>
        <FieldLabel>Company</FieldLabel>
        <input
          type="text"
          className={inputClass}
          placeholder="Company"
          value={form.company}
          onChange={(e) => update('company', e.target.value)}
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <FieldLabel required>Email</FieldLabel>
          <input
            type="email"
            className={inputClass}
            placeholder="Email"
            value={form.email}
            onChange={(e) => update('email', e.target.value)}
            required
          />
        </div>
        <div>
          <FieldLabel>Phone</FieldLabel>
          <input
            type="tel"
            className={inputClass}
            placeholder="Phone"
            value={form.phone}
            onChange={(e) => update('phone', e.target.value)}
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div>
          <FieldLabel>Property Zip</FieldLabel>
          <input
            type="text"
            className={inputClass}
            inputMode="numeric"
            value={form.propertyZip}
            onChange={(e) => update('propertyZip', e.target.value)}
          />
        </div>
        <div>
          <FieldLabel>Market Zip</FieldLabel>
          <input
            type="text"
            className={inputClass}
            inputMode="numeric"
            value={form.marketZip}
            onChange={(e) => update('marketZip', e.target.value)}
          />
        </div>
        <div>
          <FieldLabel>Inquiry Type</FieldLabel>
          <select
            className={inputClass}
            value={form.inquiryType}
            onChange={(e) => update('inquiryType', e.target.value)}
          >
            {INQUIRY_TYPES.map((opt) => (
              <option key={opt} value={opt}>
                {opt}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div>
        <FieldLabel>Message</FieldLabel>
        <textarea
          className={`${inputClass} min-h-[120px] resize-y`}
          placeholder="Message"
          value={form.message}
          onChange={(e) => update('message', e.target.value)}
        />
      </div>

      <ContactPageSmsConsent checked={smsConsent} onChange={setSmsConsent} />

      {error && <p className="text-sm text-red-600 font-medium">{error}</p>}

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full rounded-md bg-[#006633] hover:bg-[#005528] disabled:opacity-60 text-white font-bold py-3.5 text-base transition-colors flex items-center justify-center gap-2"
      >
        {isSubmitting ? (
          <>
            <Loader2 className="w-5 h-5 animate-spin" />
            Sending…
          </>
        ) : (
          'Send'
        )}
      </button>
    </form>
  );
}