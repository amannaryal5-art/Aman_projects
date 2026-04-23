import type { Metadata } from "next";
import { AboutSection } from "@/components/about-section";
import { ContactSection } from "@/components/contact-section";
import { ExperienceSection } from "@/components/experience-section";
import { HeroSection } from "@/components/hero-section";
import { Navbar } from "@/components/navbar";
import { ProjectsSection } from "@/components/projects-section";
import { SkillsSection } from "@/components/skills-section";

export const metadata: Metadata = {
  title: "Aman Naryal | Full Stack Developer",
  description:
    "Aman Naryal is a Full Stack Developer building APIs, products, and polished web experiences."
};

export default function HomePage() {
  return (
    <main className="min-h-screen overflow-x-clip bg-bg text-text">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ExperienceSection />
      <ProjectsSection />
      <ContactSection />
    </main>
  );
}
