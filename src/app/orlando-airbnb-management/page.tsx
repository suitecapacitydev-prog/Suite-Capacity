"use client";
import { MarketPageContent } from '@/components/marketing/market-page-content';
import { TrendingUp, Users, ShieldCheck, Star, Sun, Zap, MapPin } from 'lucide-react';

export default function OrlandoManagementPage() {
  return (
    <MarketPageContent
      marketName="Kissimmee-Orlando"
      heroTitle="The Wizard for"
      heroHighlight="Theme Park Hospitality."
      heroDesc="Maximize your Disney-area rental with the world's most advanced STR operating system. Specialized in mass-scale unit management and theme-park proximity pricing."
      heroImage="https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?auto=format&fit=crop&q=80&w=1200"
      revenueIncrease="+$8,200"
      revenueContext="Projected monthly revenue lift for 4+ bedroom pool homes near Magic Kingdom."
      stats={[
        { label: 'Projected Lift', value: '+35.0%', icon: TrendingUp },
        { label: 'Target ADR', value: '$425', icon: Star },
        { label: 'Units Active', value: '18', icon: Users },
        { label: 'Deployment', value: 'Phase 2', icon: Zap },
      ]}
      featuresTitle="High-Intensity,"
      featuresHighlight="Operations."
      featuresDesc="Orlando is a high-turnover market that requires military-grade cleaning schedules and rapid response maintenance. We've built the local layer to handle it."
      features={[
        {
          title: 'Rapid Turnover Logic',
          desc: 'Same-day turnaround protocols for large group homes, ensuring 100% inspection pass rates before guest arrival.',
          icon: Zap
        },
        {
          title: 'Theme Park Pricing',
          desc: 'Dynamic rates that shift based on park attendance forecasts, local events, and seasonal fly-in patterns.',
          icon: MapPin
        },
        {
          title: 'Pool & HVAC Care',
          desc: 'Daily monitoring of high-wear assets to ensure zero-downtime for the most critical guest amenities.',
          icon: Sun
        }
      ]}
    />
  );
}
