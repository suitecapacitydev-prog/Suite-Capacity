import SiteShell from '@/components/layout/site-shell';
import { blogPosts } from '@/content/blog-posts';
import BlogCard from '@/components/blog/blog-card';

export default function BlogPage() {
  return (
    <SiteShell>
      <section className="pt-32 pb-24 container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center mb-20 space-y-6">
          <h1 className="text-4xl md:text-6xl font-bold text-black tracking-tight">
            Insights & <span className="text-primary">Intelligence</span>
          </h1>
          <p className="text-lg text-black/60 max-w-2xl mx-auto">
            Expert analysis on the short-term rental market, real estate investment, 
            and the future of hospitality technology.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <BlogCard key={post.slug} post={post} />
          ))}
        </div>
      </section>

      {/* Newsletter / CTA Section */}
      <section className="py-24 bg-black text-white">
        <div className="container mx-auto px-6 text-center space-y-8">
          <h2 className="text-3xl md:text-4xl font-bold">Stay Ahead of the Market</h2>
          <p className="text-white/60 max-w-xl mx-auto text-lg">
            Join our newsletter to receive the latest market updates and revenue optimization strategies directly in your inbox.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <input 
              type="email" 
              placeholder="Enter your email" 
              className="px-6 py-4 bg-white/5 border border-white/10 rounded-full w-full max-w-md focus:outline-none focus:border-primary transition-colors"
            />
            <button className="px-8 py-4 bg-primary text-black font-bold rounded-full hover:bg-white transition-colors whitespace-nowrap">
              Subscribe Now
            </button>
          </div>
        </div>
      </section>
    </SiteShell>
  );
}
