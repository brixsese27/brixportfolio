import { CapstoneProject } from "@/types";

export interface CapstoneTechItem {
  name: string;
  category: string;
  iconType: string;
}

export const capstoneTechStack: CapstoneTechItem[] = [
  { name: "JavaScript", category: "Programming", iconType: "js" },
  { name: "PHPMailer", category: "Email Dispatch", iconType: "php" },
  { name: "HTML5", category: "Frontend Markup", iconType: "html" },
  { name: "CSS3", category: "Styling & Layout", iconType: "css" },
  { name: "Hostinger", category: "Web & Domain Hosting", iconType: "hostinger" },
  { name: "MySQL", category: "Relational Database", iconType: "mysql" },
  { name: "Semaphore SMS", category: "SMS Gateway API", iconType: "sms" }
];

export const capstoneData: CapstoneProject = {
  title: "e-Biga Management Information System",
  codeName: "Barangay Biga, Tanza, Cavite",
  badge: "BSIT Academic Capstone Project",
  tagline:
    "Web-based Management Information System for Barangay Biga that digitizes resident records and streamlines barangay services, reporting, and document processing.",
  overview:
    "A web-based Management Information System (MIS) engineered for Barangay Biga, Tanza, Cavite. The platform modernizes local government operations by digitizing resident census records, automating barangay clearances and certificates, managing incident blotters, and delivering automated SMS notifications.",
  problem:
    "Barangay staff previously handled resident records and document requests using manual handwritten logbooks and paper files, resulting in long waiting queues, misplaced documents, and time-consuming report preparation.",
  solution:
    "Developed a centralized web MIS with instant certificate generation (Barangay Clearance, Certificate of Indigency, Residency), automated resident profiling, SMS notifications via Semaphore, and secure data storage on MySQL.",
  myRole: "Full-Stack Developer & Technical Implementer",
  technologies: [
    "JavaScript",
    "PHPMailer",
    "HTML",
    "CSS",
    "Hostinger",
    "MySQL",
    "Semaphore SMS"
  ],
  majorFeatures: [
    {
      title: "Resident Census & Household Records",
      description:
        "Centralized database capturing resident profiles, household classifications, and family records.",
      iconName: "FileCheck"
    },
    {
      title: "Automated Certificate Issuance",
      description:
        "Instant generation and printing of Barangay Clearance, Indigency, and Residency certificates.",
      iconName: "FileText"
    },
    {
      title: "Digital Blotter & Incident Tracking",
      description:
        "Confidential logging of community complaints, hearing schedules, and incident resolutions.",
      iconName: "ShieldAlert"
    },
    {
      title: "SMS Notifications via Semaphore",
      description:
        "Automated text messaging to residents regarding document readiness and barangay announcements.",
      iconName: "Send"
    }
  ],
  systemHighlights: [
    {
      title: "Fast Document Turnaround",
      description: "Reduced resident waiting time for official certificates to under 2 minutes."
    },
    {
      title: "Live Production Domain",
      description: "Deployed to live domain at https://ebigatanza.com/homepage for community usage."
    }
  ],
  challenges: [],
  contributions: [],
  githubUrl: "https://github.com/brixsese27/brixportfolio",
  liveUrl: "https://ebigatanza.com/homepage",
  image: "/ebigahomepage.png"
};
