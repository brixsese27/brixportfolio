import * as React from "react";
import { experienceData } from "@/data/experience";
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
        <div className="max-w-2xl mb-12">
          <div className="section-label">
            <Terminal className="w-3.5 h-3.5 text-brand-500" />
            05 // Experience &amp; Training
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground font-sans">
            Industry Internship &amp; Engineering Work
          </h2>
          <p className="text-base text-muted-foreground mt-2">
            Practical development background, on-the-job training (OJT), and team collaboration experience.
          </p>
        </div>

        {/* Vertical Timeline */}
        <div className="space-y-8 relative before:absolute before:inset-0 before:left-3.5 md:before:left-5 before:w-0.5 before:bg-border">
          {experienceData.map((item, idx) => (
            <div key={item.id} className="relative flex items-start gap-4 md:gap-8 group">
              
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
                    <span className="flex items-center gap-1.5 text-muted-foreground/80">
                      <MapPin className="w-3 h-3 text-muted-foreground" />
                      {item.location}
                    </span>
                  </div>
                </div>

                {/* Summary Description */}
                <p className="text-sm text-foreground/85 leading-relaxed">
                  {item.description}
                </p>

                {/* Responsibilities */}
                <div className="space-y-2">
                  <div className="text-xs font-mono font-bold uppercase tracking-wider text-foreground">
                    Key Responsibilities:
                  </div>
                  <div className="grid grid-cols-1 gap-2">
                    {item.responsibilities.map((resp, rIdx) => (
                      <div key={rIdx} className="flex items-start gap-2 text-xs sm:text-sm text-muted-foreground">
                        <ChevronRight className="w-4 h-4 text-brand-500 shrink-0 mt-0.5" />
                        <span>{resp}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Key Contributions & Achievements */}
                <div className="p-4 rounded-xl bg-muted/40 border border-border/60 space-y-2">
                  <div className="text-xs font-mono font-bold uppercase tracking-wider text-brand-600 dark:text-brand-400 flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-brand-500" />
                    Key Engineering Contributions:
                  </div>
                  <div className="space-y-1.5">
                    {item.keyContributions.map((contrib, cIdx) => (
                      <div key={cIdx} className="flex items-start gap-2 text-xs text-foreground/90 font-mono">
                        <span className="text-brand-500">✓</span>
                        <span>{contrib}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Technologies used */}
                <div className="flex flex-wrap items-center gap-1.5 pt-2">
                  <span className="text-xs font-mono text-muted-foreground mr-1">Tools Used:</span>
                  {item.technologies.map((t) => (
                    <span
                      key={t}
                      className="px-2 py-0.5 rounded bg-muted text-foreground text-[11px] font-mono border border-border/60"
                    >
                      {t}
                    </span>
                  ))}
                </div>

              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
