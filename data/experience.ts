import { ExperienceItem } from "@/types";

export const experienceData: ExperienceItem[] = [
  {
    id: "exp-1",
    company: "[Company / Organization Name]", // [INSERT COMPANY NAME]
    position: "Software Developer Intern (OJT)", // [INSERT POSITION]
    type: "Internship / On-the-Job Training",
    period: "January 2024 – May 2024", // [INSERT DATES]
    location: "[Location / Hybrid / On-site]", // [INSERT LOCATION]
    description:
      "Completed 480+ hours of intensive software development and IT systems engineering training, collaborating with senior developers on internal web platforms and client portal features.",
    responsibilities: [
      "Collaborated with cross-functional development teams to build and maintain responsive frontend interfaces using Next.js and React.",
      "Assisted in refactoring legacy JavaScript components to strictly-typed TypeScript for improved codebase reliability.",
      "Integrated RESTful API endpoints, validated client-side payload submissions, and handled API error responses gracefully.",
      "Participated in weekly Agile sprint meetings, daily standups, code reviews, and Git feature-branch workflows."
    ],
    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Git", "GitHub", "REST APIs", "Postman"],
    keyContributions: [
      "Refactored 15+ complex UI modules to reusable Tailwind components, improving styling consistency across the portal.",
      "Identified and resolved frontend layout bugs across mobile and desktop viewports, enhancing user responsiveness.",
      "Authored detailed developer documentation for API endpoint integration and setup guides for future interns."
    ]
  },
  {
    id: "exp-2",
    company: "Academic Systems Development",
    position: "Lead Student Software Developer",
    type: "Academic Project Engineering",
    period: "August 2023 – December 2023",
    location: "[University Department / Campus]",
    description:
      "Spearheaded the development of internal departmental project tools and academic system prototypes, establishing technical standards for student engineering teams.",
    responsibilities: [
      "Architected database schemas, entity relationship diagrams (ERD), and system flowcharts for academic software projects.",
      "Implemented responsive web dashboards and conducted unit testing across core user interaction modules.",
      "Facilitated technical code reviews and version control guidelines for team members."
    ],
    technologies: ["React", "TypeScript", "Node.js", "MySQL", "Git", "Figma"],
    keyContributions: [
      "Delivered production-ready project prototypes on schedule following standard Software Development Life Cycle (SDLC) phases.",
      "Implemented reusable UI component libraries adopted across multiple departmental project teams."
    ]
  }
];
