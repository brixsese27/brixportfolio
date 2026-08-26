"use client";

import * as React from "react";
import Image from "next/image";
import { capstoneData, capstoneTechStack } from "@/data/capstone";
import {
  Terminal,
  FileCheck,
  ShieldAlert,
  Send,
  FileText,
  ExternalLink,
  Layers,
  Database,
  Mail,
  Server,
  Code2,
  Globe,
  Radio
} from "lucide-react";

// Tech stack icon helper
function renderTechIcon(type: string) {
  switch (type) {
    case "js":
      return (
        <span className="w-7 h-7 rounded-lg bg-amber-400 text-zinc-950 font-mono font-bold flex items-center justify-center text-xs shrink-0 shadow-sm">
          JS
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
    case "mysql":
      return (
        <span className="w-7 h-7 rounded-lg bg-sky-600 text-white font-mono font-bold flex items-center justify-center text-xs shrink-0 shadow-sm">
          <Database className="w-4 h-4" />
        </span>
      );
    case "php":
      return (
        <span className="w-7 h-7 rounded-lg bg-indigo-600 text-white font-mono font-bold flex items-center justify-center text-xs shrink-0 shadow-sm">
          <Mail className="w-4 h-4" />
        </span>
      );
    case "hostinger":
      return (
        <span className="w-7 h-7 rounded-lg bg-purple-600 text-white font-mono font-bold flex items-center justify-center text-xs shrink-0 shadow-sm">
          <Server className="w-4 h-4" />
        </span>
      );
    case "sms":
      return (
        <span className="w-7 h-7 rounded-lg bg-emerald-600 text-white font-mono font-bold flex items-center justify-center text-xs shrink-0 shadow-sm">
          <Radio className="w-4 h-4" />
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

export function Capstone() {
  return (
    <section id="capstone" className="py-20 lg:py-28 border-t border-border/60 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Label & Clean Header */}
        <div className="max-w-3xl mb-10">
          <div className="section-label">
            <Terminal className="w-3.5 h-3.5 text-brand-500" />
            04 // Capstone Project
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-foreground font-sans">
            e-Biga Management Information System
          </h2>
          <p className="text-base text-muted-foreground mt-2 leading-relaxed">
            A web-based Management Information System for Barangay Biga, Tanza, Cavite that digitizes resident records, streamlines document processing, and delivers automated SMS notifications.
          </p>
        </div>

        {/* Capstone Showcase Container */}
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

              {/* Address bar with live link */}
              <a
                href="https://ebigatanza.com/homepage"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-1.5 rounded-lg bg-background border border-border text-foreground hover:text-primary transition-colors text-xs font-mono max-w-md truncate shadow-sm"
                title="Open live website in new tab"
              >
                <Globe className="w-3.5 h-3.5 text-brand-500" />
                <span className="truncate">https://ebigatanza.com/homepage</span>
                <ExternalLink className="w-3.5 h-3.5 text-muted-foreground shrink-0 ml-1" />
              </a>

              <a
                href="https://ebigatanza.com/homepage"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-600 dark:text-emerald-400 font-bold text-[11px] transition-colors"
              >
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                Visit Live Site ↗
              </a>
            </div>

            {/* Visual Screenshot of System */}
            <div className="relative w-full aspect-[16/10] sm:aspect-video rounded-b-2xl overflow-hidden bg-muted/20">
              <Image
                src={capstoneData.image}
                alt="e-Biga Management Information System Live UI Preview"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-102"
                sizes="(max-width: 1200px) 100vw, 1200px"
                priority
              />

              {/* Floating Quick Action Button */}
              <div className="absolute bottom-4 right-4 z-10">
                <a
                  href="https://ebigatanza.com/homepage"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-zinc-950 hover:bg-zinc-850 text-white font-mono text-xs font-bold transition-all shadow-2xl hover:shadow-emerald-500/10 hover:-translate-y-0.5 border border-zinc-800"
                >
                  <ExternalLink className="w-3.5 h-3.5 text-emerald-400" />
                  Open Live Website (ebigatanza.com)
                </a>
              </div>
            </div>

          </div>

          {/* Core System Capabilities */}
          <div className="space-y-4">
            <h3 className="text-sm font-mono uppercase tracking-wider text-foreground font-semibold flex items-center gap-2">
              <Terminal className="w-4 h-4 text-brand-500" />
              System Modules &amp; Capabilities
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {capstoneData.majorFeatures.map((feat, idx) => (
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
                Technologies &amp; Services Used
              </span>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
              {capstoneTechStack.map((tech) => (
                <div
                  key={tech.name}
                  className="flex items-center gap-3 p-3 rounded-xl bg-muted/40 hover:bg-muted/70 border border-border/80 transition-all shadow-sm group"
                >
                  {renderTechIcon(tech.iconType)}
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
