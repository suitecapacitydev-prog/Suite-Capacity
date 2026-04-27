"use client";
import { MarketPageContent } from '@/components/marketing/market-page-content';
import { TrendingUp, Users, ShieldCheck, Trees, Calendar, Zap, Mountain, Star } from 'lucide-react';

export default function PoconosManagementPage() {
  return (
    <MarketPageContent
      marketName="Poconos Mountain Retreat"
      heroTitle="Multi-Seasonal"
      heroHighlight="Asset Performance."
      heroDesc="Expertise in Northeast mountain hospitality. We optimize your Poconos rental for peak ski season, summer lake demand, and weekend group retreats."
      heroImage="https://images.unsplash.com/photo-1518780664697-55e3ad937233?auto=format&fit=crop&q=80&w=1200"
      revenueIncrease="+$7,400"
      revenueContext="Average revenue increase for chalets and lakefront homes in the Poconos."
      stats={[
        { label: 'Revenue Lift', value: '+24.5%', icon: TrendingUp },
        { label: 'Market Rank', value: 'Top 5%', icon: Star },
        { label: 'Direct Bookings', value: '38%', icon: Users },
        { label: 'Quality Score', value: '4.91', icon: ShieldCheck },
      ]}
      featuresTitle="Mountain,"
      featuresHighlight="Reliability."
      featuresDesc="Northeast mountain markets require specialized care for weather-related events and high-occupancy guest groups. We've built the system to handle it all."
      features={[
        {
          title: 'Large Group Logistics',
          desc: 'Specialized operation protocols for properties hosting 12+ guests, ensuring wear-and-tear is managed and cleanliness is pristine.',
          icon: Users
        },
        {
          title: 'Ski Season Readiness',
          desc: 'Proactive winterization and snow-clearing coordination included in our standard operational layer.',
          icon: Zap
        },
        {
          title: 'Lakefront Maintenance',
          desc: 'Comprehensive dock and exterior amenity management to ensure your property stays in top shape during peak summer months.',
          icon: Trees
        }
      ]}
    />
  );
}
