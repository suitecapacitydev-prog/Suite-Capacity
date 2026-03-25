import SiteShell from '@/components/layout/site-shell';
import { Hero } from '@/components/marketing/hero';
import { GuestEcosystemSection } from '@/components/marketing/guest-ecosystem-section';
import { DeploymentProcess } from '@/components/marketing/deployment-process';
import { MarketsSection } from '@/components/marketing/markets-section';
import { InvestmentTeaser } from '@/components/marketing/investment-teaser';
import { GuestListTeaser } from '@/components/marketing/guest-list-teaser';
import Link from 'next/link';
import { FileText, Settings, TrendingUp, ArrowRight, CheckCircle } from 'lucide-react';
import { STRBlueprint } from '@/components/marketing/str-blueprint';
import { HowItWorks } from '@/components/marketing/how-it-works';

export default function Home() {
  return (
    <SiteShell>
      <Hero />
      <STRBlueprint />
      <HowItWorks />
      <InvestmentTeaser />
      <GuestListTeaser />
      <MarketsSection />
      <GuestEcosystemSection />
      <DeploymentProcess />
    </SiteShell>
  );
}
