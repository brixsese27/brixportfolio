import { Project } from "@/types";

export const projectsData: Project[] = [
  {
    id: "project-1",
    slug: "static-culture-ecommerce",
    title: "Static Culture (e-Commerce Storefront)",
    tagline: "Responsive digital storefront for a clothing and lifestyle brand showcasing collections, pricing, and product details.",
    category: "Personal Web Project • 2026",
    description:
      "Developed and deployed a clean, modern digital storefront for Static Culture—a contemporary clothing and lifestyle brand. Designed to provide a sleek, fast-loading shopping experience with intuitive catalog navigation and responsive product showcases.",
    problem:
      "Independent clothing and apparel brands need an eye-catching, responsive, and easy-to-maintain digital showcase that presents collections cleanly without bloated plugins or slow loading times.",
    solution:
      "Engineered a lightweight, mobile-first web storefront using Next.js, TypeScript, and Tailwind CSS with instant category filtering, responsive lookbook galleries, product pricing details, and smooth micro-interactions.",
    myRole:
      "Frontend Developer & Designer: Designed the user interface, created responsive component layouts, organized product assets and pricing metadata, and deployed the live static site to Vercel.",
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Vibe Coding (AI Agents)",
      "Vercel"
    ],
    features: [
      "Responsive Lifestyle & Apparel Catalog Showcase",
      "Interactive Category Filtering (Tees, Hoodies, Accessories)",
      "Detailed Product Cards with Pricing & Sizing Information",
      "Mobile-First Layout with Smooth Touch Navigation",
      "Fast Static Page Delivery with Zero Layout Shift"
    ],
    highlights: [
      "Developed utilizing modern AI-assisted Vibe Coding workflows",
      "100% responsive interface across mobile, tablet, and desktop viewports",
      "Deployed as a high-performance static web application on Vercel"
    ],
    challenges: [
      "Ensuring crisp image rendering and fast load times across low-bandwidth mobile devices.",
      "Structuring modular product data components for easy inventory and price updates."
    ],
    githubUrl: "https://github.com/brixsese27/brixportfolio",
    liveUrl: "https://brixportfolio.vercel.app",
    image: "/projects/static-culture.svg"
  }
];
