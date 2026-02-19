export interface AssetOptimizationData {
    photographyQuality: 'PROFESSIONAL' | 'AMATEUR' | 'MISSING';
    designLevel: 'ELITE' | 'MODERN' | 'DATED';
    furnishingLevel: 'LUXURY' | 'STANDARD' | 'BUDGET';
    automationLevel: 'HIGH' | 'MEDIUM' | 'LOW';
    reviewScore: number;
}

export function AssetOptimizationStep({
    data,
    updateData
}: {
    data: Partial<AssetOptimizationData>;
    updateData: (data: Partial<AssetOptimizationData>) => void;
}) {
    const levels = [
        { label: 'Photography', key: 'photographyQuality', options: ['PROFESSIONAL', 'AMATEUR', 'MISSING'] },
        { label: 'Design Style', key: 'designLevel', options: ['ELITE', 'MODERN', 'DATED'] },
        { label: 'Furnishing Quality', key: 'furnishingLevel', options: ['LUXURY', 'STANDARD', 'BUDGET'] },
        { label: 'Automation Level', key: 'automationLevel', options: ['HIGH', 'MEDIUM', 'LOW'] },
    ];

    return (
        <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {levels.map((item) => (
                    <div key={item.key} className="space-y-3">
                        <label className="text-sm font-semibold text-secondary-foreground uppercase tracking-wider">{item.label}</label>
                        <div className="flex gap-2">
                            {item.options.map((opt) => (
                                <button
                                    key={opt}
                                    onClick={() => updateData({ [item.key]: opt })}
                                    className={cn(
                                        "flex-1 px-3 py-2 text-xs font-bold rounded-md border transition-all",
                                        data[item.key as keyof AssetOptimizationData] === opt
                                            ? "bg-primary/10 border-primary text-primary shadow-glow"
                                            : "border-border hover:border-muted-foreground text-muted-foreground"
                                    )}
                                >
                                    {opt}
                                </button>
                            ))}
                        </div>
                    </div>
                ))}
            </div>

            <div className="space-y-3 md:col-span-2">
                <label className="text-sm font-semibold text-secondary-foreground uppercase tracking-wider">Avg. Review Score (0-5)</label>
                <input
                    type="range"
                    min="0"
                    max="5"
                    step="0.1"
                    className="w-full h-2 bg-secondary rounded-lg appearance-none cursor-pointer accent-primary"
                    value={data.reviewScore || 4.5}
                    onChange={(e) => updateData({ reviewScore: parseFloat(e.target.value) })}
                />
                <div className="flex justify-between text-xs text-muted-foreground font-medium">
                    <span>0.0</span>
                    <span className="text-primary font-bold">{data.reviewScore || 4.5} Stars</span>
                    <span>5.0</span>
                </div>
            </div>
        </div>
    );
}

import { cn } from '@/lib/utils';
