import * as React from "react";
import { educationData } from "@/data/education";
import {
  GraduationCap,
  Calendar,
  MapPin,
  Terminal,
  BookOpen,
  Award,
  CheckCircle2
} from "lucide-react";

export function Education() {
  return (
    <section id="education" className="py-20 lg:py-28 border-t border-border/60 relative bg-muted/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-2xl mb-12">
          <div className="section-label">
            <Terminal className="w-3.5 h-3.5 text-brand-500" />
            06 // Academic Background
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground font-sans">
            Formal Education &amp; Foundations
          </h2>
          <p className="text-base text-muted-foreground mt-2">
            Academic degree, software engineering coursework, and computer systems training.
          </p>
        </div>

        {/* Education Showcase Cards */}
        <div className="grid grid-cols-1 gap-8">
          {educationData.map((item) => (
            <div
              key={item.id}
              className="p-6 sm:p-10 rounded-2xl bg-card border border-border hover:border-primary/40 transition-all shadow-sm space-y-8 relative overflow-hidden"
            >
              <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-6 pb-6 border-b border-border">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary shrink-0">
                    <GraduationCap className="w-6 h-6 text-brand-500" />
                  </div>
                  <div>
                    <div className="text-xs font-mono text-brand-600 dark:text-brand-400 font-semibold uppercase tracking-wider">
                      {item.status}
                    </div>
                    <h3 className="text-2xl sm:text-3xl font-bold text-foreground font-sans mt-0.5">
                      {item.degree}
                    </h3>
                    <div className="text-base font-semibold text-muted-foreground mt-1">
                      {item.institution}
                    </div>
                    <div className="text-xs font-mono text-muted-foreground/80 mt-0.5">
                      {item.major}
                    </div>
                  </div>
                </div>

                <div className="flex flex-wrap lg:flex-col lg:items-end gap-2 text-xs font-mono text-muted-foreground">
                  <span className="flex items-center gap-1.5 px-3 py-1 rounded-md bg-muted text-foreground font-semibold">
                    <Calendar className="w-3.5 h-3.5 text-brand-500" />
                    {item.period}
                  </span>
                  <span className="flex items-center gap-1.5 px-2 py-0.5">
                    <MapPin className="w-3.5 h-3.5 text-muted-foreground" />
                    {item.location}
                  </span>
                </div>
              </div>

              {/* Highlights & Distinctions Grid */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                
                {/* Left: Highlights & Honors */}
                <div className="lg:col-span-5 space-y-4">
                  {item.distinctions && item.distinctions.length > 0 && (
                    <div className="p-4 rounded-xl bg-amber-500/5 dark:bg-amber-500/10 border border-amber-500/20 space-y-2">
                      <div className="text-xs font-mono font-bold uppercase tracking-wider text-amber-600 dark:text-amber-400 flex items-center gap-2">
                        <Award className="w-4 h-4" />
                        Academic Distinctions
                      </div>
                      <ul className="space-y-1.5 text-xs text-foreground/90 font-mono">
                        {item.distinctions.map((dist, dIdx) => (
                          <li key={dIdx} className="flex items-center gap-2">
                            <span className="text-amber-500">★</span>
                            <span>{dist}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  <div className="space-y-2">
                    <div className="text-xs font-mono font-bold uppercase tracking-wider text-foreground">
                      Program Highlights:
                    </div>
                    <div className="space-y-2">
                      {item.highlights.map((hl, hIdx) => (
                        <div key={hIdx} className="flex items-start gap-2 text-xs sm:text-sm text-muted-foreground">
                          <CheckCircle2 className="w-4 h-4 text-brand-500 shrink-0 mt-0.5" />
                          <span>{hl}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Right: Relevant Coursework */}
                <div className="lg:col-span-7 space-y-3">
                  <div className="text-xs font-mono font-bold uppercase tracking-wider text-foreground flex items-center gap-2">
                    <BookOpen className="w-4 h-4 text-cyan-500" />
                    Relevant Core Coursework &amp; Competencies:
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {item.coursework.map((course, cIdx) => (
                      <div
                        key={cIdx}
                        className="p-3 rounded-lg bg-muted/40 border border-border/60 text-xs font-mono text-foreground/90 flex items-center gap-2"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-brand-500 shrink-0" />
                        <span>{course}</span>
                      </div>
                    ))}
                  </div>
                </div>

              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
