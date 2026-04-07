import { AboutSection } from "@/components/about-section";
import { ContactSection } from "@/components/contact-section";
import { ExperienceSection } from "@/components/experience-section";
import { HeroSection } from "@/components/hero-section";
import { LearningStrip } from "@/components/learning-strip";
import { Navbar } from "@/components/navbar";
import { ProjectsSection } from "@/components/projects-section";
import { SkillsSection } from "@/components/skills-section";

export default function Home() {
  return (
    <div className="min-h-screen bg-bg text-text">
      <Navbar />
      <main className="pb-16 pt-24 md:pt-28">
        <HeroSection />
        <AboutSection />
        <ExperienceSection />
        <ProjectsSection />
        <SkillsSection />
        <LearningStrip />
        <ContactSection />
      </main>
    </div>
  );
}
