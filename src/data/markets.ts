import { 
  TrendingUp, Users, ShieldCheck, Star, Sun, Waves, Calendar, MapPin, Zap,
  Mountain, Trees, Cloud, LucideIcon 
} from 'lucide-react';

export type IconName = 'TrendingUp' | 'Users' | 'ShieldCheck' | 'Star' | 'Sun' | 'Waves' | 'Calendar' | 'MapPin' | 'Zap';

export const iconMap: Record<IconName, any> = {
  TrendingUp,
  Users,
  ShieldCheck,
  Star,
  Sun,
  Waves,
  Calendar,
  MapPin,
  Zap
};

export interface MarketStat {
  label: string;
  value: string;
  iconName: IconName;
}

export interface MarketFeature {
  title: string;
  desc: string;
  iconName: IconName;
}

export interface SubMarket {
  slug: string;
  name: string;
  intro: string;
  demandExplanation: string;
}

export interface Market {
  id?: string;
  slug?: string;
  name: string;
  detail?: string;
  status?: 'Active' | 'Coming Soon';
  icon?: LucideIcon;
  color?: string;
  towns?: string[];
  multiplier?: number;
  
  // SEO fields
  heroTitle?: string;
  heroHighlight?: string;
  heroDesc?: string;
  heroImage?: string;
  revenueIncrease?: string;
  revenueContext?: string;
  stats?: MarketStat[];
  featuresTitle?: string;
  featuresHighlight?: string;
  featuresDesc?: string;
  features?: MarketFeature[];
  subMarkets?: SubMarket[];
}

