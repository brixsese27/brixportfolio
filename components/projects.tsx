"use client";

import * as React from "react";
import Image from "next/image";
import { projectsData } from "@/data/projects";
import { Project } from "@/types";
import { ProjectModal } from "@/components/project-modal";
import {
  Github,
  ExternalLink,
  ArrowUpRight,
  Terminal,
  Layers,
  Sparkles,
  Maximize2,
  CheckCircle2
} from "lucide-react";

export function Projects() {
  const [selectedProject, setSelectedProject] = React.useState<Project | null>(null);
  const [isModalOpen, setIsModalOpen] = React.useState<boolean>(false);

  const openProjectModal = (project: Project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const closeProjectModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
  };

  return (
    <section id="projects" className="py-20 lg:py-28 border-t border-border/60 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <div className="section-label">
              <Terminal className="w-3.5 h-3.5 text-brand-500" />
              03 // Featured Personal Project
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground font-sans">
              Personal Web Project Showcase
            </h2>
            <p className="text-base text-muted-foreground mt-2">
              Independent digital storefront developed and deployed using modern AI-assisted vibe coding workflows.
            </p>
          </div>
          <div className="text-xs font-mono text-muted-foreground hidden sm:block">
            Click to inspect technical case study
          </div>
        </div>

        {/* Featured Project Container (Hero Style) */}
        <div className="max-w-4xl mx-auto">
          {projectsData.map((project) => (
            <article
              key={project.id}
              className="group rounded-3xl border border-border bg-card hover:border-primary/50 transition-all duration-300 shadow-md hover:shadow-2xl overflow-hidden flex flex-col justify-between"
            >
              <div>
                {/* Image Container with Hover Zoom & Action Overlay */}
                <div
                  onClick={() => openProjectModal(project)}
                  className="relative aspect-video w-full overflow-hidden bg-muted/40 cursor-pointer border-b border-border/80"
                >
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-contain p-3 transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 1024px) 100vw, 900px"
                    priority
                  />
                  <div className="absolute top-4 left-4 px-3 py-1 rounded-md bg-background/90 backdrop-blur-md text-xs font-mono font-semibold text-foreground border border-border shadow-sm">
                    {project.category}
                  </div>
                  
                  {/* Expand hint button */}
                  <div className="absolute top-4 right-4 p-2 rounded-lg bg-background/90 backdrop-blur-md text-muted-foreground group-hover:text-primary transition-colors border border-border shadow-sm">
                    <Maximize2 className="w-4 h-4" />
                  </div>
                </div>

                {/* Content Section */}
                <div className="p-6 sm:p-8 space-y-5">
                  <div className="space-y-2">
                    <h3
                      onClick={() => openProjectModal(project)}
                      className="text-2xl sm:text-3xl font-bold text-foreground font-sans group-hover:text-primary transition-colors cursor-pointer"
                    >
                      {project.title}
                    </h3>
                    <p className="text-base text-muted-foreground leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  {/* Problem & Solution Snippet Grid */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="p-4 rounded-xl bg-muted/40 border border-border/60 text-xs font-mono space-y-1">
                      <div className="text-foreground font-bold flex items-center gap-1.5">
                        <span className="text-amber-500">▶</span> Problem:
                      </div>
                      <div className="text-muted-foreground text-xs leading-relaxed">
                        {project.problem}
                      </div>
                    </div>

                    <div className="p-4 rounded-xl bg-brand-500/5 dark:bg-brand-500/10 border border-brand-500/20 text-xs font-mono space-y-1">
                      <div className="text-brand-600 dark:text-brand-400 font-bold flex items-center gap-1.5">
                        <span className="text-brand-500">✓</span> Solution &amp; Impact:
                      </div>
                      <div className="text-muted-foreground text-xs leading-relaxed">
                        {project.solution}
                      </div>
                    </div>
                  </div>

                  {/* Tech Stack Chips */}
                  <div className="space-y-2 pt-2">
                    <div className="text-xs font-mono text-muted-foreground uppercase tracking-wider">
                      Technologies &amp; Approach:
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 rounded-md bg-muted text-xs font-mono text-foreground border border-border font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Card Footer Actions */}
              <div className="px-6 sm:px-8 py-5 bg-muted/30 border-t border-border flex flex-wrap items-center justify-between gap-4">
                <button
                  type="button"
                  onClick={() => openProjectModal(project)}
                  className="text-xs sm:text-sm font-mono font-bold text-brand-600 dark:text-brand-400 hover:underline flex items-center gap-1.5"
                >
                  Inspect Full Case Study
                  <ArrowUpRight className="w-4 h-4" />
                </button>

                <div className="flex items-center gap-3">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-border bg-card text-foreground hover:bg-muted text-xs font-mono transition-colors shadow-sm"
                    aria-label={`${project.title} GitHub repository`}
                  >
                    <Github className="w-3.5 h-3.5" />
                    Code
                  </a>

                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-primary hover:bg-primary/90 text-primary-foreground text-xs font-mono font-semibold transition-all shadow-sm"
                      aria-label={`${project.title} live demo`}
                    >
                      <ExternalLink className="w-3.5 h-3.5" />
                      Live Site
                    </a>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>

      </div>

      {/* Case Study Modal */}
      <ProjectModal
        project={selectedProject}
        isOpen={isModalOpen}
        onClose={closeProjectModal}
      />
    </section>
  );
}
