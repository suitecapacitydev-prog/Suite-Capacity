'use client';

import Link from 'next/link';
import { CONTACT_SMS_MESSAGE_TYPES, LEGAL_BRAND, LEGAL_ROUTES } from '@/lib/legal';
import { cn } from '@/lib/utils';

interface ContactPageSmsConsentProps {
  id?: string;
  checked: boolean;
  onChange: (checked: boolean) => void;
  className?: string;
}

export function ContactPageSmsConsent({
  id = 'contact-sms-consent',
  checked,
  onChange,
  className,
}: ContactPageSmsConsentProps) {
  return (
    <label
      htmlFor={id}
      className={cn(
        'flex gap-3 items-start cursor-pointer text-left text-sm leading-relaxed text-black/70',
        className
      )}
    >
      <input
        id={id}
        type="checkbox"
        checked={checked}
        onChange={(e) => onChange(e.target.checked)}
        className="mt-1 h-4 w-4 shrink-0 rounded border-border text-primary focus:ring-primary"
      />
      <span>
        By checking this box, you agree to receive SMS messages from {LEGAL_BRAND.dba} related to{' '}
        {CONTACT_SMS_MESSAGE_TYPES}. You may reply STOP to opt out at any time. Reply HELP to{' '}
        {LEGAL_BRAND.phoneTollFree} for assistance. Messages and data rates may apply. Message frequency will vary.
        Learn more on our{' '}
        <Link href={LEGAL_ROUTES.privacy} className="text-primary font-semibold hover:underline">
          privacy policy
        </Link>{' '}
        page and{' '}
        <Link href={LEGAL_ROUTES.terms} className="text-primary font-semibold hover:underline">
          Terms &amp; Conditions
        </Link>
        .
      </span>
    </label>
  );
}