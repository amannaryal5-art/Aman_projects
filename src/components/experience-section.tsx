"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/section-heading";
import { experienceEntries } from "@/lib/data";

function TimelineGroup({
  title,
  id,
  entries
}: {
  title: string;
  id?: string;
  entries: typeof experienceEntries;
}) {
  return (
    <div id={id} className="mt-14 first:mt-12">
      <p className="section-pill !mx-0">{title}</p>

      <div className="relative mt-8 pl-8 md:pl-10">
        <div className="absolute bottom-0 left-3 top-0 w-px bg-[linear-gradient(180deg,rgba(109,108,255,0.65),rgba(61,232,224,0.2))] md:left-4" />
        <div className="space-y-6">
          {entries.map((entry, index) => (
            <motion.div
              key={`${title}-${entry.period}-${entry.role}`}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              className="relative"
            >
              <span
                className={`absolute -left-[2.15rem] top-6 h-3 w-3 rounded-full border md:-left-[2.55rem] ${
                  entry.badgeTone === "cyan"
                    ? "border-cyan-400 bg-cyan-400"
                    : entry.badgeTone === "emerald"
                      ? "border-emerald-400 bg-emerald-400"
                      : "border-[#6d6cff] bg-[#6d6cff]"
                } ${entry.current ? "ring-4 ring-[#6d6cff]/20" : ""}`}
              />
              <div className="timeline-card">
                <div className="flex flex-col gap-3">
                  <div className="flex flex-wrap items-center gap-3">
                    {entry.current || entry.badge ? (
                      <span
                        className={`rounded-full border px-3 py-1 text-[11px] uppercase tracking-[0.16em] ${
                          entry.badgeTone === "cyan"
                            ? "border-cyan-400/35 bg-cyan-400/10 text-cyan-300"
                            : entry.badgeTone === "emerald"
                              ? "border-emerald-400/35 bg-emerald-400/10 text-emerald-300"
                              : "border-[#6d6cff]/35 bg-[#6d6cff]/10 text-[#a8b4ff]"
                        }`}
                      >
                        {entry.badge ?? "Current"}
                      </span>
                    ) : null}
                    <p className="text-xs uppercase tracking-[0.18em] text-slate-500">{entry.period}</p>
                    {entry.location ? (
                      <p className="text-xs uppercase tracking-[0.18em] text-slate-500">
                        {entry.location}
                      </p>
                    ) : null}
                    {entry.outcome ? (
                      <p className="rounded-full border border-cyan-400/20 bg-cyan-400/10 px-3 py-1 text-xs uppercase tracking-[0.16em] text-cyan-300">
                        {entry.outcome}
                      </p>
                    ) : null}
                  </div>
                  {entry.company ? (
                    <h3 className="font-display text-3xl tracking-[-0.04em] text-white">
                      {entry.company}
                    </h3>
                  ) : null}
                  <p className="text-sm font-medium text-slate-400">{entry.role}</p>
                  <div className="flex flex-wrap gap-3">
                    {entry.tags.map((tag) => (
                      <span key={tag} className="project-chip">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <p className="text-sm leading-7 text-slate-400">{entry.detail}</p>
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
    <section id="experience" className="section-shell scroll-mt-28 py-20 md:py-28">
      <SectionHeading
        eyebrow="Career Path"
        title="Work Experience"
        description="From training and internships to current engineering work, each step has built stronger product sense and technical depth."
      />

      <TimelineGroup title="Work Experience" entries={workEntries} />
      <TimelineGroup id="education" title="Education" entries={educationEntries} />
      <TimelineGroup title="Certifications" entries={certificationEntries} />
    </section>
  );
}
