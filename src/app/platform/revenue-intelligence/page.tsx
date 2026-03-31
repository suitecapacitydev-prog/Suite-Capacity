import SiteShell from '@/components/layout/site-shell';
import { BarChart3, TrendingUp, Search, Target, Zap, ArrowRight, LineChart, PieChart } from 'lucide-react';
import Link from 'next/link';

export default function RevenueIntelligencePage() {
  const tools = [
    {
      title: 'Market Supply Indexing',
      desc: 'Real-time monitoring of available supply, competitor occupancy, and market saturation levels.',
      icon: Search,
    },
    {
      title: 'Dynamic Yield Optimization',
      desc: 'Sophisticated yield management that balances high ADR with peak occupancy based on historical performance data.',
      icon: TrendingUp,
    },
    {
      title: 'Demand Pacing Analysis',
      desc: 'Visibility into future booking velocity compared to market averages, allowing for proactive pricing strategy shifts.',
      icon: LineChart,
    },
    {
      title: 'Comp-Set Benchmarking',
      desc: 'Precise comparison against curated sets of similar-quality neighborhood properties, not just general market data.',
      icon: Target,
    },
    {
      title: 'Automation Execution',
      desc: 'Direct integration with top-tier pricing engines to push optimized rates across all booking channels instantly.',
      icon: Zap,
    },
    {
      title: 'Revenue Reporting',
      desc: 'Granular property-level financial reporting that breaks down gross revenue, channel fees, and net owner payout.',
      icon: PieChart,
    },
  ];

  return (
    <SiteShell>
      {/* Hero Section */}
      <section className="pt-32 pb-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:40px_40px]" />
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[120px] pointer-events-none" />

        <div className="container mx-auto px-6 relative z-10 text-center max-max-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-black/10 bg-primary/5 text-black text-sm font-medium mb-8">
            <BarChart3 className="w-4 h-4 text-black" />
            <span>Advanced Yield Management</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight leading-tight whitespace-pre-line">
            The Revenue{'\n'}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Intelligence Engine</span>
          </h1>
          <p className="text-xl text-black mb-10 max-w-2xl mx-auto">
            Our proprietary intelligence layer ingest millions of data points across AirDNA, PriceLabs, and historical network data to capture every dollar of market demand.
          </p>
        </div>
      </section>

      {/* Tools Grid */}
      <section className="py-24 bg-primary/40 border-y border-white/5 relative">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {tools.map((tool, index) => (
              <div key={index} className="glass-panel p-8 group hover:border-black/30 transition-colors">
                <div className="w-12 h-12 rounded-lg bg-primary/5 flex items-center justify-center mb-6">
                  <tool.icon className="w-6 h-6 text-black" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-black">{tool.title}</h3>
                <p className="text-black text-sm leading-relaxed">
                  {tool.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Intelligence Wizard Preview */}
      <section className="py-24 container mx-auto px-6">
        <div className="glass-panel p-12 intelligence-border relative overflow-hidden bg-primary/5">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Experience the Engine Today</h2>
              <p className="text-lg text-black mb-8">
                Our Revenue Intelligence Wizard can analyze your specific property’s potential in less than 2 minutes. We compare your data against real-world market throughput to deliver a personalized revenue roadmap.
              </p>
              <Link
                href="/wizard"
                className="px-8 py-4 bg-primary hover:bg-primary/90 text-white rounded-lg font-semibold transition-all hover:shadow-[0_0_20px_rgba(171,209,199,0.4)] inline-flex items-center gap-2"
              >
                Run My Revenue Audit
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
            <div className="relative">
              <div className="aspect-video bg-primary/40 rounded-lg border border-white/10 flex items-center justify-center overflow-hidden">
                {/* Mockup of a chart or data visualization */}
                <div className="w-full flex items-end gap-1 px-8 h-32 text-black">
                  <div className="w-full bg-primary/10 h-[30%] rounded-t-sm" />
                  <div className="w-full bg-primary/20 h-[45%] rounded-t-sm" />
                  <div className="w-full bg-primary/30 h-[60%] rounded-t-sm" />
                  <div className="w-full bg-primary/50 h-[85%] rounded-t-sm shadow-[0_0_15px_rgba(0,0,0,0.1)]" />
                  <div className="w-full bg-primary/30 h-[50%] rounded-t-sm" />
                  <div className="w-full bg-primary/20 h-[40%] rounded-t-sm" />
                  <div className="w-full bg-primary/10 h-[25%] rounded-t-sm" />
                </div>
              </div>
              <div className="absolute -top-4 -right-4 glass-panel px-4 py-2 text-xs font-bold text-black border-black/20">
                +32% REVENUE UPSIDE
              </div>
            </div>
          </div>
        </div>
      </section>
    </SiteShell>
  );
}
