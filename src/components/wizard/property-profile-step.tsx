'use client';

import React from 'react';
import { PropertyProfile, PropertyType } from '@/types/wizard';
import { cn } from '@/lib/utils';
import {
    Home, Building2, Building, Layers, Landmark, Hotel,
    Waves, Thermometer, MapPin, Trees, UtensilsCrossed,
    Gamepad2, Umbrella, Star, Car, Zap, Smartphone
} from 'lucide-react';

interface PropertyProfileStepProps {
    data: Partial<PropertyProfile>;
    updateData: (data: Partial<PropertyProfile>) => void;
}

export function PropertyProfileStep({ data, updateData }: PropertyProfileStepProps) {
    const propertyTypes: { value: PropertyType; label: string; icon: React.ReactNode }[] = [
        { value: 'single-family', label: 'Single Family', icon: <Home className="w-4 h-4" /> },
        { value: 'condo', label: 'Condo', icon: <Building2 className="w-4 h-4" /> },
        { value: 'townhome', label: 'Townhome', icon: <Building className="w-4 h-4" /> },
        { value: 'multi-unit', label: 'Multi-Unit', icon: <Layers className="w-4 h-4" /> },
        { value: 'luxury-estate', label: 'Luxury Estate', icon: <Landmark className="w-4 h-4" /> },
        { value: 'boutique-hotel', label: 'Boutique Hotel', icon: <Hotel className="w-4 h-4" /> },
    ];

    const amenities = [
        { id: 'pool', label: 'Pool', icon: <Waves className="w-4 h-4" /> },
        { id: 'hot-tub', label: 'Hot Tub', icon: <Thermometer className="w-4 h-4" /> },
        { id: 'waterfront', label: 'Waterfront', icon: <Waves className="w-4 h-4" /> },
        { id: 'beach', label: 'Walk to Beach', icon: <Umbrella className="w-4 h-4" /> },
        { id: 'downtown', label: 'Downtown', icon: <Building2 className="w-4 h-4" /> },
        { id: 'view', label: 'Mountain View', icon: <Trees className="w-4 h-4" /> },
        { id: 'game-room', label: 'Game Room', icon: <Gamepad2 className="w-4 h-4" /> },
        { id: 'rooftop', label: 'Rooftop Deck', icon: <Umbrella className="w-4 h-4" /> },
        { id: 'elevator', label: 'Elevator', icon: <Layers className="w-4 h-4" /> },
        { id: 'ev-charger', label: 'EV Charger', icon: <Zap className="w-4 h-4" /> },
        { id: 'smart-home', label: 'Smart Home', icon: <Smartphone className="w-4 h-4" /> },
    ];

    const toggleAmenity = (id: string) => {
        const current = data.amenities || [];
        if (current.includes(id)) {
            updateData({ amenities: current.filter(a => a !== id) });
        } else {
            updateData({ amenities: [...current, id] });
        }
    };

    return (
        <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div className="space-y-2">
                <label className="text-sm font-semibold text-secondary-foreground uppercase tracking-wider">Property Address</label>
                <div className="relative">
                    <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                    <input
                        type="text"
                        className="w-full bg-background border border-border rounded-lg p-3 pl-10 focus:ring-2 focus:ring-primary focus:outline-none transition-all placeholder:text-muted-foreground/50"
                        placeholder="Search for property address..."
                        value={data.address || ''}
                        onChange={(e) => updateData({ address: e.target.value })}
                    />
                </div>
            </div>

            <div className="space-y-4">
                <label className="text-sm font-semibold text-secondary-foreground uppercase tracking-wider">Property Type</label>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                    {propertyTypes.map((type) => (
                        <button
                            key={type.value}
                            onClick={() => updateData({ propertyType: type.value })}
                            className={cn(
                                "flex items-center gap-3 p-3 rounded-lg border text-sm font-medium transition-all",
                                data.propertyType === type.value
                                    ? "bg-primary border-primary text-primary-foreground shadow-glow"
                                    : "border-border hover:border-primary/50 text-muted-foreground"
                            )}
                        >
                            {type.icon}
                            {type.label}
                        </button>
                    ))}
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="space-y-2">
                    <label className="text-sm font-semibold text-secondary-foreground uppercase tracking-wider">Bedrooms</label>
                    <select
                        className="w-full bg-background border border-border rounded-lg p-3 focus:ring-2 focus:ring-primary focus:outline-none"
                        value={data.bedrooms || 1}
                        onChange={(e) => updateData({ bedrooms: parseInt(e.target.value) })}
                    >
                        {[1, 2, 3, 4, 5, 6, 7, 8, 9, '10+'].map(val => (
                            <option key={val} value={typeof val === 'string' ? 10 : val}>{val}</option>
                        ))}
                    </select>
                </div>
                <div className="space-y-2">
                    <label className="text-sm font-semibold text-secondary-foreground uppercase tracking-wider">Bathrooms</label>
                    <input
                        type="number"
                        step="0.5"
                        className="w-full bg-background border border-border rounded-lg p-3 focus:ring-2 focus:ring-primary focus:outline-none"
                        value={data.bathrooms || 1}
                        onChange={(e) => updateData({ bathrooms: parseFloat(e.target.value) })}
                    />
                </div>
                <div className="space-y-2">
                    <label className="text-sm font-semibold text-secondary-foreground uppercase tracking-wider">Max Occupancy</label>
                    <input
                        type="number"
                        className="w-full bg-background border border-border rounded-lg p-3 focus:ring-2 focus:ring-primary focus:outline-none"
                        value={data.maxOccupancy || 2}
                        onChange={(e) => updateData({ maxOccupancy: parseInt(e.target.value) })}
                    />
                </div>
            </div>

            <div className="space-y-4">
                <label className="text-sm font-semibold text-secondary-foreground uppercase tracking-wider">Key Amenities</label>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                    {amenities.map(amenity => (
                        <button
                            key={amenity.id}
                            onClick={() => toggleAmenity(amenity.id)}
                            className={cn(
                                "flex items-center gap-2 p-2 rounded-lg border text-xs font-medium transition-all",
                                data.amenities?.includes(amenity.id)
                                    ? "bg-primary border-primary text-primary-foreground"
                                    : "border-border hover:border-primary/50 text-muted-foreground"
                            )}
                        >
                            {amenity.icon}
                            {amenity.label}
                        </button>
                    ))}
                </div>
            </div>

            <div className="space-y-4">
                <label className="text-sm font-semibold text-secondary-foreground uppercase tracking-wider">Parking Situation</label>
                <div className="flex gap-4">
                    {(['ample', 'limited', 'none'] as const).map(p => (
                        <button
                            key={p}
                            onClick={() => updateData({ parking: p })}
                            className={cn(
                                "flex-1 p-3 rounded-lg border text-sm font-medium transition-all capitalize",
                                data.parking === p
                                    ? "bg-primary border-primary text-primary-foreground shadow-glow"
                                    : "border-border hover:border-primary/50 text-muted-foreground"
                            )}
                        >
                            {p}
                        </button>
                    ))}
                </div>
            </div>
        </div>
    );
}
