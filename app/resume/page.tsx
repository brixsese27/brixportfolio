"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Printer,
  ArrowLeft,
  Mail,
  Phone,
  MapPin,
  Globe,
  ExternalLink,
  Download,
  CheckCircle2,
  Building,
  UserCheck
} from "lucide-react";
import { profileData } from "@/data/profile";

export default function ResumePage() {
  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="min-h-screen bg-zinc-100 dark:bg-zinc-900 py-6 sm:py-10 px-3 sm:px-6 text-zinc-900 font-sans">
      
      {/* Top Floating Action Bar (Hidden when Printing) */}
      <div className="max-w-[850px] mx-auto mb-6 flex flex-wrap items-center justify-between gap-3 print:hidden">
        <Link
          href="/"
          className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 text-xs font-mono font-semibold text-zinc-700 dark:text-zinc-200 hover:bg-zinc-50 dark:hover:bg-zinc-750 transition-all shadow-sm"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Portfolio
        </Link>

        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={handlePrint}
            className="inline-flex items-center gap-2 px-5 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-mono font-bold transition-all shadow-md hover:shadow-lg"
          >
            <Printer className="w-4 h-4" />
            Print / Save as PDF
          </button>
        </div>
      </div>

      {/* Printable Solid White A4 / Letter Document Container */}
      <div className="max-w-[850px] mx-auto bg-white border border-zinc-300 shadow-xl rounded-none sm:rounded-lg p-6 sm:p-12 text-zinc-900 leading-relaxed print:border-none print:shadow-none print:p-0 print:m-0 print:max-w-full">
        
        {/* Header: Name, Contact & Photo */}
        <div className="flex items-start justify-between gap-6 pb-4 border-b-2 border-zinc-900">
          <div className="space-y-1.5 flex-1">
            <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-zinc-950 font-sans uppercase">
              BRIX SESE
            </h1>
            
            <div className="text-xs sm:text-[13px] text-zinc-800 space-y-1 font-medium">
              <div className="flex flex-wrap items-center gap-x-2 gap-y-1">
                <a href="mailto:sesebrixligon@gmail.com" className="hover:underline font-semibold">
                  sesebrixligon@gmail.com
                </a>
                <span>|</span>
                <a href="tel:+639854026038" className="hover:underline font-semibold">
                  +639854026038
                </a>
              </div>

              <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-zinc-700">
                <a
                  href="https://brixportfolio.vercel.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline font-semibold text-emerald-700"
                >
                  https://brixportfolio.vercel.app
                </a>
                <span>|</span>
                <span>Trece Martires City, Cavite</span>
              </div>
            </div>
          </div>

          {/* Formal Photo Box */}
          <div className="w-24 h-28 sm:w-28 sm:h-32 border-2 border-zinc-900 bg-zinc-100 rounded shrink-0 overflow-hidden shadow-sm">
            <Image
              src="/2x2.jpg"
              alt="Brix Sese 2x2 Formal Photo"
              width={112}
              height={128}
              className="w-full h-full object-cover"
              priority
            />
          </div>
        </div>

        {/* Section 1: Professional Objective */}
        <div className="mt-5 space-y-1.5">
          <h2 className="text-sm sm:text-base font-bold tracking-wider uppercase text-zinc-950 border-b border-zinc-400 pb-0.5">
            PROFESSIONAL OBJECTIVE
          </h2>
          <p className="text-xs sm:text-[13px] text-zinc-800 text-justify leading-relaxed">
            A reliable and hardworking individual with experience in office support and technical maintenance. I am a fast learner, well-mannered, and always willing to learn new skills to improve my work. Committed to providing high-quality service and supporting the team in any task required.
          </p>
        </div>

        {/* Section 2: Technical Skills */}
        <div className="mt-5 space-y-2">
          <h2 className="text-sm sm:text-base font-bold tracking-wider uppercase text-zinc-950 border-b border-zinc-400 pb-0.5">
            TECHNICAL SKILLS
          </h2>
          
          <ul className="text-xs sm:text-[13px] text-zinc-800 space-y-1.5 list-disc list-outside pl-4">
            <li>
              <span className="font-bold text-zinc-950">Computer Literacy:</span> Proficient in using computers, productivity software (Microsoft Office, Google Workspace), file management, and common digital tools for daily work tasks.
            </li>
            <li>
              <span className="font-bold text-zinc-950">Computer/Laptop Hardware:</span> Knowledgeable in hardware components, basic troubleshooting, system maintenance, cleaning, upgrades, and peripheral setup.
            </li>
            <li>
              <span className="font-bold text-zinc-950">Software Tools &amp; Operating Systems:</span> Familiar with installing, configuring, updating, and troubleshooting Windows operating systems and common software applications.
            </li>
            <li>
              <span className="font-bold text-zinc-950">Vibe Coding using AI Agent (Gemini, ChatGPT, Claude Code):</span> Able to use AI-assisted coding tools to generate, understand, debug, and improve code and develop software solutions.
            </li>
          </ul>
        </div>

        {/* Section 3: Projects */}
        <div className="mt-5 space-y-2">
          <h2 className="text-sm sm:text-base font-bold tracking-wider uppercase text-zinc-950 border-b border-zinc-400 pb-0.5">
            PROJECTS
          </h2>

          <div className="space-y-3 text-xs sm:text-[13px] text-zinc-800">
            <div>
              <div className="font-bold text-zinc-950 italic">
                Static Culture (e-Commerce) | 2026
              </div>
              <ul className="list-disc list-outside pl-4 mt-0.5">
                <li>
                  Developed and deployed a responsive digital storefront for a clothing and lifestyle brand, showcasing products, collections, pricing, and product details.
                </li>
              </ul>
            </div>

            <div>
              <div className="font-bold text-zinc-950 italic">
                e-Biga MIS for Barangay Biga Tanza Cavite (Capstone Project) -{" "}
                <a
                  href="https://ebigatanza.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-emerald-700 underline font-normal"
                >
                  https://ebigatanza.com
                </a>
              </div>
              <ul className="list-disc list-outside pl-4 mt-0.5">
                <li>
                  A web-based Management Information System for Barangay Biga that digitizes resident records and streamlines barangay services, reporting, and document processing.
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Section 4: Education */}
        <div className="mt-5 space-y-2">
          <h2 className="text-sm sm:text-base font-bold tracking-wider uppercase text-zinc-950 border-b border-zinc-400 pb-0.5">
            EDUCATION
          </h2>

          <div className="space-y-2.5 text-xs sm:text-[13px]">
            <div>
              <div className="flex items-center justify-between font-bold text-zinc-950">
                <span>College - Bachelor of Science in Information Technology</span>
                <span className="font-normal text-zinc-700">2022 - August 19, 2026</span>
              </div>
              <div className="text-zinc-800">
                Cavite State University - Trece Martires Campus
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between font-bold text-zinc-950">
                <span>Senior High School - Information and Communication Technology</span>
                <span className="font-normal text-zinc-700">2020 - 2022</span>
              </div>
              <div className="text-zinc-800">
                Notre Dame of Trece Martirez
              </div>
            </div>
          </div>
        </div>

        {/* Section 5: Experience */}
        <div className="mt-5 space-y-2">
          <h2 className="text-sm sm:text-base font-bold tracking-wider uppercase text-zinc-950 border-b border-zinc-400 pb-0.5">
            EXPERIENCE
          </h2>

          <div className="text-xs sm:text-[13px] text-zinc-800">
            <div className="font-bold text-zinc-950 italic">
              IT DEPARTMENT INTERN - Gentri Doctors (486 hours)
            </div>
            <ul className="list-disc list-outside pl-4 mt-0.5 space-y-1">
              <li>
                Provided IT support through hardware maintenance and troubleshooting, software installation and configuration, Windows OS and Microsoft Office deployment, BizBox Hospital Information System support, basic network configuration and migration, printer setup, computer and file backups, and multimedia equipment installation across various hospital departments.
              </li>
            </ul>
          </div>
        </div>

        {/* Section 6: References */}
        <div className="mt-5 space-y-2">
          <h2 className="text-sm sm:text-base font-bold tracking-wider uppercase text-zinc-950 border-b border-zinc-400 pb-0.5">
            REFERENCE
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-[12px] text-zinc-800 pt-1">
            <div className="p-2.5 rounded border border-zinc-200 bg-zinc-50/60">
              <div className="font-bold text-zinc-950 text-sm">John Pearl Pintoy</div>
              <div className="text-zinc-700 font-medium">CSR - Gentri Doctors</div>
              <div className="mt-1 space-y-0.5 text-zinc-600 font-mono text-[11px]">
                <div>Tel: +639931447709</div>
                <div>Email: pearlpnty@gmail.com</div>
              </div>
            </div>

            <div className="p-2.5 rounded border border-zinc-200 bg-zinc-50/60">
              <div className="font-bold text-zinc-950 text-sm">Alyssa Mae Bathan</div>
              <div className="text-zinc-700 font-medium">CSR Teller - Metrobank Naic</div>
              <div className="mt-1 space-y-0.5 text-zinc-600 font-mono text-[11px]">
                <div>Tel: +639816481919</div>
                <div>Email: bathanalyssamae@gmail.com</div>
              </div>
            </div>
          </div>
        </div>

      </div>

      {/* Bottom Print Style Helpers */}
      <style jsx global>{`
        @media print {
          body {
            background-color: #ffffff !important;
            color: #000000 !important;
          }
          @page {
            margin: 12mm;
            size: auto;
          }
        }
      `}</style>
    </div>
  );
}
