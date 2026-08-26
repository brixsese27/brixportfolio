export interface Profile {
  name: string;
  degree: string;
  field: string;
  headline: string;
  subheadline: string;
  status: string;
  location: string;
  email: string;
  phone: string;
  github: string;
  linkedin: string;
  facebook: string;
  resumeUrl: string;
  bioParagraphs: string[];
  focusAreas: string[];
  principles: {
    title: string;
    description: string;
  }[];
  quickStats: {
    label: string;
    value: string;
    context: string;
  }[];
}

export interface SkillItem {
  name: string;
  level?: "Proficient" | "Familiar" | "Advanced";
  description: string;
  iconName: string;
  highlight?: boolean;
}

export interface SkillCategory {
  id: string;
  title: string;
  description: string;
  skills: SkillItem[];
}

export interface Project {
  id: string;
  slug: string;
  title: string;
  tagline: string;
  category: string;
  description: string;
  problem: string;
  solution: string;
  myRole: string;
  technologies: string[];
  features: string[];
  highlights: string[];
  challenges?: string[];
  githubUrl: string;
  liveUrl?: string;
  image: string;
  aspectRatio?: string;
}

export interface CapstoneProject {
  title: string;
  codeName?: string;
  tagline: string;
  badge: string;
  overview: string;
  problem: string;
  solution: string;
  myRole: string;
  technologies: string[];
  majorFeatures: {
    title: string;
    description: string;
    iconName: string;
  }[];
  systemHighlights: {
    title: string;
    description: string;
  }[];
  challenges: {
    challenge: string;
    resolution: string;
  }[];
  contributions: string[];
  githubUrl: string;
  liveUrl?: string;
  image: string;
}

export interface ExperienceItem {
  id: string;
  company: string;
  position: string;
  type: string; // "Internship / OJT" | "Full-time" | "Project"
  period: string;
  location: string;
  description: string;
  responsibilities: string[];
  technologies: string[];
  keyContributions: string[];
}

export interface EducationItem {
  id: string;
  degree: string;
  major: string;
  institution: string;
  location: string;
  period: string;
  status: string;
  distinctions?: string[];
  coursework: string[];
  highlights: string[];
}

export interface NavItem {
  label: string;
  href: string;
}
