import { PageWrapper } from "@/components/layout/PageWrapper";
import { FadeIn } from "@/components/animations/FadeIn";
import { Link } from "wouter";
import { Clock, Tag, ArrowRight } from "lucide-react";

const POSTS = [
  {
    id: 1,
    title: "Zero Trust Architecture Explained",
    category: "Cybersecurity",
    date: "Oct 12, 2023",
    excerpt: "Why the 'trust but verify' model is dead, and how continuous authentication is reshaping enterprise security perimeters.",
    imageUrl: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800&q=80"
  },
  {
    id: 2,
    title: "Securing Your CI/CD Pipeline",
    category: "DevSecOps",
    date: "Oct 05, 2023",
    excerpt: "Automated vulnerability scanning and secrets management techniques every modern engineering team must implement.",
    imageUrl: "https://images.unsplash.com/photo-1614064641913-625c5a89b6f7?w=800&q=80"
  },
  {
    id: 3,
    title: "The Rise of AI in Threat Detection",
    category: "Innovation",
    date: "Sep 28, 2023",
    excerpt: "How machine learning models are outperforming traditional signature-based detection in identifying zero-day exploits.",
    imageUrl: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80"
  },
  {
    id: 4,
    title: "Best Practices for Cloud Native Security",
    category: "Cloud",
    date: "Sep 15, 2023",
    excerpt: "Taming the complexity of Kubernetes, containers, and microservices with unified security posture management.",
    imageUrl: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&q=80"
  },
  {
    id: 5,
    title: "Understanding Endpoint Detection and Response",
    category: "Infrastructure",
    date: "Sep 02, 2023",
    excerpt: "A deep dive into EDR technologies and why traditional antivirus software leaves your organization exposed.",
    imageUrl: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=800&q=80"
  },
  {
    id: 6,
    title: "Cryptography in the Quantum Era",
    category: "Research",
    date: "Aug 21, 2023",
    excerpt: "Preparing your data encryption standards for the impending arrival of quantum computing capabilities.",
    imageUrl: "https://images.unsplash.com/photo-1639322537504-6427a16b0a28?w=800&q=80"
  }
];

export default function Blog() {
  return (
    <PageWrapper 
      title="Intelligence & Insights" 
      description="Read the latest insights on cybersecurity, DevSecOps, and software engineering from the Nactro team."
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <FadeIn>
          <div className="mb-16">
            <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">Intelligence <span className="text-primary">&</span> Insights</h1>
            <p className="text-xl text-muted-foreground max-w-2xl">
              Analysis, research, and engineering practices from the frontlines of digital security.
            </p>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {POSTS.map((post, index) => (
            <FadeIn key={post.id} delay={index * 0.1}>
              <article className="group flex flex-col h-full bg-card rounded-2xl border border-border overflow-hidden hover:border-primary/40 transition-colors shadow-lg shadow-black/5">
                <div className="aspect-[16/9] overflow-hidden relative">
                  {/* Blog placeholder tech abstract */}
                  <img 
                    src={post.imageUrl} 
                    alt={post.title} 
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500 grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 mix-blend-luminosity"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent" />
                  <div className="absolute top-4 left-4">
                    <span className="bg-background/90 backdrop-blur-sm text-foreground text-xs font-bold px-3 py-1.5 rounded-full border border-border/50 shadow-sm flex items-center gap-1.5">
                      <Tag className="w-3 h-3 text-primary" />
                      {post.category}
                    </span>
                  </div>
                </div>
                
                <div className="p-6 flex flex-col flex-grow">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
                    <Clock className="w-4 h-4" />
                    <span>{post.date}</span>
                  </div>
                  
                  <h2 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors line-clamp-2">
                    {post.title}
                  </h2>
                  
                  <p className="text-muted-foreground text-sm leading-relaxed mb-6 flex-grow line-clamp-3">
                    {post.excerpt}
                  </p>
                  
                  <Link href={`#`} className="inline-flex items-center gap-2 text-sm font-semibold text-foreground group-hover:text-primary transition-colors mt-auto">
                    Read Article <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </article>
            </FadeIn>
          ))}
        </div>
        
        <FadeIn delay={0.4} className="mt-16 text-center">
          <button className="px-6 py-3 rounded-full border border-border hover:bg-secondary text-foreground font-medium transition-colors">
            Load More Articles
          </button>
        </FadeIn>
      </div>
    </PageWrapper>
  );
}
