import { Waves, LucideIcon } from 'lucide-react';

export interface WizardMarket {
  id: string;
  name: string;
  desc: string;
  status: 'active' | 'coming-soon';
  icon: LucideIcon;
  towns: string[];
}

export const WIZARD_MARKETS: WizardMarket[] = [
  {
    id: 'seaside-heights-airbnb-management',
    name: 'Seaside Heights',
    desc: 'Boardwalk-driven summer demand hub on the barrier island.',
    status: 'active',
    icon: Waves,
    towns: ['seaside heights'],
  },
  {
    id: 'seaside-park-airbnb-management',
    name: 'Seaside Park',
    desc: 'Quieter barrier-island stretch favored by families and repeat guests.',
    status: 'active',
    icon: Waves,
    towns: ['seaside park'],
  },
  {
    id: 'lavallette-airbnb-management',
    name: 'Lavallette',
    desc: 'Family-oriented peninsula with strong weekly and seasonal demand.',
    status: 'active',
    icon: Waves,
    towns: ['lavallette'],
  },
  {
    id: 'ortley-beach-airbnb-management',
    name: 'Ortley Beach',
    desc: 'Intimate barrier-island community between Lavallette and Seaside Park.',
    status: 'active',
    icon: Waves,
    towns: ['ortley beach', 'ortley'],
  },
  {
    id: 'mantoloking-airbnb-management',
    name: 'Mantoloking',
    desc: 'Exclusive barrier island between the Atlantic and Barnegat Bay.',
    status: 'active',
    icon: Waves,
    towns: ['mantoloking'],
  },
  {
    id: 'bay-head-airbnb-management',
    name: 'Bay Head',
    desc: 'Prestigious north-shore village with Victorian charm and bay access.',
    status: 'active',
    icon: Waves,
    towns: ['bay head'],
  },
  {
    id: 'point-pleasant-airbnb-management',
    name: 'Point Pleasant',
    desc: 'Boardwalk and Manasquan Inlet market with year-round draw.',
    status: 'active',
    icon: Waves,
    towns: ['point pleasant'],
  },
  {
    id: 'ocean-gate-airbnb-management',
    name: 'Ocean Gate',
    desc: 'Quiet bay-front borough with strong local appeal and easy Toms River access.',
    status: 'active',
    icon: Waves,
    towns: ['ocean gate'],
  },
  {
    id: 'belmar-airbnb-management',
    name: 'Belmar',
    desc: 'Coming Soon. Classic Monmouth County beach town with strong summer weekend demand.',
    status: 'coming-soon',
    icon: Waves,
    towns: ['belmar'],
  },
  {
    id: 'asbury-park-airbnb-management',
    name: 'Asbury Park',
    desc: 'Coming Soon. Revitalized boardwalk destination with growing STR demand.',
    status: 'coming-soon',
    icon: Waves,
    towns: ['asbury park'],
  },
  {
    id: 'wildwood-cape-may-airbnb-management',
    name: 'Wildwood & Cape May',
    desc: 'Coming Soon. From iconic boardwalk peaks to Victorian Cape May elegance.',
    status: 'coming-soon',
    icon: Waves,
    towns: ['wildwood', 'cape may', 'north wildwood'],
  },
  {
    id: 'long-beach-island-beach-haven-airbnb-management',
    name: 'Long Beach Island & Beach Haven',
    desc: 'Coming Soon. LBI\'s 18-mile barrier island and Beach Haven hub.',
    status: 'coming-soon',
    icon: Waves,
    towns: ['long beach island', 'beach haven', 'ship bottom', 'surf city', 'harvey cedars'],
  },
];

export function getWizardMarketById(id: string): WizardMarket | undefined {
  return WIZARD_MARKETS.find((m) => m.id === id);
}

export function getWizardMarketByAddress(address: string): WizardMarket | undefined {
  const addr = address.toLowerCase();
  const matches = WIZARD_MARKETS.flatMap((market) =>
    market.towns.map((town) => ({ town, market }))
  );
  matches.sort((a, b) => b.town.length - a.town.length);
  return matches.find(({ town }) => addr.includes(town))?.market;
}

export function getWizardMarketMultiplier(market?: WizardMarket): number {
  return market?.status === 'active' ? 1.35 : 1.15;
}

export function getWizardMarketStatusLabel(market?: WizardMarket): string {
  if (!market) return 'Active';
  return market.status === 'coming-soon' ? 'Coming Soon' : 'Active';
}
