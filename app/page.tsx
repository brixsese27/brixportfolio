import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { About } from "@/components/about";
import { Skills } from "@/components/skills";
import { Projects } from "@/components/projects";
import { Capstone } from "@/components/capstone";
import { Experience } from "@/components/experience";
import { Education } from "@/components/education";
import { Contact } from "@/components/contact";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <div className="relative min-h-screen flex flex-col bg-background text-foreground selection:bg-brand-500/20 selection:text-brand-400">
      {/* Sticky Top Navigation */}
      <Navbar />

      {/* Main Content Sections in Strict Sequential Order */}
      <main className="flex-1 w-full">
        {/* 1. Hero / Landing */}
        <Hero />

        {/* 2. About Me */}
        <About />

        {/* 3. Skills / Tech Stack */}
        <Skills />

        {/* 4. Featured Projects */}
        <Projects />

        {/* 5. Dedicated Capstone Project */}
        <Capstone />

        {/* 6. Experience / Internship */}
        <Experience />

        {/* 7. Education */}
        <Education />

        {/* 8. Contact */}
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
