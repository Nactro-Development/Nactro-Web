import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X, Sun, Moon, LayoutDashboard, LogIn, User, LogOut, ChevronDown } from "lucide-react";
import { useTheme } from "@/components/theme-provider";
import { useAuth } from "@/hooks/use-auth";
import { useClientAuth } from "@/hooks/use-client-auth";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import logoImg from "/logo.png";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const { theme, setTheme } = useTheme();
  const { isLoggedIn: isAdmin } = useAuth();
  const { currentUser, logout: clientLogout } = useClientAuth();
  const [location] = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
    setDropdownOpen(false);
  }, [location]);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Products", href: "/products" },
    { name: "Blog", href: "/blog" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <header
      className={cn(
        "fixed top-0 inset-x-0 z-50 transition-all duration-300 border-b border-transparent",
        isScrolled
          ? "bg-background/80 backdrop-blur-md border-border/50 shadow-sm"
          : "bg-transparent py-2"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center cursor-pointer">
            <img src={logoImg} alt="Nactro" className="h-9 w-auto object-contain" />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={cn(
                  "text-sm font-medium transition-colors hover:text-primary",
                  location === link.href ? "text-primary" : "text-muted-foreground"
                )}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center gap-3">
            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="p-2 rounded-full hover:bg-secondary text-muted-foreground hover:text-foreground transition-colors"
              aria-label="Toggle theme"
            >
              {theme === "dark" ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>

            {/* Admin dashboard shortcut (only if admin is logged in) */}
            {isAdmin && (
              <Link href="/dashboard">
                <button className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-primary/30 bg-primary/10 text-primary text-sm font-medium hover:bg-primary/20 transition-colors">
                  <LayoutDashboard className="w-4 h-4" />
                  Dashboard
                </button>
              </Link>
            )}

            {/* Client auth */}
            {currentUser ? (
              <div className="relative" ref={dropdownRef}>
                <button
                  onClick={() => setDropdownOpen(!dropdownOpen)}
                  className="flex items-center gap-2 px-3 py-1.5 rounded-lg border border-border hover:bg-secondary transition-colors text-sm font-medium"
                >
                  <div className="w-7 h-7 rounded-full bg-primary/20 border border-primary/40 flex items-center justify-center text-primary font-bold text-xs">
                    {currentUser.name.charAt(0).toUpperCase()}
                  </div>
                  <span className="max-w-[100px] truncate">{currentUser.name}</span>
                  <ChevronDown className={cn("w-3.5 h-3.5 text-muted-foreground transition-transform", dropdownOpen && "rotate-180")} />
                </button>
                {dropdownOpen && (
                  <div className="absolute right-0 top-full mt-2 w-52 bg-card border border-border rounded-xl shadow-xl overflow-hidden z-50">
                    <div className="px-4 py-3 border-b border-border bg-background/50">
                      <p className="text-sm font-semibold truncate">{currentUser.name}</p>
                      <p className="text-xs text-muted-foreground truncate">{currentUser.email}</p>
                    </div>
                    <button
                      onClick={() => { clientLogout(); setDropdownOpen(false); }}
                      className="w-full flex items-center gap-2.5 px-4 py-3 text-sm text-muted-foreground hover:text-red-400 hover:bg-red-500/10 transition-colors"
                    >
                      <LogOut className="w-4 h-4" />
                      Sign Out
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <Link href="/signin">
                <button className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-border text-muted-foreground text-sm font-medium hover:bg-secondary hover:text-foreground transition-colors">
                  <LogIn className="w-4 h-4" />
                  Sign In
                </button>
              </Link>
            )}

            <Link href="/contact">
              <Button className="bg-gradient-to-r from-primary to-accent hover:opacity-90 text-primary-foreground border-0 rounded-full px-6 transition-all duration-300 hover:scale-105 font-semibold">
                Get Started
              </Button>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center gap-3">
            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="p-2 rounded-full hover:bg-secondary text-muted-foreground"
            >
              {theme === "dark" ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-md hover:bg-secondary text-foreground"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-background border-b border-border absolute w-full animate-in slide-in-from-top-2">
          <div className="px-4 pt-2 pb-6 space-y-1 shadow-lg">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={cn(
                  "block px-3 py-3 rounded-md text-base font-medium",
                  location === link.href
                    ? "bg-primary/10 text-primary"
                    : "text-muted-foreground hover:bg-secondary hover:text-foreground"
                )}
              >
                {link.name}
              </Link>
            ))}

            <div className="pt-2 border-t border-border space-y-1">
              {currentUser ? (
                <>
                  <div className="flex items-center gap-3 px-3 py-3">
                    <div className="w-8 h-8 rounded-full bg-primary/20 border border-primary/40 flex items-center justify-center text-primary font-bold text-sm">
                      {currentUser.name.charAt(0).toUpperCase()}
                    </div>
                    <div>
                      <p className="text-sm font-semibold">{currentUser.name}</p>
                      <p className="text-xs text-muted-foreground">{currentUser.email}</p>
                    </div>
                  </div>
                  <button
                    onClick={clientLogout}
                    className="w-full flex items-center gap-2 px-3 py-3 rounded-md text-base font-medium text-muted-foreground hover:bg-secondary hover:text-red-400"
                  >
                    <LogOut className="w-5 h-5" /> Sign Out
                  </button>
                </>
              ) : (
                <Link href="/signin">
                  <div className="flex items-center gap-2 px-3 py-3 rounded-md text-base font-medium text-muted-foreground hover:bg-secondary hover:text-foreground">
                    <LogIn className="w-5 h-5" /> Sign In / Register
                  </div>
                </Link>
              )}

              {isAdmin && (
                <Link href="/dashboard">
                  <div className="flex items-center gap-2 px-3 py-3 rounded-md text-base font-medium text-primary bg-primary/10">
                    <LayoutDashboard className="w-5 h-5" /> Dashboard
                  </div>
                </Link>
              )}
            </div>

            <div className="pt-2 px-3">
              <Link href="/contact">
                <Button className="w-full bg-gradient-to-r from-primary to-accent text-primary-foreground">
                  Get Started
                </Button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
