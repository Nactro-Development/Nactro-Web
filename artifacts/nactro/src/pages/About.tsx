import { PageWrapper } from "@/components/layout/PageWrapper";
import { FadeIn } from "@/components/animations/FadeIn";
import { Target, Eye, Zap, ShieldAlert } from "lucide-react";

export default function About() {
  return (
    <PageWrapper 
      title="About Us" 
      description="Learn about Nactro's mission, vision, and the team building the future of cybersecurity."
    >
      <div className="relative overflow-hidden bg-card border-b border-border py-24">
        <div className="absolute inset-0 pointer-events-none">
           <img 
              src={`${import.meta.env.BASE_URL}images/about-vision.png`} 
              alt="Digital landscape" 
              className="w-full h-full object-cover opacity-20"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-card via-card/90 to-transparent" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <FadeIn>
            <h1 className="text-4xl md:text-6xl font-display font-bold mb-6">Our DNA is <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Security.</span></h1>
            <p className="text-xl text-muted-foreground max-w-2xl leading-relaxed">
              We are a collective of engineers, researchers, and security practitioners dedicated to building resilient infrastructure for the modern internet.
            </p>
          </FadeIn>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center mb-24">
          <FadeIn direction="right">
            <div className="bg-secondary/50 rounded-2xl p-8 border border-border/50 relative overflow-hidden">
              <div className="absolute top-0 right-0 p-8 opacity-10">
                <Target className="w-32 h-32" />
              </div>
              <h2 className="text-2xl font-display font-bold mb-4 flex items-center gap-3">
                <Target className="w-6 h-6 text-primary" />
                Our Mission
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed relative z-10">
                To provide military-grade software and security tools accessible to modern enterprises. We believe that robust security shouldn't come at the cost of development velocity.
              </p>
            </div>
          </FadeIn>

          <FadeIn direction="left" delay={0.2}>
            <div className="bg-secondary/50 rounded-2xl p-8 border border-border/50 relative overflow-hidden">
              <div className="absolute top-0 right-0 p-8 opacity-10">
                <Eye className="w-32 h-32" />
              </div>
              <h2 className="text-2xl font-display font-bold mb-4 flex items-center gap-3">
                <Eye className="w-6 h-6 text-accent" />
                Our Vision
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed relative z-10">
                A digital landscape where innovation thrives without the fear of compromise. We are building the foundational tools that will secure the next generation of global infrastructure.
              </p>
            </div>
          </FadeIn>
        </div>

        <FadeIn>
          <div className="text-center mb-16">
            <h2 className="text-3xl font-display font-bold">Core Values</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
            {[
              { title: "Uncompromising Security", icon: <ShieldAlert className="w-8 h-8 text-destructive" />, desc: "We never take shortcuts when it comes to data integrity and threat prevention." },
              { title: "Relentless Innovation", icon: <Zap className="w-8 h-8 text-primary" />, desc: "We continually push the boundaries of what's possible in software engineering." },
              { title: "Radical Transparency", icon: <Target className="w-8 h-8 text-accent" />, desc: "Open communication with our partners, clear policies, and auditable code." }
            ].map((value, i) => (
              <div key={i} className="p-6">
                <div className="w-16 h-16 mx-auto bg-secondary rounded-full flex items-center justify-center mb-4">
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold mb-2">{value.title}</h3>
                <p className="text-muted-foreground">{value.desc}</p>
              </div>
            ))}
          </div>
        </FadeIn>
      </div>

      {/* Team Section Placeholder */}
      <section className="bg-secondary py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">Leadership Team</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Veterans of cybersecurity and enterprise software engineering.
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { name: "Elena Rostova", role: "Chief Executive Officer" },
                { name: "Marcus Chen", role: "Chief Technology Officer" },
                { name: "Sarah Jenkins", role: "Head of Threat Intelligence" },
                { name: "David Kim", role: "VP of Engineering" }
              ].map((member, i) => (
                <div key={i} className="bg-background rounded-2xl overflow-hidden border border-border group hover:-translate-y-1 transition-all duration-300">
                  <div className="aspect-square bg-muted flex items-center justify-center overflow-hidden">
                    <div className="w-full h-full bg-gradient-to-br from-secondary to-muted opacity-50 group-hover:scale-105 transition-transform duration-500" />
                  </div>
                  <div className="p-6 text-center">
                    <h3 className="font-bold text-lg">{member.name}</h3>
                    <p className="text-primary text-sm font-medium">{member.role}</p>
                  </div>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>
    </PageWrapper>
  );
}
