"use client";

import * as React from "react";
import { experienceData } from "@/data/experience";
import { ScrollReveal } from "@/components/scroll-reveal";
import {
  Briefcase,
  Calendar,
  MapPin,
  Terminal,
  CheckCircle2,
  ChevronRight,
  Layers
} from "lucide-react";

export function Experience() {
  return (
    <section id="experience" className="py-20 lg:py-28 border-t border-border/60 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <ScrollReveal direction="up">
          <div className="max-w-2xl mb-12">
            <div className="section-label">
              <Terminal className="w-3.5 h-3.5 text-brand-500" />
              05 // Experience
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground font-sans">
              Internship Experience
            </h2>
            <p className="text-base text-muted-foreground mt-2">
              Practical on-the-job training (OJT) in hospital IT support, hardware maintenance, and systems deployment.
            </p>
          </div>
        </ScrollReveal>

        {/* Vertical Timeline */}
        <div className="space-y-8 relative before:absolute before:inset-0 before:left-3.5 md:before:left-5 before:w-0.5 before:bg-border">
          {experienceData.map((item, idx) => (
            <ScrollReveal
              key={item.id}
              direction="up"
              delay={idx * 150}
              className="relative flex items-start gap-4 md:gap-8 group"
            >
              {/* Timeline Node */}
              <div className="w-7 h-7 md:w-10 md:h-10 rounded-full bg-card border-2 border-primary/60 group-hover:border-primary flex items-center justify-center text-primary shrink-0 z-10 shadow-sm transition-colors mt-1">
                <Briefcase className="w-3.5 h-3.5 md:w-4 md:h-4 text-brand-500" />
              </div>

              {/* Experience Card */}
              <div className="flex-1 p-6 sm:p-8 rounded-2xl bg-card border border-border hover:border-border/90 transition-all shadow-sm space-y-5">
                
                {/* Header info */}
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 border-b border-border pb-4">
                  <div>
                    <div className="text-xs font-mono text-primary font-semibold uppercase tracking-wider">
                      {item.type}
                    </div>
                    <h3 className="text-xl sm:text-2xl font-bold text-foreground font-sans mt-0.5">
                      {item.position}
                    </h3>
                    <div className="text-sm font-semibold text-muted-foreground mt-0.5">
                      {item.company}
                    </div>
                  </div>

                  <div className="flex flex-col md:items-end gap-1 text-xs font-mono text-muted-foreground">
                    <span className="flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-muted">
                      <Calendar className="w-3.5 h-3.5 text-brand-500" />
                      {item.period}
                    </span>
                    <span className="flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-muted">
                      <MapPin className="w-3.5 h-3.5 text-cyan-500" />
                      {item.location}
                    </span>
                  </div>
                </div>

                {/* Narrative Description */}
                <p className="text-sm text-foreground/90 leading-relaxed font-sans">
                  {item.description}
                </p>

                {/* Responsibilities list */}
                <div className="space-y-2">
                  <div className="text-xs font-mono text-muted-foreground uppercase tracking-wider">
                    Core Duties &amp; Maintenance Tasks
                  </div>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-2.5">
                    {item.responsibilities.map((resp, i) => (
                      <li
                        key={i}
                        className="text-xs text-muted-foreground flex items-start gap-2 bg-muted/40 p-2.5 rounded-lg border border-border/50"
                      >
                        <CheckCircle2 className="w-3.5 h-3.5 text-brand-500 shrink-0 mt-0.5" />
                        <span className="leading-snug">{resp}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Key Contributions & Highlights */}
                {item.keyContributions && item.keyContributions.length > 0 && (
                  <div className="pt-2 border-t border-border space-y-2">
                    <div className="text-xs font-mono text-muted-foreground uppercase tracking-wider">
                      Key Highlights &amp; Accomplishments
                    </div>
                    <ul className="space-y-1.5">
                      {item.keyContributions.map((contrib, i) => (
                        <li key={i} className="text-xs text-foreground flex items-start gap-2">
                          <ChevronRight className="w-3.5 h-3.5 text-primary shrink-0 mt-0.5" />
                          <span>{contrib}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Applied Tools & Technologies */}
                <div className="pt-2 border-t border-border flex flex-wrap items-center gap-2">
                  <div className="text-xs font-mono text-muted-foreground mr-1 flex items-center gap-1">
                    <Layers className="w-3 h-3 text-cyan-500" />
                    Tools Applied:
                  </div>
                  {item.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="px-2.5 py-0.5 rounded-md bg-secondary text-secondary-foreground text-xs font-mono border border-border/80"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

              </div>
            </ScrollReveal>
          ))}
        </div>

      </div>
    </section>
  );
}
