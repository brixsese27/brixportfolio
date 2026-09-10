import { CertificateItem } from "@/types";

export const certificatesData: CertificateItem[] = [
  {
    id: "cert-comptia-a-plus",
    title: "CompTIA A+ 1000 - Part 1",
    issuer: "Alison",
    organization: "The CPD Certification Service (CPD Certified)",
    date: "September 10, 2026",
    credentialId: "1961-60482085",
    verifyUrl: "https://alison.com/verify/4746882785",
    image: "/alisoncert.jpg",
    category: "IT Support & Hardware",
    badgeText: "CPD Certified • IT Support",
    skills: [
      "Computer Hardware",
      "Networking",
      "Mobile Devices",
      "Hardware & Network Troubleshooting",
      "Operating Systems",
      "System Diagnostics"
    ],
    description:
      "Accredited foundation training in core IT support covering computer hardware components, mobile device maintenance, networking essentials, and systematic troubleshooting methodologies aligned with CompTIA A+ industry standards."
  },
  {
    id: "cert-windows-11-support",
    title: "Windows 11 for IT Support: Troubleshooting Basics",
    issuer: "LinkedIn Learning",
    organization: "LinkedIn Corporation",
    date: "September 10, 2026",
    credentialId: "be52d0cee58aedc8c22a2cc673fe5715d054a22518bf2ba4da38022589618e5b",
    image: "/win11cert.jpg",
    category: "Operating Systems & Helpdesk",
    badgeText: "LinkedIn Learning • Windows 11",
    skills: [
      "Software Troubleshooting",
      "Help Desk Support",
      "Windows 11 OS",
      "System Diagnostics",
      "Desktop Support"
    ],
    description:
      "Professional coursework in Windows 11 operating system troubleshooting, helpdesk support workflows, software diagnostics, and IT maintenance strategies for modern workstations."
  },
  {
    id: "cert-canva-essentials",
    title: "Canva Essentials",
    issuer: "Canva Design School",
    organization: "The Canva Team",
    date: "September 6, 2026",
    credentialId: "b217f9",
    verifyUrl: "https://www.canva.com/design-school/certification-award/b217f9e5-6a04-4ef8-b6c6-e20a8cebf53d",
    image: "/canvacert.jpg",
    category: "Digital Design & Media",
    badgeText: "Canva Certified • Digital Design",
    skills: [
      "Visual Communication",
      "Graphic Design Principles",
      "Digital Layouts",
      "Brand Asset Creation",
      "Technical Documentation Design"
    ],
    description:
      "Official training in visual design workflows, layout composition, typography, and digital asset creation for web storefronts, UI assets, and professional technical documentation."
  }
];
