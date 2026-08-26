"use client";

import * as React from "react";
import Image from "next/image";
import { capstoneData } from "@/data/capstone";
import {
  Terminal,
  ShieldAlert,
  FileCheck,
  Activity,
  BarChart3,
  Github,
  ExternalLink,
  Layers,
  Sparkles,
  CheckCircle2,
  AlertTriangle,
  Award,
  ChevronRight
} from "lucide-react";

export function Capstone() {
  return (
    <section id="capstone" className="py-20 lg:py-28 border-t border-border/60 relative bg-brand-950/20 dark:bg-brand-950/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Label & Header */}
        <div className="max-w-3xl mb-12">
          <div className="section-label">
            <Award className="w-4 h-4 text-brand-500" />
            04 // Academic Capstone Showcase
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-foreground font-sans">
            Flagship Engineering Project
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground mt-3 leading-relaxed">
            The most complete, multi-tiered enterprise software system built during my academic degree in Information Technology.
          </p>
        </div>

        {/* Featured Flagship Case Study Container */}
        <div className="rounded-3xl border-2 border-brand-500/40 bg-card shadow-2xl overflow-hidden relative">
          
          {/* Top Banner Tag */}
          <div className="px-6 py-3 bg-brand-500/10 dark:bg-brand-500/15 border-b border-brand-500/20 flex flex-wrap items-center justify-between gap-3">
            <div className="flex items-center gap-2 text-xs font-mono font-bold text-brand-600 dark:text-brand-400">
              <span className="w-2 h-2 rounded-full bg-brand-500 animate-pulse" />
              {capstoneData.badge}
            </div>
            <div className="text-[11px] font-mono text-muted-foreground">
              Code Name: <span className="text-foreground font-semibold">{capstoneData.codeName}</span>
            </div>
          </div>

          <div className="p-6 sm:p-10 space-y-10">
            
            {/* Title & High Level Overview */}
            <div className="space-y-4 max-w-4xl">
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground font-sans">
                {capstoneData.title}
              </h3>
              <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
                {capstoneData.overview}
              </p>
            </div>

            {/* Visual Screenshot of System */}
            <div className="relative w-full aspect-video rounded-2xl overflow-hidden border border-border bg-muted/40 shadow-inner">
              <Image
                src={capstoneData.image}
                alt={`${capstoneData.title} Dashboard Overview`}
                fill
                className="object-contain p-2"
                sizes="(max-width: 1200px) 100vw, 1200px"
                priority
              />
            </div>

            {/* Problem & Solution Breakdown */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-6 rounded-2xl bg-muted/40 border border-border space-y-3">
                <div className="text-xs font-mono font-bold uppercase tracking-wider text-rose-500 dark:text-rose-400 flex items-center gap-2">
                  <ShieldAlert className="w-4 h-4" />
                  The Problem &amp; Bottleneck
                </div>
                <p className="text-sm text-foreground/85 leading-relaxed">
                  {capstoneData.problem}
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-brand-500/10 dark:bg-brand-500/15 border border-brand-500/30 space-y-3">
                <div className="text-xs font-mono font-bold uppercase tracking-wider text-brand-600 dark:text-brand-400 flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-brand-500" />
                  The Architectural Solution
                </div>
                <p className="text-sm text-foreground/85 leading-relaxed">
                  {capstoneData.solution}
                </p>
              </div>
            </div>

            {/* Major Features Grid */}
            <div className="space-y-4">
              <h4 className="text-sm font-mono uppercase tracking-wider text-foreground font-semibold flex items-center gap-2">
                <Terminal className="w-4 h-4 text-brand-500" />
                Core System Modules &amp; Capabilities
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {capstoneData.majorFeatures.map((feat, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-xl bg-card border border-border hover:border-brand-500/40 transition-colors shadow-sm space-y-2"
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

            {/* Technical Highlights & Contributions Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              
              {/* Left: Brix's Contributions & Role */}
              <div className="lg:col-span-7 space-y-4 p-6 rounded-2xl bg-card border border-border shadow-sm">
                <div className="text-xs font-mono font-bold uppercase tracking-wider text-primary flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-brand-500" />
                  My Contributions as Lead Full-Stack Developer
                </div>
                <p className="text-xs sm:text-sm text-muted-foreground font-mono leading-relaxed pb-2 border-b border-border">
                  {capstoneData.myRole}
                </p>
                <div className="space-y-2.5">
                  {capstoneData.contributions.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs text-foreground/90 font-mono">
                      <ChevronRight className="w-4 h-4 text-brand-500 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right: Technical Challenges Resolved */}
              <div className="lg:col-span-5 space-y-4 p-6 rounded-2xl bg-card border border-border shadow-sm">
                <div className="text-xs font-mono font-bold uppercase tracking-wider text-amber-600 dark:text-amber-400 flex items-center gap-2">
                  <AlertTriangle className="w-4 h-4" />
                  Engineering Challenges &amp; Resolution
                </div>
                <div className="space-y-3">
                  {capstoneData.challenges.map((c, idx) => (
                    <div key={idx} className="p-3 rounded-lg bg-muted/40 border border-border/60 space-y-1.5">
                      <div className="text-xs font-mono font-bold text-foreground">
                        Challenge: {c.challenge}
                      </div>
                      <div className="text-xs text-muted-foreground leading-relaxed">
                        <span className="text-brand-600 dark:text-brand-400 font-semibold font-mono">Solution:</span> {c.resolution}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

            </div>

            {/* Tech Stack & Links Footer */}
            <div className="pt-6 border-t border-border flex flex-col md:flex-row md:items-center justify-between gap-6">
              <div className="flex flex-wrap items-center gap-2">
                <span className="text-xs font-mono text-muted-foreground mr-1">Technologies:</span>
                {capstoneData.technologies.map((t) => (
                  <span
                    key={t}
                    className="px-2.5 py-1 rounded bg-muted text-foreground text-xs font-mono border border-border"
                  >
                    {t}
                  </span>
                ))}
              </div>

              <div className="flex items-center gap-3">
                <a
                  href={capstoneData.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-card border border-border hover:bg-muted font-mono text-xs font-semibold text-foreground transition-all shadow-sm"
                >
                  <Github className="w-4 h-4" />
                  Inspect Repository
                </a>
                {capstoneData.liveUrl && (
                  <a
                    href={capstoneData.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-primary hover:bg-primary/90 text-primary-foreground font-mono text-xs font-semibold transition-all shadow-md"
                  >
                    <ExternalLink className="w-4 h-4" />
                    Launch Prototype
                  </a>
                )}
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
