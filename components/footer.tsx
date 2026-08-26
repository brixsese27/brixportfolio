"use client";

import * as React from "react";
import { profileData } from "@/data/profile";
import { navItems } from "@/data/navigation";
import { Terminal, Github, Linkedin, Mail, ArrowUp } from "lucide-react";

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="border-t border-border/80 bg-card/60 backdrop-blur-sm py-12 text-muted-foreground font-mono text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Top row */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pb-8 border-b border-border/60">
          
          <div className="space-y-1">
            <div className="flex items-center gap-2 text-foreground font-bold text-sm">
              <Terminal className="w-4 h-4 text-brand-500" />
              <span>{profileData.name}</span>
              <span className="text-[10px] font-normal px-2 py-0.5 rounded bg-muted text-muted-foreground">
                BSIT Portfolio
              </span>
            </div>
            <p className="text-[11px] text-muted-foreground max-w-sm">
              {profileData.headline}
            </p>
          </div>

          {/* Quick Anchor Links */}
          <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-[11px]">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="hover:text-foreground transition-colors"
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* Scroll to Top Button */}
          <button
            type="button"
            onClick={scrollToTop}
            className="inline-flex items-center gap-1.5 p-2 rounded-lg border border-border bg-card hover:bg-accent text-foreground transition-all shadow-sm self-start md:self-auto"
            aria-label="Scroll to top"
          >
            <ArrowUp className="w-4 h-4 text-brand-500" />
            <span className="text-[11px]">Back to top</span>
          </button>
        </div>

        {/* Bottom row */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px]">
          <div>
            &copy; {new Date().getFullYear()} {profileData.name}. All rights reserved.
          </div>

          <div className="flex items-center gap-4 text-muted-foreground">
            <span>Built with Next.js &amp; Tailwind CSS</span>
            <span>•</span>
            <span className="text-brand-600 dark:text-brand-400 font-semibold">Vercel Ready</span>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-3">
            <a
              href={profileData.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-1 text-muted-foreground hover:text-foreground transition-colors"
              aria-label="GitHub Profile"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href={profileData.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-1 text-muted-foreground hover:text-foreground transition-colors"
              aria-label="LinkedIn Profile"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              href={`mailto:${profileData.email}`}
              className="p-1 text-muted-foreground hover:text-foreground transition-colors"
              aria-label="Send Email"
            >
              <Mail className="w-4 h-4" />
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
}
