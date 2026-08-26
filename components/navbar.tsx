"use client";

import * as React from "react";
import Link from "next/link";
import { navItems } from "@/data/navigation";
import { profileData } from "@/data/profile";
import { ThemeToggle } from "@/components/theme-toggle";
import { Menu, X, FileDown, Terminal, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [activeSection, setActiveSection] = React.useState<string>("hero");
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState<boolean>(false);
  const [scrolled, setScrolled] = React.useState<boolean>(false);

  // Track scroll position for glass navbar border & styling
  React.useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // Determine active section using Intersection / scroll calculation
      const sections = navItems.map((item) => item.href.replace("#", ""));
      const scrollPosition = window.scrollY + 140;

      for (let i = sections.length - 1; i >= 0; i--) {
        const sectionId = sections[i];
        const element = document.getElementById(sectionId);
        if (element) {
          const top = element.offsetTop;
          if (scrollPosition >= top) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on Esc key or resize
  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMobileMenuOpen(false);
    };
    const handleResize = () => {
      if (window.innerWidth >= 1024) setMobileMenuOpen(false);
    };
    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // Prevent background scroll when mobile menu is open
  React.useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [mobileMenuOpen]);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const targetId = href.replace("#", "");
    const targetEl = document.getElementById(targetId);
    if (targetEl) {
      const topOffset = 80;
      const elementPosition = targetEl.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - topOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-background/85 backdrop-blur-md border-b border-border/80 shadow-sm py-3"
          : "bg-transparent py-5"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Left: Brand Monogram / Name */}
        <Link
          href="#hero"
          onClick={(e) => handleNavClick(e, "#hero")}
          className="group flex items-center gap-2.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-lg p-1"
          aria-label={`${profileData.name} - Home`}
        >
          <div className="w-9 h-9 rounded-lg bg-card border border-border group-hover:border-primary/50 flex items-center justify-center text-primary transition-all duration-200 shadow-sm">
            <Terminal className="w-4 h-4 text-brand-500 transition-transform group-hover:scale-110" />
          </div>
          <div className="flex flex-col">
            <span className="font-mono text-sm font-bold tracking-tight text-foreground group-hover:text-primary transition-colors flex items-center gap-1.5">
              {profileData.name}
              <span className="inline-block w-1.5 h-1.5 rounded-full bg-brand-500 animate-pulse" />
            </span>
            <span className="text-[10px] font-mono text-muted-foreground uppercase tracking-widest hidden sm:inline-block">
              BSIT Developer
            </span>
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-1 bg-card/60 border border-border/60 p-1.5 rounded-full backdrop-blur-md shadow-sm" aria-label="Main Navigation">
          {navItems.map((item) => {
            const sectionId = item.href.replace("#", "");
            const isActive = activeSection === sectionId;
            return (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className={cn(
                  "px-3.5 py-1.5 text-xs font-mono font-medium rounded-full transition-all duration-200 relative",
                  isActive
                    ? "bg-primary text-primary-foreground font-semibold shadow-sm"
                    : "text-muted-foreground hover:text-foreground hover:bg-accent/60"
                )}
                aria-current={isActive ? "page" : undefined}
              >
                {item.label}
              </a>
            );
          })}
        </nav>

        {/* Right Desktop Utilities (Theme Toggle + Resume Button) */}
        <div className="hidden lg:flex items-center gap-3">
          <ThemeToggle />
          <a
            href={profileData.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg text-xs font-mono font-semibold bg-secondary hover:bg-secondary/80 text-secondary-foreground border border-border transition-all duration-200 hover:border-primary/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary shadow-sm"
          >
            <FileDown className="w-3.5 h-3.5 text-brand-500" />
            Resume
          </a>
        </div>

        {/* Mobile Controls (Theme Toggle + Mobile Menu Trigger) */}
        <div className="flex lg:hidden items-center gap-2">
          <ThemeToggle />
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg border border-border bg-card/70 text-foreground hover:bg-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary transition-colors"
            aria-expanded={mobileMenuOpen}
            aria-label="Toggle mobile menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 top-[60px] z-40 lg:hidden bg-background/95 backdrop-blur-xl border-b border-border p-6 flex flex-col justify-between animate-in fade-in slide-in-from-top-4 duration-200 overflow-y-auto">
          <div className="space-y-2">
            <div className="px-3 py-2 text-[11px] font-mono uppercase tracking-widest text-muted-foreground">
              Navigation
            </div>
            {navItems.map((item) => {
              const sectionId = item.href.replace("#", "");
              const isActive = activeSection === sectionId;
              return (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className={cn(
                    "flex items-center justify-between px-4 py-3 rounded-xl text-sm font-mono transition-all",
                    isActive
                      ? "bg-primary/10 text-primary font-bold border border-primary/20"
                      : "text-foreground hover:bg-accent"
                  )}
                >
                  <span>{item.label}</span>
                  <ChevronRight className={cn("w-4 h-4 transition-transform", isActive ? "text-primary translate-x-1" : "text-muted-foreground")} />
                </a>
              );
            })}
          </div>

          <div className="pt-6 border-t border-border mt-6 space-y-3">
            <a
              href={profileData.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full py-3 rounded-xl text-sm font-mono font-semibold bg-primary text-primary-foreground shadow-md"
            >
              <FileDown className="w-4 h-4" />
              Download Resume
            </a>
            <p className="text-center text-xs font-mono text-muted-foreground">
              {profileData.status}
            </p>
          </div>
        </div>
      )}
    </header>
  );
}
