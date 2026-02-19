import { Button } from '@/components/ui/button';

export interface PropertyProfileData {
    address: string;
    bedrooms: number;
    bathrooms: number;
    sleeps: number;
    propertyType: string;
}

export function PropertyProfileStep({
    data,
    updateData
}: {
    data: Partial<PropertyProfileData>;
    updateData: (data: Partial<PropertyProfileData>) => void;
}) {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div className="md:col-span-2 space-y-2">
                <label className="text-sm font-semibold text-secondary-foreground uppercase tracking-wider">Property Address</label>
                <input
                    type="text"
                    className="w-full bg-background border border-border rounded-lg p-3 focus:ring-2 focus:ring-primary focus:outline-none transition-all"
                    placeholder="Enter full street address"
                    value={data.address || ''}
                    onChange={(e) => updateData({ address: e.target.value })}
                />
            </div>

            <div className="space-y-2">
                <label className="text-sm font-semibold text-secondary-foreground uppercase tracking-wider">Bedrooms</label>
                <select
                    className="w-full bg-background border border-border rounded-lg p-3 focus:ring-2 focus:ring-primary focus:outline-none transition-all"
                    value={data.bedrooms || 1}
                    onChange={(e) => updateData({ bedrooms: parseInt(e.target.value) })}
                >
                    {[1, 2, 3, 4, 5, 6, 7, 8].map(n => <option key={n} value={n}>{n} Bedrooms</option>)}
                </select>
            </div>

            <div className="space-y-2">
                <label className="text-sm font-semibold text-secondary-foreground uppercase tracking-wider">Sleeps</label>
                <select
                    className="w-full bg-background border border-border rounded-lg p-3 focus:ring-2 focus:ring-primary focus:outline-none transition-all"
                    value={data.sleeps || 2}
                    onChange={(e) => updateData({ sleeps: parseInt(e.target.value) })}
                >
                    {[2, 4, 6, 8, 10, 12, 14, 16, 20].map(n => <option key={n} value={n}>Hoster up to {n} guests</option>)}
                </select>
            </div>
        </div>
    );
}
