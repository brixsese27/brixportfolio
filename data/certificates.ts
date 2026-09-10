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
    id: "cert-canva-essentials",
    title: "Canva Essentials",
    issuer: "Canva Design School",
    organization: "The Canva Team",
    date: "September 6, 2026",
    credentialId: "b217f9",
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
