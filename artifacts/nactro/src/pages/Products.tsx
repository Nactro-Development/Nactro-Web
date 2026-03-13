import { useState } from "react";
import { PageWrapper } from "@/components/layout/PageWrapper";
import { FadeIn } from "@/components/animations/FadeIn";
import { UserCheck, Monitor, Globe, Cpu, Code2, ArrowRight, X, ExternalLink, ImageIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogClose,
} from "@/components/ui/dialog";
import { useProjects, type ProductId } from "@/hooks/use-projects";

type ProductConfig = {
  id: ProductId;
  name: string;
  category: string;
  icon: React.ReactNode;
  iconSmall: React.ReactNode;
  description: string;
  defaultTech: string[];
};

const PRODUCTS: ProductConfig[] = [
  {
    id: "attendance",
    name: "Nactro Attendance System",
    category: "HR & Workforce",
    icon: <UserCheck className="w-10 h-10 text-primary" />,
    iconSmall: <UserCheck className="w-6 h-6 text-primary" />,
    description:
      "Complete workforce management with fingerprint device integration, real-time working hours tracking, break time calculation, overtime reports, and payroll-ready exports.",
    defaultTech: ["C#", ".NET", "SQL Server"],
  },
  {
    id: "desktop",
    name: "Desktop Applications",
    category: "Windows Software",
    icon: <Monitor className="w-10 h-10 text-accent" />,
    iconSmall: <Monitor className="w-6 h-6 text-accent" />,
    description:
      "Custom Windows software built with WPF and WinUI 3 — modern, high-performance desktop applications tailored for business automation, internal tools, and enterprise workflows.",
    defaultTech: ["WPF", "WinUI 3", "C#"],
  },
  {
    id: "web",
    name: "Web Development",
    category: "Digital Platforms",
    icon: <Globe className="w-10 h-10 text-primary" />,
    iconSmall: <Globe className="w-6 h-6 text-primary" />,
    description:
      "From business landing pages to full-scale admin dashboards, cloud web apps, and custom web platforms — scalable web solutions that grow with your business.",
    defaultTech: ["React", "Node.js", "Tailwind CSS"],
  },
  {
    id: "iot",
    name: "IoT & Arduino Projects",
    category: "Embedded Systems",
    icon: <Cpu className="w-10 h-10 text-accent" />,
    iconSmall: <Cpu className="w-6 h-6 text-accent" />,
    description:
      "Smart automation systems and sensor monitoring solutions built on ESP8266 and Arduino. We bring physical environments online with reliable, real-time connected device integrations.",
    defaultTech: ["Arduino", "ESP8266", "C++"],
  },
  {
    id: "custom",
    name: "Custom Software Development",
    category: "Bespoke Solutions",
    icon: <Code2 className="w-10 h-10 text-primary" />,
    iconSmall: <Code2 className="w-6 h-6 text-primary" />,
    description:
      "Every business is unique. We build tailor-made software solutions designed around your exact requirements — from concept and architecture to deployment and long-term support.",
    defaultTech: ["Various", "Tailored Stack"],
  },
];

function ProductModal({
  product,
  open,
  onClose,
}: {
  product: ProductConfig;
  open: boolean;
  onClose: () => void;
}) {
  const { projects } = useProjects(product.id);

  return (
    <Dialog open={open} onOpenChange={(v) => !v && onClose()}>
      <DialogContent className="max-w-4xl w-full max-h-[90vh] overflow-y-auto bg-background border border-border rounded-2xl p-0 gap-0">
        <div className="sticky top-0 z-10 bg-background border-b border-border px-8 py-6 flex items-start justify-between">
          <DialogHeader className="flex-1">
            <div className="flex items-center gap-3 mb-1">
              <div className="p-2 rounded-lg bg-secondary border border-border/50">
                {product.iconSmall}
              </div>
              <DialogTitle className="text-2xl font-bold">{product.name}</DialogTitle>
            </div>
            <p className="text-muted-foreground text-sm mt-1">{product.description}</p>
          </DialogHeader>
          <DialogClose asChild>
            <button className="ml-4 mt-1 p-2 rounded-lg hover:bg-secondary transition-colors text-muted-foreground hover:text-foreground flex-shrink-0">
              <X className="w-5 h-5" />
            </button>
          </DialogClose>
        </div>

        <div className="px-8 py-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="h-px flex-1 bg-border" />
            <span className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
              Project Samples
            </span>
            <div className="h-px flex-1 bg-border" />
          </div>

          {projects.length === 0 ? (
            <div className="text-center py-16">
              <ImageIcon className="w-12 h-12 mx-auto mb-3 text-muted-foreground opacity-30" />
              <p className="text-muted-foreground font-medium">No projects added yet</p>
              <p className="text-sm text-muted-foreground/60 mt-1">
                Projects added from the admin dashboard will appear here.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {projects.map((project) => (
                <div
                  key={project.id}
                  className="group bg-card border border-border rounded-xl overflow-hidden hover:border-primary/50 transition-all duration-300 hover:shadow-[0_0_20px_rgba(0,212,255,0.1)]"
                >
                  <div className="relative w-full h-48 bg-secondary flex items-center justify-center border-b border-border overflow-hidden">
                    {project.image ? (
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <div className="flex flex-col items-center gap-2 text-muted-foreground">
                        <ImageIcon className="w-10 h-10 opacity-30" />
                        <span className="text-xs font-medium opacity-50">No image</span>
                      </div>
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>

                  <div className="p-5">
                    <div className="flex items-start justify-between gap-2 mb-2">
                      <h3 className="font-bold text-lg leading-tight group-hover:text-primary transition-colors">
                        {project.title}
                      </h3>
                      <ExternalLink className="w-4 h-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0 mt-1" />
                    </div>
                    <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                      {project.description}
                    </p>
                    {project.tech.length > 0 && (
                      <div className="flex flex-wrap gap-2">
                        {project.tech.map((t) => (
                          <span
                            key={t}
                            className="text-xs px-2.5 py-1 rounded-full bg-primary/10 text-primary border border-primary/20 font-medium"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          )}

          <div className="mt-8 p-5 rounded-xl border border-dashed border-border bg-secondary/20 text-center">
            <p className="text-sm text-muted-foreground">
              Interested in a similar project?{" "}
              <a href="/contact" className="text-primary hover:underline font-medium">
                Get in touch
              </a>
            </p>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}

export default function Products() {
  const [openModal, setOpenModal] = useState<ProductId | null>(null);
  const activeProduct = PRODUCTS.find((p) => p.id === openModal);

  return (
    <PageWrapper
      title="Products & Solutions | Nactro"
      description="Explore Nactro's suite of software products including attendance systems, desktop apps, web development, IoT, and custom software."
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
                  <p className="text-muted-foreground leading-relaxed">
                    {product.description}
                  </p>
                </div>

                <div className="p-8 pt-0 mt-auto">
                  <Button
                    variant="outline"
                    className="w-full justify-between group/btn hover:bg-primary/10 hover:text-primary hover:border-primary/30 h-12 rounded-xl"
                    onClick={() => setOpenModal(product.id)}
                  >
                    <span>View Projects</span>
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

      {activeProduct && (
        <ProductModal
          product={activeProduct}
          open={openModal !== null}
          onClose={() => setOpenModal(null)}
        />
      )}
    </PageWrapper>
  );
}
