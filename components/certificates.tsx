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
  BadgeCheck
} from "lucide-react";

export function Certificates() {
  const [selectedCert, setSelectedCert] = React.useState<CertificateItem | null>(null);

  // Close lightbox on Escape key
  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSelectedCert(null);
    };
    if (selectedCert) {
      window.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "unset";
    };
  }, [selectedCert]);

  return (
    <section id="certificates" className="py-20 lg:py-28 border-t border-border/60 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
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
              Industry credentials and accredited coursework validating practical IT support troubleshooting, computer hardware, and digital communication proficiencies.
            </p>
          </div>
        </ScrollReveal>

        {/* Certificates Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {certificatesData.map((cert, idx) => (
            <ScrollReveal
              key={cert.id}
              direction="up"
              delay={idx * 150}
              className="rounded-2xl border border-border bg-card shadow-lg hover:border-primary/40 transition-all duration-300 overflow-hidden flex flex-col justify-between group"
            >
              <div>
                {/* Card Top Header */}
                <div className="p-5 sm:p-6 border-b border-border bg-muted/30 flex flex-wrap items-center justify-between gap-3">
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/10 text-primary font-mono text-xs font-semibold">
                    <ShieldCheck className="w-3.5 h-3.5 text-brand-500" />
                    <span>{cert.badgeText}</span>
                  </div>

                  <div className="flex items-center gap-1.5 text-xs font-mono text-muted-foreground">
                    <Calendar className="w-3.5 h-3.5 text-brand-500" />
                    <span>{cert.date}</span>
                  </div>
                </div>

                {/* Certificate Visual Image Preview */}
                <div
                  onClick={() => setSelectedCert(cert)}
                  className="relative aspect-[16/11] w-full bg-zinc-950/5 dark:bg-zinc-900 overflow-hidden cursor-pointer group/img border-b border-border"
                >
                  <Image
                    src={cert.image}
                    alt={`${cert.title} Certificate`}
                    fill
                    className="object-contain p-3 sm:p-4 transition-transform duration-500 group-hover/img:scale-102"
                    sizes="(max-width: 1024px) 100vw, 600px"
                  />
                  
                  {/* Hover Overlay Hint */}
                  <div className="absolute inset-0 bg-zinc-950/40 opacity-0 group-hover/img:opacity-100 transition-opacity duration-200 flex items-center justify-center backdrop-blur-[2px]">
                    <span className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-background/95 text-foreground font-mono text-xs font-bold shadow-xl border border-border">
                      <Maximize2 className="w-3.5 h-3.5 text-brand-500" />
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
                    <h3 className="text-xl sm:text-2xl font-bold text-foreground font-sans mt-1">
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
                          className="px-2.5 py-1 rounded-md bg-muted text-foreground text-[11px] font-mono border border-border/80"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Bottom Actions Row */}
              <div className="p-5 sm:p-6 border-t border-border bg-muted/20 flex flex-wrap items-center justify-between gap-3 text-xs font-mono">
                {cert.credentialId && (
                  <div className="text-muted-foreground">
                    <span className="text-[10px] uppercase block">Credential ID</span>
                    <span className="font-semibold text-foreground select-all">{cert.credentialId}</span>
                  </div>
                )}

                <div className="flex items-center gap-2 ml-auto">
                  <button
                    type="button"
                    onClick={() => setSelectedCert(cert)}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-border bg-card hover:bg-muted text-foreground transition-colors font-medium cursor-pointer"
                  >
                    <Maximize2 className="w-3.5 h-3.5 text-brand-500" />
                    Preview
                  </button>

                  {cert.verifyUrl && (
                    <a
                      href={cert.verifyUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-primary text-primary-foreground font-semibold hover:bg-primary/90 transition-all shadow-sm"
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

      {/* Lightbox Modal for High-Resolution Certificate Viewing */}
      {selectedCert && (
        <div
          onClick={() => setSelectedCert(null)}
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 animate-in fade-in duration-200"
          role="dialog"
          aria-modal="true"
          aria-label={selectedCert.title}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-4xl bg-card border border-border rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[95vh] animate-in zoom-in-95 duration-200"
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between px-5 py-3.5 border-b border-border bg-muted/40">
              <div className="flex items-center gap-2 overflow-hidden">
                <ShieldCheck className="w-4 h-4 text-brand-500 shrink-0" />
                <span className="font-mono text-xs sm:text-sm font-bold text-foreground truncate">
                  {selectedCert.title} — {selectedCert.issuer}
                </span>
              </div>

              <div className="flex items-center gap-2">
                <a
                  href={selectedCert.image}
                  download={`${selectedCert.id}.jpg`}
                  className="p-1.5 rounded-lg border border-border bg-card hover:bg-accent text-foreground text-xs font-mono flex items-center gap-1 transition-colors"
                  title="Download Certificate Image"
                >
                  <Download className="w-4 h-4" />
                </a>

                <button
                  type="button"
                  onClick={() => setSelectedCert(null)}
                  className="p-1.5 rounded-lg border border-border bg-card hover:bg-accent text-foreground transition-colors cursor-pointer"
                  aria-label="Close modal"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Modal Image Body */}
            <div className="relative flex-1 w-full h-[52vh] sm:h-[65vh] min-h-[260px] sm:min-h-[460px] max-h-[75vh] bg-zinc-950/90 flex items-center justify-center p-2 sm:p-4 overflow-auto">
              <div className="relative w-full h-full">
                <Image
                  src={selectedCert.image}
                  alt={`${selectedCert.title} Certificate full view`}
                  fill
                  className="object-contain"
                  priority
                />
              </div>
            </div>

            {/* Modal Footer */}
            <div className="px-5 py-3 border-t border-border bg-muted/50 flex flex-wrap items-center justify-between gap-3 text-xs font-mono">
              <div className="text-muted-foreground flex items-center gap-2">
                <span>Award Date: <strong className="text-foreground">{selectedCert.date}</strong></span>
                {selectedCert.credentialId && (
                  <span>• ID: <strong className="text-foreground">{selectedCert.credentialId}</strong></span>
                )}
              </div>

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
      )}
    </section>
  );
}
