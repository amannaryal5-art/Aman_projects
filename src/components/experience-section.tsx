"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Award, Briefcase, GraduationCap } from "lucide-react";
import Link from "next/link";
import { experienceEntries } from "@/lib/data";

interface TimelineEntry {
  period: string;
  company?: string;
  role: string;
  location?: string;
  outcome?: string;
  badge?: string;
  current?: boolean;
  tags: string[];
  detail: string;
}

export function ExperienceSection() {
  const [activeTab, setActiveTab] = useState<"work" | "education" | "certifications">("work");

  const workEntries = experienceEntries.filter(
    (entry) => entry.badge !== "Education" && entry.badge !== "Certification"
  );
  const educationEntries = experienceEntries.filter((entry) => entry.badge === "Education");
  const certificationEntries = experienceEntries.filter((entry) => entry.badge === "Certification");

  // Handle URL hash changes (e.g. clicking Education in Navbar)
  useEffect(() => {
    const handleHash = () => {
      if (typeof window !== "undefined") {
        if (window.location.hash === "#education") {
          setActiveTab("education");
        } else if (window.location.hash === "#experience") {
          setActiveTab("work");
        }
      }
    };

    handleHash();
    window.addEventListener("hashchange", handleHash);
    return () => window.removeEventListener("hashchange", handleHash);
  }, []);

  return (
    <section id="experience" className="section-shell scroll-mt-24 py-14 md:py-20 relative">
      {/* Anchor for navbar #education link */}
      <div id="education" className="absolute -top-24 pointer-events-none" />

      {/* Scene Marker */}
      <div className="flex items-center gap-2 mb-4">
        <span className="font-mono text-[11px] tracking-[0.26em] text-spark uppercase font-semibold">
          SCENE 04 // THE JOURNEY
        </span>
        <span className="h-px w-8 bg-spark/30" />
      </div>

      {/* Heading */}
      <div className="max-w-3xl mb-8">
        <h2 className="font-display font-extrabold tracking-[-0.03em] leading-[0.96] text-[clamp(2.2rem,5vw,3.8rem)] text-left mb-4">
          <span className="sr-only">Engineering Journey & practical depth.</span>
          <span aria-hidden="true" className="block text-graphite-100">
            Engineering Journey &amp;
          </span>
          <span aria-hidden="true" className="block text-spark">
            practical depth.
          </span>
        </h2>
        <p className="font-sans text-sm sm:text-base text-graphite-300 leading-relaxed">
          From hands-on product work and technical training to advanced computer science academics.
        </p>
      </div>

      {/* Tab Switcher Pills */}
      <div className="flex flex-wrap items-center gap-2 mb-8 border-b border-hairline pb-4">
        <button
          type="button"
          onClick={() => setActiveTab("work")}
          className={`inline-flex items-center gap-2 px-4 py-2 rounded-full font-mono text-xs uppercase tracking-wider transition-all duration-200 ${
            activeTab === "work"
              ? "bg-spark text-graphite-950 font-bold shadow-spark-sm"
              : "border border-hairline bg-graphite-900 text-graphite-300 hover:text-white hover:border-spark/30"
          }`}
        >
          <Briefcase className="w-3.5 h-3.5" />
          <span>Work Experience</span>
          <span
            className={`px-1.5 py-0.5 rounded-full text-[10px] font-mono ${
              activeTab === "work" ? "bg-graphite-950/20 text-graphite-950" : "bg-graphite-800 text-spark"
            }`}
          >
            {workEntries.length}
          </span>
        </button>

        <button
          type="button"
          onClick={() => setActiveTab("education")}
          className={`inline-flex items-center gap-2 px-4 py-2 rounded-full font-mono text-xs uppercase tracking-wider transition-all duration-200 ${
            activeTab === "education"
              ? "bg-spark text-graphite-950 font-bold shadow-spark-sm"
              : "border border-hairline bg-graphite-900 text-graphite-300 hover:text-white hover:border-spark/30"
          }`}
        >
          <GraduationCap className="w-3.5 h-3.5" />
          <span>Education</span>
          <span
            className={`px-1.5 py-0.5 rounded-full text-[10px] font-mono ${
              activeTab === "education" ? "bg-graphite-950/20 text-graphite-950" : "bg-graphite-800 text-spark"
            }`}
          >
            {educationEntries.length}
          </span>
        </button>

        <button
          type="button"
          onClick={() => setActiveTab("certifications")}
          className={`inline-flex items-center gap-2 px-4 py-2 rounded-full font-mono text-xs uppercase tracking-wider transition-all duration-200 ${
            activeTab === "certifications"
              ? "bg-spark text-graphite-950 font-bold shadow-spark-sm"
              : "border border-hairline bg-graphite-900 text-graphite-300 hover:text-white hover:border-spark/30"
          }`}
        >
          <Award className="w-3.5 h-3.5" />
          <span>Certifications</span>
          <span
            className={`px-1.5 py-0.5 rounded-full text-[10px] font-mono ${
              activeTab === "certifications" ? "bg-graphite-950/20 text-graphite-950" : "bg-graphite-800 text-spark"
            }`}
          >
            {certificationEntries.length}
          </span>
        </button>
      </div>

      {/* Tab Content Display */}
      <AnimatePresence mode="wait">
        {activeTab === "work" && (
          <motion.div
            key="work-tab"
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.28 }}
            className="relative pl-7 sm:pl-9"
          >
            {/* Glowing timeline rail */}
            <div className="absolute left-2.5 sm:left-3 top-2 bottom-0 w-px bg-[linear-gradient(180deg,rgba(182,255,46,0.65),rgba(182,255,46,0.15))] shadow-spark-sm" />

            <div className="space-y-6">
              {workEntries.map((entry, index) => (
                <div key={`${entry.period}-${entry.role}`} className="relative">
                  <span
                    className={`absolute -left-[1.62rem] sm:-left-[1.8rem] top-5 w-3.5 h-3.5 rounded-full bg-spark border-2 border-graphite-950 shadow-spark-sm ${
                      entry.current ? "ring-4 ring-spark/20" : ""
                    }`}
                    aria-hidden="true"
                  />

                  <div className="rounded-2xl border border-hairline bg-graphite-800 p-5 sm:p-6 shadow-card transition-colors duration-300 hover:border-spark/30">
                    <div className="flex flex-col gap-3">
                      <div className="flex flex-wrap items-center gap-2">
                        {entry.current || entry.badge ? (
                          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full border border-spark/30 bg-spark/10 font-mono text-[10px] uppercase tracking-wider text-spark font-medium">
                            {entry.badge ?? "Current"}
                          </span>
                        ) : null}

                        <span className="font-mono text-xs text-graphite-400 uppercase tracking-wider">
                          {entry.period}
                        </span>

                        {entry.location && (
                          <span className="font-mono text-xs text-graphite-400 uppercase tracking-wider">
                            • {entry.location}
                          </span>
                        )}
                      </div>

                      {entry.company && (
                        <h3 className="font-display text-xl sm:text-2xl font-bold tracking-tight text-graphite-100">
                          {entry.company}
                        </h3>
                      )}

                      <p className="font-mono text-sm text-graphite-300 font-medium">
                        {entry.role}
                      </p>

                      <div className="flex flex-wrap gap-1.5 my-1">
                        {entry.tags.map((tag) => (
                          <span
                            key={tag}
                            className="inline-flex items-center px-2 py-0.5 rounded-md border border-hairline bg-graphite-900/70 font-mono text-xs text-graphite-400"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      <p className="font-sans text-sm sm:text-[15px] leading-relaxed text-graphite-300">
                        {entry.detail}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        )}

        {activeTab === "education" && (
          <motion.div
            key="education-tab"
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.28 }}
            className="relative pl-7 sm:pl-9"
          >
            <div className="absolute left-2.5 sm:left-3 top-2 bottom-0 w-px bg-[linear-gradient(180deg,rgba(182,255,46,0.65),rgba(182,255,46,0.15))] shadow-spark-sm" />

            <div className="space-y-6">
              {educationEntries.map((entry) => (
                <div key={`${entry.period}-${entry.role}`} className="relative">
                  <span
                    className="absolute -left-[1.62rem] sm:-left-[1.8rem] top-5 w-3.5 h-3.5 rounded-full border-2 border-spark bg-graphite-950 shadow-spark-sm"
                    aria-hidden="true"
                  />

                  <div className="rounded-2xl border border-hairline bg-graphite-800 p-5 sm:p-6 shadow-card transition-colors duration-300 hover:border-spark/30">
                    <div className="flex flex-col gap-2.5">
                      <div className="flex flex-wrap items-center gap-2">
                        <span className="font-mono text-xs text-graphite-400 uppercase tracking-wider">
                          {entry.period}
                        </span>

                        {entry.location && (
                          <span className="font-mono text-xs text-graphite-400 uppercase tracking-wider">
                            • {entry.location}
                          </span>
                        )}

                        {entry.outcome && (
                          <span className="inline-flex items-center px-2 py-0.5 rounded-full border border-spark/20 bg-spark/5 font-mono text-xs text-spark">
                            {entry.outcome}
                          </span>
                        )}
                      </div>

                      {entry.company && (
                        <h3 className="font-display text-xl sm:text-2xl font-bold tracking-tight text-graphite-100">
                          {entry.company}
                        </h3>
                      )}

                      <p className="font-mono text-sm text-graphite-300 font-medium">
                        {entry.role}
                      </p>

                      <div className="flex flex-wrap gap-1.5 my-1">
                        {entry.tags.map((tag) => (
                          <span
                            key={tag}
                            className="inline-flex items-center px-2 py-0.5 rounded-md border border-hairline bg-graphite-900/70 font-mono text-xs text-graphite-400"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      <p className="font-sans text-sm leading-relaxed text-graphite-300">
                        {entry.detail}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        )}

        {activeTab === "certifications" && (
          <motion.div
            key="certifications-tab"
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.28 }}
            className="grid gap-4 sm:grid-cols-2"
          >
            {certificationEntries.map((entry) => (
              <div
                key={entry.role}
                className="rounded-2xl border border-hairline bg-graphite-800 p-5 shadow-card transition-colors duration-300 hover:border-spark/30 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <span className="inline-flex items-center px-2 py-0.5 rounded-full border border-emerald-400/25 bg-emerald-400/10 font-mono text-[10px] uppercase text-emerald-300">
                      Certification
                    </span>
                    <span className="font-mono text-xs text-graphite-400">
                      {entry.period}
                    </span>
                  </div>

                  <h3 className="font-display text-lg font-bold text-graphite-100">
                    {entry.role}
                  </h3>

                  {entry.company && (
                    <p className="font-mono text-xs text-spark mt-1">
                      {entry.company}
                    </p>
                  )}

                  <p className="font-sans text-xs sm:text-sm text-graphite-300 leading-relaxed mt-2.5">
                    {entry.detail}
                  </p>
                </div>

                <div className="flex flex-wrap gap-1.5 mt-4 pt-3 border-t border-hairline/60">
                  {entry.tags.map((tag) => (
                    <span
                      key={tag}
                      className="inline-flex items-center px-2 py-0.5 rounded border border-hairline bg-graphite-900/60 font-mono text-[11px] text-graphite-400"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Direct link to Full Resume */}
      <div className="mt-8 pt-4 flex items-center justify-between flex-wrap gap-3">
        <p className="text-xs font-mono text-graphite-400">
          Showing curated highlights • Complete credentials documented on resume
        </p>
        <Link
          href="/resume"
          className="inline-flex items-center gap-1.5 text-xs font-mono text-spark hover:underline underline-offset-4"
        >
          <span>View Full Resume &amp; Academic Records</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </Link>
      </div>
    </section>
  );
}
