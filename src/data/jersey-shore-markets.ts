import { Waves, LucideIcon } from 'lucide-react';

export interface JerseyShoreMarketCard {
  name: string;
  desc: string;
  performance: string;
  stats: string;
  icon: LucideIcon;
  href: string;
  image: string;
  status: 'active' | 'coming-soon';
}

export const CURRENTLY_SERVING_MARKETS: JerseyShoreMarketCard[] = [
  {
    name: 'Seaside Heights',
    desc: 'Boardwalk-driven summer demand hub on the barrier island. High-intensity turnover ops and dynamic pricing built for peak-season beach crowds.',
    performance: '15.9%',
    stats: '48+',
    icon: Waves,
    href: '/seaside-heights-airbnb-management',
    image: 'https://hostaway-platform.s3.us-west-2.amazonaws.com/listing/155201-409074-Y1LNcplmAFEOrXgf0Fu0m68dRjWYqZiJa-BxRg6rOtc-6865b7b94697c',
    status: 'active',
  },
  {
    name: 'Seaside Park',
    desc: 'Quieter barrier-island stretch favored by families and repeat guests. Premium maintenance standards and longer-stay revenue optimization.',
    performance: '15.9%',
    stats: 'Active',
    icon: Waves,
    href: '/seaside-park-airbnb-management',
    image: 'https://hostaway-platform.s3.us-west-2.amazonaws.com/listing/155201-455210-Mgt5-MCIPyPn--WqqS05s805zPkmE8vFyjSfxLPWnSWA-691e1c23703b8',
    status: 'active',
  },
  {
    name: 'Lavallette',
    desc: 'Family-oriented peninsula with strong weekly and seasonal demand. Localized turnover teams and bay-to-beach guest experience management.',
    performance: '15.9%',
    stats: 'Active',
    icon: Waves,
    href: '/lavallette-airbnb-management',
    image: 'https://hostaway-platform.s3.us-west-2.amazonaws.com/listing/155201-439808-6iOOMuxxyCdqUSxUO3xrf07KzmVXHDGWhh4mjFbIiEA-68e505c3b7eed',
    status: 'active',
  },
  {
    name: 'Ortley Beach',
    desc: 'Intimate barrier-island community between Lavallette and Seaside Park. Salt-air maintenance protocols and shoulder-season booking strategies.',
    performance: '15.9%',
    stats: 'Active',
    icon: Waves,
    href: '/ortley-beach-airbnb-management',
    image: 'https://hostaway-platform.s3.us-west-2.amazonaws.com/listing/155201-455210-nrfFbd8GSRAPFIGiv471xXXNxxSENuhIDIwRjVUtLLM-691e1c2fad37e',
    status: 'active',
  },
  {
    name: 'Mantoloking',
    desc: 'Exclusive barrier island between the Atlantic and Barnegat Bay. White-glove property care and premium pricing for discerning shore guests.',
    performance: '15.9%',
    stats: 'Active',
    icon: Waves,
    href: '/mantoloking-airbnb-management',
    image: 'https://hostaway-platform.s3.us-west-2.amazonaws.com/listing/155201-557350-CzgbZBNi8MOdePilj1udA9EgixhoL8P082c5xJChoVQ-6a26cf48da933',
    status: 'active',
  },
  {
    name: 'Bay Head',
    desc: 'Prestigious north-shore village with Victorian charm and bay access. High-touch hospitality and meticulous exterior upkeep for luxury rentals.',
    performance: '15.9%',
    stats: 'Active',
    icon: Waves,
    href: '/bay-head-airbnb-management',
    image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=1200',
    status: 'active',
  },
  {
    name: 'Point Pleasant',
    desc: 'Boardwalk and Manasquan Inlet market with year-round draw. Event-driven pricing and family-friendly guest vetting at scale.',
    performance: '15.9%',
    stats: 'Active',
    icon: Waves,
    href: '/point-pleasant-airbnb-management',
    image: 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&q=80&w=1200',
    status: 'active',
  },
  {
    name: 'Ocean Gate',
    desc: 'Quiet bay-front borough with strong local appeal and easy Toms River access. Turnkey operations and off-season corporate retreat activation.',
    performance: '15.9%',
    stats: 'Active',
    icon: Waves,
    href: '/ocean-gate-airbnb-management',
    image: 'https://hostaway-platform.s3.us-west-2.amazonaws.com/listing/155201-406894-eTGJCxKlIvoZVIQG1hGiqJSZkCspboGTLq0-5jdj9l4-68f8de4c4f809',
    status: 'active',
  },
];

export const COMING_SOON_MARKETS: JerseyShoreMarketCard[] = [
  {
    name: 'Belmar',
    desc: 'Coming Soon. Classic Monmouth County beach town with strong summer weekend demand. Local operations team deployment underway.',
    performance: 'TBD',
    stats: 'Coming Soon',
    icon: Waves,
    href: '/belmar-airbnb-management',
    image: 'https://images.unsplash.com/photo-1473496169904-658ba7c44d8a?auto=format&fit=crop&q=80&w=1200',
    status: 'coming-soon',
  },
  {
    name: 'Asbury Park',
    desc: 'Coming Soon. Revitalized boardwalk destination with growing STR demand. Dynamic pricing and event-calendar optimization in progress.',
    performance: 'TBD',
    stats: 'Coming Soon',
    icon: Waves,
    href: '/asbury-park-airbnb-management',
    image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?auto=format&fit=crop&q=80&w=1200',
    status: 'coming-soon',
  },
  {
    name: 'Wildwood & Cape May',
    desc: 'Coming Soon. From iconic boardwalk peaks to Victorian Cape May elegance. Dual-market seasonal strategy rollout planned.',
    performance: 'TBD',
    stats: 'Coming Soon',
    icon: Waves,
    href: '/wildwood-cape-may-airbnb-management',
    image: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&q=80&w=1200',
    status: 'coming-soon',
  },
  {
    name: 'Long Beach Island & Beach Haven',
    desc: 'Coming Soon. LBI\'s 18-mile barrier island and Beach Haven hub. Hurricane-ready ops and full-season demand capture in development.',
    performance: 'TBD',
    stats: 'Coming Soon',
    icon: Waves,
    href: '/long-beach-island-beach-haven-airbnb-management',
    image: 'https://images.unsplash.com/photo-1505142468610-359e7d316be0?auto=format&fit=crop&q=80&w=1200',
    status: 'coming-soon',
  },
];
