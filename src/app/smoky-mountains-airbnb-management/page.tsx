"use client";
import { MarketPageContent } from '@/components/marketing/market-page-content';
import { TrendingUp, Users, ShieldCheck, Mountain, Trees, Calendar, Zap } from 'lucide-react';

export default function SmokyMountainsManagementPage() {
  return (
    <MarketPageContent
      marketName="Smoky Mountains"
      heroTitle="Luxury Cabin"
      heroHighlight="Performance."
      heroDesc="From Gatlinburg to Pigeon Forge, we manage high-yield mountain retreats with specialized winter-weather operations and year-round demand optimization."
      heroImage="https://images.unsplash.com/photo-1542718610-a1d656d1884c?auto=format&fit=crop&q=80&w=1200"
      revenueIncrease="+$11,200"
      revenueContext="Average revenue increase for large-format 5+ bedroom cabins."
      stats={[
        { label: 'Revenue Lift', value: '+33.5%', icon: TrendingUp },
        { label: 'Reliability', value: '99.9%', icon: ShieldCheck },
        { label: 'Direct Bookings', value: '41%', icon: Users },
        { label: 'Guest Score', value: '4.98', icon: Mountain },
      ]}
      featuresTitle="Rugged,"
      featuresHighlight="Refinement."
      featuresDesc="Mountain management requires a local team that can handle remote locations and extreme weather. Our distributed layer is built for exactly that."
      features={[
        {
          title: 'Winter Ops Hub',
          desc: 'Dedicated snow-response and accessibility teams to ensure your cabin remains accessible and safe year-round.',
          icon: Zap
        },
        {
          title: 'Multi-Season Yield',
          desc: 'Strategic marketing for leaf-peeping season, winter holidays, and summer mountain adventures.',
          icon: Calendar
        },
        {
          title: 'Remote Amenity Care',
          desc: 'Specialized maintenance for hot tubs, fire pits, and difficult-to-service luxury mountain features.',
          icon: Trees
        }
      ]}
    />
  );
}
