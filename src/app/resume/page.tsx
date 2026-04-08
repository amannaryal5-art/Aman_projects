import type { Metadata } from "next";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { ContactForm } from "@/components/resume/ContactForm";
import { EducationSection } from "@/components/resume/EducationSection";
import { ExperienceTimeline } from "@/components/resume/ExperienceTimeline";
import { ProjectsList } from "@/components/resume/ProjectsList";
import { ResumeHeader } from "@/components/resume/ResumeHeader";
import { SkillsGrid } from "@/components/resume/SkillsGrid";
import { resumeProfile, resumeSummary } from "@/data/resume";

export const metadata: Metadata = {
  title: "Aman Naryal | Resume",
  description: "Resume and professional profile for Aman Naryal, Full Stack Developer focused on backend systems and API architecture."
};

export default function ResumePage() {
  return (
    <main className="min-h-screen overflow-x-clip bg-bg text-text">
      <div className="section-shell pt-8">
        <Link
          href="/"
          className="fade-up inline-flex items-center gap-2 text-sm text-slate-400 transition-colors hover:text-accent"
        >
          <ArrowLeft className="h-4 w-4" />
          <span>Back to home</span>
        </Link>
      </div>

      <ResumeHeader />

      <section className="section-shell fade-up delay-1 pb-6 pt-4">
        <div className="resume-panel p-7 md:p-9">
          <p className="section-kicker">Summary</p>
          <p className="mt-4 max-w-3xl text-base leading-8 text-slate-300">{resumeSummary}</p>
          <div className="mt-6 flex flex-wrap gap-3 text-sm text-slate-400">
            <span>{resumeProfile.location}</span>
            <span className="text-slate-600" aria-hidden>
              /
            </span>
            <span>{resumeProfile.status}</span>
          </div>
        </div>
      </section>

      <ExperienceTimeline />
      <EducationSection />
      <ProjectsList />
      <SkillsGrid />
      <ContactForm />

      <section className="section-shell fade-up delay-5 pb-16 pt-4 md:pb-20">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm text-slate-400 transition-colors hover:text-accent"
        >
          <ArrowLeft className="h-4 w-4" />
          <span>Back to home</span>
        </Link>
      </section>
    </main>
  );
}
