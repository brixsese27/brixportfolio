"use client";

import * as React from "react";
import Link from "next/link";
import { navItems } from "@/data/navigation";
import { profileData } from "@/data/profile";
import { ThemeToggle } from "@/components/theme-toggle";
import { Menu, X, FileDown, ChevronRight, Phone, Mail, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [activeSection, setActiveSection] = React.useState<string>("hero");
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState<boolean>(false);
  const [scrolled, setScrolled] = React.useState<boolean>(false);

  // Track scroll position for glass navbar border & styling
  React.useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // Determine active section using scroll calculation
      const sections = navItems.map((item) => item.href.replace("#", ""));
      const scrollPosition = window.scrollY + 120;

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

  // Close mobile menu on Esc key or resize to desktop
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

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const targetId = href.replace("#", "");
    const targetEl = document.getElementById(targetId);
    if (targetEl) {
      const topOffset = 75;
      const elementPosition = targetEl.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - topOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-40 transition-all duration-300",
          scrolled
            ? "bg-background/90 backdrop-blur-md border-b border-border/80 shadow-sm py-2.5 sm:py-3"
            : "bg-background/70 backdrop-blur-sm sm:bg-transparent py-3 sm:py-5 border-b border-border/40 sm:border-transparent"
        )}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Left: Brand Name */}
          <Link
            href="#hero"
            onClick={(e) => handleNavClick(e, "#hero")}
            className="group flex items-center gap-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-lg p-1"
            aria-label={`${profileData.name} - Home`}
          >
            <div className="flex flex-col">
              <span className="font-mono text-base font-bold tracking-tight text-foreground group-hover:text-primary transition-colors flex items-center gap-1.5">
                {profileData.name}
                <span className="inline-block w-1.5 h-1.5 rounded-full bg-brand-500 animate-pulse" />
              </span>
              <span className="text-[10px] font-mono text-muted-foreground uppercase tracking-widest">
                BSIT • IT Support
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav
            className="hidden lg:flex items-center gap-1 bg-card/70 border border-border/70 p-1.5 rounded-full backdrop-blur-md shadow-sm"
            aria-label="Main Navigation"
          >
            {navItems.map((item) => {
              const sectionId = item.href.replace("#", "");
              const isActive = activeSection === sectionId;
              return (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className={cn(
                    "px-3.5 py-1.5 text-xs font-mono font-medium rounded-full transition-all duration-200",
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
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg text-xs font-mono font-semibold bg-secondary hover:bg-secondary/80 text-secondary-foreground border border-border transition-all duration-200 hover:border-primary/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary shadow-sm"
            >
              <FileDown className="w-3.5 h-3.5 text-brand-500" />
              Resume
            </a>
          </div>

          {/* Mobile Controls (Theme Toggle + Animated Hamburger Menu Trigger) */}
          <div className="flex lg:hidden items-center gap-2">
            <ThemeToggle />
            <button
              type="button"
              onClick={() => setMobileMenuOpen((prev) => !prev)}
              className={cn(
                "p-2 rounded-xl border border-border bg-card text-foreground hover:bg-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary transition-all shadow-sm cursor-pointer",
                mobileMenuOpen && "bg-accent border-primary/50 text-primary"
              )}
              aria-expanded={mobileMenuOpen}
              aria-label="Toggle mobile menu"
            >
              {mobileMenuOpen ? (
                <X className="w-5 h-5 text-primary animate-in spin-in-90 duration-200" />
              ) : (
                <Menu className="w-5 h-5 transition-transform" />
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Smooth Backdrop Overlay */}
      {mobileMenuOpen && (
        <div
          onClick={() => setMobileMenuOpen(false)}
          className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40 lg:hidden animate-in fade-in duration-300"
          aria-hidden="true"
        />
      )}

      {/* Smooth Dropdown Menu Container */}
      {mobileMenuOpen && (
        <div className="fixed top-[62px] sm:top-[68px] inset-x-3 sm:inset-x-6 z-50 lg:hidden max-h-[calc(100vh-80px)] overflow-y-auto bg-card/95 dark:bg-card/95 backdrop-blur-2xl border border-border/80 rounded-2xl shadow-2xl p-4 sm:p-5 animate-dropdown-slide transition-all duration-300 space-y-4">
          
          {/* Header Row */}
          <div className="flex items-center justify-between pb-3 border-b border-border/70">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-brand-500 animate-pulse" />
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-muted-foreground">
                Navigation Menu
              </span>
            </div>
            <span className="text-[10px] font-mono text-muted-foreground">
              {navItems.length} Sections
            </span>
          </div>

          {/* Navigation Links List */}
          <nav className="grid grid-cols-1 gap-1.5" aria-label="Mobile Navigation">
            {navItems.map((item) => {
              const sectionId = item.href.replace("#", "");
              const isActive = activeSection === sectionId;
              return (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className={cn(
                    "flex items-center justify-between px-3.5 py-2.5 rounded-xl text-xs font-mono transition-all duration-200 group",
                    isActive
                      ? "bg-primary text-primary-foreground font-bold shadow-sm"
                      : "text-foreground hover:bg-muted/70 hover:translate-x-1"
                  )}
                >
                  <div className="flex items-center gap-2.5">
                    <span
                      className={cn(
                        "w-1.5 h-1.5 rounded-full transition-all",
                        isActive ? "bg-primary-foreground" : "bg-muted-foreground/40 group-hover:bg-brand-500"
                      )}
                    />
                    <span>{item.label}</span>
                  </div>

                  <ChevronRight
                    className={cn(
                      "w-3.5 h-3.5 transition-transform",
                      isActive ? "text-primary-foreground translate-x-0.5" : "text-muted-foreground group-hover:translate-x-0.5 group-hover:text-foreground"
                    )}
                  />
                </a>
              );
            })}
          </nav>

          {/* Action Row */}
          <div className="pt-3 border-t border-border/70 space-y-2.5">
            <a
              href={profileData.resumeUrl}
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-center gap-2 w-full py-2.5 rounded-xl text-xs font-mono font-bold bg-primary text-primary-foreground shadow-md hover:bg-primary/90 transition-all"
            >
              <FileDown className="w-4 h-4" />
              View &amp; Print Resume
            </a>

            <div className="grid grid-cols-2 gap-2 text-center text-xs font-mono">
              <a
                href={`mailto:${profileData.email}`}
                className="p-2 rounded-xl border border-border bg-muted/40 text-foreground flex items-center justify-center gap-1.5 hover:bg-muted/80 transition-colors"
              >
                <Mail className="w-3.5 h-3.5 text-brand-500" />
                Email
              </a>
              <a
                href={`tel:${profileData.phone}`}
                className="p-2 rounded-xl border border-border bg-muted/40 text-foreground flex items-center justify-center gap-1.5 hover:bg-muted/80 transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-cyan-500" />
                Call
              </a>
            </div>

            <p className="text-center text-[10px] font-mono text-muted-foreground pt-0.5">
              {profileData.status}
            </p>
          </div>

        </div>
      )}
    </>
  );
}