export const MARKETS: Market[] = [
  { 
    id: 'jersey-shore',
    slug: 'jersey-shore',
    name: 'Jersey Shore', 
    detail: 'Asbury Park to Cape May', 
    status: 'Active',
    icon: Waves,
    color: 'text-blue-500 bg-blue-500/10',
    towns: [
      'seaside heights', 'seaside park', 'lavallette', 'ortley beach',
      'point pleasant', 'mantoloking', 'bay head', 'manasquan',
      'belmar', 'spring lake', 'sea girt', 'bradley beach',
      'ocean grove', 'asbury park', 'long branch', 'wildwood', 'cape may'
    ],
    multiplier: 1.35,
    heroTitle: 'Mastering the',
    heroHighlight: 'Atlantic Seaboard.',
    heroDesc: "From Belmar to Cape May, we've deployed a hyper-local operations layer that handles high-intensity summer seasonal spikes with 28.4% better revenue capture than the market average.",
    heroImage: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&q=80&w=1200',
    revenueIncrease: '+$12,450',
    revenueContext: 'Average monthly revenue increase for 3+ bedroom units in Belmar.',
    stats: [
      { label: 'Revenue Lift', value: '+28.4%', iconName: 'TrendingUp' },
      { label: 'Market Rank', value: 'Top 2%', iconName: 'Star' },
      { label: 'Units Managed', value: '42', iconName: 'Users' },
      { label: 'Guest Rating', value: '4.92', iconName: 'ShieldCheck' },
    ],
    featuresTitle: 'Seasonal Strategy,',
    featuresHighlight: 'Perfected.',
    featuresDesc: "We don't believe in set-it-and-forget-it management. Our Jersey Shore response team uses a high-frequency maintenance protocol and dynamic pricing models built specifically for beach town demand curves.",
    features: [
      {
        title: 'Summer Peak Capture',
        desc: 'Proprietary min-stay algorithms that maximize occupancy during high-demand summer weekends without sacrificing weekly booking gaps.',
        iconName: 'Sun'
      },
      {
        title: 'Ocean-Front Maintenance',
        desc: 'Specialized HVAC and exterior maintenance protocols to combat salt-air corrosion and high-humidity environments.',
        iconName: 'Waves'
      },
      {
        title: 'Off-Season Activation',
        desc: 'Custom corporate retreat and long-term winter rental programs to ensure cash flow during the shoulder months.',
        iconName: 'Calendar'
      }
    ],
    subMarkets: [
      {
        slug: 'seaside-heights-airbnb-management',
        name: 'Seaside Heights',
        intro: 'Maximize your Seaside Heights short-term rental revenue with our specialized local management. From bustling summer boardwalk crowds to shoulder-season retreats, our dynamic strategy ensures top-tier occupancy.',
        demandExplanation: 'Seaside Heights experiences massive demand spikes from Memorial Day through Labor Day, with a growing trend of off-season weekend getaways. Our operations capture both peak summer rates and steady winter cash flow.'
      },
      {
        slug: 'seaside-park-airbnb-management',
        name: 'Seaside Park',
        intro: 'Elevate your Seaside Park vacation rental with premium, hands-off management. We cater to the high-end family demographic that frequents this quieter, prestigious stretch of the barrier island.',
        demandExplanation: 'Seaside Park attracts families seeking longer stays and quieter beaches. The demand here supports premium pricing, but requires immaculate property maintenance and high-touch guest service.'
      },
      {
        slug: 'lavallette-airbnb-management',
        name: 'Lavallette',
        intro: 'Partner with the leading Airbnb management service in Lavallette. We understand the unique family-oriented appeal of this community and optimize your property for the most discerning summer vacationers.',
        demandExplanation: 'Lavallette is highly sought after for month-long or full-season family rentals, though the market is shifting toward lucrative weekly and weekend micro-stays. We optimize your calendar to capture the highest yielding demographic.'
      }
    ]
  },
  { 
    id: 'kissimmee-orlando',
    slug: 'orlando-airbnb-management',
    name: 'Kissimmee-Orlando', 
    status: 'Coming Soon',
    icon: Sun,
    color: 'text-orange-500 bg-orange-500/10',
    towns: ['kissimmee', 'orlando', 'disney', 'celebration'],
    multiplier: 1.15
  },
  { 
    id: 'florida-coastal',
    slug: 'florida-coastal',
    name: 'Florida Coastal', 
    status: 'Coming Soon',
    icon: Waves,
    color: 'text-cyan-500 bg-cyan-500/10',
    towns: ['miami', 'fort lauderdale', 'destin', 'clearwater'],
    multiplier: 1.25
  },
  { 
    id: 'phoenix-scottsdale',
    slug: 'phoenix',
    name: 'Phoenix', 
    status: 'Coming Soon',
    icon: Cloud,
    color: 'text-yellow-600 bg-yellow-600/10',
    towns: ['phoenix', 'scottsdale', 'mesa', 'tempe'],
    multiplier: 1.20
  },
  { 
    id: 'smoky-mountains',
    slug: 'smoky-mountains',
    name: 'Smoky Mountains', 
    status: 'Coming Soon',
    icon: Mountain,
    color: 'text-green-600 bg-green-600/10',
    towns: ['gatlinburg', 'pigeon forge', 'sevierville'],
    multiplier: 1.22
  },
  { 
    id: 'poconos',
    slug: 'poconos',
    name: 'Poconos', 
    status: 'Coming Soon',
    icon: Trees,
    color: 'text-emerald-700 bg-emerald-700/10',
    towns: ['mount pocono', 'stroudsburg', 'lake wallenpaupack', 'lake ariel'],
    multiplier: 1.18
  },
];

// Backwards compatibility for old code
export const markets = MARKETS.filter(m => m.slug);

export function getMarketBySlug(slug: string): Market | undefined {
  return MARKETS.find((m) => m.slug === slug);
}

export function getSubMarketBySlug(slug: string): { market: Market; subMarket: SubMarket } | undefined {
  for (const market of MARKETS) {
    if (market.subMarkets) {
      const subMarket = market.subMarkets.find((sm) => sm.slug === slug);
      if (subMarket) {
        return { market, subMarket };
      }
    }
  }
  return undefined;
}

export function getMarketByAddress(address: string): Market | undefined {
  const addr = address.toLowerCase();
  return MARKETS.find(market => 
    market.towns?.some(town => addr.includes(town))
  );
}
