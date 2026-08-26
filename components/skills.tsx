"use client";

import * as React from "react";
import { skillCategories } from "@/data/skills";
import {
  Code2,
  Palette,
  FileCode,
  FileCode2,
  Component,
  Layers,
  Sparkles,
  Server,
  Cpu,
  Network,
  Terminal,
  Database,
  Boxes,
  Workflow,
  FolderGit2,
  GitBranch,
  Laptop,
  Send,
  Figma,
  Cloud,
  CheckCircle2
} from "lucide-react";
import { cn } from "@/lib/utils";

// Icon mapping helper
const iconMap: Record<string, React.ReactNode> = {
  Code2: <Code2 className="w-4 h-4 text-orange-500" />,
  Palette: <Palette className="w-4 h-4 text-blue-500" />,
  FileCode: <FileCode className="w-4 h-4 text-yellow-500" />,
  FileCode2: <FileCode2 className="w-4 h-4 text-blue-400" />,
  Component: <Component className="w-4 h-4 text-cyan-400" />,
  Layers: <Layers className="w-4 h-4 text-emerald-400" />,
  Sparkles: <Sparkles className="w-4 h-4 text-teal-400" />,
  Server: <Server className="w-4 h-4 text-green-500" />,
  Cpu: <Cpu className="w-4 h-4 text-indigo-400" />,
  Network: <Network className="w-4 h-4 text-purple-400" />,
  Terminal: <Terminal className="w-4 h-4 text-red-400" />,
  Database: <Database className="w-4 h-4 text-blue-500" />,
  Boxes: <Boxes className="w-4 h-4 text-indigo-500" />,
  Workflow: <Workflow className="w-4 h-4 text-teal-500" />,
  FolderGit2: <FolderGit2 className="w-4 h-4 text-emerald-500" />,
  GitBranch: <GitBranch className="w-4 h-4 text-orange-500" />,
  Laptop: <Laptop className="w-4 h-4 text-sky-400" />,
  Send: <Send className="w-4 h-4 text-amber-500" />,
  Figma: <Figma className="w-4 h-4 text-pink-500" />,
  Cloud: <Cloud className="w-4 h-4 text-cyan-500" />
};

export function Skills() {
  const [selectedCategory, setSelectedCategory] = React.useState<string>("all");

  const filteredCategories =
    selectedCategory === "all"
      ? skillCategories
      : skillCategories.filter((cat) => cat.id === selectedCategory);

  return (
    <section id="skills" className="py-20 lg:py-28 border-t border-border/60 relative bg-muted/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <div className="section-label">
              <Terminal className="w-3.5 h-3.5 text-brand-500" />
              02 // Technical Stack
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground font-sans">
              Technologies &amp; Developer Tools
            </h2>
            <p className="text-base text-muted-foreground mt-2">
              Structured technical stack utilized in building full-stack web applications and academic systems.
            </p>
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center gap-1.5 p-1 bg-card border border-border rounded-xl shadow-sm self-start">
            <button
              type="button"
              onClick={() => setSelectedCategory("all")}
              className={cn(
                "px-3 py-1.5 rounded-lg text-xs font-mono transition-all",
                selectedCategory === "all"
                  ? "bg-primary text-primary-foreground font-semibold shadow-sm"
                  : "text-muted-foreground hover:text-foreground hover:bg-muted"
              )}
            >
              All
            </button>
            {skillCategories.map((cat) => (
              <button
                key={cat.id}
                type="button"
                onClick={() => setSelectedCategory(cat.id)}
                className={cn(
                  "px-3 py-1.5 rounded-lg text-xs font-mono transition-all",
                  selectedCategory === cat.id
                    ? "bg-primary text-primary-foreground font-semibold shadow-sm"
                    : "text-muted-foreground hover:text-foreground hover:bg-muted"
                )}
              >
                {cat.title.split(" ")[0]}
              </button>
            ))}
          </div>
        </div>

        {/* Categorized Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredCategories.map((category) => (
            <div
              key={category.id}
              className="p-6 rounded-2xl bg-card border border-border hover:border-border/90 transition-all shadow-sm flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-lg font-bold text-foreground font-sans flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-brand-500" />
                    {category.title}
                  </h3>
                  <span className="text-xs font-mono text-muted-foreground px-2 py-0.5 rounded bg-muted">
                    {category.skills.length} tools
                  </span>
                </div>
                <p className="text-xs text-muted-foreground mb-6">
                  {category.description}
                </p>

                {/* Skill Items in Category */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {category.skills.map((skill) => (
                    <div
                      key={skill.name}
                      className="p-3 rounded-xl bg-muted/40 hover:bg-muted/80 border border-border/60 hover:border-primary/40 transition-all duration-200 group flex flex-col justify-between"
                    >
                      <div>
                        <div className="flex items-center justify-between mb-1.5">
                          <div className="flex items-center gap-2">
                            <span className="p-1 rounded bg-background border border-border/80 group-hover:border-primary/40 transition-colors">
                              {iconMap[skill.iconName] || <Code2 className="w-4 h-4 text-brand-500" />}
                            </span>
                            <span className="text-xs font-mono font-bold text-foreground group-hover:text-primary transition-colors">
                              {skill.name}
                            </span>
                          </div>
                          {skill.level && (
                            <span
                              className={cn(
                                "text-[10px] font-mono px-1.5 py-0.5 rounded",
                                skill.level === "Proficient"
                                  ? "bg-brand-500/10 text-brand-600 dark:text-brand-400 font-semibold"
                                  : "bg-muted text-muted-foreground"
                              )}
                            >
                              {skill.level}
                            </span>
                          )}
                        </div>
                        <p className="text-[11px] text-muted-foreground leading-snug">
                          {skill.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 mt-6 border-t border-border/60 flex items-center justify-between text-[11px] font-mono text-muted-foreground">
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-brand-500" />
                  Production Tested
                </span>
                <span>Semantic &amp; Responsive</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
