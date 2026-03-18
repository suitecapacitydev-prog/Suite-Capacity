import { useState } from 'react';

interface VideoCardProps {
  title: string;
  description: string;
  thumbnail: string;
  videoUrl: string;
  category: string;
}

export default function VideoCard({ video }: { video: VideoCardProps }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="group relative">
      {/* Thumbnail Card */}
      <div 
        className="aspect-video rounded-3xl overflow-hidden bg-black/5 glass-panel border-transparent hover:border-primary/20 transition-all duration-500 cursor-pointer shadow-lg group-hover:shadow-2xl"
        onClick={() => setIsOpen(true)}
      >
        <img 
          src={video.thumbnail} 
          alt={video.title}
          className="w-full h-full object-cover opacity-80 group-hover:scale-105 group-hover:opacity-100 transition-all duration-700"
        />
        
        {/* Play Button Overlay */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-16 h-16 rounded-full bg-primary/90 text-black flex items-center justify-center shadow-xl transform group-hover:scale-110 transition-transform duration-300">
            <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
              <path d="M8 5v14l11-7z" />
            </svg>
          </div>
        </div>

        {/* Category Badge */}
        <div className="absolute top-4 left-4">
          <span className="px-4 py-1 rounded-full bg-black/60 backdrop-blur-md text-white text-[10px] uppercase font-mono tracking-widest border border-white/10">
            {video.category}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="mt-6 space-y-2 px-2">
        <h3 className="text-xl font-bold text-black group-hover:text-primary transition-colors duration-300">
          {video.title}
        </h3>
        <p className="text-sm text-black/60 leading-relaxed line-clamp-2">
          {video.description}
        </p>
      </div>

      {/* Modal / Lightbox (Simple Implementation) */}
      {isOpen && (
        <div 
          className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-4 md:p-12 animate-in fade-in duration-300"
          onClick={() => setIsOpen(false)}
        >
          <div className="relative w-full max-w-5xl aspect-video rounded-3xl overflow-hidden shadow-2xl bg-black">
            <iframe
              src={`${video.videoUrl}?autoplay=1`}
              className="w-full h-full"
              allow="autoplay; encrypted-media"
              allowFullScreen
            />
            <button 
              className="absolute -top-12 right-0 text-white/60 hover:text-white transition-colors flex items-center gap-2 font-mono text-xs uppercase tracking-widest"
              onClick={(e) => {
                e.stopPropagation();
                setIsOpen(false);
              }}
            >
              Close Window [ESC]
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
