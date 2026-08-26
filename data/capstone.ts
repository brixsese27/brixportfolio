import { CapstoneProject } from "@/types";

export const capstoneData: CapstoneProject = {
  title: "Integrated Municipal Public Assistance & Resource Dispatch System",
  codeName: "Project IM-PARDS",
  badge: "BSIT Academic Capstone — Flagship Engineering System",
  tagline:
    "An end-to-end digital assistance intake, eligibility verification, and multi-agency resource allocation platform.",
  overview:
    "As the culmination of my BS Information Technology degree, our capstone system was engineered to digitize and automate manual public assistance processing for local government units (LGUs). The platform connects citizen requests, caseworker assessment queues, fund disbursement tracking, and executive analytics into a unified, secure web ecosystem.",
  problem:
    "Citizens seeking emergency financial or medical assistance faced physical queuing for 6-12 hours, paper application loss, and lack of visibility into request status. Caseworkers simultaneously struggled with manual cross-referencing of duplicate claims across government agencies.",
  solution:
    "Designed and developed a multi-tier web application featuring a citizen self-service portal with SMS/email notifications, a caseworker review pipeline with automated duplicate detection algorithms, an inventory dispatch module, and a real-time executive dashboard for resource distribution monitoring.",
  myRole:
    "Lead Full-Stack Developer & Database Architect: Led technical architecture planning, designed normalized 3NF database schemas, engineered RESTful API endpoints in Node.js, and implemented the core caseworker review dashboard and reporting modules using Next.js and Tailwind CSS.",
  technologies: [
    "Next.js",
    "React",
    "TypeScript",
    "Tailwind CSS",
    "Node.js",
    "Express.js",
    "PostgreSQL",
    "Prisma ORM",
    "Framer Motion",
    "Lucide React"
  ],
  majorFeatures: [
    {
      title: "Citizen Intake & Digital Tracking Portal",
      description:
        "Intuitive multi-step application submission with document upload, validation checks, and unique reference tracking codes.",
      iconName: "FileCheck"
    },
    {
      title: "Caseworker Verification & Fraud Detection",
      description:
        "Automated cross-matching system that flags duplicate benefit claims across national ID records and date intervals.",
      iconName: "ShieldAlert"
    },
    {
      title: "Real-time Resource Allocation & Disbursement",
      description:
        "Centralized ledger managing financial aid limits, medical voucher generation, and emergency goods inventory.",
      iconName: "Activity"
    },
    {
      title: "Executive Analytics & Geospatial Heatmaps",
      description:
        "High-level metrics on fund utilization, turnaround times, and geographical assistance distribution across municipal districts.",
      iconName: "BarChart3"
    }
  ],
  systemHighlights: [
    {
      title: "End-to-End Auditability",
      description: "Immutable transactional history logging every caseworker action, status transition, and disbursement event."
    },
    {
      title: "Sub-Second Search & Querying",
      description: "Optimized database indexes and multi-condition filtering across 10,000+ simulated citizen records."
    },
    {
      title: "Responsive Clerical Interface",
      description: "Custom keyboard shortcuts, high-contrast typography, and accessible form states designed for rapid daily operations."
    },
    {
      title: "Role-Based Access Security (RBAC)",
      description: "Granular permissions separating System Admins, Triage Clerks, Social Workers, and Department Heads."
    }
  ],
  challenges: [
    {
      challenge: "Preventing race conditions during simultaneous fund allocation requests across multiple municipal branches.",
      resolution:
        "Implemented database transaction isolation levels and atomic balance deduct checks using Prisma and PostgreSQL transactions."
    },
    {
      challenge: "Handling unreliable network connectivity in remote community extension centers.",
      resolution:
        "Engineered client-side optimistic UI updates with automatic retry queuing and structured error recovery states."
    }
  ],
  contributions: [
    "Architected the relational PostgreSQL database schema with 18 normalized tables and strict foreign key integrity.",
    "Engineered 28+ secure RESTful API endpoints with structured request validation and JWT-based role permissions.",
    "Built 100% of the caseworker verification queue and dynamic filtering interface using Next.js and TypeScript.",
    "Conducted rigorous integration testing and authored comprehensive technical system documentation and API schemas."
  ],
  githubUrl: "https://github.com/brixsese/capstone-resource-dispatch-system",
  liveUrl: "https://capstone-resource-dispatch.vercel.app",
  image: "/projects/capstone-showcase.svg"
};
