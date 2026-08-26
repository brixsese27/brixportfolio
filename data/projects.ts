import { Project } from "@/types";

export interface ProjectTechItem {
  name: string;
  category: string;
  iconType: string;
}

export const staticCultureTechStack: ProjectTechItem[] = [
  { name: "PHP", category: "Backend Logic", iconType: "php" },
  { name: "HTML5", category: "Frontend Markup", iconType: "html" },
  { name: "CSS3", category: "Styling & Design", iconType: "css" },
  { name: "JavaScript", category: "Client-Side Scripting", iconType: "js" },
  { name: "MySQL", category: "Relational Database", iconType: "mysql" },
  { name: "Vercel", category: "Cloud Hosting", iconType: "vercel" },
  { name: "GitHub", category: "Version Control", iconType: "github" }
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
    "Built a lightweight, responsive storefront utilizing PHP, HTML, CSS, JavaScript, and MySQL with smooth navigation, structured product catalog data, and version control via GitHub.",
  myRole: "Frontend Developer & UI Implementer",
  technologies: [
    "PHP",
    "HTML",
    "CSS",
    "JavaScript",
    "MySQL",
    "Vercel",
    "GitHub"
  ],
  features: [
    "Responsive Apparel & Collection Showcase",
    "Interactive Catalog & Category Filtering",
    "Detailed Product Pricing & Sizing Information",
    "Mobile-First Navigation & Touch Interface",
    "Structured Database & Asset Delivery"
  ],
  highlights: [
    "Developed with clean, responsive PHP, HTML, and CSS",
    "100% responsive design across smartphone, tablet, and desktop",
    "Repository and version management via GitHub"
  ],
  challenges: [],
  githubUrl: "https://github.com/brixsese27/brixportfolio",
  liveUrl: "https://brixportfolio.vercel.app",
  image: "/staticculturehomepage.png"
};

export const projectsData: Project[] = [staticCultureProject];
