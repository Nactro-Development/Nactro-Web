import { Link } from "wouter";
import { UserCheck, Monitor, Globe, ArrowRight, CheckCircle2, Zap } from "lucide-react";
import { PageWrapper } from "@/components/layout/PageWrapper";
import { FadeIn } from "@/components/animations/FadeIn";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <PageWrapper 
      title="Secure. Build. Innovate." 
      description="Nactro is a leading technology brand delivering enterprise-grade cybersecurity tools and software development platforms."
    >
      {/* Hero Section */}
      <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden">
        {/* Abstract Background */}
        <div className="absolute inset-0 z-0">
          <img 
            src={`${import.meta.env.BASE_URL}images/hero-bg.png`} 
            alt="Cyber abstract background" 
            className="w-full h-full object-cover opacity-60 mix-blend-screen"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/80 to-background" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mt-12">
          <FadeIn>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary mb-8 font-medium text-sm">
              <Zap className="w-4 h-4" />
              <span>Nactro OS v2.0 is now live</span>
            </div>
          </FadeIn>
          
          <FadeIn delay={0.1}>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-extrabold tracking-tight mb-6">
              Secure. Build. <br className="hidden md:block" />
              <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent text-glow">
                Innovate.
              </span>
            </h1>
          </FadeIn>

          <FadeIn delay={0.2}>
            <p className="max-w-2xl mx-auto text-lg md:text-xl text-muted-foreground mb-10 leading-relaxed">
              We build smart software solutions for real businesses — from fingerprint attendance systems and Windows apps to web platforms and IoT devices.
            </p>
          </FadeIn>

          <FadeIn delay={0.3} className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/products">
              <Button size="lg" className="w-full sm:w-auto h-14 px-8 text-base bg-gradient-to-r from-primary to-accent hover:opacity-90 text-primary-foreground border-0 box-glow rounded-xl font-bold transition-all hover:scale-105">
                View Products
              </Button>
            </Link>
            <Link href="/contact">
              <Button size="lg" variant="outline" className="w-full sm:w-auto h-14 px-8 text-base border-border hover:bg-secondary hover:text-foreground rounded-xl font-medium transition-all">
                Contact Sales
              </Button>
            </Link>
          </FadeIn>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-24 bg-card/30 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">What We Build For You</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                From desktop software to connected IoT devices — we cover the full spectrum of modern business technology needs.
              </p>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <UserCheck className="w-8 h-8 text-primary" />,
                title: "Attendance System",
                desc: "Fingerprint-integrated workforce tracking with payroll exports, overtime reports, and break time calculation."
              },
              {
                icon: <Monitor className="w-8 h-8 text-accent" />,
                title: "Desktop Applications",
                desc: "Custom Windows software built with WPF and WinUI 3 for business automation and internal tooling."
              },
              {
                icon: <Globe className="w-8 h-8 text-primary" />,
                title: "Web Development",
                desc: "Business websites, admin dashboards, cloud web apps, and custom web platforms built to scale."
              }
            ].map((feature, i) => (
              <FadeIn key={i} delay={0.1 * (i + 1)}>
                <div className="bg-background border border-border/50 rounded-2xl p-8 hover:border-primary/50 hover:bg-card/50 transition-all duration-300 group box-glow-hover h-full">
                  <div className="w-16 h-16 rounded-xl bg-secondary flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {feature.desc}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>

          <FadeIn delay={0.4} className="mt-12 text-center">
            <Link href="/products" className="inline-flex items-center gap-2 text-primary font-medium hover:text-accent transition-colors group">
              Explore all solutions <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </FadeIn>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 border-y border-border/50 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-accent/5" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { value: "5+", label: "Product Lines" },
              { value: "100%", label: "Custom Built" },
              { value: "IoT", label: "to Enterprise" },
              { value: "24/7", label: "Support Ready" }
            ].map((stat, i) => (
              <FadeIn key={i} delay={0.1 * i}>
                <div className="p-4">
                  <div className="text-4xl md:text-5xl font-display font-extrabold text-foreground mb-2">
                    {stat.value}
                  </div>
                  <div className="text-sm md:text-base text-muted-foreground font-medium uppercase tracking-wider">
                    {stat.label}
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center gap-12">
          <FadeIn className="flex-1" direction="right">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">Built for businesses that need real technology.</h2>
            <ul className="space-y-4 mb-8">
              {["Fingerprint-integrated attendance & HR tools", "Custom desktop apps with WPF & WinUI 3", "Full-stack web and cloud platforms", "ESP8266 & Arduino IoT automation systems"].map((item, i) => (
                <li key={i} className="flex items-center gap-3">
                  <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0" />
                  <span className="text-lg text-muted-foreground">{item}</span>
                </li>
              ))}
            </ul>
            <Link href="/about">
              <Button variant="outline" className="h-12 px-6 rounded-xl">Learn About Nactro</Button>
            </Link>
          </FadeIn>
          <FadeIn className="flex-1 w-full" direction="left">
            <div className="bg-card border border-border rounded-2xl p-8 shadow-2xl">
              <div className="flex items-center gap-4 mb-6 border-b border-border/50 pb-6">
                <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center text-xl font-bold text-primary">
                  CT
                </div>
                <div>
                  <div className="font-bold text-lg">Caleb Trevino</div>
                  <div className="text-sm text-muted-foreground">CISO, GlobalTech Data</div>
                </div>
              </div>
              <p className="text-lg italic text-foreground leading-relaxed">
                "Implementing Nactro wasn't just an infrastructure upgrade; it was a complete paradigm shift for our security posture. We deploy faster and sleep better."
              </p>
            </div>
          </FadeIn>
        </div>
      </section>
    </PageWrapper>
  );
}
