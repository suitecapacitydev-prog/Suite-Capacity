'use client';

import React, { useState } from 'react';
import { AIDesignUpload } from '@/types/wizard';
import { cn } from '@/lib/utils';
import {
    Upload, Image as ImageIcon, CheckCircle2,
    Trash2, Sparkles, X, Info, Loader2
} from 'lucide-react';

import { uploadPropertyPhoto } from '@/app/actions/wizard-actions';

interface AIDesignUploadStepProps {
    data: Partial<AIDesignUpload>;
    updateData: (data: Partial<AIDesignUpload>) => void;
}

export function AIDesignUploadStep({ data, updateData }: AIDesignUploadStepProps) {
    const [isDragging, setIsDragging] = useState<string | null>(null);
    const [uploading, setUploading] = useState<Record<string, boolean>>({});
    const [uploadErrors, setUploadErrors] = useState<Record<string, string>>({});

    const categories: { id: AIDesignUpload['images'][0]['category']; label: string; required: boolean }[] = [
        { id: 'living-room', label: 'Living Room', required: true },
        { id: 'bedroom', label: 'Primary Bedroom', required: true },
        { id: 'outdoor', label: 'Outdoor / Backyard', required: true },
        { id: 'kitchen', label: 'Kitchen', required: false },
        { id: 'bathroom', label: 'Bathroom', required: false },
        { id: 'exterior', label: 'Exterior', required: false },
    ];

    const handleFileUpload = async (category: AIDesignUpload['images'][0]['category'], file: File) => {
        setUploadErrors(prev => ({ ...prev, [category]: '' }));
        setUploading(prev => ({ ...prev, [category]: true }));
        try {
            const result = await uploadPropertyPhoto(file, category);

            if (result.success && result.url) {
                const newImage = {
                    id: Math.random().toString(36).substr(2, 9),
                    category,
                    url: result.url,
                    enhancedUrl: result.enhancedUrl,
                    enhancedStatus: result.enhancedStatus,
                };

                const currentImages = data.images || [];
                // Remove existing image in same category if any
                const filteredImages = currentImages.filter(img => img.category !== category);
                updateData({ images: [...filteredImages, newImage] });
            } else {
                setUploadErrors(prev => ({ ...prev, [category]: result.error || 'Upload failed' }));
            }
        } catch (error: any) {
            setUploadErrors(prev => ({ ...prev, [category]: error?.message || String(error) }));
        } finally {
            setUploading(prev => ({ ...prev, [category]: false }));
        }
    };

    const removeImage = (id: string) => {
        const currentImages = data.images || [];
        updateData({ images: currentImages.filter(img => img.id !== id) });
    };

    const getImageForCategory = (category: string) => {
        return data.images?.find(img => img.category === category);
    };

    return (
        <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div className="bg-primary/5 border border-primary/20 rounded-xl p-6 flex gap-4 items-start">
                <Info className="w-6 h-6 text-primary shrink-0 mt-1" />
                <div className="space-y-1">
                    <h4 className="font-bold text-primary">Design Demand Optimization Preview™</h4>
                    <p className="text-sm text-muted-foreground">
                        Our intelligence engine analyzes your photos to generate high-impact design concepts.
                        Upload clear, horizontal photos for best results. No heavy filters.
                    </p>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {categories.map((cat) => {
                    const image = getImageForCategory(cat.id);
                    const isUploading = uploading[cat.id];

                    return (
                        <div key={cat.id} className="space-y-2">
                            <label className="text-xs font-bold uppercase tracking-widest text-muted-foreground flex justify-between">
                                {cat.label}
                                {cat.required && <span className="text-[10px] text-primary">Required</span>}
                            </label>

                            <div
                                className={cn(
                                    "relative aspect-video rounded-xl border-2 border-dashed transition-all flex flex-col items-center justify-center overflow-hidden",
                                    (image || isUploading) ? "border-solid border-primary" : "border-border hover:border-primary/50 bg-muted/30",
                                    isDragging === cat.id && "border-primary bg-primary/5 scale-[1.02]"
                                )}
                                onDragOver={(e) => { e.preventDefault(); setIsDragging(cat.id); }}
                                onDragLeave={() => setIsDragging(null)}
                                onDrop={(e) => {
                                    e.preventDefault();
                                    setIsDragging(null);
                                    const file = e.dataTransfer.files[0];
                                    if (file) handleFileUpload(cat.id, file);
                                }}
                            >
                                {isUploading ? (
                                    <div className="flex flex-col items-center gap-2">
                                        <Loader2 className="w-8 h-8 text-primary animate-spin" />
                                        <span className="text-[10px] font-bold text-primary animate-pulse">UPLOADING...</span>
                                    </div>
                                ) : image ? (
                                    <>
                                        <img src={image.url} alt={cat.label} className="w-full h-full object-cover" />
                                        <div className="absolute inset-0 bg-black/40 opacity-0 hover:opacity-100 transition-opacity flex items-center justify-center gap-4">
                                            <button
                                                onClick={() => removeImage(image.id)}
                                                className="p-2 bg-destructive text-destructive-foreground rounded-full hover:scale-110 transition-transform"
                                            >
                                                <Trash2 className="w-5 h-5" />
                                            </button>
                                        </div>
                                        <div className="absolute top-2 right-2 p-1 bg-primary rounded-full shadow-glow">
                                            <CheckCircle2 className="w-4 h-4 text-primary-foreground" />
                                        </div>
                                    </>
                                ) : (
                                    <label className="cursor-pointer flex flex-col items-center gap-2 w-full h-full justify-center">
                                        <Upload className="w-8 h-8 text-muted-foreground group-hover:text-primary transition-colors" />
                                        <span className="text-xs font-medium text-muted-foreground group-hover:text-primary">Select or Drop</span>
                                        <input
                                            type="file"
                                            className="hidden"
                                            accept="image/*"
                                            onChange={(e) => {
                                                const file = e.target.files?.[0];
                                                if (file) handleFileUpload(cat.id, file);
                                            }}
                                        />
                                    </label>
                                )}
                            </div>
                            {uploadErrors[cat.id] && (
                                <p className="text-xs text-destructive mt-1">{uploadErrors[cat.id]}</p>
                            )}
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
