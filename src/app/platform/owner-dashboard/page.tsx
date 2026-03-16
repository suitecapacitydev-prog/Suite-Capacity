import SiteShell from '@/components/layout/site-shell';
import { BarChart3, Users, TrendingUp, RefreshCcw, Database } from 'lucide-react';

export default function OwnerDashboardPage() {
  const metrics = [
    { label: 'Ecosystem Booking %', value: '32.4%', icon: Database, change: '+4.2%' },
    { label: 'Repeat Guest Rate', value: '24.8%', icon: RefreshCcw, change: '+2.1%' },
    { label: 'Guest Lifetime Value', value: '$4,280', icon: Users, change: '+$840' },
    { label: 'Direct Booking Growth', value: '18.5%', icon: TrendingUp, change: '+5.2%' },
    { label: 'Reactivation Performance', value: '92%', icon: BarChart3, change: '+1.5%' },
  ];

  return (
    <SiteShell>
      <section className="pt-32 pb-24 relative overflow-hidden bg-black/5 min-h-screen">
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mb-12">
            <h1 className="text-4xl font-bold mb-4 tracking-tight">Owner Dashboard</h1>
            <p className="text-xl text-black/60">
              Live performance metrics and revenue intelligence for your property.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 mb-12">
            {metrics.map((metric, i) => (
              <div key={i} className="glass-panel p-6 border-black/5 flex flex-col justify-between">
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-lg bg-black/5 flex items-center justify-center">
                    <metric.icon className="w-5 h-5 text-black" />
                  </div>
                  <span className="text-xs font-bold text-primary">{metric.change}</span>
                </div>
                <div>
                  <div className="text-2xl font-bold mb-1">{metric.value}</div>
                  <div className="text-xs uppercase tracking-widest font-bold text-black/40">{metric.label}</div>
                </div>
              </div>
            ))}
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 glass-panel p-8 border-black/5 min-h-[400px] flex flex-col items-center justify-center text-center">
              <div className="w-16 h-16 rounded-full bg-black/5 flex items-center justify-center mb-6">
                <BarChart3 className="w-8 h-8 text-black opacity-20" />
              </div>
              <h3 className="text-xl font-bold mb-2">Revenue Forecast Alpha</h3>
              <p className="text-black/50 max-w-sm">
                Real-time charting and seasonality curves are currently being integrated with the Central Brain API.
              </p>
            </div>
            
            <div className="glass-panel p-8 border-black/5">
              <h3 className="text-xl font-bold mb-6">Market Context</h3>
              <div className="space-y-6">
                {[
                  { label: 'Market ADR', value: '$420' },
                  { label: 'Demand Index', value: 'High' },
                  { label: 'Ranking Potential', value: 'Top 3%' }
                ].map((item, i) => (
                  <div key={i} className="flex justify-between items-center border-b border-black/5 pb-4 last:border-0 last:pb-0">
                    <span className="text-sm text-black/60">{item.label}</span>
                    <span className="font-bold">{item.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </SiteShell>
  );
}
