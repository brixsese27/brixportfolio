import { Project } from "@/types";

export const projectsData: Project[] = [
  {
    id: "project-1",
    slug: "inventory-asset-management-system",
    title: "Enterprise Asset & Inventory Management System",
    tagline: "Full-stack web application for centralized hardware tracking, automated depreciation, and audit logs.",
    category: "Full-Stack Web App",
    description:
      "A comprehensive internal web system built to modernize manual asset logging, equipment lifecycle tracking, and maintenance requests with real-time status reporting.",
    problem:
      "Manual spreadsheet-based tracking resulted in misplaced hardware assets, inaccurate depreciation records, and delayed maintenance scheduling across departments.",
    solution:
      "Engineered a centralized relational web system featuring role-based access control (RBAC), automated QR/barcode generation for physical items, status tracking, and audit-ready reporting.",
    myRole:
      "Full-Stack Developer: Designed the relational MySQL schema, built RESTful backend endpoints in Node.js/Express, and crafted the responsive Next.js/Tailwind management dashboard.",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Node.js", "Express.js", "MySQL", "Prisma"],
    features: [
      "Role-Based Access Control (Admin, Custodian, Department Staff)",
      "Real-time Asset Status Dashboard & Maintenance Lifecycle Tracking",
      "Automated PDF/CSV Report Generation for Audits",
      "Dynamic Search, Filter, and Batch Asset Categorization",
      "Audit Log History recording timestamped user modifications"
    ],
    highlights: [
      "Eliminated manual inventory discrepancies through relational constraints",
      "Sub-200ms API response times across 1,000+ asset queries",
      "Fully responsive interface optimized for desktop and mobile tablets"
    ],
    challenges: [
      "Handling complex relational cascades when archiving historical asset allocations without losing audit trails.",
      "Optimizing multi-filter queries across large inventory datasets by implementing database indexing."
    ],
    githubUrl: "https://github.com/brixsese/asset-management-system",
    liveUrl: "https://asset-management-demo.vercel.app",
    image: "/projects/asset-mgmt.svg"
  },
  {
    id: "project-2",
    slug: "campus-event-ticketing-portal",
    title: "Campus Event Management & QR Verification Portal",
    tagline: "Event scheduling, digital registration, and instant QR-code attendee verification system.",
    category: "Web Application",
    description:
      "A digital platform allowing student organizations to publish university events, manage attendee capacities, and verify check-ins in real time using camera QR scanners.",
    problem:
      "Student organizations faced long check-in queues, duplicated attendee lists, and lack of real-time attendance analytics during campus conferences and seminars.",
    solution:
      "Developed a web portal that generates unique encrypted QR passes sent via email upon registration and provides a lightweight mobile-optimized scanner for event organizers.",
    myRole:
      "Frontend & Integration Developer: Developed the modern responsive UI in React/Tailwind, integrated camera QR scanning libraries, and connected client forms to REST API services.",
    technologies: ["React", "TypeScript", "Tailwind CSS", "Node.js", "PostgreSQL", "Lucide React"],
    features: [
      "Dynamic Event Discovery & Capacity-Limited Registration",
      "Unique Cryptographic QR Ticket Generation for Registered Attendees",
      "Mobile-Friendly Camera Scanner for On-Site Instant Check-In",
      "Live Attendance Counter & Organizer Analytics Dashboard",
      "Automated Confirmation & Reminder Delivery"
    ],
    highlights: [
      "Reduced attendee check-in time from 45 seconds to under 3 seconds per student",
      "Zero registration collisions during peak campus enrollment windows",
      "Client-side QR parsing directly in the browser with no app installation required"
    ],
    challenges: [
      "Ensuring reliable camera stream performance across low-end mobile devices under varying lighting conditions.",
      "Preventing ticket duplication by enforcing single-scan transactional validations."
    ],
    githubUrl: "https://github.com/brixsese/campus-event-portal",
    liveUrl: "https://campus-events-demo.vercel.app",
    image: "/projects/event-portal.svg"
  },
  {
    id: "project-3",
    slug: "clinical-appointment-records-system",
    title: "Outpatient Clinic Appointment & Health Records System",
    tagline: "Secure scheduling, electronic health records (EHR), and prescription management platform.",
    category: "Healthcare System",
    description:
      "A modular medical clinic portal designed to streamline patient appointment booking, doctor consultation queues, and secure digital medical history management.",
    problem:
      "Clinics struggled with paper record fragmentation, missed appointments, and chaotic morning walk-in queue management.",
    solution:
      "Created an intuitive portal connecting patients, receptionists, and doctors with synchronized schedule slots, digital consultation notes, and prescription generators.",
    myRole:
      "Lead Developer: Designed system architecture, implemented patient/doctor dashboard workflows, designed normalized database tables, and built responsive data tables.",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "PostgreSQL", "Node.js"],
    features: [
      "Interactive Doctor Calendar & Slot Availability Engine",
      "Patient Consultation History & Digital Prescription Formatter",
      "Receptionist Triage & Live Queue Management Board",
      "Data privacy protections with role-scoped medical record visibility",
      "Exportable medical certificates and summary slips"
    ],
    highlights: [
      "Normalized 12+ relational database tables adhering to 3NF standards",
      "Clean, accessible interface designed specifically for fast clerical data entry",
      "Strict type safety throughout client and server communication contracts"
    ],
    challenges: [
      "Designing a slot reservation mechanism that avoids double-booking race conditions during simultaneous patient checkouts.",
      "Creating accessible forms with keyboard navigation shortcuts for fast receptionist data entry."
    ],
    githubUrl: "https://github.com/brixsese/clinic-records-system",
    liveUrl: "https://clinic-system-demo.vercel.app",
    image: "/projects/clinic-system.svg"
  },
  {
    id: "project-4",
    slug: "e-commerce-product-catalog",
    title: "Modern E-Commerce Storefront & Order Management",
    tagline: "High-performance shopping experience with instant search, multi-facet filtering, and cart state.",
    category: "E-Commerce / Frontend",
    description:
      "A fast, modern e-commerce storefront engineered with Next.js App Router, featuring instant client-side search, persistent shopping cart, and animated checkout flow.",
    problem:
      "Legacy e-commerce templates often suffer from bloated JavaScript payloads, slow page transitions, and jarring layout shifts during filtering.",
    solution:
      "Constructed a lightweight, component-driven storefront with URL-synchronized filter state, optimistic cart updates, and accessible keyboard navigation.",
    myRole:
      "Frontend Developer: Built the complete component architecture, implemented state management hooks, and optimized Lighthouse performance metrics.",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "Lucide React"],
    features: [
      "Instant Fuzzy Product Search & Category Filtering",
      "Persistent Cart with Local Storage Synchronization",
      "Accessible Modal Lightbox for Product Image Inspection",
      "Responsive Grid with Smooth Framer Motion Micro-Interactions",
      "Simulated Multi-Step Checkout with Form Validation"
    ],
    highlights: [
      "Achieved 98+ Lighthouse Performance and 100 Accessibility score",
      "Zero external UI framework dependencies beyond custom Tailwind primitives",
      "Seamless dark and light theme switching"
    ],
    challenges: [
      "Synchronizing multi-select filter parameters with browser URL query strings without triggering full page re-renders.",
      "Building accessible dialog and dropdown primitives from scratch."
    ],
    githubUrl: "https://github.com/brixsese/ecommerce-storefront",
    liveUrl: "https://ecommerce-storefront-demo.vercel.app",
    image: "/projects/ecommerce-storefront.svg"
  }
];
