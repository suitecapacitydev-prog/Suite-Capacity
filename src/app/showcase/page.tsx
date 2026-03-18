'use client';

import SiteShell from '@/components/layout/site-shell';
import VideoCard from '@/components/marketing/video-card';

const showcasedVideos = [
  {
    title: "How to Price Your Jersey Shore Rental",
    description: "Billy explains the nuances of the Jersey Shore market and how our dynamic pricing strategies maximize owner revenue.",
    thumbnail: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&q=80&w=800",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ", // Placeholder
    category: "Market Insights"
  },
  {
    title: "The Suite Capacity Guest Experience",
    description: "A look into how we provide white-glove service to guests, ensuring 5-star reviews and repeat bookings.",
    thumbnail: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80&w=800",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ", // Placeholder
    category: "Hospitality"
  },
  {
    title: "Property Management Reimagined",
    description: "Discover our hybrid approach: The Central Brain (Intelligence) + The Local Layer (Execution).",
    thumbnail: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=800",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ", // Placeholder
    category: "Platform"
  },
  {
    title: "Owner Dashboard Walkthrough",
    description: "Get a tour of our proprietary owner dashboard and see how we provide complete transparency.",
    thumbnail: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ", // Placeholder
    category: "Technology"
  }
];

export default function ShowcasePage() {
  return (
    <SiteShell>
      <section className="pt-32 pb-24 container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center mb-20 space-y-6">
          <h1 className="text-4xl md:text-6xl font-bold text-black tracking-tight">
            Video <span className="text-primary">Showcase</span>
          </h1>
          <p className="text-lg text-black/60 max-w-2xl mx-auto">
            Experience the Suite Capacity difference through our latest video content, 
            market updates, and property highlights.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 lg:gap-16">
          {showcasedVideos.map((video, index) => (
            <VideoCard key={index} video={video} />
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-primary">
        <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="max-w-2xl space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold text-black">Ready to maximize your revenue?</h2>
            <p className="text-black/70 text-lg">
              Our videos show how we do it. Let us show you what we can do for your property.
            </p>
          </div>
          <a 
            href="https://calendly.com/suitecapacity/consultation-and-discovery-call?month=2026-03" 
            target="_blank"
            rel="noopener noreferrer"
            className="px-10 py-5 bg-black text-white font-bold rounded-full hover:scale-105 transition-all shadow-xl inline-block"
          >
            Get Your Free Analysis
          </a>
        </div>
      </section>
    </SiteShell>
  );
}
