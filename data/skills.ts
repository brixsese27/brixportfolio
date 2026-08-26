import { SkillCategory } from "@/types";

export const skillCategories: SkillCategory[] = [
  {
    id: "frontend",
    title: "Frontend Engineering",
    description: "Building responsive, accessible, and performant user interfaces.",
    skills: [
      {
        name: "HTML5 / Semantic HTML",
        level: "Proficient",
        description: "Accessible markup structure, SEO best practices, and standard semantics.",
        iconName: "Code2",
        highlight: true
      },
      {
        name: "CSS3 / Modern Styling",
        level: "Proficient",
        description: "Flexbox, CSS Grid, custom properties, responsive breakpoints, animations.",
        iconName: "Palette",
        highlight: true
      },
      {
        name: "JavaScript (ES6+)",
        level: "Proficient",
        description: "Asynchronous programming, DOM manipulation, modular architecture, fetch API.",
        iconName: "FileCode",
        highlight: true
      },
      {
        name: "TypeScript",
        level: "Proficient",
        description: "Static typing, generics, interfaces, strict mode type safety.",
        iconName: "FileCode2",
        highlight: true
      },
      {
        name: "React",
        level: "Proficient",
        description: "Component lifecycle, custom hooks, state management, memoization.",
        iconName: "Component",
        highlight: true
      },
      {
        name: "Next.js",
        level: "Proficient",
        description: "App Router, Server/Client components, static site generation (SSG), routing.",
        iconName: "Layers",
        highlight: true
      },
      {
        name: "Tailwind CSS",
        level: "Proficient",
        description: "Utility-first architecture, custom design tokens, responsive layouts.",
        iconName: "Sparkles",
        highlight: true
      }
    ]
  },
  {
    id: "backend",
    title: "Backend & API Development",
    description: "Architecting reliable server endpoints and business logic.",
    skills: [
      {
        name: "Node.js",
        level: "Proficient",
        description: "Server-side runtime, npm ecosystem, asynchronous I/O execution.",
        iconName: "Server",
        highlight: true
      },
      {
        name: "Express.js",
        level: "Proficient",
        description: "REST API route handling, middleware integration, error handling pipelines.",
        iconName: "Cpu",
        highlight: true
      },
      {
        name: "RESTful API Design",
        level: "Proficient",
        description: "HTTP verbs, status codes, payload serialization, endpoint structuring.",
        iconName: "Network",
        highlight: true
      },
      {
        name: "PHP / Laravel",
        level: "Familiar",
        description: "MVC architecture, routing, Blade templating, authentication flows.",
        iconName: "Terminal"
      }
    ]
  },
  {
    id: "database",
    title: "Database & Data Management",
    description: "Designing schema structures, relationships, and queries.",
    skills: [
      {
        name: "MySQL / MariaDB",
        level: "Proficient",
        description: "Relational schema design, normalization, complex JOIN queries, indexing.",
        iconName: "Database",
        highlight: true
      },
      {
        name: "PostgreSQL",
        level: "Proficient",
        description: "ACID transactions, relational constraints, structured querying.",
        iconName: "Boxes",
        highlight: true
      },
      {
        name: "Prisma ORM",
        level: "Familiar",
        description: "Type-safe database client, schema migrations, relation modeling.",
        iconName: "Workflow"
      },
      {
        name: "MongoDB",
        level: "Familiar",
        description: "NoSQL document collections, aggregation pipeline, JSON documents.",
        iconName: "FolderGit2"
      }
    ]
  },
  {
    id: "tools",
    title: "Developer Tools & Workflow",
    description: "Version control, collaboration, and modern productivity tooling.",
    skills: [
      {
        name: "Git & GitHub",
        level: "Proficient",
        description: "Branching strategies, pull requests, merge conflict resolution, versioning.",
        iconName: "GitBranch",
        highlight: true
      },
      {
        name: "VS Code",
        level: "Proficient",
        description: "Debugging, extensions, workspace configuration, linting integration.",
        iconName: "Laptop",
        highlight: true
      },
      {
        name: "Postman",
        level: "Proficient",
        description: "API testing, request collection structuring, automated environment variables.",
        iconName: "Send",
        highlight: true
      },
      {
        name: "Figma",
        level: "Proficient",
        description: "Wireframing, UI prototyping, inspecting design tokens, responsive specs.",
        iconName: "Figma",
        highlight: true
      },
      {
        name: "Vercel / Cloud Deployment",
        level: "Proficient",
        description: "Continuous deployment pipelines, static hosting, environment setups.",
        iconName: "Cloud",
        highlight: true
      }
    ]
  }
];
