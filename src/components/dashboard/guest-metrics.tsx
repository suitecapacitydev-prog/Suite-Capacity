import { Network, TrendingUp, Users, RefreshCcw, DollarSign } from 'lucide-react';

interface MetricCardProps {
  title: string;
  value: string;
  trend?: string;
  trendUp?: boolean;
  icon: React.ReactNode;
  description: string;
}

function MetricCard({ title, value, trend, trendUp, icon, description }: MetricCardProps) {
  return (
    <div className="glass-panel p-6 flex flex-col h-full hover:border-white/20 transition-colors">
      <div className="flex justify-between items-start mb-4">
        <div className="p-2 bg-black/5 rounded-lg border border-black/5">
          {icon}
        </div>
        {trend && (
          <div className={`px-2 py-1 text-xs font-medium rounded-full ${
            trendUp ? 'bg-black/10 text-black border border-black/20' : 'bg-destructive/10 text-destructive border border-destructive/20'
          }`}>
            {trend}
          </div>
        )}
      </div>
      <div className="mt-auto">
        <div className="text-sm font-medium text-secondary-foreground mb-1">{title}</div>
        <div className="text-3xl font-bold tracking-tight mb-2 text-black">{value}</div>
        <div className="text-xs text-black">{description}</div>
      </div>
    </div>
  );
}

export function GuestEcosystemMetrics() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold tracking-tight">Ecosystem Performance</h2>
          <p className="text-secondary-foreground text-sm mt-1">
            Real-time metrics from the Suite Capacity network.
          </p>
        </div>
        <div className="p-2 border border-black/30 bg-black/10 rounded-full">
          <Network className="w-5 h-5 text-black" />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <MetricCard
          title="Ecosystem Bookings"
          value="32%"
          trend="+5.2%"
          trendUp={true}
          icon={<Network className="w-5 h-5 text-black" />}
          description="Bookings generated from our shared traveler network."
        />
        
        <MetricCard
          title="Repeat Guest Rate"
          value="24.8%"
          trend="+2.1%"
          trendUp={true}
          icon={<RefreshCcw className="w-5 h-5 text-black" />}
          description="Percentage of guests who have stayed with us before."
        />
        
        <MetricCard
          title="Guest Lifetime Value"
          value="$4,250"
          trend="+12%"
          trendUp={true}
          icon={<DollarSign className="w-5 h-5 text-black" />}
          description="Average total revenue per unique guest across portfolio."
        />
        
        <MetricCard
          title="Direct Booking Growth"
          value="+48%"
          trend="+8%"
          trendUp={true}
          icon={<TrendingUp className="w-5 h-5 text-black" />}
          description="Increase in direct, non-OTA bookings YoY."
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mt-6">
        <div className="lg:col-span-2 glass-panel p-6">
          <h3 className="text-lg font-bold mb-4">Reactivation Campaigns</h3>
          <div className="h-64 flex items-center justify-center border border-black/5 bg-black/5 rounded-lg">
            <div className="text-center text-black">
              <Users className="w-8 h-8 mx-auto mb-2 text-black" />
              <p className="text-sm">Chart visualization would render here.</p>
              <p className="text-xs text-black">Showing conversion rates of automated SMS/Email retargeting.</p>
            </div>
          </div>
        </div>
        
        <div className="glass-panel p-6 flex flex-col">
          <h3 className="text-lg font-bold mb-4">OTA Dependency</h3>
          <div className="flex-1 flex flex-col justify-center gap-6">
            <div>
              <div className="flex justify-between text-sm mb-2">
                <span className="text-black">Direct/Ecosystem</span>
                <span className="font-bold text-black">45%</span>
              </div>
              <div className="w-full bg-black/5 rounded-full h-2">
                <div className="bg-black h-2 rounded-full" style={{ width: '45%' }}></div>
              </div>
            </div>
            
            <div>
              <div className="flex justify-between text-sm mb-2">
                <span className="text-secondary-foreground">Airbnb</span>
                <span className="font-bold text-[#FF5A5F]">35%</span>
              </div>
              <div className="w-full bg-white/5 rounded-full h-2">
                <div className="bg-[#FF5A5F] h-2 rounded-full" style={{ width: '35%' }}></div>
              </div>
            </div>
            
            <div>
              <div className="flex justify-between text-sm mb-2">
                <span className="text-secondary-foreground">Vrbo</span>
                <span className="font-bold text-[#000080]">20%</span>
              </div>
              <div className="w-full bg-white/5 rounded-full h-2">
                <div className="bg-[#000080] h-2 rounded-full" style={{ width: '20%' }}></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
