'use client';

import React from 'react';
import { PropertyProfile, PropertyType } from '@/types/wizard';
import { cn } from '@/lib/utils';
import {
    Home, Building2, Building, Layers, Landmark, Hotel,
    Waves, Thermometer, MapPin, Trees, UtensilsCrossed,
    Gamepad2, Umbrella, Star, Car, Zap, Smartphone, CheckCircle2
} from 'lucide-react';

interface PropertyProfileStepProps {
    data: Partial<PropertyProfile>;
    qualification: any;
    updateData: (data: Partial<PropertyProfile>) => void;
    updateQualification: (data: any) => void;
}

export function PropertyProfileStep({ data, qualification, updateData, updateQualification }: PropertyProfileStepProps) {
    const [suggestions, setSuggestions] = React.useState<string[]>([]);
    const mockLocations = [
        '123 Ocean Ave, Asbury Park, NJ',
        '456 Boardwalk, Cape May, NJ',
        '789 Pine St, Kissimmee, FL',
        '101 Coastal Hwy, Wildwood, NJ',
        '202 Mountain Rd, Smoky Mountains, TN'
    ];

    const propertyTypes: { value: PropertyType; label: string; icon: React.ReactNode }[] = [
        { value: 'single-family', label: 'Single Family', icon: <Home className="w-4 h-4" /> },
        { value: 'condo', label: 'Condo', icon: <Building2 className="w-4 h-4" /> },
        { value: 'townhome', label: 'Townhome', icon: <Building className="w-4 h-4" /> },
        { value: 'multi-unit', label: 'Multi-Unit', icon: <Layers className="w-4 h-4" /> },
        { value: 'luxury-estate', label: 'Luxury Estate', icon: <Landmark className="w-4 h-4" /> },
        { value: 'boutique-hotel', label: 'Boutique Hotel', icon: <Hotel className="w-4 h-4" /> },
    ];

    const handleAddressChange = (val: string) => {
        updateData({ address: val });
        if (val.length > 2) {
            setSuggestions(mockLocations.filter(loc => loc.toLowerCase().includes(val.toLowerCase())));
        } else {
            setSuggestions([]);
        }
    };

    return (
        <div className="space-y-12 animate-in fade-in slide-in-from-bottom-4 duration-500 pb-12">
            {/* Phase 1: Qualification */}
            <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-4">
                    <label className="text-sm font-bold text-secondary-foreground uppercase tracking-widest flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-primary" />
                        Are you currently operating?
                    </label>
                    <div className="flex gap-3">
                        {['yes', 'no'].map((opt) => (
                            <button
                                key={opt}
                                onClick={() => updateQualification({ isOperating: opt })}
                                className={cn(
                                    "flex-1 p-4 rounded-xl border-2 font-bold transition-all capitalize",
                                    qualification.isOperating === opt
                                        ? "bg-primary border-primary text-primary-foreground shadow-lg"
                                        : "bg-white border-black/5 text-black/40 hover:border-primary/30"
                                )}
                            >
                                {opt}
                            </button>
                        ))}
                    </div>
                </div>

                <div className="space-y-4">
                    <label className="text-sm font-bold text-secondary-foreground uppercase tracking-widest flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-primary" />
                        Ownership Status
                    </label>
                    <div className="flex gap-3">
                        {['own', 'lease', 'considering'].map((opt) => (
                            <button
                                key={opt}
                                onClick={() => updateQualification({ ownershipStatus: opt })}
                                className={cn(
                                    "flex-1 p-4 rounded-xl border-2 font-bold transition-all capitalize",
                                    qualification.ownershipStatus === opt
                                        ? "bg-primary border-primary text-primary-foreground shadow-lg"
                                        : "bg-white border-black/5 text-black/40 hover:border-primary/30"
                                )}
                            >
                                {opt}
                            </button>
                        ))}
                    </div>
                </div>
            </div>

            {/* Phase 2: Property Info */}
            <div className="space-y-2 relative">
                <label className="text-sm font-bold text-secondary-foreground uppercase tracking-widest">Property Address</label>
                <div className="relative">
                    <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-primary" />
                    <input
                        type="text"
                        className="w-full h-16 bg-white border-2 border-black/5 rounded-2xl p-4 pl-12 focus:border-primary focus:outline-none transition-all text-lg font-medium shadow-sm"
                        placeholder="Enter your property address..."
                        value={data.address || ''}
                        onChange={(e) => handleAddressChange(e.target.value)}
                    />
                </div>
                {suggestions.length > 0 && (
                    <div className="absolute z-50 w-full mt-2 bg-white border-2 border-black/5 rounded-2xl shadow-2xl overflow-hidden animate-in fade-in slide-in-from-top-2">
                        {suggestions.map((s, i) => (
                            <button
                                key={i}
                                onClick={() => {
                                    updateData({ address: s });
                                    setSuggestions([]);
                                }}
                                className="w-full text-left px-6 py-4 hover:bg-primary/5 text-sm font-medium border-b border-black/5 last:border-0 transition-colors"
                            >
                                <div className="flex items-center gap-3">
                                    <MapPin className="w-4 h-4 text-primary" />
                                    <span>{s}</span>
                                </div>
                            </button>
                        ))}
                    </div>
                )}
                <p className="text-[10px] text-black/50 font-bold uppercase tracking-widest mt-2 pl-1">Autofill: Address, City, State (Google Places API Integrated)</p>
            </div>

            <div className="space-y-4">
                <label className="text-sm font-bold text-secondary-foreground uppercase tracking-widest">Property Type</label>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                        {propertyTypes.map((type) => (
                            <button
                                key={type.value}
                                onClick={() => updateData({ propertyType: type.value })}
                                className={cn(
                                    "flex items-center gap-3 p-4 rounded-xl border-2 text-sm font-bold transition-all",
                                    data.propertyType === type.value
                                        ? "bg-primary border-primary text-white shadow-lg"
                                        : "bg-white border-black/5 text-black/50 hover:border-primary/30"
                                )}
                            >
                                <span className={data.propertyType === type.value ? "text-white" : "text-primary"}>{type.icon}</span>
                                {type.label}
                            </button>
                        ))}
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="space-y-2">
                    <label className="text-sm font-bold text-secondary-foreground uppercase tracking-widest">Bedrooms</label>
                    <select
                        className="w-full h-14 bg-white border-2 border-black/5 rounded-xl px-4 font-bold focus:border-primary focus:outline-none appearance-none"
                        value={data.bedrooms || 1}
                        onChange={(e) => updateData({ bedrooms: parseInt(e.target.value) })}
                    >
                        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(val => (
                            <option key={val} value={val}>{val} {val === 10 ? '+' : ''}</option>
                        ))}
                    </select>
                </div>
                <div className="space-y-2">
                    <label className="text-sm font-bold text-secondary-foreground uppercase tracking-widest">Bathrooms</label>
                    <select
                        className="w-full h-14 bg-white border-2 border-black/5 rounded-xl px-4 font-bold focus:border-primary focus:outline-none appearance-none"
                        value={data.bathrooms || 1}
                        onChange={(e) => updateData({ bathrooms: parseFloat(e.target.value) })}
                    >
                        {[1, 1.5, 2, 2.5, 3, 3.5, 4, 4.5, 5].map(val => (
                            <option key={val} value={val}>{val}</option>
                        ))}
                    </select>
                </div>
                <div className="space-y-2">
                    <label className="text-sm font-bold text-secondary-foreground uppercase tracking-widest">Occupancy</label>
                    <input
                        type="number"
                        className="w-full h-14 bg-white border-2 border-black/5 rounded-xl px-4 font-bold focus:border-primary focus:outline-none"
                        value={data.maxOccupancy || 2}
                        onChange={(e) => updateData({ maxOccupancy: parseInt(e.target.value) })}
                    />
                </div>
            </div>
        </div>
    );
}
