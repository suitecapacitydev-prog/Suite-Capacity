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

/** Serializable subset of Market safe to pass from Server to Client Components. */
export type ClientMarket = Omit<Market, 'icon'>;

export function toClientMarket(market: Market): ClientMarket {
  const { icon: _icon, ...clientMarket } = market;
  return clientMarket;
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
      },
      {
        slug: 'ortley-beach-airbnb-management',
        name: 'Ortley Beach',
        intro: 'Unlock the revenue potential of your Ortley Beach rental with localized barrier-island expertise. We manage salt-air wear, seasonal turnover, and pricing for this tight-knit shore community.',
        demandExplanation: 'Ortley Beach draws loyal repeat guests who prefer a quieter alternative to neighboring boardwalk towns. Strong weekly summer demand and growing shoulder-season bookings reward owners who maintain premium standards year-round.'
      },
      {
        slug: 'mantoloking-airbnb-management',
        name: 'Mantoloking',
        intro: 'Protect and grow your Mantoloking investment with white-glove STR management on one of the Shore\'s most exclusive barrier islands. Bay-to-ocean positioning commands premium nightly rates.',
        demandExplanation: 'Mantoloking\'s limited inventory and affluent guest profile support top-tier pricing throughout the summer season. Properties here require proactive exterior maintenance and discreet, high-touch guest service.'
      },
      {
        slug: 'bay-head-airbnb-management',
        name: 'Bay Head',
        intro: 'Partner with Suite Capacity for Bay Head Airbnb management that matches the village\'s prestige. Victorian charm, bay access, and boutique shopping create a luxury short-term rental market.',
        demandExplanation: 'Bay Head attracts discerning families and groups seeking an upscale shore experience without the boardwalk crowds. Extended summer stays and holiday weekends drive strong ADR when properties are impeccably maintained.'
      },
      {
        slug: 'point-pleasant-airbnb-management',
        name: 'Point Pleasant',
        intro: 'Maximize yield on your Point Pleasant Beach or Point Pleasant Borough rental with event-driven pricing and local ops. Boardwalk traffic and inlet fishing culture fuel year-round STR demand.',
        demandExplanation: 'Point Pleasant benefits from Jenkinson\'s boardwalk draw, inlet events, and a broader seasonal calendar than pure barrier-island towns. Dynamic pricing around holidays and fishing tournaments captures revenue others leave on the table.'
      },
      {
        slug: 'ocean-gate-airbnb-management',
        name: 'Ocean Gate',
        intro: 'Turn your Ocean Gate bay-front or inland rental into a reliable revenue asset. Our local team handles turnover, guest communication, and off-season activation for this quiet Shore borough.',
        demandExplanation: 'Ocean Gate appeals to guests seeking affordability and bay access without boardwalk congestion. Strong regional demand from Toms River and Central Jersey supports consistent summer occupancy with emerging off-season potential.'
      },
      {
        slug: 'belmar-airbnb-management',
        name: 'Belmar',
        intro: 'Belmar STR management is coming soon to Suite Capacity. Classic Monmouth County beach town demand, strong weekend traffic, and walkable downtown dining make this a high-opportunity market.',
        demandExplanation: 'Belmar sees intense Memorial Day through Labor Day weekend demand with a loyal regional guest base. Our expanding Monmouth County operations will deploy dynamic pricing and local maintenance teams to capture peak summer yield.'
      },
      {
        slug: 'asbury-park-airbnb-management',
        name: 'Asbury Park',
        intro: 'Asbury Park Airbnb management is launching soon. Revitalized boardwalk energy, live music, and a growing remote-work guest segment create a distinct STR demand profile.',
        demandExplanation: 'Asbury Park combines seasonal beach demand with event-driven spikes from concerts and festivals. Properties near the boardwalk and downtown command premium rates when paired with responsive guest service and event-calendar pricing.'
      },
      {
        slug: 'wildwood-cape-may-airbnb-management',
        name: 'Wildwood & Cape May',
        intro: 'Wildwood and Cape May STR management is expanding soon. From Wildwood\'s iconic boardwalk peaks to Cape May\'s Victorian elegance, we are building dual-market seasonal expertise.',
        demandExplanation: 'Southern Shore demand spans high-volume Wildwood summer weeks and Cape May\'s premium boutique season. A tailored strategy for each sub-market maximizes revenue across distinct guest demographics and stay patterns.'
      },
      {
        slug: 'long-beach-island-beach-haven-airbnb-management',
        name: 'Long Beach Island & Beach Haven',
        intro: 'Long Beach Island and Beach Haven management is coming soon. Eighteen miles of barrier-island rentals with a family-first Beach Haven hub demand hurricane-ready, full-season operations.',
        demandExplanation: 'LBI draws multi-generational families for full-week and full-season stays, with Beach Haven as the social and commercial center. Storm preparedness, linen logistics, and summer-long occupancy management are critical to protecting owner returns.'
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
