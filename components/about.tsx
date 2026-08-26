"use client";

import * as React from "react";
import Image from "next/image";
import { profileData } from "@/data/profile";
import { ScrollReveal } from "@/components/scroll-reveal";
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
        <ScrollReveal direction="up">
          <div className="max-w-2xl mb-12">
            <div className="section-label">
              <Terminal className="w-3.5 h-3.5 text-brand-500" />
              01 // About Me
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground font-sans">
              Committed to reliable IT support &amp; technical service.
            </h2>
          </div>
        </ScrollReveal>

        {/* Two-Column Editorial Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          
          {/* Left Column: Narrative & Principles */}
          <ScrollReveal direction="up" delay={100} className="lg:col-span-7 space-y-6">
            <div className="space-y-4 text-base sm:text-lg text-muted-foreground leading-relaxed">
              {profileData.bioParagraphs.map((paragraph, idx) => (
                <p key={idx} className="text-foreground/80">
                  {paragraph}
                </p>
              ))}
            </div>

            {/* Guiding Principles Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
              {profileData.principles.map((principle, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-xl border border-border bg-card/60 hover:bg-card hover:border-primary/40 transition-all duration-200 shadow-sm"
                >
                  <div className="w-2 h-2 rounded-full bg-brand-500 mb-2.5" />
                  <div className="font-mono text-xs font-bold text-foreground mb-1">
                    {principle.title}
                  </div>
                  <div className="text-xs text-muted-foreground leading-relaxed">
                    {principle.description}
                  </div>
                </div>
              ))}
            </div>

            {/* Location and Education Badge Row */}
            <div className="flex flex-wrap items-center gap-3 pt-2 text-xs font-mono text-muted-foreground">
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-muted/60 border border-border">
                <MapPin className="w-3.5 h-3.5 text-brand-500" />
                <span>{profileData.location}</span>
              </div>
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-muted/60 border border-border">
                <Building className="w-3.5 h-3.5 text-cyan-500" />
                <span>Gentri Doctors Hospital OJT</span>
              </div>
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-muted/60 border border-border">
                <GraduationCap className="w-3.5 h-3.5 text-indigo-500" />
                <span>Cavite State University</span>
              </div>
            </div>
          </ScrollReveal>

          {/* Right Column: Developer Profile Specification Card */}
          <ScrollReveal direction="up" delay={200} className="lg:col-span-5 w-full">
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
                    <div className="text-[10px] text-muted-foreground uppercase tracking-wider">
                      Academic Degree
                    </div>
                    <div className="font-semibold text-foreground">
                      {profileData.degree}
                    </div>
                    <div className="text-[11px] text-muted-foreground">
                      Cavite State University - Trece Martires
                    </div>
                  </div>
                </div>

                {/* Practical OJT */}
                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-muted text-muted-foreground mt-0.5">
                    <Building className="w-4 h-4 text-cyan-500" />
                  </div>
                  <div>
                    <div className="text-[10px] text-muted-foreground uppercase tracking-wider">
                      Internship Experience
                    </div>
                    <div className="font-semibold text-foreground">
                      Gentri Doctors (Hospital IT Dept)
                    </div>
                    <div className="text-[11px] text-muted-foreground">
                      486 Hours Technical Support
                    </div>
                  </div>
                </div>

                {/* Core Field Focus */}
                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-muted text-muted-foreground mt-0.5">
                    <Wrench className="w-4 h-4 text-indigo-500" />
                  </div>
                  <div>
                    <div className="text-[10px] text-muted-foreground uppercase tracking-wider">
                      Primary Focus
                    </div>
                    <div className="font-semibold text-foreground">
                      {profileData.field}
                    </div>
                  </div>
                </div>

                {/* Location */}
                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-muted text-muted-foreground mt-0.5">
                    <MapPin className="w-4 h-4 text-rose-500" />
                  </div>
                  <div>
                    <div className="text-[10px] text-muted-foreground uppercase tracking-wider">
                      Location
                    </div>
                    <div className="font-semibold text-foreground">
                      {profileData.location}
                    </div>
                  </div>
                </div>

                {/* Direct Contact Row */}
                <div className="grid grid-cols-2 gap-2 pt-2">
                  <a
                    href={`mailto:${profileData.email}`}
                    className="p-2 rounded-lg bg-muted/60 hover:bg-muted border border-border flex items-center gap-2 text-foreground transition-colors"
                  >
                    <Mail className="w-3.5 h-3.5 text-brand-500" />
                    <span className="truncate text-[11px]">Email Me</span>
                  </a>
                  <a
                    href={`tel:${profileData.phone}`}
                    className="p-2 rounded-lg bg-muted/60 hover:bg-muted border border-border flex items-center gap-2 text-foreground transition-colors"
                  >
                    <Phone className="w-3.5 h-3.5 text-cyan-500" />
                    <span className="truncate text-[11px]">Call Phone</span>
                  </a>
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
          </ScrollReveal>

        </div>
      </div>
    </section>
  );
}
