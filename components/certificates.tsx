"use client";

import * as React from "react";
import Image from "next/image";
import { certificatesData } from "@/data/certificates";
import { CertificateItem } from "@/types";
import { ScrollReveal } from "@/components/scroll-reveal";
import {
  Award,
  Calendar,
  ExternalLink,
  CheckCircle2,
  Terminal,
  ShieldCheck,
  Maximize2,
  X,
  Sparkles,
  Download,
  BadgeCheck,
  ChevronLeft,
  ChevronRight,
  ZoomIn,
  ZoomOut
} from "lucide-react";
import { cn } from "@/lib/utils";

export function Certificates() {
  const [selectedCertIndex, setSelectedCertIndex] = React.useState<number | null>(null);
  const [isZoomed, setIsZoomed] = React.useState<boolean>(false);

  const selectedCert = selectedCertIndex !== null ? certificatesData[selectedCertIndex] : null;

  const handleOpenCert = (index: number) => {
    setSelectedCertIndex(index);
    setIsZoomed(false);
  };

  const handleClose = () => {
    setSelectedCertIndex(null);
    setIsZoomed(false);
  };

  const handlePrev = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    setIsZoomed(false);
    setSelectedCertIndex((prev) =>
      prev !== null ? (prev === 0 ? certificatesData.length - 1 : prev - 1) : 0
    );
  };

  const handleNext = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    setIsZoomed(false);
    setSelectedCertIndex((prev) =>
      prev !== null ? (prev === certificatesData.length - 1 ? 0 : prev + 1) : 0
    );
  };

  // Keyboard navigation (Esc to close, Arrow keys to navigate)
  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") handleClose();
      if (e.key === "ArrowLeft") handlePrev();
      if (e.key === "ArrowRight") handleNext();
    };

    if (selectedCertIndex !== null) {
      window.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "unset";
    };
  }, [selectedCertIndex]);

  return (
    <section id="certificates" className="py-20 lg:py-28 border-t border-border/60 relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-brand-500/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <ScrollReveal direction="up">
          <div className="max-w-2xl mb-12">
            <div className="section-label">
              <Terminal className="w-3.5 h-3.5 text-brand-500" />
              07 // Certifications &amp; Credentials
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground font-sans">
              Professional Certifications &amp; Training
            </h2>
            <p className="text-base text-muted-foreground mt-2 leading-relaxed">
              Industry-recognized credentials and accredited coursework validating practical IT support troubleshooting, computer hardware, and digital communication proficiencies.
            </p>
          </div>
        </ScrollReveal>

        {/* Certificates Showcase Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {certificatesData.map((cert, idx) => (
            <ScrollReveal
              key={cert.id}
              direction="up"
              delay={idx * 150}
              className="rounded-3xl border border-border/80 bg-card shadow-lg hover:shadow-2xl hover:shadow-brand-500/10 hover:border-primary/50 hover:-translate-y-1.5 transition-all duration-300 overflow-hidden flex flex-col justify-between group"
            >
              <div>
                {/* Card Top Bar */}
                <div className="p-5 sm:p-6 border-b border-border/70 bg-muted/30 flex flex-wrap items-center justify-between gap-3">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary font-mono text-xs font-semibold shadow-sm border border-primary/20">
                    <ShieldCheck className="w-3.5 h-3.5 text-brand-500" />
                    <span>{cert.badgeText}</span>
                  </div>

                  <div className="flex items-center gap-1.5 text-xs font-mono text-muted-foreground">
                    <Calendar className="w-3.5 h-3.5 text-brand-500" />
                    <span>{cert.date}</span>
                  </div>
                </div>

                {/* Certificate Interactive Preview Window */}
                <div
                  onClick={() => handleOpenCert(idx)}
                  className="relative aspect-[16/11] w-full bg-zinc-950/[0.03] dark:bg-zinc-950/60 overflow-hidden cursor-pointer group/img border-b border-border/70 flex items-center justify-center p-3 sm:p-5"
                >
                  <div className="relative w-full h-full rounded-xl overflow-hidden shadow-md border border-border/60 bg-white">
                    <Image
                      src={cert.image}
                      alt={`${cert.title} Certificate`}
                      fill
                      className="object-contain transition-transform duration-500 group-hover/img:scale-105"
                      sizes="(max-width: 1024px) 100vw, 600px"
                    />
                  </div>
                  
                  {/* Floating Click-to-Zoom Hover Action Badge */}
                  <div className="absolute inset-0 bg-zinc-950/40 opacity-0 group-hover/img:opacity-100 transition-all duration-300 flex items-center justify-center backdrop-blur-[2px]">
                    <span className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-background/95 text-foreground font-mono text-xs font-bold shadow-2xl border border-border transform group-hover/img:scale-105 transition-transform duration-200">
                      <Maximize2 className="w-4 h-4 text-brand-500" />
                      View Full Certificate
                    </span>
                  </div>
                </div>

                {/* Certificate Details */}
                <div className="p-6 sm:p-7 space-y-4">
                  <div>
                    <div className="text-xs font-mono text-brand-600 dark:text-brand-400 font-semibold uppercase tracking-wider">
                      {cert.category}
                    </div>
                    <h3 className="text-xl sm:text-2xl font-bold text-foreground font-sans mt-1 group-hover:text-primary transition-colors">
                      {cert.title}
                    </h3>
                    <div className="text-sm font-semibold text-muted-foreground mt-0.5">
                      Issued by {cert.issuer} {cert.organization ? `• ${cert.organization}` : ""}
                    </div>
                  </div>

                  <p className="text-xs sm:text-sm text-foreground/80 leading-relaxed font-sans">
                    {cert.description}
                  </p>

                  {/* Skills / Covered Topics */}
                  <div className="space-y-2 pt-1">
                    <div className="text-[11px] font-mono text-muted-foreground uppercase tracking-wider">
                      Competencies Covered
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {cert.skills.map((skill, sIdx) => (
                        <span
                          key={sIdx}
                          className="px-2.5 py-1 rounded-md bg-muted text-foreground text-[11px] font-mono border border-border/80 group-hover:border-primary/20 transition-colors"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Bottom Actions Row */}
              <div className="p-5 sm:p-6 border-t border-border/70 bg-muted/20 flex flex-wrap items-center justify-between gap-3 text-xs font-mono">
                {cert.credentialId && (
                  <div className="text-muted-foreground">
                    <span className="text-[10px] uppercase block text-muted-foreground/80">Credential ID</span>
                    <span className="font-semibold text-foreground select-all">{cert.credentialId}</span>
                  </div>
                )}

                <div className="flex items-center gap-2 ml-auto">
                  <button
                    type="button"
                    onClick={() => handleOpenCert(idx)}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-border bg-card hover:bg-muted text-foreground transition-all font-medium cursor-pointer shadow-sm hover:scale-102"
                  >
                    <Maximize2 className="w-3.5 h-3.5 text-brand-500" />
                    Preview
                  </button>

                  {cert.verifyUrl && (
                    <a
                      href={cert.verifyUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-primary text-primary-foreground font-semibold hover:bg-primary/90 transition-all shadow-sm hover:scale-102"
                    >
                      <BadgeCheck className="w-3.5 h-3.5" />
                      Verify Online ↗
                    </a>
                  )}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

      </div>

      {/* Lightbox Modal with Smooth Animations & Navigation Controls */}
      {selectedCert && (
        <div
          onClick={handleClose}
          className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 animate-in fade-in duration-300"
          role="dialog"
          aria-modal="true"
          aria-label={selectedCert.title}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-5xl bg-card border border-border/80 rounded-3xl shadow-2xl overflow-hidden flex flex-col max-h-[95vh] animate-in zoom-in-95 slide-in-from-bottom-4 duration-300 ease-out"
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between px-5 py-3.5 border-b border-border bg-muted/40 shrink-0">
              <div className="flex items-center gap-2 overflow-hidden">
                <ShieldCheck className="w-4 h-4 text-brand-500 shrink-0" />
                <span className="font-mono text-xs sm:text-sm font-bold text-foreground truncate">
                  {selectedCert.title} — {selectedCert.issuer}
                </span>
                <span className="hidden sm:inline-block text-[11px] font-mono text-muted-foreground px-2 py-0.5 rounded bg-muted">
                  {selectedCertIndex! + 1} of {certificatesData.length}
                </span>
              </div>

              {/* Header Right Action Buttons */}
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => setIsZoomed((prev) => !prev)}
                  className="p-1.5 rounded-lg border border-border bg-card hover:bg-accent text-foreground text-xs font-mono flex items-center gap-1 transition-all cursor-pointer shadow-sm"
                  title={isZoomed ? "Reset Zoom" : "Zoom In"}
                  aria-label={isZoomed ? "Reset Zoom" : "Zoom In"}
                >
                  {isZoomed ? <ZoomOut className="w-4 h-4 text-brand-500" /> : <ZoomIn className="w-4 h-4 text-brand-500" />}
                </button>

                <a
                  href={selectedCert.image}
                  download={`${selectedCert.id}.jpg`}
                  className="p-1.5 rounded-lg border border-border bg-card hover:bg-accent text-foreground text-xs font-mono flex items-center gap-1 transition-all shadow-sm"
                  title="Download Certificate Image"
                >
                  <Download className="w-4 h-4" />
                </a>

                <button
                  type="button"
                  onClick={handleClose}
                  className="p-1.5 rounded-lg border border-border bg-card hover:bg-accent text-foreground transition-all cursor-pointer shadow-sm"
                  aria-label="Close modal"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Modal Image Display Stage */}
            <div className="relative flex-1 w-full bg-zinc-950/90 flex items-center justify-center p-3 sm:p-6 overflow-auto min-h-[300px] max-h-[72vh]">
              
              {/* Left Arrow Navigation Button */}
              <button
                type="button"
                onClick={handlePrev}
                className="absolute left-3 sm:left-5 top-1/2 -translate-y-1/2 z-20 p-2.5 rounded-full bg-zinc-900/80 hover:bg-zinc-850 text-white border border-white/10 transition-all shadow-xl hover:scale-110 cursor-pointer"
                title="Previous Certificate (Left Arrow)"
                aria-label="Previous Certificate"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>

              {/* The Certificate Image Container (Always Intrinsic & Crisp) */}
              <div
                className={cn(
                  "relative max-w-full flex items-center justify-center transition-all duration-300",
                  isZoomed ? "scale-125 cursor-zoom-out" : "scale-100 cursor-zoom-in"
                )}
                onClick={() => setIsZoomed((prev) => !prev)}
              >
                <Image
                  src={selectedCert.image}
                  alt={`${selectedCert.title} Certificate full view`}
                  width={1400}
                  height={980}
                  className="max-h-[58vh] sm:max-h-[66vh] w-auto max-w-full object-contain rounded-xl shadow-2xl ring-1 ring-white/20 select-none pointer-events-none transition-all duration-300 animate-in fade-in zoom-in-95 duration-200"
                  priority
                />
              </div>

              {/* Right Arrow Navigation Button */}
              <button
                type="button"
                onClick={handleNext}
                className="absolute right-3 sm:right-5 top-1/2 -translate-y-1/2 z-20 p-2.5 rounded-full bg-zinc-900/80 hover:bg-zinc-850 text-white border border-white/10 transition-all shadow-xl hover:scale-110 cursor-pointer"
                title="Next Certificate (Right Arrow)"
                aria-label="Next Certificate"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Footer Bar */}
            <div className="px-5 py-3.5 border-t border-border bg-muted/50 flex flex-wrap items-center justify-between gap-3 text-xs font-mono shrink-0">
              <div className="text-muted-foreground flex flex-wrap items-center gap-3">
                <span>Award Date: <strong className="text-foreground">{selectedCert.date}</strong></span>
                {selectedCert.credentialId && (
                  <span>• ID: <strong className="text-foreground select-all">{selectedCert.credentialId}</strong></span>
                )}
              </div>

              <div className="flex items-center gap-3">
                {selectedCert.verifyUrl && (
                  <a
                    href={selectedCert.verifyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-primary hover:underline font-bold"
                  >
                    Open Official Verification Link ↗
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
