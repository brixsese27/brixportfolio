import * as React from "react";
import Image from "next/image";
import { profileData } from "@/data/profile";
import {
  GraduationCap,
  MapPin,
  Briefcase,
  Layers,
  Sparkles,
  Phone,
  Mail,
  Terminal,
  Wrench,
  Server,
  Building
} from "lucide-react";

export function About() {
  return (
    <section id="about" className="py-20 lg:py-28 border-t border-border/60 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-2xl mb-12">
          <div className="section-label">
            <Terminal className="w-3.5 h-3.5 text-brand-500" />
            01 // About Me
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground font-sans">
            Committed to reliable IT support &amp; technical service.
          </h2>
        </div>

        {/* Two-Column Editorial Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          
          {/* Left Column: Narrative & Principles */}
          <div className="lg:col-span-7 space-y-6">
            <div className="space-y-4 text-base sm:text-lg text-muted-foreground leading-relaxed">
              {profileData.bioParagraphs.map((paragraph, idx) => (
                <p key={idx} className="text-foreground/85">
                  {paragraph}
                </p>
              ))}
            </div>

            {/* Core Working Principles */}
            <div className="pt-6 space-y-4">
              <h3 className="text-sm font-mono uppercase tracking-wider text-brand-600 dark:text-brand-400 font-semibold flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-brand-500" />
                Work Philosophy &amp; Principles
              </h3>
              
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {profileData.principles.map((item, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-xl bg-card border border-border hover:border-primary/40 transition-colors shadow-sm"
                  >
                    <div className="font-mono text-xs font-bold text-foreground mb-1 flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-brand-500" />
                      {item.title}
                    </div>
                    <p className="text-xs text-muted-foreground leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Developer Profile Specification Card */}
          <div className="lg:col-span-5 w-full">
            <div className="rounded-2xl border border-border bg-card shadow-lg p-6 sm:p-7 space-y-6 relative overflow-hidden">
              
              {/* Subtle accent bar at top */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-brand-500 via-cyan-500 to-indigo-500" />

              <div className="flex items-center justify-between border-b border-border pb-4 gap-3">
                <div className="flex items-center gap-3.5">
                  <div className="w-14 h-14 rounded-xl border-2 border-primary/40 bg-muted overflow-hidden shrink-0 shadow-sm">
                    <Image
                      src="/2x2.jpg"
                      alt="Brix Sese 2x2 Photo"
                      width={56}
                      height={56}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <div className="text-xs font-mono text-muted-foreground uppercase tracking-widest">
                      IT Candidate Profile
                    </div>
                    <div className="text-lg font-bold text-foreground font-sans mt-0.5">
                      {profileData.name}
                    </div>
                  </div>
                </div>
                <div className="w-10 h-10 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary font-mono font-bold text-sm shrink-0">
                  BSIT
                </div>
              </div>

              {/* Specification Attributes */}
              <div className="space-y-3.5 font-mono text-xs">
                
                {/* Degree & School */}
                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-muted text-muted-foreground mt-0.5">
                    <GraduationCap className="w-4 h-4 text-brand-500" />
                  </div>
                  <div>
                    <div className="text-muted-foreground text-[11px] uppercase">Education</div>
                    <div className="text-foreground font-semibold text-xs leading-snug">
                      {profileData.degree}
                    </div>
                    <div className="text-muted-foreground text-[11px]">
                      Cavite State University - Trece Martires
                    </div>
                  </div>
                </div>

                {/* Focus */}
                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-muted text-muted-foreground mt-0.5">
                    <Wrench className="w-4 h-4 text-cyan-500" />
                  </div>
                  <div>
                    <div className="text-muted-foreground text-[11px] uppercase">Core Specialization</div>
                    <div className="text-foreground font-semibold text-xs leading-snug">
                      {profileData.field}
                    </div>
                  </div>
                </div>

                {/* Internship */}
                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-muted text-muted-foreground mt-0.5">
                    <Building className="w-4 h-4 text-indigo-500" />
                  </div>
                  <div>
                    <div className="text-muted-foreground text-[11px] uppercase">Hospital Internship (486 hrs)</div>
                    <div className="text-foreground font-semibold text-xs leading-snug">
                      Gentri Doctors (Hospital IT Dept)
                    </div>
                  </div>
                </div>

                {/* Location */}
                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-muted text-muted-foreground mt-0.5">
                    <MapPin className="w-4 h-4 text-rose-500" />
                  </div>
                  <div>
                    <div className="text-muted-foreground text-[11px] uppercase">Location</div>
                    <div className="text-foreground font-semibold text-xs leading-snug">
                      {profileData.location}
                    </div>
                  </div>
                </div>

                {/* Professional Status */}
                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-muted text-muted-foreground mt-0.5">
                    <Briefcase className="w-4 h-4 text-amber-500" />
                  </div>
                  <div>
                    <div className="text-muted-foreground text-[11px] uppercase">Availability</div>
                    <div className="text-brand-600 dark:text-brand-400 font-semibold text-xs leading-snug flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-brand-500 animate-pulse" />
                      {profileData.status}
                    </div>
                  </div>
                </div>

              </div>

              {/* Focus Areas Badges */}
              <div className="pt-4 border-t border-border space-y-2">
                <div className="text-[11px] font-mono text-muted-foreground uppercase tracking-wider">
                  Key Competencies
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {profileData.focusAreas.map((focus, idx) => (
                    <span
                      key={idx}
                      className="px-2.5 py-1 rounded-md bg-muted text-foreground text-[11px] font-mono border border-border/80"
                    >
                      {focus}
                    </span>
                  ))}
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
