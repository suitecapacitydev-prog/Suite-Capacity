import { AssetOptimization } from '@/types/wizard';
import { cn } from '@/lib/utils';

export function AssetOptimizationStep({
    data,
    updateData
}: {
    data: Partial<AssetOptimization>;
    updateData: (data: Partial<AssetOptimization>) => void;
}) {
    const categories = [
        { label: 'Photography Quality', key: 'photographyQuality' as const, description: 'Visual impact and professional listing photos' },
        { label: 'Design Level', key: 'designLevel' as const, description: 'Interior design aesthetic and trend alignment' },
        { label: 'Furnishing Level', key: 'furnishingLevel' as const, description: 'Quality and durability of furniture/amenities' },
        { label: 'Description Strength', key: 'descriptionStrength' as const, description: 'Copywriting, SEO optimization, and USP focus' },
        { label: 'Automation Level', key: 'automationLevel' as const, description: 'Smart locks, guest messaging tools, and tech stack' },
    ];

    return (
        <div className="space-y-10 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div className="grid grid-cols-1 gap-8">
                {categories.map((cat) => (
                    <div key={cat.key} className="space-y-4">
                        <div className="flex justify-between items-end">
                            <div className="space-y-1">
                                <label className="text-sm font-semibold text-secondary-foreground uppercase tracking-wider">{cat.label}</label>
                                <p className="text-xs text-muted-foreground">{cat.description}</p>
                            </div>
                            <span className="text-xl font-bold text-primary">{data[cat.key] || 0}/5</span>
                        </div>
                        <div className="grid grid-cols-5 gap-2">
                            {[1, 2, 3, 4, 5].map((num) => (
                                <button
                                    key={num}
                                    onClick={() => updateData({ [cat.key]: num })}
                                    className={cn(
                                        "h-12 rounded-xl border text-sm font-bold transition-all relative group overflow-hidden",
                                        data[cat.key] === num
                                            ? "bg-primary border-primary text-primary-foreground shadow-glow"
                                            : "border-border hover:border-primary/50 text-muted-foreground"
                                    )}
                                >
                                    {num}
                                    {data[cat.key] === num && (
                                        <div className="absolute inset-0 bg-white/20 animate-pulse" />
                                    )}
                                </button>
                            ))}
                        </div>
                    </div>
                ))}

                <div className="space-y-4 p-6 border border-border rounded-2xl bg-muted/20">
                    <div className="flex justify-between items-center">
                        <label className="text-sm font-semibold text-secondary-foreground uppercase tracking-wider">Avg. Review Score</label>
                        <span className="text-lg font-bold text-primary px-3 py-1 bg-primary/10 rounded-lg">{data.reviewScore || 4.5} ★</span>
                    </div>
                    <input
                        type="range"
                        min="0"
                        max="5"
                        step="0.1"
                        className="w-full h-2 bg-secondary rounded-lg appearance-none cursor-pointer accent-primary"
                        value={data.reviewScore || 4.5}
                        onChange={(e) => updateData({ reviewScore: parseFloat(e.target.value) })}
                    />
                    <div className="flex justify-between text-[10px] text-muted-foreground uppercase font-medium tracking-tighter">
                        <span>Low Engagement</span>
                        <span>Market Average</span>
                        <span>Elite Performer</span>
                    </div>
                </div>
            </div>
        </div>
    );
}
