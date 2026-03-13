import { Link } from "wouter";
import { Github, Twitter, Linkedin } from "lucide-react";
import logoImg from "/logo.png";

export function Footer() {
  return (
    <footer className="bg-card border-t border-border mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8">

          <div className="col-span-1 md:col-span-1">
            <Link href="/" className="inline-block mb-4 cursor-pointer">
              <img src={logoImg} alt="Nactro" className="h-8 w-auto object-contain" />
            </Link>
            <p className="text-muted-foreground text-sm leading-relaxed mb-6">
              Building smart software solutions — from attendance systems and desktop apps to web platforms and IoT devices.
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
              <li><Link href="/products" className="text-muted-foreground hover:text-primary text-sm transition-colors">Attendance System</Link></li>
              <li><Link href="/products" className="text-muted-foreground hover:text-primary text-sm transition-colors">Desktop Applications</Link></li>
              <li><Link href="/products" className="text-muted-foreground hover:text-primary text-sm transition-colors">Web Development</Link></li>
              <li><Link href="/products" className="text-muted-foreground hover:text-primary text-sm transition-colors">IoT & Arduino Projects</Link></li>
              <li><Link href="/products" className="text-muted-foreground hover:text-primary text-sm transition-colors">Custom Software</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4 text-foreground">Company</h3>
            <ul className="space-y-3">
              <li><Link href="/about" className="text-muted-foreground hover:text-primary text-sm transition-colors">About Us</Link></li>
              <li><Link href="/blog" className="text-muted-foreground hover:text-primary text-sm transition-colors">Blog & News</Link></li>
              <li><Link href="/contact" className="text-muted-foreground hover:text-primary text-sm transition-colors">Contact</Link></li>
              <li><Link href="/signin" className="text-muted-foreground hover:text-primary text-sm transition-colors">Client Login</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4 text-foreground">Legal</h3>
            <ul className="space-y-3">
              <li><Link href="#" className="text-muted-foreground hover:text-primary text-sm transition-colors">Privacy Policy</Link></li>
              <li><Link href="#" className="text-muted-foreground hover:text-primary text-sm transition-colors">Terms of Service</Link></li>
              <li><Link href="#" className="text-muted-foreground hover:text-primary text-sm transition-colors">Cookie Policy</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border/50 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-muted-foreground text-sm">
            &copy; {new Date().getFullYear()} Nactro Technologies. All rights reserved.
          </p>
          <div className="flex items-center gap-4 text-sm text-muted-foreground">
            <span>Built with precision.</span>
            <Link href="/login" className="text-muted-foreground/40 hover:text-muted-foreground transition-colors text-xs">
              Admin
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
