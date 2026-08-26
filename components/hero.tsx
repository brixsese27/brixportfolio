"use client";

import * as React from "react";
import { profileData } from "@/data/profile";
import {
  ArrowDown,
  FileDown,
  Github,
  Linkedin,
  Mail,
  Terminal,
  Code2,
  Cpu,
  Layers,
  Sparkles,
  CheckCircle2
} from "lucide-react";
import { cn } from "@/lib/utils";

export function Hero() {
  const [activeTab, setActiveTab] = React.useState<"spec" | "stack" | "manifest">("spec");

  const scrollToProjects = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const target = document.getElementById("projects");
    if (target) {
      const offsetPosition = target.getBoundingClientRect().top + window.pageYOffset - 80;
      window.scrollTo({ top: offsetPosition, behavior: "smooth" });
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-[90vh] flex items-center justify-center pt-28 pb-16 lg:pt-36 lg:pb-24 overflow-hidden"
    >
      {/* Background subtle radial gradient & grid pattern */}
      <div className="absolute inset-0 bg-grid-pattern dark:bg-grid-pattern opacity-40 pointer-events-none [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[350px] bg-brand-500/10 dark:bg-brand-500/15 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Headline, Bio & Primary CTAs */}
          <div className="lg:col-span-7 flex flex-col items-start space-y-6">
            
            {/* Status Pill Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-border bg-card/80 backdrop-blur-sm text-xs font-mono text-muted-foreground shadow-sm">
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-500"></span>
              </span>
              <span className="text-foreground font-semibold">Available for Opportunities</span>
              <span className="text-muted-foreground/60">•</span>
              <span className="text-brand-600 dark:text-brand-400 font-medium">Junior / Associate Developer</span>
            </div>

            {/* Main Label & Large Typography */}
            <div className="space-y-2">
              <div className="text-xs sm:text-sm font-mono tracking-widest uppercase font-semibold text-brand-600 dark:text-brand-400">
                BS INFORMATION TECHNOLOGY GRADUATE
              </div>
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-foreground font-sans">
                {profileData.name}
              </h1>
            </div>

            {/* Headline */}
            <p className="text-xl sm:text-2xl font-medium text-foreground/90 leading-snug max-w-2xl">
              {profileData.headline}
            </p>

            {/* Short Introduction */}
            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed max-w-xl">
              {profileData.subheadline}
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2 w-full sm:w-auto">
              <a
                href="#projects"
                onClick={scrollToProjects}
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-primary hover:bg-primary/90 text-primary-foreground font-mono text-sm font-semibold transition-all duration-200 shadow-md hover:shadow-lg hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary w-full sm:w-auto"
              >
                View My Projects
                <ArrowDown className="w-4 h-4" />
              </a>

              <a
                href={profileData.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-card hover:bg-accent border border-border text-foreground font-mono text-sm font-semibold transition-all duration-200 hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary w-full sm:w-auto shadow-sm"
              >
                <FileDown className="w-4 h-4 text-brand-500" />
                Download Resume
              </a>
            </div>

            {/* Social & Contact Direct Links */}
            <div className="flex items-center gap-5 pt-4 border-t border-border/80 w-full">
              <span className="text-xs font-mono text-muted-foreground uppercase tracking-wider">Connect:</span>
              
              <a
                href={profileData.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors p-1 rounded hover:bg-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                aria-label="Brix Sese GitHub"
              >
                <Github className="w-5 h-5" />
              </a>

              <a
                href={profileData.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors p-1 rounded hover:bg-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                aria-label="Brix Sese LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>

              <a
                href={`mailto:${profileData.email}`}
                className="text-muted-foreground hover:text-foreground transition-colors p-1 rounded hover:bg-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary flex items-center gap-1.5 text-xs font-mono"
                aria-label="Send Email"
              >
                <Mail className="w-5 h-5" />
                <span className="hidden sm:inline-block text-muted-foreground">{profileData.email}</span>
              </a>
            </div>
          </div>

          {/* Right Column: Distinctive Interactive Developer Workstation Inspector */}
          <div className="lg:col-span-5 w-full">
            <div className="terminal-window bg-card/90 border border-border shadow-2xl backdrop-blur-md">
              
              {/* Window Header */}
              <div className="flex items-center justify-between px-4 py-3 bg-muted/40 border-b border-border">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-rose-500/80 inline-block" />
                  <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block" />
                  <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block" />
                </div>
                <div className="text-[11px] font-mono text-muted-foreground flex items-center gap-1.5">
                  <Terminal className="w-3.5 h-3.5 text-brand-500" />
                  <span>developer-spec.ts</span>
                </div>
                <div className="text-[10px] font-mono px-2 py-0.5 rounded bg-brand-500/10 text-brand-600 dark:text-brand-400 font-semibold border border-brand-500/20">
                  TypeScript v5
                </div>
              </div>

              {/* Tab Selector */}
              <div className="flex border-b border-border bg-muted/20 text-xs font-mono">
                <button
                  type="button"
                  onClick={() => setActiveTab("spec")}
                  className={cn(
                    "flex-1 py-2.5 px-3 flex items-center justify-center gap-2 border-r border-border transition-colors",
                    activeTab === "spec"
                      ? "bg-card text-foreground font-semibold border-b-2 border-b-primary"
                      : "text-muted-foreground hover:text-foreground"
                  )}
                >
                  <Code2 className="w-3.5 h-3.5 text-brand-500" />
                  Interface
                </button>
                <button
                  type="button"
                  onClick={() => setActiveTab("stack")}
                  className={cn(
                    "flex-1 py-2.5 px-3 flex items-center justify-center gap-2 border-r border-border transition-colors",
                    activeTab === "stack"
                      ? "bg-card text-foreground font-semibold border-b-2 border-b-primary"
                      : "text-muted-foreground hover:text-foreground"
                  )}
                >
                  <Layers className="w-3.5 h-3.5 text-cyan-500" />
                  Core Stack
                </button>
                <button
                  type="button"
                  onClick={() => setActiveTab("manifest")}
                  className={cn(
                    "flex-1 py-2.5 px-3 flex items-center justify-center gap-2 transition-colors",
                    activeTab === "manifest"
                      ? "bg-card text-foreground font-semibold border-b-2 border-b-primary"
                      : "text-muted-foreground hover:text-foreground"
                  )}
                >
                  <Cpu className="w-3.5 h-3.5 text-indigo-500" />
                  Telemetry
                </button>
              </div>

              {/* Tab Content 1: TypeScript Interface Contract */}
              {activeTab === "spec" && (
                <div className="p-4 sm:p-5 font-mono text-xs text-foreground/90 space-y-1.5 leading-relaxed overflow-x-auto">
                  <div className="text-muted-foreground">{"// Developer Profile Contract"}</div>
                  <div>
                    <span className="text-indigo-500 dark:text-indigo-400 font-bold">interface</span>{" "}
                    <span className="text-cyan-500 font-semibold">SoftwareEngineer</span> {"{"}
                  </div>
                  <div className="pl-4">
                    <span className="text-muted-foreground">name:</span>{" "}
                    <span className="text-emerald-500 dark:text-emerald-400">&quot;Brix Sese&quot;</span>;
                  </div>
                  <div className="pl-4">
                    <span className="text-muted-foreground">degree:</span>{" "}
                    <span className="text-emerald-500 dark:text-emerald-400">&quot;BS in Information Technology&quot;</span>;
                  </div>
                  <div className="pl-4">
                    <span className="text-muted-foreground">specialization:</span>{" "}
                    <span className="text-emerald-500 dark:text-emerald-400">&quot;Full-Stack &amp; Web Systems&quot;</span>;
                  </div>
                  <div className="pl-4">
                    <span className="text-muted-foreground">status:</span>{" "}
                    <span className="text-amber-500">&quot;Available for Full-time / Junior Roles&quot;</span>;
                  </div>
                  <div className="pl-4">
                    <span className="text-muted-foreground">academicCapstone:</span>{" "}
                    <span className="text-emerald-500 dark:text-emerald-400">&quot;IM-PARDS Assistance Dispatch System&quot;</span>;
                  </div>
                  <div className="pl-4">
                    <span className="text-muted-foreground">workingStyle:</span> [
                    <span className="text-cyan-400">&quot;Clean Architecture&quot;</span>,{" "}
                    <span className="text-cyan-400">&quot;Accessible UI&quot;</span>,{" "}
                    <span className="text-cyan-400">&quot;Type Safe&quot;</span>];
                  </div>
                  <div>{"}"}</div>
                </div>
              )}

              {/* Tab Content 2: Core Stack Matrix */}
              {activeTab === "stack" && (
                <div className="p-4 sm:p-5 space-y-3 font-mono text-xs">
                  <div className="flex items-center justify-between text-muted-foreground text-[11px] pb-1 border-b border-border">
                    <span>LAYER</span>
                    <span>PRIMARY TECHNOLOGIES</span>
                  </div>

                  <div className="flex items-start justify-between">
                    <span className="text-brand-600 dark:text-brand-400 font-semibold">Frontend:</span>
                    <div className="flex flex-wrap gap-1.5 justify-end">
                      <span className="px-2 py-0.5 rounded bg-muted text-foreground">Next.js 14</span>
                      <span className="px-2 py-0.5 rounded bg-muted text-foreground">TypeScript</span>
                      <span className="px-2 py-0.5 rounded bg-muted text-foreground">Tailwind CSS</span>
                    </div>
                  </div>

                  <div className="flex items-start justify-between">
                    <span className="text-cyan-600 dark:text-cyan-400 font-semibold">Backend:</span>
                    <div className="flex flex-wrap gap-1.5 justify-end">
                      <span className="px-2 py-0.5 rounded bg-muted text-foreground">Node.js</span>
                      <span className="px-2 py-0.5 rounded bg-muted text-foreground">Express</span>
                      <span className="px-2 py-0.5 rounded bg-muted text-foreground">REST APIs</span>
                    </div>
                  </div>

                  <div className="flex items-start justify-between">
                    <span className="text-indigo-600 dark:text-indigo-400 font-semibold">Database:</span>
                    <div className="flex flex-wrap gap-1.5 justify-end">
                      <span className="px-2 py-0.5 rounded bg-muted text-foreground">MySQL</span>
                      <span className="px-2 py-0.5 rounded bg-muted text-foreground">PostgreSQL</span>
                      <span className="px-2 py-0.5 rounded bg-muted text-foreground">Prisma</span>
                    </div>
                  </div>

                  <div className="flex items-start justify-between">
                    <span className="text-amber-600 dark:text-amber-400 font-semibold">Tools:</span>
                    <div className="flex flex-wrap gap-1.5 justify-end">
                      <span className="px-2 py-0.5 rounded bg-muted text-foreground">Git</span>
                      <span className="px-2 py-0.5 rounded bg-muted text-foreground">GitHub</span>
                      <span className="px-2 py-0.5 rounded bg-muted text-foreground">VS Code</span>
                      <span className="px-2 py-0.5 rounded bg-muted text-foreground">Figma</span>
                    </div>
                  </div>
                </div>
              )}

              {/* Tab Content 3: Telemetry & Quality Standards */}
              {activeTab === "manifest" && (
                <div className="p-4 sm:p-5 space-y-3 font-mono text-xs">
                  <div className="space-y-2">
                    <div className="flex items-center justify-between p-2 rounded bg-muted/40">
                      <span className="text-muted-foreground flex items-center gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-brand-500" />
                        Static Vercel Deployment
                      </span>
                      <span className="text-brand-600 dark:text-brand-400 font-bold">100% Ready</span>
                    </div>
                    <div className="flex items-center justify-between p-2 rounded bg-muted/40">
                      <span className="text-muted-foreground flex items-center gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-brand-500" />
                        TypeScript Strict Mode
                      </span>
                      <span className="text-brand-600 dark:text-brand-400 font-bold">Passing</span>
                    </div>
                    <div className="flex items-center justify-between p-2 rounded bg-muted/40">
                      <span className="text-muted-foreground flex items-center gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-brand-500" />
                        Lighthouse Accessibility
                      </span>
                      <span className="text-brand-600 dark:text-brand-400 font-bold">98+ Score</span>
                    </div>
                  </div>

                  <div className="text-[11px] text-muted-foreground pt-1 text-center">
                    Engineered for zero layout shift &amp; instant navigation.
                  </div>
                </div>
              )}

              {/* Footer status row */}
              <div className="px-4 py-2.5 bg-muted/50 border-t border-border flex items-center justify-between text-[11px] font-mono text-muted-foreground">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-brand-500 inline-block" />
                  <span>Ready to collaborate</span>
                </div>
                <span>Ctrl + Click to inspect</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
