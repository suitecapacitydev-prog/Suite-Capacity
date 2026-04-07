import { getMarketBySlug, getSubMarketBySlug } from '@/data/markets';
import { MarketHubView } from '@/components/seo/market-hub-view';
import { LocalSubpageView } from '@/components/seo/local-subpage-view';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';

interface LocationPageProps {
  params: Promise<{
    locationSlug: string;
  }>;
}

export async function generateMetadata({ params }: LocationPageProps): Promise<Metadata> {
  const { locationSlug } = await params;

  // Check if it's a main market
  const market = getMarketBySlug(locationSlug);
  if (market) {
    return {
      title: `${market.name} Airbnb Management Service | Suite Capacity`,
      description: `Maximize your STR revenue in ${market.name} with our local operations and dynamic pricing. ${market.revenueContext}`,
      alternates: {
        canonical: `/${locationSlug}`,
      },
    };
  }

  // Check if it's a sub-market
  const subMarketData = getSubMarketBySlug(locationSlug);
  if (subMarketData) {
    const { subMarket } = subMarketData;
    return {
      title: `${subMarket.name} Airbnb Management & Local Operations | Suite Capacity`,
      description: `Premium short-term rental management in ${subMarket.name}. We handle everything from pricing to local maintenance and guest support.`,
      alternates: {
        canonical: `/${locationSlug}`,
      },
    };
  }

  return {};
}

export default async function LocationPage({ params }: LocationPageProps) {
  const { locationSlug } = await params;

  // Render main market page
  const market = getMarketBySlug(locationSlug);
  if (market) {
    return <MarketHubView market={market} />;
  }

  // Render local subpage
  const subMarketData = getSubMarketBySlug(locationSlug);
  if (subMarketData) {
    return <LocalSubpageView market={subMarketData.market} subMarket={subMarketData.subMarket} />;
  }

  // If neither, fallback to 404 so Next.js handles other missing routes gracefully
  notFound();
}
