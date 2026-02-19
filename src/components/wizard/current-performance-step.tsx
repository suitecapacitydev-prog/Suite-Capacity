import { PerformanceBaseline } from '@/types/wizard';

const PLATFORMS = [
    { id: 'airbnb', label: 'Airbnb' },
    { id: 'vrbo', label: 'VRBO' },
    { id: 'direct', label: 'Direct Booking Site' },
    { id: 'other', label: 'Other/PMS' }
] as const;

export function CurrentPerformanceStep({
    data,
    updateData
}: {
    data: Partial<PerformanceBaseline>;
    updateData: (data: Partial<PerformanceBaseline>) => void;
}) {
    const togglePlatform = (platform: typeof PLATFORMS[number]['id']) => {
        const current = data.platforms || [];
        if (current.includes(platform)) {
            updateData({ platforms: current.filter(p => p !== platform) });
        } else {
            updateData({ platforms: [...current, platform] });
        }
    };

    return (
        <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                    <label className="text-sm font-semibold text-secondary-foreground uppercase tracking-wider">Average Daily Rate (ADR)</label>
                    <div className="relative">
                        <span className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground">$</span>
                        <input
                            type="number"
                            className="w-full bg-background border border-border rounded-lg p-3 pl-8 focus:ring-2 focus:ring-primary focus:outline-none transition-all"
                            placeholder="0.00"
                            value={data.adr || ''}
                            onChange={(e) => updateData({ adr: parseFloat(e.target.value) })}
                        />
                    </div>
                </div>

                <div className="space-y-2">
                    <label className="text-sm font-semibold text-secondary-foreground uppercase tracking-wider">Occupancy Rate (%)</label>
                    <div className="relative">
                        <input
                            type="number"
                            className="w-full bg-background border border-border rounded-lg p-3 pr-8 focus:ring-2 focus:ring-primary focus:outline-none transition-all"
                            placeholder="65"
                            value={data.occupancy || ''}
                            onChange={(e) => updateData({ occupancy: parseFloat(e.target.value) })}
                        />
                        <span className="absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground">%</span>
                    </div>
                </div>
            </div>

            <div className="space-y-4">
                <label className="text-sm font-semibold text-secondary-foreground uppercase tracking-wider">Booking Platforms</label>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                    {PLATFORMS.map(platform => (
                        <button
                            key={platform.id}
                            onClick={() => togglePlatform(platform.id)}
                            className={`p-3 rounded-xl border text-sm font-medium transition-all ${data.platforms?.includes(platform.id)
                                    ? 'bg-primary/10 border-primary text-primary'
                                    : 'border-border hover:border-primary/30 text-muted-foreground'
                                }`}
                        >
                            {platform.label}
                        </button>
                    ))}
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="space-y-2">
                    <label className="text-sm font-semibold text-secondary-foreground uppercase tracking-wider">Cleaning Fee ($)</label>
                    <input
                        type="number"
                        className="w-full bg-background border border-border rounded-lg p-3"
                        placeholder="150"
                        value={data.cleaningFee || ''}
                        onChange={(e) => updateData({ cleaningFee: parseFloat(e.target.value) })}
                    />
                </div>

                <div className="space-y-2">
                    <label className="text-sm font-semibold text-secondary-foreground uppercase tracking-wider">Cancellation Policy</label>
                    <select
                        className="w-full bg-background border border-border rounded-lg p-3"
                        value={data.cancellationPolicy || 'moderate'}
                        onChange={(e) => updateData({ cancellationPolicy: e.target.value as any })}
                    >
                        <option value="flexible">Flexible</option>
                        <option value="moderate">Moderate</option>
                        <option value="strict">Strict</option>
                    </select>
                </div>

                <div className="space-y-2">
                    <label className="text-sm font-semibold text-secondary-foreground uppercase tracking-wider">Direct Booking %</label>
                    <input
                        type="number"
                        className="w-full bg-background border border-border rounded-lg p-3"
                        placeholder="0"
                        value={data.directBookingPercentage || ''}
                        onChange={(e) => updateData({ directBookingPercentage: parseFloat(e.target.value) })}
                    />
                </div>
            </div>
        </div>
    );
}
