import SiteShell from '@/components/layout/site-shell';
import { Hero } from '@/components/marketing/hero';
import { AsSeenIn } from '@/components/marketing/as-seen-in';
import { GuestEcosystemSection } from '@/components/marketing/guest-ecosystem-section';
import { DeploymentProcess } from '@/components/marketing/deployment-process';
import { MarketsSection } from '@/components/marketing/markets-section';
import { InvestmentTeaser } from '@/components/marketing/investment-teaser';
import { GuestListTeaser } from '@/components/marketing/guest-list-teaser';
import { STRBlueprint } from '@/components/marketing/str-blueprint';
import { HowItWorks } from '@/components/marketing/how-it-works';
import PlatformPage from './platform/page';

export default function Home() {
  return (
    <SiteShell>
      <Hero />
      <AsSeenIn />
      <STRBlueprint />
      <PlatformPage />
      <HowItWorks />
      <InvestmentTeaser />
      <GuestListTeaser />
      <MarketsSection />
      <GuestEcosystemSection />
      <DeploymentProcess />
    </SiteShell>
  );
}
