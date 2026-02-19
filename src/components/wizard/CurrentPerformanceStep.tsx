export interface CurrentPerformanceData {
    adr: number;
    occupancy: number;
    platforms: string[];
    cleaningFee: number;
    directBookingPercentage: number;
}

export function CurrentPerformanceStep({
    data,
    updateData
}: {
    data: Partial<CurrentPerformanceData>;
    updateData: (data: Partial<CurrentPerformanceData>) => void;
}) {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div className="space-y-2">
                <label className="text-sm font-semibold text-secondary-foreground uppercase tracking-wider">Current ADR ($)</label>
                <input
                    type="number"
                    className="w-full bg-background border border-border rounded-lg p-3 focus:ring-2 focus:ring-primary focus:outline-none transition-all"
                    placeholder="e.g. 250"
                    value={data.adr || ''}
                    onChange={(e) => updateData({ adr: parseFloat(e.target.value) })}
                />
            </div>

            <div className="space-y-2">
                <label className="text-sm font-semibold text-secondary-foreground uppercase tracking-wider">Occupancy Rate (%)</label>
                <input
                    type="number"
                    className="w-full bg-background border border-border rounded-lg p-3 focus:ring-2 focus:ring-primary focus:outline-none transition-all"
                    placeholder="e.g. 65"
                    value={data.occupancy || ''}
                    onChange={(e) => updateData({ occupancy: parseFloat(e.target.value) })}
                />
            </div>

            <div className="space-y-2">
                <label className="text-sm font-semibold text-secondary-foreground uppercase tracking-wider">Direct Booking %</label>
                <input
                    type="number"
                    className="w-full bg-background border border-border rounded-lg p-3 focus:ring-2 focus:ring-primary focus:outline-none transition-all"
                    placeholder="e.g. 10"
                    value={data.directBookingPercentage || ''}
                    onChange={(e) => updateData({ directBookingPercentage: parseFloat(e.target.value) })}
                />
            </div>

            <div className="space-y-2">
                <label className="text-sm font-semibold text-secondary-foreground uppercase tracking-wider">Cleaning Fee ($)</label>
                <input
                    type="number"
                    className="w-full bg-background border border-border rounded-lg p-3 focus:ring-2 focus:ring-primary focus:outline-none transition-all"
                    placeholder="e.g. 150"
                    value={data.cleaningFee || ''}
                    onChange={(e) => updateData({ cleaningFee: parseFloat(e.target.value) })}
                />
            </div>
        </div>
    );
}
