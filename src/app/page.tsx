import type { Metadata } from "next";
import dynamic from "next/dynamic";
import { Navbar } from "@/components/navbar";
import { HeroSection } from "@/components/hero-section";
import { AboutSection } from "@/components/about-section";
import { SkillsSection } from "@/components/skills-section";
import { ExperienceSection } from "@/components/experience-section";
import { ProjectsSection } from "@/components/projects-section";
import { ContactSection } from "@/components/contact-section";
import { Footer } from "@/components/footer";
import { SmoothScroll } from "@/components/cinematic/SmoothScroll";
import { Preloader } from "@/components/cinematic/Preloader";
import { Cursor } from "@/components/cinematic/Cursor";
import { SceneHud } from "@/components/cinematic/SceneHud";
import { GrainVignette } from "@/components/cinematic/GrainVignette";

// Dynamically load 3D SceneCanvas on client only
const SceneCanvas = dynamic(
  () => import("@/components/cinematic/SceneCanvas").then((mod) => mod.SceneCanvas),
  { ssr: false }
);

export const metadata: Metadata = {
  title: "Aman Naryal | Full Stack Developer",
  description:
    "Aman Naryal is a Full Stack Developer building APIs, products, and polished web experiences.",
};

export default function HomePage() {
  return (
    <SmoothScroll>
      <Preloader />
      <Cursor />
      <SceneHud />
      <GrainVignette />
      <SceneCanvas />

      <Navbar />

      <main className="relative z-10 min-h-screen overflow-x-clip text-graphite-100">
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ExperienceSection />
        <ProjectsSection />
        <ContactSection />
      </main>

      <Footer />
    </SmoothScroll>
  );
}

