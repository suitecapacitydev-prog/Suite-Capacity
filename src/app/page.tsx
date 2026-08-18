import SiteShell from '@/components/layout/site-shell';
import { Hero } from '@/components/marketing/hero';
import { AsSeenIn } from '@/components/marketing/as-seen-in';
import { HowItWorks } from '@/components/marketing/how-it-works';
import { WhatWeHandle } from '@/components/marketing/what-we-handle';
import { WhySuiteCapacity } from '@/components/marketing/why-suite-capacity';
import { PlatformSection } from '@/components/marketing/platform-section';
import { MarketsSection } from '@/components/marketing/markets-section';
import { STRBlueprint } from '@/components/marketing/str-blueprint';

export default function Home() {
  return (
    <SiteShell>
      <Hero />
      <HowItWorks />
      <WhatWeHandle />
      <WhySuiteCapacity />
      <PlatformSection />
      <MarketsSection />
      <AsSeenIn />
      <STRBlueprint />
    </SiteShell>
  );
}
