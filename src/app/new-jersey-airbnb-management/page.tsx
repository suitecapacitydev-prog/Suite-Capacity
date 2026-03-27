"use client";
import { MarketPageContent } from '@/components/marketing/market-page-content';
import { TrendingUp, Users, ShieldCheck, Star, Sun, Waves, Calendar } from 'lucide-react';

export default function NewJerseyManagementPage() {
  return (
    <MarketPageContent
      marketName="Jersey Shore Central"
      heroTitle="Mastering the"
      heroHighlight="Atlantic Seaboard."
      heroDesc="From Belmar to Cape May, we've deployed a hyper-local operations layer that handles high-intensity summer seasonal spikes with 28.4% better revenue capture than the market average."
      heroImage="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&q=80&w=1200"
      revenueIncrease="+$12,450"
      revenueContext="Average monthly revenue increase for 3+ bedroom units in Belmar."
      stats={[
        { label: 'Revenue Lift', value: '+28.4%', icon: TrendingUp },
        { label: 'Market Rank', value: 'Top 2%', icon: Star },
        { label: 'Units Managed', value: '42', icon: Users },
        { label: 'Guest Rating', value: '4.92', icon: ShieldCheck },
      ]}
      featuresTitle="Seasonal Strategy,"
      featuresHighlight="Perfected."
      featuresDesc="We don't believe in set-it-and-forget-it management. Our Jersey Shore response team uses a high-frequency maintenance protocol and dynamic pricing models built specifically for beach town demand curves."
      features={[
        {
          title: 'Summer Peak Capture',
          desc: 'Proprietary min-stay algorithms that maximize occupancy during high-demand summer weekends without sacrificing weekly booking gaps.',
          icon: Sun
        },
        {
          title: 'Ocean-Front Maintenance',
          desc: 'Specialized HVAC and exterior maintenance protocols to combat salt-air corrosion and high-humidity environments.',
          icon: Waves
        },
        {
          title: 'Off-Season Activation',
          desc: 'Custom corporate retreat and long-term winter rental programs to ensure cash flow during the shoulder months.',
          icon: Calendar
        }
      ]}
    />
  );
}
