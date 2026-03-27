"use client";
import { MarketPageContent } from '@/components/marketing/market-page-content';
import { TrendingUp, Users, ShieldCheck, Star, Waves, Sun } from 'lucide-react';

export default function MiamiManagementPage() {
  return (
    <MarketPageContent
      marketName="Florida Coastal / Miami"
      heroTitle="Luxury Assets,"
      heroHighlight="Managed to Scale."
      heroDesc="Year-round demand meets elite on-the-ground operations. We handle the high-standard expectations of Miami guests while optimizing for state-wide compliance."
      heroImage="/images/properties/beachside.jpg"
      revenueIncrease="+$15,600"
      revenueContext="Average revenue increase for luxury condos in Brickell and South Beach."
      stats={[
        { label: 'Revenue Lift', value: '+31.2%', icon: TrendingUp },
        { label: 'Market Tier', value: 'Luxury', icon: Star },
        { label: 'Vetting Rate', value: '100%', icon: ShieldCheck },
        { label: 'Occupancy', value: '84%', icon: Users },
      ]}
      featuresTitle="The Miami,"
      featuresHighlight="Standard."
      featuresDesc="In a market defined by aesthetics and luxury, our management layer prioritizes concierge-level guest experiences and pristine property presentation."
      features={[
        {
          title: 'Elite Guest Vetting',
          desc: 'Multi-step verification process to ensure high-value assets are protected while maintaining high occupancy.',
          icon: ShieldCheck
        },
        {
          title: 'Hurricane Compliance',
          desc: 'Full-service storm prep and post-event inspections included in our standard operational layer.',
          icon: Waves
        },
        {
          title: 'Dynamic Coastal Pricing',
          desc: 'Aggressive pricing models that capture premium rates during Art Basel, Boat Show, and major holiday weeks.',
          icon: Sun
        }
      ]}
    />
  );
}
