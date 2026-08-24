import SiteShell from '@/components/layout/site-shell';
import { MapPin, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import {
  CURRENTLY_SERVING_MARKETS,
  COMING_SOON_MARKETS,
  JerseyShoreMarketCard,
} from '@/data/jersey-shore-markets';

function MarketCard({ market }: { market: JerseyShoreMarketCard }) {
  return (
    <Link
      href={market.href}
      className="glass-panel overflow-hidden group hover:border-primary/30 transition-all hover:scale-[1.02] flex flex-col"
    >
      <div className="h-48 overflow-hidden relative">
        <img
          src={market.image}
          alt={`${market.name} vacation rental property`}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6">
          <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center">
            <market.icon className="w-5 h-5 text-white" />
          </div>
        </div>
      </div>
      <div className="p-8 flex flex-col flex-grow">
        <h3 className="text-2xl font-bold mb-3">{market.name}</h3>
        <p className="text-black opacity-70 text-sm leading-relaxed mb-6 flex-grow">
          {market.desc}
        </p>
        <div className="pt-6 border-t border-border flex justify-between items-center text-sm">
          <div className="space-y-1">
            <p className="text-xs uppercase tracking-wider text-black opacity-60 font-bold">Rev Lift</p>
            <p className="text-lg font-bold text-black">{market.performance}</p>
          </div>
          <div className="space-y-1 text-right">
            <p className="text-xs uppercase tracking-wider text-black opacity-60 font-bold">Managed</p>
            <p className="text-lg font-bold text-black">{market.stats}</p>
          </div>
        </div>
      </div>
    </Link>
  );
}

function MarketSection({
  title,
  badgeClass,
  markets,
}: {
  title: string;
  badgeClass: string;
  markets: JerseyShoreMarketCard[];
}) {
  return (
    <div className="mb-20 last:mb-0">
      <div className="flex items-center justify-center mb-10">
        <span className={`text-[10px] font-black uppercase tracking-widest px-3 py-1.5 rounded-full ${badgeClass}`}>
          {title}
        </span>
      </div>
      <div className="grid md:grid-cols-3 gap-8">
        {markets.map((market) => (
          <MarketCard key={market.name} market={market} />
        ))}
      </div>
    </div>
  );
}

export default function MarketsPage() {
  return (
    <SiteShell>
      <section className="pt-32 pb-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:40px_40px]" />
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[120px] pointer-events-none" />

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-3xl mb-16 mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">
              Our Active <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Markets</span>
            </h1>
            <p className="text-xl text-black leading-relaxed">
              We don’t just manage properties; we own the data for the neighborhoods they sit in. Hyper-local expertise, distributed to scale.
            </p>
          </div>

          <MarketSection
            title="Currently Serving"
            badgeClass="bg-primary/10 text-primary border border-primary/20"
            markets={CURRENTLY_SERVING_MARKETS}
          />

          <MarketSection
            title="Coming Soon / Expanding"
            badgeClass="bg-black/10 text-black/60 border border-black/10"
            markets={COMING_SOON_MARKETS}
          />
        </div>
      </section>

      <section className="py-24 bg-primary/40 border-y border-white/5 relative">
        <div className="container mx-auto px-6 text-center max-w-3xl">
          <MapPin className="w-12 h-12 text-primary mx-auto mb-6" />
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Don't see your market?</h2>
          <p className="text-lg text-black mb-10">
            We are expanding our distributed network every quarter. Our 7 days or less to launch, no long term commitments policy allows us to scout and activate new market teams rapidly.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/wizard"
              className="px-8 py-4 bg-primary hover:bg-primary/90 text-white rounded-lg font-semibold transition-all flex items-center justify-center gap-2"
            >
              Submit New Market Request
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </SiteShell>
  );
}
