/** Public contact and brand info for legal / SMS compliance pages */
export const LEGAL_BRAND = {
  name: 'Suite Capacity',
  dba: 'Suite Capacity Property Management',
  website: 'https://www.suitecapacity.com',
  email: 'suitecapacity@gmail.com',
  phoneTollFree: '(855) 303-4545',
  phoneOffice: '(732) 440-5222',
} as const;

export const LEGAL_ROUTES = {
  privacy: '/privacy-policy',
  terms: '/terms-of-service',
  sms: '/sms-terms',
  contact: '/contact',
} as const;

/** Wording for public Contact Us page SMS opt-in (RingCentral / TCR sample) */
export const CONTACT_SMS_MESSAGE_TYPES = 'appointment reminders and follow-up messages';

/** RingCentral / TCR-style message types for owner & guest communications */
export const DEFAULT_SMS_MESSAGE_TYPES =
  'property management updates, appointment reminders, guest stay updates, and account inquiries';

export function phoneRequiresSmsConsent(phone: string | undefined | null): boolean {
  return Boolean(phone?.trim());
}
