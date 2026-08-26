import { Project } from "@/types";

export interface ProjectTechItem {
  name: string;
  category: string;
  iconType: string;
}

export const staticCultureTechStack: ProjectTechItem[] = [
  { name: "Next.js", category: "React Framework", iconType: "next" },
  { name: "React", category: "UI Library", iconType: "react" },
  { name: "TypeScript", category: "Type-Safe Code", iconType: "ts" },
  { name: "Tailwind CSS", category: "Utility-First Styling", iconType: "tailwind" },
  { name: "Vibe Coding", category: "AI Assisted Tools", iconType: "ai" },
  { name: "Vercel", category: "Edge Cloud Hosting", iconType: "vercel" }
];

export const staticCultureProject: Project = {
  id: "project-1",
  slug: "static-culture-ecommerce",
  title: "Static Culture (e-Commerce Storefront)",
  tagline: "Responsive digital storefront for a clothing and lifestyle brand showcasing collections, pricing, and product details.",
  category: "Personal Web Project • 2026",
  description:
    "A modern, responsive digital storefront engineered for Static Culture—a contemporary apparel and lifestyle brand. Designed to deliver a fast, seamless shopping experience with curated collection lookbooks, intuitive catalog navigation, and detailed product specifications.",
  problem:
    "Apparel and lifestyle brands need a clean, responsive showcase that loads instantly on mobile devices, showcasing garments and lookbooks without heavy e-commerce plugin bloat.",
  solution:
    "Built a high-performance web storefront utilizing Next.js, TypeScript, and Tailwind CSS with smooth responsive navigation, instant product categorization, and edge deployment on Vercel.",
  myRole: "Frontend Developer & UI Implementer",
  technologies: [
    "Next.js",
    "React",
    "TypeScript",
    "Tailwind CSS",
    "Vibe Coding",
    "Vercel"
  ],
  features: [
    "Responsive Apparel & Collection Showcase",
    "Interactive Catalog & Category Filtering",
    "Detailed Product Pricing & Sizing Information",
    "Mobile-First Navigation & Touch Interface",
    "Optimized Asset Delivery with Zero Layout Shift"
  ],
  highlights: [
    "Developed with modern AI-assisted Vibe Coding workflows",
    "100% responsive design across smartphone, tablet, and desktop",
    "Production-deployed on Vercel"
  ],
  challenges: [],
  githubUrl: "https://github.com/brixsese27/brixportfolio",
  liveUrl: "https://brixportfolio.vercel.app",
  image: "/staticculturehomepage.png"
};

export const projectsData: Project[] = [staticCultureProject];
