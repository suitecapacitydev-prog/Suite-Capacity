import { createServerClient, type CookieOptions } from '@supabase/auth-helpers-nextjs';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import SiteShell from '@/components/layout/site-shell';
import { BarChart3, Users, TrendingUp, RefreshCcw, Database, FolderOpen, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { HostawayService } from '@/services/hostaway';
import RevenueChart from '@/components/charts/revenue-chart';
import LeadControlButton from '@/components/dashboard/lead-control-button';

export default async function OwnerDashboardPage() {
  const cookieStore = await cookies();

  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        get(name: string) {
          return cookieStore.get(name)?.value;
        },
      },
    }
  );

  const { data: { session } } = await supabase.auth.getSession();
  const demoSession = cookieStore.get('suite_demo_session')?.value;

  if (!session && demoSession !== 'admin_active') {
    redirect('/');
  }

  const hostawayData = await HostawayService.getOwnerMetrics();

  const metrics = [
    {
      label: 'Ecosystem Booking %',
      value: `${hostawayData.ecosystemBookingPercent}%`,
      icon: Database,
      change: '+4.2%',
      desc: 'Bookings through SC network'
    },
    {
      label: 'Repeat Guest Rate',
      value: `${hostawayData.repeatGuestRate}%`,
      icon: RefreshCcw,
      change: '+2.1%',
      desc: 'Returning customer loyalty'
    },
    {
      label: 'Guest Lifetime Value',
      value: `$${hostawayData.guestLifetimeValue.toLocaleString()}`,
      icon: Users,
      change: '+$840',
      desc: 'Avg. revenue per guest identity'
    },
    {
      label: 'Direct Booking Growth',
      value: `${hostawayData.directBookingGrowth}%`,
      icon: TrendingUp,
      change: '+5.2%',
      desc: 'Year-over-year expansion'
    },
    {
      label: 'Reactivation Performance',
      value: `${hostawayData.reactivationPerformance}%`,
      icon: BarChart3,
      change: '+1.5%',
      desc: 'Success in lapsed guest recovery'
    },
  ];

  return (
    <SiteShell>
      <section className="pt-32 pb-24 relative overflow-hidden bg-primary/5 min-h-screen">
        <div className="container mx-auto px-6 relative z-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div className="max-w-4xl">
              <p className="lg:text-5xl font-black mb-4 tracking-tight">Owner Command Center</p>
              <p className="text-xl text-black/60 font-medium">
                Real-time performance intelligence synced from the <span className="text-black">Central Brain</span>.
              </p>
            </div>

            <div className="flex flex-col items-start md:items-end gap-3">
              <LeadControlButton />
              <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-green-500/10 border border-green-500/20 text-green-600 text-[10px] font-black uppercase tracking-widest">
                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                Live Hostaway Sync Active
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 mb-12">
            {metrics.map((metric, i) => (
              <div key={i} className="glass-panel p-6 border-black/5 flex flex-col justify-between hover:bg-white transition-all group">
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/5 flex items-center justify-center group-hover:bg-primary/10 group-hover:text-primary transition-colors">
                    <metric.icon className="w-5 h-5" />
                  </div>
                  <span className="text-xs font-bold text-primary">{metric.change}</span>
                </div>
                <div>
                  <div className="text-2xl font-bold mb-1">{metric.value}</div>
                  <div className="text-[10px] uppercase tracking-widest font-black text-black/30 mb-2">{metric.label}</div>
                  <p className="text-[10px] text-black/50 font-medium leading-tight">{metric.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-8">
              <div className="glass-panel p-10 border-black/5 bg-white relative overflow-hidden">
                <div className="flex items-center justify-between mb-10">
                  <div>
                    <h3 className="text-2xl font-black mb-1">Revenue Forecast</h3>
                    <p className="text-black/50 text-sm font-medium">Projected monthly revenue across your ecosystem.</p>
                  </div>
                  <div className="flex gap-2">
                    <div className="px-3 py-1 bg-primary/5 rounded-lg text-[10px] font-bold uppercase tracking-widest">Yearly View</div>
                  </div>
                </div>

                <div className="h-[250px] flex items-end">
                  <RevenueChart data={hostawayData.revenueForecast} />
                </div>
              </div>

              <div className="glass-panel p-8 border-black/5 flex items-center justify-between group cursor-pointer hover:bg-white transition-all">
                <div className="flex items-center gap-6">
                  <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                    <FolderOpen className="w-7 h-7" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-1">Property Vault</h3>
                    <p className="text-black/50 text-sm">Access your shared Google Drive folder for all property documents.</p>
                  </div>
                </div>
                <a
                  href="https://drive.google.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full border border-black/10 flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all active:scale-95"
                >
                  <ExternalLink className="w-5 h-5" />
                </a>
              </div>
            </div>

            <div className="glass-panel p-8 border-black/5 bg-white">
              <h3 className="text-xl font-black mb-8 border-b border-black/5 pb-6">Market Context</h3>
              <div className="space-y-8">
                {[
                  { label: 'Market ADR', value: `$${hostawayData.marketAdr}`, sub: 'Vs. $395 Category Avg' },
                  { label: 'Demand Index', value: hostawayData.demandIndex, sub: 'Surging in Forecast' },
                  { label: 'Ranking Potential', value: hostawayData.rankingPotential, sub: 'Optimized via Central Brain' }
                ].map((item, i) => (
                  <div key={i} className="flex flex-col gap-1">
                    <div className="flex justify-between items-center">
                      <span className="text-xs font-bold text-black/40 uppercase tracking-widest">{item.label}</span>
                      <span className="font-black text-lg">{item.value}</span>
                    </div>
                    <span className="text-[10px] font-bold text-primary/60">{item.sub}</span>
                  </div>
                ))}
              </div>

              <div className="mt-12 p-6 rounded-3xl bg-primary text-white text-center relative overflow-hidden group">
                <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:scale-110 transition-transform">
                  <TrendingUp className="w-24 h-24" />
                </div>
                <p className="text-[10px] font-black uppercase tracking-[0.2em] mb-4 opacity-50 relative z-10">Strategy Optimization</p>
                <div className="text-lg font-black mb-6 relative z-10 leading-snug">You have 12 upcoming stay gap-fills possible</div>
                <Button variant="outline" className="w-full border-white/40 text-white hover:bg-white hover:text-black font-black uppercase tracking-widest text-[10px] h-12 rounded-2xl relative z-10 transition-all">
                  Deploy AI Strategy
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </SiteShell>
  );
}
