"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/section-heading";
import { experienceEntries } from "@/lib/data";

function TimelineGroup({
  title,
  entries
}: {
  title: string;
  entries: typeof experienceEntries;
}) {
  return (
    <div className="mt-12 first:mt-10">
      <p className="mono-chip text-sm uppercase tracking-[0.24em] text-accent">{title}</p>

      <div className="relative mt-6 pl-8 md:pl-10">
        <div className="absolute bottom-0 left-3 top-0 w-px bg-accent/50 md:left-4" />
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
                className={`absolute -left-[2.15rem] top-6 h-3 w-3 rounded-full border-[0.5px] md:-left-[2.55rem] ${
                  entry.badgeTone === "cyan"
                    ? "border-cyan-400 bg-cyan-400"
                    : entry.badgeTone === "emerald"
                      ? "border-emerald-400 bg-emerald-400"
                      : "border-accent bg-accent"
                } ${entry.current ? "ring-4 ring-accent/20" : ""}`}
              />
              <div className="rounded-xl border-[0.5px] border-border bg-card p-6 md:p-7">
                <div className="flex flex-col gap-3">
                  <div className="flex flex-wrap items-center gap-3">
                    {entry.current || entry.badge ? (
                      <span
                        className={`mono-chip rounded-full border-[0.5px] bg-elevated px-3 py-1 text-[11px] uppercase tracking-[0.16em] ${
                          entry.badgeTone === "cyan"
                            ? "border-cyan-400/60 text-cyan-300"
                            : entry.badgeTone === "emerald"
                              ? "border-emerald-400/60 text-emerald-300"
                              : "border-accent text-accent"
                        }`}
                      >
                        {entry.badge ?? "Current"}
                      </span>
                    ) : null}
                    <p className="mono-chip text-xs uppercase tracking-[0.18em] text-slate-500">
                      {entry.period}
                    </p>
                    {entry.location ? (
                      <p className="mono-chip text-xs uppercase tracking-[0.18em] text-slate-500">
                        {entry.location}
                      </p>
                    ) : null}
                  </div>
                  {entry.company ? <h3 className="text-xl font-semibold text-text">{entry.company}</h3> : null}
                  <p className="text-sm font-medium text-slate-400">{entry.role}</p>
                  <div className="flex flex-wrap gap-3">
                    {entry.tags.map((tag) => (
                      <span
                        key={tag}
                        className="mono-chip rounded-full border-[0.5px] border-accent/40 bg-elevated px-4 py-1.5 text-sm tracking-[0.04em] text-accent"
                      >
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
    <section id="experience" className="section-shell scroll-mt-24 py-16 md:py-24">
      <SectionHeading
        eyebrow="EXPERIENCE"
        title="Real work. Real systems. Real growth."
        description="From hands-on internships to production-ready engineering — every step has been about building things that actually work."
      />

      <TimelineGroup title="Work Experience" entries={workEntries} />
      <TimelineGroup title="Education" entries={educationEntries} />
      <TimelineGroup title="Certifications" entries={certificationEntries} />
    </section>
  );
}
