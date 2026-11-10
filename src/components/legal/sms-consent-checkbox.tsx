'use client';

import Link from 'next/link';
import { LEGAL_BRAND, DEFAULT_SMS_MESSAGE_TYPES, LEGAL_ROUTES } from '@/lib/legal';
import { cn } from '@/lib/utils';

interface SmsConsentCheckboxProps {
  id?: string;
  checked: boolean;
  onChange: (checked: boolean) => void;
  messageTypes?: string;
  className?: string;
  disabled?: boolean;
}

export function SmsConsentCheckbox({
  id = 'sms-consent',
  checked,
  onChange,
  messageTypes = DEFAULT_SMS_MESSAGE_TYPES,
  className,
  disabled,
}: SmsConsentCheckboxProps) {
  return (
    <label
      htmlFor={id}
      className={cn(
        'flex gap-3 items-start cursor-pointer text-left text-xs leading-relaxed text-black/70',
        disabled && 'opacity-60 cursor-not-allowed',
        className
      )}
    >
      <input
        id={id}
        type="checkbox"
        checked={checked}
        disabled={disabled}
        onChange={(e) => onChange(e.target.checked)}
        className="mt-0.5 h-4 w-4 shrink-0 rounded border-border text-primary focus:ring-primary"
      />
      <span>
        By checking this box, I agree to receive text messages from {LEGAL_BRAND.name} related to{' '}
        {messageTypes} at the phone number provided above. SMS frequency may vary. Message and data rates
        may apply. Reply HELP for assistance. Reply STOP to opt out of receiving text messages. Please review
        our{' '}
        <Link href={LEGAL_ROUTES.privacy} className="text-primary font-semibold hover:underline">
          Privacy Policy
        </Link>{' '}
        and{' '}
        <Link href={LEGAL_ROUTES.sms} className="text-primary font-semibold hover:underline">
          SMS Terms &amp; Conditions
        </Link>
        .
      </span>
    </label>
  );
}
