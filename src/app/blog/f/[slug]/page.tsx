import SiteShell from '@/components/layout/site-shell';
import { blogPosts } from '@/content/blog-posts';
import { notFound } from 'next/navigation';
import Link from 'next/link';

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug: rawSlug } = await params;
  const slug = decodeURIComponent(rawSlug);
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  return (
    <SiteShell>
      <article className="pt-32 pb-24 container mx-auto px-6 max-w-4xl">
        <Link 
          href="/blog" 
          className="inline-flex items-center gap-2 text-primary font-bold text-sm mb-12 hover:-translate-x-1 transition-transform"
        >
          ← Back to Insights
        </Link>
        
        <header className="space-y-6 mb-16">
          <div className="flex items-center gap-4 text-xs font-mono text-primary uppercase tracking-widest">
            <span>{post.date}</span>
            <span className="w-1.5 h-1.5 rounded-full bg-primary/20" />
            <span>{post.author}</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold text-black leading-tight tracking-tight">
            {post.title}
          </h1>
          
          {post.image && (
            <div className="aspect-[21/9] rounded-3xl overflow-hidden shadow-2xl my-12">
              <img 
                src={post.image} 
                alt={post.title}
                className="w-full h-full object-cover"
              />
            </div>
          )}

          <p className="text-xl md:text-2xl text-black/60 font-light leading-relaxed italic">
            "{post.excerpt}"
          </p>
        </header>

        <div className="prose prose-lg prose-primary max-w-none prose-headings:font-bold prose-headings:tracking-tight prose-p:text-black/80 prose-p:leading-extra-relaxed">
          <div className="space-y-8">
            <div className="whitespace-pre-wrap text-lg leading-relaxed text-black/80">
              {post.content}
            </div>
            
            <div className="p-8 bg-primary/5 border border-primary/10 rounded-3xl space-y-4">
              <h3 className="text-xl font-bold text-black m-0">Need a deeper analysis?</h3>
              <p className="text-black/70 m-0">
                Our team provides custom revenue analysis for vacation rental properties. 
                Get professional insights tailored to your specific market and property.
              </p>
              <a 
                href="https://calendly.com/suitecapacity/consultation-and-discovery-call?month=2026-03" 
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-8 py-3 bg-primary text-black font-bold rounded-full hover:bg-black hover:text-white transition-all transform hover:scale-105"
              >
                Request Free Analysis
              </a>
            </div>
          </div>
        </div>

        <footer className="mt-24 pt-12 border-t border-black/5">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold">
                {post.author.charAt(0)}
              </div>
              <div>
                <div className="font-bold text-black">{post.author}</div>
                <div className="text-sm text-black/50">CEO & Co-Founder, Suite Capacity</div>
              </div>
            </div>
            
            <div className="flex gap-4">
              <button className="px-6 py-2 border border-black/10 rounded-full text-sm font-medium hover:bg-black hover:text-white transition-colors">
                Share Article
              </button>
            </div>
          </div>
        </footer>
      </article>

      {/* Recommended Posts */}
      <section className="py-24 bg-black/5">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-black mb-12">More Perspectives</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts
              .filter((p) => p.slug !== post.slug)
              .slice(0, 3)
              .map((recommendedPost) => (
                <Link 
                  key={recommendedPost.slug}
                  href={`/blog/f/${recommendedPost.slug}`}
                  className="group block p-6 glass-panel border-transparent hover:border-black/5 transition-all"
                >
                  <div className="space-y-4">
                    <div className="text-xs font-mono text-black/40 uppercase">{recommendedPost.date}</div>
                    <h3 className="text-lg font-bold text-black group-hover:text-primary transition-colors line-clamp-2">
                      {recommendedPost.title}
                    </h3>
                  </div>
                </Link>
              ))}
          </div>
        </div>
      </section>
    </SiteShell>
  );
}
