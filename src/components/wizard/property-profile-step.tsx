'use client';

import React from 'react';
import { PropertyProfile, PropertyType } from '@/types/wizard';
import { cn } from '@/lib/utils';
import {
    Home, Building2, Building, Layers, Landmark, Hotel,
    Waves, Thermometer, MapPin, Trees, UtensilsCrossed,
    Gamepad2, Umbrella, Star, Car, Zap, Smartphone, CheckCircle2
} from 'lucide-react';

import { useJsApiLoader, GoogleMap, Marker, Autocomplete } from '@react-google-maps/api';
import { MARKETS } from '@/data/markets';

const LIBRARIES: ("places")[] = ["places"];

interface PropertyProfileStepProps {
    data: Partial<PropertyProfile>;
    qualification: any;
    updateData: (data: Partial<PropertyProfile>) => void;
    updateQualification: (data: any) => void;
}

export function PropertyProfileStep({ data, qualification, updateData, updateQualification }: PropertyProfileStepProps) {
    const { isLoaded } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || '',
        libraries: LIBRARIES
    });

    const [autocomplete, setAutocomplete] = React.useState<google.maps.places.Autocomplete | null>(null);
    // Ocean Ave, Seaside Heights approx
    const [mapCenter, setMapCenter] = React.useState({ lat: 39.9431, lng: -74.0759 }); 

    const onPlaceChanged = () => {
        if (autocomplete) {
            const place = autocomplete.getPlace();
            if (place.formatted_address) {
                updateData({ address: place.formatted_address });
                
                // Try to auto-detect market
                const addr = place.formatted_address.toLowerCase();
                const matchedMarket = MARKETS.find(m => m.towns?.some(t => addr.includes(t)));
                if (matchedMarket) {
                    updateData({ marketId: matchedMarket.id });
                }

                if (place.geometry?.location) {
                    setMapCenter({
                        lat: place.geometry.location.lat(),
                        lng: place.geometry.location.lng()
                    });
                }
            }
        }
    };

    const handleMapClick = (e: google.maps.MapMouseEvent) => {
        if (!e.latLng) return;
        const lat = e.latLng.lat();
        const lng = e.latLng.lng();
        setMapCenter({ lat, lng });

        const geocoder = new window.google.maps.Geocoder();
        geocoder.geocode({ location: { lat, lng } }, (results, status) => {
            if (status === "OK" && results && results[0]) {
                updateData({ address: results[0].formatted_address });
                
                // Try to auto-detect market
                const addr = results[0].formatted_address.toLowerCase();
                const matchedMarket = MARKETS.find(m => m.towns?.some(t => addr.includes(t)));
                if (matchedMarket) {
                    updateData({ marketId: matchedMarket.id });
                }
            }
        });
    };

    const detectLocation = React.useCallback(() => {
        if (navigator.geolocation && isLoaded) {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    const pos = {
                        lat: position.coords.latitude,
                        lng: position.coords.longitude,
                    };
                    setMapCenter(pos);
                    
                    const geocoder = new window.google.maps.Geocoder();
                    geocoder.geocode({ location: pos }, (results, status) => {
                        if (status === "OK" && results && results[0]) {
                            updateData({ address: results[0].formatted_address });
                            
                            // Try to auto-detect market
                            const addr = results[0].formatted_address.toLowerCase();
                            const matchedMarket = MARKETS.find(m => m.towns?.some(t => addr.includes(t)));
                            if (matchedMarket) {
                                updateData({ marketId: matchedMarket.id });
                            }
                        }
                    });
                },
                () => {
                    console.log("Geolocation permission denied");
                }
            );
        }
    }, [isLoaded, updateData]);

    React.useEffect(() => {
        if (isLoaded && !data.address) {
            detectLocation();
        }
    }, [isLoaded, detectLocation, data.address]);

    const propertyTypes: { value: PropertyType; label: string; icon: React.ReactNode }[] = [
        { value: 'single-family', label: 'Single Family', icon: <Home className="w-4 h-4" /> },
        { value: 'condo', label: 'Condo', icon: <Building2 className="w-4 h-4" /> },
        { value: 'townhome', label: 'Townhome', icon: <Building className="w-4 h-4" /> },
        { value: 'multi-unit', label: 'Multi-Unit', icon: <Layers className="w-4 h-4" /> },
        { value: 'luxury-estate', label: 'Luxury Estate', icon: <Landmark className="w-4 h-4" /> },
        { value: 'boutique-hotel', label: 'Boutique Hotel', icon: <Hotel className="w-4 h-4" /> },
    ];

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
                                    "flex-1 py-3 px-4 rounded-xl border-2 font-bold transition-all uppercase tracking-widest text-xs",
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
                                    "flex-1 py-3 px-4 rounded-xl border-2 font-bold transition-all uppercase tracking-widest text-xs",
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

            {/* Phase 2: Property Info & Maps */}
            <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-4">
                    <label className="text-sm font-bold text-secondary-foreground uppercase tracking-widest flex items-center gap-2">
                        <MapPin className="w-4 h-4 text-primary" />
                        Property Location
                    </label>
                    
                    {isLoaded ? (
                        <div className="space-y-4">
                            <div className="relative">
                                <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-primary z-10" />
                                <Autocomplete
                                    onLoad={setAutocomplete}
                                    onPlaceChanged={onPlaceChanged}
                                >
                                    <input
                                        type="text"
                                        name="address"
                                        autoComplete="street-address"
                                        className="w-full h-12 bg-white border-2 border-black/5 rounded-2xl p-4 pl-12 pr-12 focus:border-primary focus:outline-none transition-all text-lg font-medium shadow-sm relative z-0"
                                        placeholder="Start typing your property address..."
                                        value={data.address || ''}
                                        onChange={(e) => updateData({ address: e.target.value })}
                                    />
                                </Autocomplete>
                                <button 
                                    onClick={(e) => {
                                        e.preventDefault();
                                        detectLocation();
                                    }}
                                    className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-xl hover:bg-primary/10 text-primary transition-all z-10"
                                    title="Use current location"
                                >
                                    <Zap className="w-5 h-5 fill-primary/20" />
                                </button>
                            </div>
                            
                            <div className="h-[250px] w-full rounded-2xl overflow-hidden border-2 border-black/5 shadow-sm relative">
                                <GoogleMap
                                    mapContainerStyle={{ width: '100%', height: '100%' }}
                                    center={mapCenter}
                                    zoom={15}
                                    onClick={handleMapClick}
                                    options={{
                                        disableDefaultUI: true,
                                        zoomControl: true,
                                        streetViewControl: false,
                                    }}
                                >
                                    <Marker position={mapCenter} />
                                </GoogleMap>
                                <div className="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur-sm p-3 rounded-xl border border-black/5 shadow-md text-[10px] font-bold text-center pointer-events-none uppercase tracking-tighter">
                                    Click or drag on the map to fine-tune your location
                                </div>
                            </div>
                        </div>
                    ) : (
                        <div className="w-full h-12 bg-black/5 animate-pulse rounded-2xl" />
                    )}
                </div>

                <div className="space-y-4">
                    <label className="text-sm font-bold text-secondary-foreground uppercase tracking-widest flex items-center gap-2">
                        <Waves className="w-4 h-4 text-primary" />
                        Target Market
                    </label>
                    <div className="space-y-4">
                        <select
                            className="w-full h-12 bg-white border-2 border-black/5 rounded-2xl px-4 text-lg font-medium focus:border-primary focus:outline-none appearance-none shadow-sm"
                            value={data.marketId || ''}
                            onChange={(e) => updateData({ marketId: e.target.value })}
                        >
                            <option value="">Select your market...</option>
                            {MARKETS.map(market => (
                                <option key={market.id} value={market.id}>
                                    {market.name} {market.status === 'Coming Soon' ? '(Coming Soon)' : ''}
                                </option>
                            ))}
                        </select>
                        
                        {data.marketId && (
                            <div className="p-4 rounded-2xl bg-primary/5 border border-primary/10 animate-in fade-in zoom-in-95 duration-300">
                                <div className="flex items-center gap-3">
                                    <div className={cn("p-2 rounded-xl", MARKETS.find(m => m.id === data.marketId)?.color)}>
                                        {React.createElement(MARKETS.find(m => m.id === data.marketId)?.icon || MapPin, { className: "w-5 h-5" })}
                                    </div>
                                    <div>
                                        <p className="text-sm font-bold text-foreground">
                                            {MARKETS.find(m => m.id === data.marketId)?.name} Intelligence Active
                                        </p>
                                        <p className="text-[11px] text-muted-foreground font-medium">
                                            {MARKETS.find(m => m.id === data.marketId)?.detail || 'Regional performance multipliers applied to analysis.'}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>

            <div className="space-y-4">
                <label className="text-sm font-bold text-secondary-foreground uppercase tracking-widest">Property Type</label>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                        {propertyTypes.map((type) => (
                            <button
                                key={type.value}
                                onClick={() => updateData({ propertyType: type.value })}
                                className={cn(
                                    "flex items-center gap-2 py-3 px-4 rounded-xl border-2 text-xs font-bold transition-all uppercase tracking-tight",
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
                        className="w-full h-11 bg-white border-2 border-black/5 rounded-xl px-4 font-bold focus:border-primary focus:outline-none appearance-none"
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
                        className="w-full h-11 bg-white border-2 border-black/5 rounded-xl px-4 font-bold focus:border-primary focus:outline-none appearance-none"
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
                        className="w-full h-11 bg-white border-2 border-black/5 rounded-xl px-4 font-bold focus:border-primary focus:outline-none"
                        value={data.maxOccupancy || 2}
                        onChange={(e) => updateData({ maxOccupancy: parseInt(e.target.value) })}
                    />
                </div>
            </div>
        </div>
    );
}
