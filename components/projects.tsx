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
  Maximize2
} from "lucide-react";
import { cn } from "@/lib/utils";

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
              03 // Featured Projects
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground font-sans">
              Curated Software Applications
            </h2>
            <p className="text-base text-muted-foreground mt-2">
              Selected production-grade web systems and full-stack applications solving operational problems.
            </p>
          </div>
          <div className="text-xs font-mono text-muted-foreground hidden sm:block">
            Click any card to inspect full technical case study
          </div>
        </div>

        {/* Projects Grid (2x2 Clean Responsive Cards) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projectsData.map((project, idx) => (
            <article
              key={project.id}
              className="group rounded-2xl border border-border bg-card hover:border-primary/50 transition-all duration-300 shadow-sm hover:shadow-xl flex flex-col justify-between overflow-hidden relative"
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
                    className="object-contain p-2 transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
                  />
                  <div className="absolute top-3 left-3 px-2.5 py-1 rounded-md bg-background/90 backdrop-blur-md text-[11px] font-mono font-semibold text-foreground border border-border shadow-sm">
                    {project.category}
                  </div>
                  
                  {/* Subtle expand hint button */}
                  <div className="absolute top-3 right-3 p-1.5 rounded-md bg-background/90 backdrop-blur-md text-muted-foreground group-hover:text-primary transition-colors border border-border opacity-0 group-hover:opacity-100 shadow-sm">
                    <Maximize2 className="w-4 h-4" />
                  </div>
                </div>

                {/* Content Section */}
                <div className="p-6 sm:p-7 space-y-4">
                  <div className="space-y-1.5">
                    <div className="flex items-start justify-between gap-2">
                      <h3
                        onClick={() => openProjectModal(project)}
                        className="text-xl font-bold text-foreground font-sans group-hover:text-primary transition-colors cursor-pointer flex items-center gap-1.5"
                      >
                        {project.title}
                      </h3>
                    </div>
                    <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  {/* Problem & Solution Snippet */}
                  <div className="p-3 rounded-xl bg-muted/40 border border-border/60 text-xs font-mono text-muted-foreground space-y-1">
                    <div className="text-foreground/90 font-semibold flex items-center gap-1">
                      <span className="text-brand-500">▶</span> Purpose &amp; Impact:
                    </div>
                    <div className="text-muted-foreground text-[11px] line-clamp-2">
                      {project.solution}
                    </div>
                  </div>

                  {/* Tech Stack Chips */}
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {project.technologies.slice(0, 5).map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-0.5 rounded bg-muted text-[11px] font-mono text-muted-foreground border border-border/50"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 5 && (
                      <span className="px-2 py-0.5 rounded bg-muted text-[11px] font-mono text-muted-foreground border border-border/50">
                        +{project.technologies.length - 5}
                      </span>
                    )}
                  </div>
                </div>
              </div>

              {/* Card Footer Actions */}
              <div className="px-6 sm:px-7 py-4 bg-muted/30 border-t border-border flex items-center justify-between">
                <button
                  type="button"
                  onClick={() => openProjectModal(project)}
                  className="text-xs font-mono font-semibold text-brand-600 dark:text-brand-400 hover:underline flex items-center gap-1"
                >
                  View Case Study
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>

                <div className="flex items-center gap-3">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-1.5 rounded-lg text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
                    aria-label={`${project.title} GitHub repository`}
                    title="Source Code"
                  >
                    <Github className="w-4 h-4" />
                  </a>

                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-1.5 rounded-lg text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
                      aria-label={`${project.title} live demo`}
                      title="Live Demo"
                    >
                      <ExternalLink className="w-4 h-4" />
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
