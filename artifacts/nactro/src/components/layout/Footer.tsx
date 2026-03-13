import { Link } from "wouter";
import { Shield, Github, Twitter, Linkedin } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-card border-t border-border mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8">
          
          <div className="col-span-1 md:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4 group cursor-pointer">
              <Shield className="w-6 h-6 text-primary group-hover:text-accent transition-colors" />
              <span className="font-display font-bold text-xl">NACTRO</span>
            </Link>
            <p className="text-muted-foreground text-sm leading-relaxed mb-6">
              Engineering the future of digital defense and software innovation. Secure, scalable, and resilient technology for the modern enterprise.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Github className="w-5 h-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-semibold mb-4 text-foreground">Products</h3>
            <ul className="space-y-3">
              <li><Link href="/products" className="text-muted-foreground hover:text-primary text-sm transition-colors">ShieldCore Endpoint</Link></li>
              <li><Link href="/products" className="text-muted-foreground hover:text-primary text-sm transition-colors">CipherNet Networks</Link></li>
              <li><Link href="/products" className="text-muted-foreground hover:text-primary text-sm transition-colors">CodeVault Repositories</Link></li>
              <li><Link href="/products" className="text-muted-foreground hover:text-primary text-sm transition-colors">CloudSentry Monitoring</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4 text-foreground">Company</h3>
            <ul className="space-y-3">
              <li><Link href="/about" className="text-muted-foreground hover:text-primary text-sm transition-colors">About Us</Link></li>
              <li><Link href="/blog" className="text-muted-foreground hover:text-primary text-sm transition-colors">Blog & News</Link></li>
              <li><Link href="/careers" className="text-muted-foreground hover:text-primary text-sm transition-colors">Careers</Link></li>
              <li><Link href="/contact" className="text-muted-foreground hover:text-primary text-sm transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4 text-foreground">Legal</h3>
            <ul className="space-y-3">
              <li><Link href="#" className="text-muted-foreground hover:text-primary text-sm transition-colors">Privacy Policy</Link></li>
              <li><Link href="#" className="text-muted-foreground hover:text-primary text-sm transition-colors">Terms of Service</Link></li>
              <li><Link href="#" className="text-muted-foreground hover:text-primary text-sm transition-colors">Security Policy</Link></li>
              <li><Link href="#" className="text-muted-foreground hover:text-primary text-sm transition-colors">Cookie Policy</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border/50 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-muted-foreground text-sm">
            &copy; {new Date().getFullYear()} Nactro Technologies. All rights reserved.
          </p>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <span>Built with precision.</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
