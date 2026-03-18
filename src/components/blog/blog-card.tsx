import Link from 'next/link';
import { BlogPost } from '@/content/blog-posts';

export default function BlogCard({ post }: { post: BlogPost }) {
  return (
    <Link 
      href={`/blog/f/${post.slug}`}
      className="group block glass-panel border-transparent hover:border-primary/20 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 overflow-hidden"
    >
      {post.image && (
        <div className="aspect-[16/9] overflow-hidden bg-black/5">
          <img 
            src={post.image} 
            alt={post.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
        </div>
      )}
      <div className="p-6 space-y-4">
        <div className="flex items-center gap-3 text-xs font-mono text-primary uppercase tracking-wider">
          <span>{post.date}</span>
          <span className="w-1 h-1 rounded-full bg-primary/30" />
          <span>{post.author}</span>
        </div>
        
        <h3 className="text-xl font-bold text-black group-hover:text-primary transition-colors line-clamp-2">
          {post.title}
        </h3>
        
        <p className="text-black/60 text-sm leading-relaxed line-clamp-3">
          {post.excerpt}
        </p>
        
        <div className="pt-4 flex items-center text-sm font-bold text-primary group-hover:gap-3 transition-all">
          Read Article 
          <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
        </div>
      </div>
    </Link>
  );
}
