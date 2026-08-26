"use client";

import * as React from "react";
import Image from "next/image";
import { Project } from "@/types";
import {
  X,
  Github,
  ExternalLink,
  Layers,
  CheckCircle2,
  AlertCircle,
  Sparkles,
  Terminal,
  UserCheck
} from "lucide-react";

interface ProjectModalProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
}

export function ProjectModal({ project, isOpen, onClose }: ProjectModalProps) {
  // Close on escape key
  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen || !project) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-8 bg-background/80 backdrop-blur-md animate-in fade-in duration-200"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      <div
        className="relative w-full max-w-4xl max-h-[90vh] bg-card border border-border rounded-2xl shadow-2xl overflow-y-auto flex flex-col focus:outline-none animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Top Header */}
        <div className="sticky top-0 z-10 flex items-center justify-between px-6 py-4 bg-card/95 backdrop-blur-sm border-b border-border">
          <div className="flex items-center gap-2">
            <span className="px-2.5 py-0.5 rounded-full bg-primary/10 text-primary font-mono text-xs font-semibold">
              {project.category}
            </span>
            <span className="text-xs font-mono text-muted-foreground hidden sm:inline-block">
              Case Study Inspector
            </span>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-1.5 rounded-lg border border-border text-muted-foreground hover:text-foreground hover:bg-muted transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 space-y-8">
          
          {/* Title & Tagline */}
          <div className="space-y-2">
            <h2 id="modal-title" className="text-2xl sm:text-3xl font-bold text-foreground font-sans">
              {project.title}
            </h2>
            <p className="text-base text-muted-foreground leading-relaxed">
              {project.tagline}
            </p>
          </div>

          {/* Project Visual / Screenshot */}
          <div className="relative w-full aspect-video rounded-xl overflow-hidden border border-border bg-muted/40 shadow-inner">
            <Image
              src={project.image}
              alt={`${project.title} interface preview`}
              fill
              className="object-contain p-2"
              sizes="(max-width: 1024px) 100vw, 800px"
              priority
            />
          </div>

          {/* Quick Links & CTAs */}
          <div className="flex flex-wrap items-center gap-3 pt-2">
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-card border border-border hover:bg-muted font-mono text-xs font-semibold text-foreground transition-all hover:-translate-y-0.5 shadow-sm"
            >
              <Github className="w-4 h-4" />
              Inspect Source Code
            </a>
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-primary hover:bg-primary/90 font-mono text-xs font-semibold text-primary-foreground transition-all hover:-translate-y-0.5 shadow-sm"
              >
                <ExternalLink className="w-4 h-4" />
                Launch Live Demo
              </a>
            )}
          </div>

          {/* Problem vs Solution Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-5 rounded-xl bg-rose-500/5 dark:bg-rose-500/10 border border-rose-500/20 space-y-2">
              <div className="text-xs font-mono font-bold uppercase tracking-wider text-rose-600 dark:text-rose-400 flex items-center gap-1.5">
                <AlertCircle className="w-4 h-4" />
                The Problem Context
              </div>
              <p className="text-xs sm:text-sm text-foreground/85 leading-relaxed">
                {project.problem}
              </p>
            </div>

            <div className="p-5 rounded-xl bg-brand-500/5 dark:bg-brand-500/10 border border-brand-500/20 space-y-2">
              <div className="text-xs font-mono font-bold uppercase tracking-wider text-brand-600 dark:text-brand-400 flex items-center gap-1.5">
                <Sparkles className="w-4 h-4" />
                The Engineered Solution
              </div>
              <p className="text-xs sm:text-sm text-foreground/85 leading-relaxed">
                {project.solution}
              </p>
            </div>
          </div>

          {/* Brix's Specific Role */}
          <div className="p-5 rounded-xl bg-card border border-border space-y-2">
            <div className="text-xs font-mono font-bold uppercase tracking-wider text-primary flex items-center gap-1.5">
              <UserCheck className="w-4 h-4" />
              My Development Role &amp; Responsibilities
            </div>
            <p className="text-xs sm:text-sm text-foreground/85 leading-relaxed">
              {project.myRole}
            </p>
          </div>

          {/* Major Features & Capabilities */}
          <div className="space-y-3">
            <h3 className="text-sm font-mono uppercase tracking-wider text-foreground font-semibold flex items-center gap-2">
              <Terminal className="w-4 h-4 text-brand-500" />
              Core System Features
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {project.features.map((feature, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-2.5 p-3 rounded-lg bg-muted/40 border border-border/60 text-xs text-foreground/90 font-mono"
                >
                  <CheckCircle2 className="w-4 h-4 text-brand-500 shrink-0 mt-0.5" />
                  <span>{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Tech Stack Chips */}
          <div className="space-y-3">
            <h3 className="text-sm font-mono uppercase tracking-wider text-foreground font-semibold flex items-center gap-2">
              <Layers className="w-4 h-4 text-cyan-500" />
              Technologies &amp; Libraries
            </h3>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 rounded-md bg-muted text-foreground text-xs font-mono border border-border font-medium"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Challenges Encountered & Resolutions */}
          {project.challenges && project.challenges.length > 0 && (
            <div className="p-5 rounded-xl bg-muted/40 border border-border space-y-2">
              <div className="text-xs font-mono font-bold uppercase tracking-wider text-amber-600 dark:text-amber-400 flex items-center gap-1.5">
                Technical Challenges &amp; Learnings
              </div>
              <ul className="space-y-2 text-xs sm:text-sm text-muted-foreground list-disc list-inside">
                {project.challenges.map((c, idx) => (
                  <li key={idx} className="leading-relaxed">
                    {c}
                  </li>
                ))}
              </ul>
            </div>
          )}

        </div>

        {/* Modal Footer */}
        <div className="sticky bottom-0 px-6 py-4 bg-card/95 backdrop-blur-sm border-t border-border flex items-center justify-between text-xs font-mono text-muted-foreground">
          <span>Press ESC or click outside to dismiss</span>
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-1.5 rounded-lg bg-secondary text-secondary-foreground hover:bg-secondary/80 transition-colors font-semibold"
          >
            Close View
          </button>
        </div>
      </div>
    </div>
  );
}
