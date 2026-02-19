import { PropertyProfile } from '@/types/wizard';

export function PropertyProfileStep({
    data,
    updateData
}: {
    data: Partial<PropertyProfile>;
    updateData: (data: Partial<PropertyProfile>) => void;
}) {
    const amenities = [
        'Wifi', 'Kitchen', 'Free Parking', 'Pool', 'Hot Tub', 'Gym', 'Washer', 'Dryer', 'Self Check-in', 'Workspace'
    ];

    const toggleAmenity = (amenity: string) => {
        const current = data.amenities || [];
        if (current.includes(amenity)) {
            updateData({ amenities: current.filter(a => a !== amenity) });
        } else {
            updateData({ amenities: [...current, amenity] });
        }
    };

    return (
        <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="md:col-span-2 space-y-2">
                    <label className="text-sm font-semibold text-secondary-foreground uppercase tracking-wider">Property Address</label>
                    <input
                        type="text"
                        className="w-full bg-background border border-border rounded-lg p-3 focus:ring-2 focus:ring-primary focus:outline-none transition-all placeholder:text-muted-foreground/50"
                        placeholder="123 Revenue Street, Suite City..."
                        value={data.address || ''}
                        onChange={(e) => updateData({ address: e.target.value })}
                    />
                </div>

                <div className="space-y-2">
                    <label className="text-sm font-semibold text-secondary-foreground uppercase tracking-wider">Property Type</label>
                    <select
                        className="w-full bg-background border border-border rounded-lg p-3 focus:ring-2 focus:ring-primary focus:outline-none transition-all"
                        value={data.propertyType || 'house'}
                        onChange={(e) => updateData({ propertyType: e.target.value as any })}
                    >
                        <option value="house">Single Family House</option>
                        <option value="apartment">Apartment / Flat</option>
                        <option value="condo">Condominium</option>
                        <option value="townhouse">Townhouse</option>
                        <option value="other">Unique Asset (Cabin, yurt, etc.)</option>
                    </select>
                </div>

                <div className="grid grid-cols-3 gap-4">
                    <div className="space-y-2">
                        <label className="text-xs font-semibold text-secondary-foreground uppercase tracking-wider">Beds</label>
                        <input
                            type="number"
                            className="w-full bg-background border border-border rounded-lg p-2"
                            value={data.bedrooms || 1}
                            onChange={(e) => updateData({ bedrooms: parseInt(e.target.value) })}
                        />
                    </div>
                    <div className="space-y-2">
                        <label className="text-xs font-semibold text-secondary-foreground uppercase tracking-wider">Baths</label>
                        <input
                            type="number"
                            step="0.5"
                            className="w-full bg-background border border-border rounded-lg p-2"
                            value={data.bathrooms || 1}
                            onChange={(e) => updateData({ bathrooms: parseFloat(e.target.value) })}
                        />
                    </div>
                    <div className="space-y-2">
                        <label className="text-xs font-semibold text-secondary-foreground uppercase tracking-wider">Guests</label>
                        <input
                            type="number"
                            className="w-full bg-background border border-border rounded-lg p-2"
                            value={data.sleeps || 2}
                            onChange={(e) => updateData({ sleeps: parseInt(e.target.value) })}
                        />
                    </div>
                </div>
            </div>

            <div className="space-y-4">
                <label className="text-sm font-semibold text-secondary-foreground uppercase tracking-wider">Key Amenities</label>
                <div className="flex flex-wrap gap-2">
                    {amenities.map(amenity => (
                        <button
                            key={amenity}
                            onClick={() => toggleAmenity(amenity)}
                            className={`px-4 py-2 rounded-full text-xs font-medium transition-all border ${data.amenities?.includes(amenity)
                                    ? 'bg-primary border-primary text-primary-foreground'
                                    : 'border-border hover:border-primary/50 text-muted-foreground'
                                }`}
                        >
                            {amenity}
                        </button>
                    ))}
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <label className="flex items-center space-x-3 p-4 border border-border rounded-xl cursor-pointer hover:bg-muted/50 transition-all">
                    <input
                        type="checkbox"
                        className="w-4 h-4 rounded border-border text-primary focus:ring-primary"
                        checked={data.isWaterfront || false}
                        onChange={(e) => updateData({ isWaterfront: e.target.checked })}
                    />
                    <span className="text-sm font-medium">Waterfront</span>
                </label>
                <label className="flex items-center space-x-3 p-4 border border-border rounded-xl cursor-pointer hover:bg-muted/50 transition-all">
                    <input
                        type="checkbox"
                        className="w-4 h-4 rounded border-border text-primary focus:ring-primary"
                        checked={data.hoaRestrictions || false}
                        onChange={(e) => updateData({ hoaRestrictions: e.target.checked })}
                    />
                    <span className="text-sm font-medium">HOA Restrictions</span>
                </label>
                <div className="space-y-2">
                    <label className="text-xs font-semibold text-secondary-foreground uppercase tracking-wider">Parking Spaces</label>
                    <input
                        type="number"
                        className="w-full bg-background border border-border rounded-lg p-2"
                        value={data.parkingSpaces || 0}
                        onChange={(e) => updateData({ parkingSpaces: parseInt(e.target.value) })}
                    />
                </div>
            </div>
        </div>
    );
}
