"use client";
import { MarketPageContent } from '@/components/marketing/market-page-content';
import { TrendingUp, Users, ShieldCheck, Sun, Zap, MapPin, Thermometer } from 'lucide-react';

export default function PhoenixManagementPage() {
  return (
    <MarketPageContent
      marketName="Phoenix-Scottsdale"
      heroTitle="High-Yield"
      heroHighlight="Desert Hospitality."
      heroDesc="Leading the market in golf-season demand capture and heat-sensitive asset preservation. Your Scottsdale rental, optimized by the Brain."
      heroImage="https://images.unsplash.com/photo-1558036117-15d82a90b9b1?auto=format&fit=crop&q=80&w=1200"
      revenueIncrease="+$9,800"
      revenueContext="Peak season monthly lift for properties with high-end outdoor amenities."
      stats={[
        { label: 'Revenue Lift', value: '+26.8%', icon: TrendingUp },
        { label: 'Seasonality', value: 'Multi', icon: Sun },
        { label: 'Response Time', value: '<15m', icon: Zap },
        { label: 'Quality Score', value: '4.95', icon: ShieldCheck },
      ]}
      featuresTitle="Precision,"
      featuresHighlight="Preservation."
      featuresDesc="The desert environment demands proactive maintenance. Our operations layer is built to protect your investment from the elements while maximizing yield."
      features={[
        {
          title: 'HVAC Optimization',
          desc: 'Smart-monitoring and preventative care to ensure zero climate-control downtime during peak summer heat.',
          icon: Thermometer
        },
        {
          title: 'Golf Season Yield',
          desc: 'Custom algorithms that track major golf events and spring training to capture 3x standard market rates.',
          icon: Sun
        },
        {
          title: 'Remote Entry Systems',
          desc: 'Enterprise-grade access control for seamless check-ins and enhanced property security.',
          icon: Zap
        }
      ]}
    />
  );
}
