import { CapstoneProject } from "@/types";

export const capstoneData: CapstoneProject = {
  title: "e-Biga MIS for Barangay Biga, Tanza, Cavite",
  codeName: "e-Biga Management Information System",
  badge: "BSIT Academic Capstone — Flagship Digital System",
  tagline:
    "A web-based Management Information System that digitizes resident records and streamlines barangay services, reporting, and document processing.",
  overview:
    "As the flagship capstone project for our BS Information Technology degree, e-Biga MIS was developed specifically for Barangay Biga, Tanza, Cavite. The system modernizes local government operations by replacing manual paper logbooks with a centralized, secure digital platform for resident census data, certificate generation, incident blotter tracking, and administrative reporting.",
  problem:
    "Barangay staff faced significant delays using manual paper-based filing systems and spreadsheets—resulting in long queuing lines for residents requesting clearances, high risk of physical document damage, record duplication, and difficult end-of-month report consolidation.",
  solution:
    "Engineered a full-featured web-based Management Information System that centralizes resident profiles, automates instant one-click barangay certificate and clearance generation, tracks blotter records securely, and produces real-time demographic analytics for barangay officials.",
  myRole:
    "Lead Technical Developer & Systems Implementer: Led the system architecture and database design, developed administrative document generation workflows, integrated data validation mechanisms, and deployed the production system for community usage at ebigatanza.com.",
  technologies: [
    "Web Application",
    "Database Management",
    "Responsive UI",
    "Document Automation",
    "Security & RBAC",
    "AI-Assisted Vibe Coding"
  ],
  majorFeatures: [
    {
      title: "Resident Census & Household Records",
      description:
        "Centralized database capturing family records, senior citizen classifications, voter statuses, and emergency contact details.",
      iconName: "FileCheck"
    },
    {
      title: "Automated Certificate Issuance",
      description:
        "One-click generation and printing of Barangay Clearance, Certificate of Indigency, Certificate of Residency, and Business Clearances.",
      iconName: "FileText"
    },
    {
      title: "Digital Blotter & Incident Management",
      description:
        "Confidential logging of community complaints, mediation hearing schedules, incident resolutions, and case status tracking.",
      iconName: "ShieldAlert"
    },
    {
      title: "Demographic Analytics & Reporting",
      description:
        "Automated consolidation of monthly barangay summaries, population counts, sector reports, and printable official documents.",
      iconName: "BarChart3"
    }
  ],
  systemHighlights: [
    {
      title: "Fast Document Turnaround",
      description: "Reduced resident waiting time for official certificates from 30+ minutes of manual handwriting to under 2 minutes."
    },
    {
      title: "Data Integrity & Verification",
      description: "Structured relational tables eliminate duplicate resident records and ensure accurate household demographics."
    },
    {
      title: "Role-Based Access Control",
      description: "Protected administrative access separating Barangay Captain, Secretary, Health Workers, and Triage Clerks."
    },
    {
      title: "Live Production Deployment",
      description: "Deployed to live domain at https://ebigatanza.com for direct community and office utilization."
    }
  ],
  challenges: [
    {
      challenge: "Transitioning legacy handwritten paper records with inconsistent data formats into structured digital tables.",
      resolution:
        "Created standardized input validation schemas and bulk verification workflows to ensure accurate record migration."
    },
    {
      challenge: "Ensuring non-technical barangay office staff could navigate and operate the system efficiently.",
      resolution:
        "Designed a clean, accessible user interface with intuitive action buttons, clear visual feedback, and quick-print shortcuts."
    }
  ],
  contributions: [
    "Architected the relational database schema to model residents, households, certificates, and blotter incidents.",
    "Built dynamic certificate formatting modules that output printable, formatted official barangay documents.",
    "Implemented role-scoped security protections ensuring sensitive resident records remain confidential.",
    "Conducted end-user training sessions for Barangay Biga administrative staff to ensure smooth system adoption."
  ],
  githubUrl: "https://github.com/brixsese27/brixportfolio",
  liveUrl: "https://ebigatanza.com",
  image: "/projects/ebiga-mis.svg"
};
