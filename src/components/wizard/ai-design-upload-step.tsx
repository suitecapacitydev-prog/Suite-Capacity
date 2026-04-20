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
    const [isDragging, setIsDragging] = useState(false);
    const [isUploading, setIsUploading] = useState(false);
    const [uploadError, setUploadError] = useState('');
    
    const primaryCategory = 'living-room';

    const handleFileUpload = async (file: File) => {
        setUploadError('');
        setIsUploading(true);
        try {
            const result = await uploadPropertyPhoto(file, primaryCategory);

            if (result.success && result.url) {
                const newImage = {
                    id: Math.random().toString(36).substr(2, 9),
                    category: primaryCategory as any,
                    url: result.url,
                    enhancedUrl: result.enhancedUrl,
                    enhancedStatus: result.enhancedStatus,
                };

                // Replace all existing images with this new primary image
                updateData({ images: [newImage] });
            } else {
                setUploadError(result.error || 'Upload failed');
            }
        } catch (error: any) {
            setUploadError(error?.message || String(error));
        } finally {
            setIsUploading(false);
        }
    };

    const removeImage = () => {
        updateData({ images: [] });
    };

    const image = data.images && data.images.length > 0 ? data.images[0] : null;

    return (
        <div className="space-y-10 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div className="bg-primary/5 border border-primary/20 rounded-2xl p-8 flex gap-6 items-start">
                <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center shrink-0">
                    <Sparkles className="w-6 h-6 text-primary" />
                </div>
                <div className="space-y-2">
                    <h4 className="text-lg font-black text-primary uppercase tracking-tight">AI Visual Revenue Engine™</h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                        Upload a single, high-quality photo of your property's primary living space or exterior. 
                        Our AI will generate a high-impact design concept to visualize your property's maximum revenue potential.
                    </p>
                </div>
            </div>

            <div className="max-w-2xl mx-auto">
                <div className="space-y-4">
                    <div className="flex justify-between items-end px-2">
                        <label className="text-[10px] font-black uppercase tracking-widest text-muted-foreground">
                            Primary Property Photo
                        </label>
                        <span className="text-[10px] font-bold text-primary uppercase tracking-widest bg-primary/10 px-2 py-0.5 rounded">Required</span>
                    </div>

                    <div
                        className={cn(
                            "relative aspect-[16/9] rounded-[2rem] border-4 border-dashed transition-all flex flex-col items-center justify-center overflow-hidden group shadow-2xl shadow-black/5",
                            (image || isUploading) ? "border-solid border-primary" : "border-slate-200 hover:border-primary/50 bg-slate-50",
                            isDragging && "border-primary bg-primary/5 scale-[1.02]"
                        )}
                        onDragOver={(e) => { e.preventDefault(); setIsDragging(true); }}
                        onDragLeave={() => setIsDragging(false)}
                        onDrop={(e) => {
                            e.preventDefault();
                            setIsDragging(false);
                            const file = e.dataTransfer.files[0];
                            if (file) handleFileUpload(file);
                        }}
                    >
                        {isUploading ? (
                            <div className="flex flex-col items-center gap-4">
                                <div className="relative">
                                    <Loader2 className="w-16 h-16 text-primary animate-spin" />
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <div className="w-2 h-2 rounded-full bg-primary animate-ping" />
                                    </div>
                                </div>
                                <div className="flex flex-col items-center">
                                    <span className="text-xs font-black text-primary tracking-widest animate-pulse">UPLOADING IMAGE</span>
                                    <span className="text-[10px] text-muted-foreground font-bold uppercase tracking-tighter">Analyzing composition...</span>
                                </div>
                            </div>
                        ) : image ? (
                            <>
                                <img src={image.url} alt="Property" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-all duration-500 backdrop-blur-sm flex items-center justify-center gap-6">
                                    <button
                                        onClick={removeImage}
                                        className="flex items-center gap-2 px-6 py-3 bg-destructive text-white rounded-2xl font-black uppercase tracking-widest text-[10px] hover:scale-110 transition-transform shadow-lg shadow-destructive/20"
                                    >
                                        <Trash2 className="w-4 h-4" />
                                        Replace Photo
                                    </button>
                                </div>
                                <div className="absolute top-6 right-6 p-2 bg-primary rounded-2xl shadow-glow animate-in zoom-in duration-500">
                                    <CheckCircle2 className="w-5 h-5 text-primary-foreground" />
                                </div>
                                <div className="absolute bottom-0 inset-x-0 p-6 bg-gradient-to-t from-black/80 to-transparent">
                                    <p className="text-[10px] font-black text-white uppercase tracking-widest opacity-80">Image Securely Locked for Analysis</p>
                                </div>
                            </>
                        ) : (
                            <label className="cursor-pointer flex flex-col items-center gap-6 w-full h-full justify-center transition-transform hover:scale-105 active:scale-95">
                                <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-500 group-hover:bg-primary/20">
                                    <Upload className="w-8 h-8 text-primary" />
                                </div>
                                <div className="text-center space-y-1">
                                    <span className="block text-sm font-black uppercase tracking-widest text-slate-800">Choose Property Photo</span>
                                    <span className="block text-xs font-bold text-slate-400">Drag & Drop or Click to Browse</span>
                                </div>
                                <input
                                    type="file"
                                    className="hidden"
                                    accept="image/*"
                                    onChange={(e) => {
                                        const file = e.target.files?.[0];
                                        if (file) handleFileUpload(file);
                                    }}
                                />
                            </label>
                        )}
                    </div>
                    {uploadError && (
                        <p className="text-xs text-destructive font-bold text-center mt-2 px-4 py-2 bg-destructive/5 rounded-lg border border-destructive/10">
                            {uploadError}
                        </p>
                    )}
                </div>
            </div>
            
            <div className="flex justify-center">
                <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-slate-100 text-[10px] font-bold text-slate-500 uppercase tracking-widest">
                    <ImageIcon className="w-3.5 h-3.5" /> Optimal format: Horizontal 16:9
                </div>
            </div>
        </div>
    );
}
