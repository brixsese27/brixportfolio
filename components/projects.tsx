"use client";

import * as React from "react";
import Image from "next/image";
import { staticCultureProject, staticCultureTechStack } from "@/data/projects";
import {
  Terminal,
  ShoppingBag,
  ExternalLink,
  Layers,
  Code2,
  Globe,
  Sparkles,
  Smartphone,
  Tag,
  Grid,
  Database,
  Github,
  Mail
} from "lucide-react";

// Tech stack icon helper matching Capstone design
function renderProjectTechIcon(type: string) {
  switch (type) {
    case "php":
      return (
        <span className="w-7 h-7 rounded-lg bg-indigo-600 text-white font-mono font-bold flex items-center justify-center text-xs shrink-0 shadow-sm">
          PHP
        </span>
      );
    case "html":
      return (
        <span className="w-7 h-7 rounded-lg bg-orange-500 text-white font-mono font-bold flex items-center justify-center text-xs shrink-0 shadow-sm">
          {"<5>"}
        </span>
      );
    case "css":
      return (
        <span className="w-7 h-7 rounded-lg bg-blue-500 text-white font-mono font-bold flex items-center justify-center text-xs shrink-0 shadow-sm">
          #3
        </span>
      );
    case "js":
      return (
        <span className="w-7 h-7 rounded-lg bg-amber-400 text-zinc-950 font-mono font-bold flex items-center justify-center text-xs shrink-0 shadow-sm">
          JS
        </span>
      );
    case "mysql":
      return (
        <span className="w-7 h-7 rounded-lg bg-sky-600 text-white font-mono font-bold flex items-center justify-center text-xs shrink-0 shadow-sm">
          <Database className="w-4 h-4" />
        </span>
      );
    case "vercel":
      return (
        <span className="w-7 h-7 rounded-lg bg-zinc-900 text-white font-mono font-bold flex items-center justify-center text-xs shrink-0 shadow-sm">
          ▲
        </span>
      );
    case "github":
      return (
        <span className="w-7 h-7 rounded-lg bg-zinc-800 text-white font-mono font-bold flex items-center justify-center text-xs shrink-0 shadow-sm">
          <Github className="w-4 h-4" />
        </span>
      );
    default:
      return (
        <span className="w-7 h-7 rounded-lg bg-zinc-700 text-white font-mono font-bold flex items-center justify-center text-xs shrink-0 shadow-sm">
          <Code2 className="w-4 h-4" />
        </span>
      );
  }
}

const staticCultureFeatures = [
  {
    title: "Lifestyle & Apparel Showcase",
    description:
      "Modern digital storefront presenting apparel drops, lookbooks, and high-resolution lifestyle imagery.",
  },
  {
    title: "Collection & Item Filtering",
    description:
      "Intuitive category filtering for tees, hoodies, outerwear, and streetwear accessories.",
  },
  {
    title: "Product Sizing & Pricing Details",
    description:
      "Clean product cards with pricing structure, fabric specifications, and size guidance.",
  },
  {
    title: "Mobile-First Touch Architecture",
    description:
      "Smooth touch navigation, zero layout shift, and instant static page delivery on mobile devices.",
  },
];

export function Projects() {
  return (
    <section id="projects" className="py-20 lg:py-28 border-t border-border/60 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Label & Clean Header */}
        <div className="max-w-3xl mb-10">
          <div className="section-label">
            <Terminal className="w-3.5 h-3.5 text-brand-500" />
            03 // Featured Project
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-foreground font-sans">
            Static Culture (e-Commerce Storefront)
          </h2>
          <p className="text-base text-muted-foreground mt-2 leading-relaxed">
            A responsive digital storefront for a contemporary clothing and lifestyle brand showcasing collections, pricing, and product details.
          </p>
        </div>

        {/* Project Showcase Container */}
        <div className="rounded-3xl border border-border bg-card shadow-xl overflow-hidden relative space-y-8 p-6 sm:p-10">
          
          {/* Top Live Website Browser Window with High-Fidelity UI Mockup & Direct Link */}
          <div className="rounded-2xl border border-border bg-muted/40 overflow-hidden shadow-lg group">
            
            {/* Window Top Bar */}
            <div className="flex items-center justify-between px-4 py-3 bg-muted/90 border-b border-border text-xs font-mono">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-rose-500/80 inline-block" />
                <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block" />
                <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block" />
              </div>

              {/* Address bar with project title */}
              <div className="flex items-center gap-2 px-4 py-1.5 rounded-lg bg-background border border-border text-foreground text-xs font-mono max-w-md truncate shadow-sm">
                <Globe className="w-3.5 h-3.5 text-brand-500" />
                <span className="truncate">static-culture-storefront.local</span>
              </div>

              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-brand-500/10 text-brand-600 dark:text-brand-400 font-bold text-[11px]">
                <span className="w-2 h-2 rounded-full bg-brand-500 animate-pulse" />
                Personal Project
              </div>
            </div>

            {/* Visual Screenshot of System */}
            <div className="relative w-full aspect-[16/10] sm:aspect-video rounded-b-2xl overflow-hidden bg-muted/20">
              <Image
                src={staticCultureProject.image}
                alt="Static Culture e-Commerce Storefront Live UI Preview"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-102"
                sizes="(max-width: 1200px) 100vw, 1200px"
                priority
              />

              {/* Floating Quick Action Badge */}
              <div className="absolute bottom-4 right-4 z-10">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-zinc-950/90 backdrop-blur-md text-white font-mono text-xs font-bold shadow-2xl border border-zinc-800">
                  <ShoppingBag className="w-3.5 h-3.5 text-brand-400" />
                  Apparel &amp; Lifestyle Storefront
                </div>
              </div>
            </div>

          </div>

          {/* Core System Capabilities */}
          <div className="space-y-4">
            <h3 className="text-sm font-mono uppercase tracking-wider text-foreground font-semibold flex items-center gap-2">
              <Terminal className="w-4 h-4 text-brand-500" />
              System Modules &amp; Capabilities
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {staticCultureFeatures.map((feat, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-xl bg-card border border-border hover:border-primary/40 transition-colors shadow-sm space-y-2"
                >
                  <div className="text-xs font-mono font-bold text-foreground flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-500" />
                    {feat.title}
                  </div>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    {feat.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Tech Stack List with Custom Logos */}
          <div className="pt-6 border-t border-border space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="text-sm font-mono uppercase tracking-wider text-foreground font-semibold flex items-center gap-2">
                <Layers className="w-4 h-4 text-cyan-500" />
                Tech Stack
              </h3>
              <span className="text-xs font-mono text-muted-foreground">
                Technologies &amp; Tools Used
              </span>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
              {staticCultureTechStack.map((tech) => (
                <div
                  key={tech.name}
                  className="flex items-center gap-3 p-3 rounded-xl bg-muted/40 hover:bg-muted/70 border border-border/80 transition-all shadow-sm group"
                >
                  {renderProjectTechIcon(tech.iconType)}
                  <div>
                    <div className="text-xs font-mono font-bold text-foreground group-hover:text-primary transition-colors">
                      {tech.name}
                    </div>
                    <div className="text-[10px] font-mono text-muted-foreground">
                      {tech.category}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
