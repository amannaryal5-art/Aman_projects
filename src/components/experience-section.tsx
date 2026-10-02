"use client";

import { motion } from "framer-motion";
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

function TimelineAct({
  actLabel,
  title,
  id,
  shape,
  entries,
}: {
  actLabel: string;
  title: string;
  id?: string;
  shape: "circle" | "ring" | "diamond";
  entries: TimelineEntry[];
}) {
  return (
    <div id={id} className="mt-16 scroll-mt-28 first:mt-10">
      {/* Act Label */}
      <div className="flex items-center gap-3 mb-8">
        <span className="font-mono text-xs tracking-[0.24em] text-spark uppercase font-semibold">
          {actLabel}
        </span>
        <span className="h-px flex-1 bg-hairline" />
        <span className="font-display text-lg text-graphite-100 font-bold">{title}</span>
      </div>

      <div className="relative pl-7 sm:pl-9">
        {/* Continuous Glowing Timeline Rail */}
        <div className="absolute left-2.5 sm:left-3 top-2 bottom-0 w-px bg-[linear-gradient(180deg,rgba(182,255,46,0.65),rgba(182,255,46,0.15))] shadow-spark-sm" />

        <div className="space-y-8">
          {entries.map((entry, index) => (
            <motion.div
              key={`${title}-${entry.period}-${entry.role}`}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.45, delay: index * 0.06, ease: [0.16, 1, 0.3, 1] }}
              className="relative"
            >
              {/* Category Marker Shapes */}
              {shape === "circle" && (
                <span
                  className={`absolute -left-[1.62rem] sm:-left-[1.8rem] top-5 w-3.5 h-3.5 rounded-full bg-spark border-2 border-graphite-950 shadow-spark-sm ${
                    entry.current ? "ring-4 ring-spark/20" : ""
                  }`}
                  aria-hidden="true"
                />
              )}
              {shape === "ring" && (
                <span
                  className="absolute -left-[1.62rem] sm:-left-[1.8rem] top-5 w-3.5 h-3.5 rounded-full border-2 border-spark bg-graphite-950 shadow-spark-sm"
                  aria-hidden="true"
                />
              )}
              {shape === "diamond" && (
                <span
                  className="absolute -left-[1.62rem] sm:-left-[1.8rem] top-5 w-3.5 h-3.5 rotate-45 rounded-[2px] bg-spark border-2 border-graphite-950 shadow-spark-sm"
                  aria-hidden="true"
                />
              )}

              {/* Timeline Card */}
              <div className="rounded-2xl border border-hairline bg-graphite-800/60 backdrop-blur-xl p-6 sm:p-7 shadow-[0_16px_40px_rgba(0,0,0,0.35)] transition-all duration-300 hover:border-spark/30">
                <div className="flex flex-col gap-3.5">
                  <div className="flex flex-wrap items-center gap-2.5">
                    {entry.current || entry.badge ? (
                      <span className="inline-flex items-center px-3 py-1 rounded-full border border-spark/30 bg-spark/10 font-mono text-[11px] uppercase tracking-wider text-spark font-medium">
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

                    {entry.outcome && (
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full border border-spark/20 bg-spark/5 font-mono text-xs text-spark">
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

                  <div className="flex flex-wrap gap-2 my-1">
                    {entry.tags.map((tag) => (
                      <span
                        key={tag}
                        className="inline-flex items-center px-2.5 py-1 rounded-md border border-hairline bg-graphite-900/70 font-mono text-xs text-graphite-400"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <p className="font-sans text-sm sm:text-base leading-relaxed text-graphite-300">
                    {entry.detail}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

export function ExperienceSection() {
  const workEntries = experienceEntries.filter(
    (entry) => entry.badge !== "Education" && entry.badge !== "Certification"
  );
  const educationEntries = experienceEntries.filter((entry) => entry.badge === "Education");
  const certificationEntries = experienceEntries.filter((entry) => entry.badge === "Certification");

  return (
    <section id="experience" className="section-shell scroll-mt-28 py-20 md:py-32 relative">
      {/* Scene Marker */}
      <div className="flex items-center gap-2 mb-6">
        <span className="font-mono text-[11px] tracking-[0.26em] text-spark uppercase">
          SCENE 04 // THE JOURNEY
        </span>
        <span className="h-px w-8 bg-spark/30" />
      </div>

      {/* Two-Line Statement Heading */}
      <div className="max-w-3xl mb-12">
        <h2 className="font-display font-extrabold tracking-[-0.03em] leading-[0.96] text-[clamp(2.4rem,5.5vw,4.5rem)] text-left mb-6">
          <span className="sr-only">Engineering Journey & practical depth.</span>
          <span aria-hidden="true" className="block text-graphite-100">
            Engineering Journey &amp;
          </span>
          <span aria-hidden="true" className="block text-spark">
            practical depth.
          </span>
        </h2>
        <p className="font-sans text-base sm:text-lg text-graphite-300 leading-relaxed">
          From training and internships to engineering work, each step has built stronger product
          sense and technical depth across three continuous acts.
        </p>
      </div>

      {/* 3 Sequential Acts with Distinct Geometric Markers */}
      <TimelineAct
        actLabel="ACT I"
        title="Work Experience"
        shape="circle"
        entries={workEntries}
      />

      <TimelineAct
        actLabel="ACT II"
        title="Education"
        id="education"
        shape="ring"
        entries={educationEntries}
      />

      <TimelineAct
        actLabel="ACT III"
        title="Certifications"
        shape="diamond"
        entries={certificationEntries}
      />
    </section>
  );
}

