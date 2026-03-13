import { PageWrapper } from "@/components/layout/PageWrapper";
import { FadeIn } from "@/components/animations/FadeIn";
import { Shield, Lock, Database, Activity, Server, Cloud, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const PRODUCTS = [
  {
    id: "shieldcore",
    name: "ShieldCore",
    category: "Endpoint Security",
    icon: <Shield className="w-10 h-10 text-primary" />,
    description: "Next-generation antivirus and endpoint detection powered by machine learning algorithms that identify zero-day threats before execution."
  },
  {
    id: "ciphernet",
    name: "CipherNet",
    category: "Network Infrastructure",
    icon: <Lock className="w-10 h-10 text-accent" />,
    description: "Military-grade VPN and internal network encryption ensuring data transit remains invisible and inaccessible to unauthorized nodes."
  },
  {
    id: "codevault",
    name: "CodeVault",
    category: "DevSecOps",
    icon: <Database className="w-10 h-10 text-primary" />,
    description: "Immutable repository management with automated dependency scanning, secrets detection, and compliance auditing."
  },
  {
    id: "scanbot",
    name: "ScanBot",
    category: "Vulnerability Management",
    icon: <Activity className="w-10 h-10 text-accent" />,
    description: "Continuous automated penetration testing tool that maps your external attack surface and internal misconfigurations."
  },
  {
    id: "dataguard",
    name: "DataGuard",
    category: "Data Protection",
    icon: <Server className="w-10 h-10 text-primary" />,
    description: "DLP (Data Loss Prevention) platform that classifies sensitive information and enforces usage policies across all environments."
  },
  {
    id: "cloudsentry",
    name: "CloudSentry",
    category: "Cloud Security",
    icon: <Cloud className="w-10 h-10 text-accent" />,
    description: "Multi-cloud security posture management (CSPM) providing unified visibility across AWS, Azure, and GCP."
  }
];

export default function Products() {
  return (
    <PageWrapper 
      title="Products & Solutions" 
      description="Explore Nactro's suite of enterprise cybersecurity and software development tools."
    >
      <div className="bg-card/50 py-20 border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FadeIn>
            <h1 className="text-4xl md:text-6xl font-display font-extrabold mb-6">Our Solutions Ecosystem</h1>
            <p className="max-w-2xl mx-auto text-xl text-muted-foreground">
              A comprehensive suite of interconnected tools engineered to secure every layer of your digital infrastructure.
            </p>
          </FadeIn>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PRODUCTS.map((product, index) => (
            <FadeIn key={product.id} delay={index * 0.1}>
              <div className="flex flex-col h-full bg-background rounded-2xl border border-border overflow-hidden group hover:border-primary/50 transition-all duration-300 relative shadow-sm hover:shadow-[0_0_30px_rgba(0,212,255,0.15)]">
                {/* Glow bar at top */}
                <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-primary to-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                <div className="p-8 flex-grow">
                  <div className="mb-6 flex justify-between items-start">
                    <div className="p-3 rounded-xl bg-secondary/50 border border-border/50 group-hover:scale-110 transition-transform duration-300">
                      {product.icon}
                    </div>
                    <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground bg-secondary px-3 py-1 rounded-full">
                      {product.category}
                    </span>
                  </div>
                  
                  <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">{product.name}</h3>
                  <p className="text-muted-foreground leading-relaxed mb-8">
                    {product.description}
                  </p>
                </div>
                
                <div className="p-8 pt-0 mt-auto">
                  <Button variant="outline" className="w-full justify-between group/btn hover:bg-primary/10 hover:text-primary hover:border-primary/30 h-12 rounded-xl">
                    <span>Learn More</span>
                    <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>

      <section className="py-24 bg-gradient-to-b from-transparent to-primary/5">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FadeIn>
            <h2 className="text-3xl font-display font-bold mb-6">Need a Custom Integration?</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Our engineering team works directly with enterprise clients to build tailored security solutions that fit unique architectures.
            </p>
            <Button size="lg" className="bg-primary text-primary-foreground hover:opacity-90 h-14 px-8 rounded-xl font-semibold">
              Contact Engineering
            </Button>
          </FadeIn>
        </div>
      </section>
    </PageWrapper>
  );
}
