import { PageWrapper } from "@/components/layout/PageWrapper";
import { FadeIn } from "@/components/animations/FadeIn";
import { UserCheck, Monitor, Globe, Cpu, Code2, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const PRODUCTS = [
  {
    id: "attendance",
    name: "Nactro Attendance System",
    category: "HR & Workforce",
    icon: <UserCheck className="w-10 h-10 text-primary" />,
    description:
      "Complete workforce management with fingerprint device integration, real-time working hours tracking, break time calculation, overtime reports, and payroll-ready exports. Built for businesses that demand accuracy."
  },
  {
    id: "desktop",
    name: "Desktop Applications",
    category: "Windows Software",
    icon: <Monitor className="w-10 h-10 text-accent" />,
    description:
      "Custom Windows software built with WPF and WinUI 3 — modern, high-performance desktop applications tailored for business automation, internal tools, and enterprise workflows."
  },
  {
    id: "web",
    name: "Web Development",
    category: "Digital Platforms",
    icon: <Globe className="w-10 h-10 text-primary" />,
    description:
      "From business landing pages to full-scale admin dashboards, cloud web apps, and custom web platforms — we design and develop scalable web solutions that grow with your business."
  },
  {
    id: "iot",
    name: "IoT & Arduino Projects",
    category: "Embedded Systems",
    icon: <Cpu className="w-10 h-10 text-accent" />,
    description:
      "Smart automation systems and sensor monitoring solutions built on ESP8266 and Arduino. We bring physical environments online with reliable, real-time connected device integrations."
  },
  {
    id: "custom",
    name: "Custom Software Development",
    category: "Bespoke Solutions",
    icon: <Code2 className="w-10 h-10 text-primary" />,
    description:
      "Every business is unique. We build tailor-made software solutions designed around your exact requirements — from concept and architecture to deployment and long-term support."
  }
];

export default function Products() {
  return (
    <PageWrapper
      title="Products & Solutions | Nactro"
      description="Explore Nactro's suite of software products and technology solutions including attendance systems, desktop apps, web development, IoT, and custom software."
    >
      <div className="bg-card/50 py-20 border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FadeIn>
            <h1 className="text-4xl md:text-6xl font-display font-extrabold mb-6">
              What We Build
            </h1>
            <p className="max-w-2xl mx-auto text-xl text-muted-foreground">
              A focused portfolio of real-world technology solutions — each one engineered to solve a specific business problem with precision and reliability.
            </p>
          </FadeIn>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PRODUCTS.map((product, index) => (
            <FadeIn key={product.id} delay={index * 0.1}>
              <div className="flex flex-col h-full bg-background rounded-2xl border border-border overflow-hidden group hover:border-primary/50 transition-all duration-300 relative shadow-sm hover:shadow-[0_0_30px_rgba(0,212,255,0.15)]">
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

                  <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">
                    {product.name}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed mb-8">
                    {product.description}
                  </p>
                </div>

                <div className="p-8 pt-0 mt-auto">
                  <Button
                    variant="outline"
                    className="w-full justify-between group/btn hover:bg-primary/10 hover:text-primary hover:border-primary/30 h-12 rounded-xl"
                  >
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
            <h2 className="text-3xl font-display font-bold mb-6">
              Have a Unique Project in Mind?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              We work closely with businesses to design and build software solutions tailored to their exact needs. Let's talk about yours.
            </p>
            <Button
              size="lg"
              className="bg-primary text-primary-foreground hover:opacity-90 h-14 px-8 rounded-xl font-semibold"
              onClick={() => (window.location.href = "/contact")}
            >
              Get in Touch
            </Button>
          </FadeIn>
        </div>
      </section>
    </PageWrapper>
  );
}
