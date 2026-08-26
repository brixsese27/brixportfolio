import { SkillCategory } from "@/types";

export const skillCategories: SkillCategory[] = [
  {
    id: "hardware",
    title: "Hardware Maintenance & Troubleshooting",
    description: "Hands-on computer, laptop, peripheral diagnosis, and physical maintenance.",
    skills: [
      {
        name: "PC & Laptop Hardware",
        level: "Proficient",
        description: "Component diagnosis, disassembly, hardware upgrades (RAM, SSD/HDD, PSU), and parts replacement.",
        iconName: "Cpu",
        highlight: true
      },
      {
        name: "Basic Troubleshooting",
        level: "Proficient",
        description: "Diagnosing POST errors, boot issues, hardware malfunctions, thermal throttling, and component failure.",
        iconName: "Terminal",
        highlight: true
      },
      {
        name: "Preventive Maintenance",
        level: "Proficient",
        description: "System cleaning, dust removal, thermal paste application, cable management, and routine checks.",
        iconName: "Sparkles",
        highlight: true
      },
      {
        name: "Peripheral & Equipment Setup",
        level: "Proficient",
        description: "Installing and calibrating network printers, flatbed scanners, projectors, and multimedia equipment.",
        iconName: "Laptop",
        highlight: true
      }
    ]
  },
  {
    id: "software",
    title: "Operating Systems & Office Software",
    description: "Installing, deploying, and supporting OS and productivity applications.",
    skills: [
      {
        name: "Windows OS Deployment",
        level: "Proficient",
        description: "Clean installation, configuration, disk formatting, driver updates, and recovery for Windows 10 & 11.",
        iconName: "Laptop",
        highlight: true
      },
      {
        name: "Microsoft Office Suite",
        level: "Proficient",
        description: "Word, Excel (spreadsheets/reporting), PowerPoint, and Outlook configuration for daily office tasks.",
        iconName: "FileCode",
        highlight: true
      },
      {
        name: "BizBox HIS Support",
        level: "Proficient",
        description: "Hospital Information System user support, client module configuration, and workstation troubleshooting.",
        iconName: "Server",
        highlight: true
      },
      {
        name: "Software & Driver Maintenance",
        level: "Proficient",
        description: "Deploying enterprise software applications, security patches, antivirus setup, and driver updates.",
        iconName: "Boxes"
      }
    ]
  },
  {
    id: "network",
    title: "Networking & System Administration",
    description: "Basic network configuration, backup operations, and user assistance.",
    skills: [
      {
        name: "LAN & Ethernet Cabling",
        level: "Proficient",
        description: "RJ-45 termination, cable crimping, patch panel patching, and physical network link testing.",
        iconName: "Network",
        highlight: true
      },
      {
        name: "Basic Network Setup",
        level: "Proficient",
        description: "Configuring Wi-Fi access points, router setup, IP addressing, DNS settings, and network printer sharing.",
        iconName: "Cloud",
        highlight: true
      },
      {
        name: "Data Backup & Recovery",
        level: "Proficient",
        description: "Executing routine computer and file backups, external storage archiving, and data migration.",
        iconName: "Database",
        highlight: true
      },
      {
        name: "IT Helpdesk & End-User Support",
        level: "Proficient",
        description: "Providing on-site and remote technical assistance, user training, and issue ticketing across departments.",
        iconName: "Send",
        highlight: true
      }
    ]
  },
  {
    id: "vibe-coding",
    title: "Vibe Coding & Digital Solutions",
    description: "AI-assisted programming and web application development tools.",
    skills: [
      {
        name: "Vibe Coding / AI Agents",
        level: "Proficient",
        description: "Using Gemini, ChatGPT, and Claude Code to generate, understand, debug, and improve code for digital solutions.",
        iconName: "Sparkles",
        highlight: true
      },
      {
        name: "Web Technologies (Next.js/React)",
        level: "Proficient",
        description: "Building responsive web pages, form handling, and user interfaces with HTML5, CSS3, TypeScript, and Next.js.",
        iconName: "Code2",
        highlight: true
      },
      {
        name: "Git & GitHub",
        level: "Proficient",
        description: "Version control, repository management, committing code, and collaborating on digital projects.",
        iconName: "GitBranch",
        highlight: true
      },
      {
        name: "VS Code",
        level: "Proficient",
        description: "Workspace configuration, extensions management, terminal usage, and code debugging.",
        iconName: "Terminal"
      }
    ]
  }
];
