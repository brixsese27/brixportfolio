import { Profile } from "@/types";

export const profileData: Profile = {
  name: "Brix Sese",
  degree: "Bachelor of Science in Information Technology",
  field: "Software & Web Development",
  headline: "Building practical digital experiences through clean code.",
  subheadline:
    "BSIT graduate focused on building modern web applications, scalable digital solutions, and intuitive, user-centered interfaces.",
  status: "Fresh Graduate / Open to Opportunities",
  location: "[Metro Manila, Philippines / Your Location]",
  email: "brixsese.dev@gmail.com", // [INSERT EMAIL]
  github: "https://github.com/brixsese", // [INSERT GITHUB URL]
  linkedin: "https://linkedin.com/in/brixsese", // [INSERT LINKEDIN URL]
  resumeUrl: "/resume.pdf", // [INSERT RESUME FILE/LINK]
  bioParagraphs: [
    "I am a Bachelor of Science in Information Technology graduate with a deep passion for modern web technologies and software engineering. Throughout my academic training, I focused on turning complex business requirements into clean, maintainable, and high-performance digital applications.",
    "My development philosophy centers on engineering simplicity, responsive design, and practical system architecture. Rather than relying on superficial trends, I strive to write readable TypeScript, build accessible interfaces, and design robust database structures that solve genuine operational problems.",
    "As an early-career developer, I bring strong problem-solving fundamentals, high adaptability, and eagerness to contribute to a collaborative engineering team while continuously refining my technical craft."
  ],
  focusAreas: [
    "Frontend Engineering (Next.js, React, TypeScript)",
    "Full-Stack Web Systems & RESTful APIs",
    "Responsive, Accessible UI/UX Implementation",
    "Relational Database Design & Systems Integration"
  ],
  principles: [
    {
      title: "Clean Architecture",
      description: "Writing modular, self-documenting code with strict type safety and structured directory patterns."
    },
    {
      title: "Performance & Accessibility",
      description: "Prioritizing fast load times, zero layout shift, semantic HTML, and responsive mobile-first views."
    },
    {
      title: "Practical Problem Solving",
      description: "Focusing on delivering functional, reliable software that solves real user and business workflows."
    }
  ],
  quickStats: [
    {
      label: "Degree",
      value: "BSIT",
      context: "Information Technology"
    },
    {
      label: "Specialization",
      value: "Full-Stack",
      context: "Web & Software Dev"
    },
    {
      label: "Status",
      value: "Available",
      context: "Junior & Associate Roles"
    }
  ]
};
