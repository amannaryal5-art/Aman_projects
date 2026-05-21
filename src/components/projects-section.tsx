"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Github } from "lucide-react";
import { SectionHeading } from "@/components/section-heading";
import { projects } from "@/lib/data";

export function ProjectsSection() {
  return (
    <section id="projects" className="section-shell scroll-mt-28 py-20 md:py-28">
      <SectionHeading
        eyebrow="Portfolio"
        title="Featured Projects"
        description="A focused selection of projects built for real use, product thinking, and hands-on engineering growth."
      />

      <div className="mt-14 grid gap-6 lg:grid-cols-2">
        {projects.map((project, index) => (
          <motion.article
            key={project.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.4, delay: index * 0.05 }}
            className="project-card"
          >
            <div className="project-card-glow" />
            <div className="relative z-10">
              <div className="project-card-banner">
                <span className="project-card-year">2026</span>
              </div>

              <div className="p-6">
                <div>
                  <p className="text-xs uppercase tracking-[0.22em] text-cyan-300">
                    {project.category}
                  </p>
                  <h3 className="mt-3 font-display text-3xl tracking-[-0.04em] text-white">
                    {project.title}
                  </h3>
                </div>

                <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-7 text-slate-300">
                  {project.summary.map((line, i) => (
                    <li key={i}>{line}</li>
                  ))}
                </ul>

                {project.techUsed?.length ? (
                  <div className="mt-5 rounded-xl border border-white/10 bg-white/[0.03] p-4 backdrop-blur-sm">
                    <p className="text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-cyan-300/90">
                      Tech used
                    </p>
                    <div className="mt-3 space-y-2.5">
                      {project.techUsed.map((row) => (
                        <p key={row.title} className="text-sm leading-6 text-slate-300">
                          <span className="font-medium text-slate-100">{row.title}</span>
                          <span className="text-slate-500"> — </span>
                          <span>{row.items.join(", ")}</span>
                        </p>
                      ))}
                    </div>
                  </div>
                ) : null}

                <div className="mt-7 flex flex-wrap gap-3">
                  {project.githubUrl ? (
                    <a href={project.githubUrl} target="_blank" rel="noreferrer" className="button-secondary">
                      <Github className="h-4 w-4" />
                      Source
                    </a>
                  ) : null}
                  {project.liveUrl ? (
                    <a href={project.liveUrl} target="_blank" rel="noreferrer" className="button-secondary">
                      <ArrowUpRight className="h-4 w-4" />
                      Live
                    </a>
                  ) : null}
                </div>
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
