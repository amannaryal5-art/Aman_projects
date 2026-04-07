"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Github } from "lucide-react";
import { useMemo, useState } from "react";
import { SectionHeading } from "@/components/section-heading";
import { projects } from "@/lib/data";

const filters = [
  { label: "All", value: "all" },
  { label: "Backend", value: "backend" }
] as const;

export function ProjectsSection() {
  const [activeFilter, setActiveFilter] = useState<(typeof filters)[number]["value"]>("all");

  const filteredProjects = useMemo(() => {
    if (activeFilter === "all") {
      return projects;
    }

    return projects.filter((project) => project.category === activeFilter);
  }, [activeFilter]);

  return (
    <section id="projects" className="section-shell scroll-mt-24 py-16 md:py-24">
      <SectionHeading
        eyebrow="Projects"
        title="Systems-focused projects with real backend depth."
        description="Aman&apos;s work is currently focused on building and shipping real backend systems. More projects coming soon."
      />

      <div className="mt-10 flex flex-wrap gap-3">
        {filters.map((filter) => (
          <button
            key={filter.value}
            type="button"
            onClick={() => setActiveFilter(filter.value)}
            className={`mono-chip rounded-full border-[0.5px] px-4 py-2 text-sm transition-colors ${
              activeFilter === filter.value
                ? "border-accent bg-accent text-bg"
                : "border-border bg-card text-slate-300 hover:border-accent hover:text-accent"
            }`}
          >
            {filter.label}
          </button>
        ))}
      </div>

      <div className="mt-8 grid gap-6 lg:grid-cols-2">
        {filteredProjects.map((project, index) => (
          <motion.article
            key={project.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.4, delay: index * 0.05 }}
            className="group relative overflow-hidden rounded-xl border-[0.5px] border-border bg-card p-6"
          >
            <motion.div
              aria-hidden
              className="pointer-events-none absolute inset-0 rounded-xl border border-accent/0 transition-colors duration-200 group-hover:border-accent/70"
            />
            <div className="relative z-10">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="mono-chip text-xs uppercase tracking-[0.18em] text-accent">
                    {project.category}
                  </p>
                  <h3 className="mt-3 text-xl font-semibold text-text">{project.title}</h3>
                </div>
              </div>

              <p className="mt-4 text-sm leading-7 text-slate-400">{project.description}</p>

              <div className="mt-5 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="mono-chip rounded-full border-[0.5px] border-border bg-elevated px-3 py-1.5 text-xs text-slate-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="mt-6 flex flex-wrap gap-3">
                {project.githubUrl ? (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-lg border-[0.5px] border-border px-4 py-2 text-sm text-slate-200 transition-colors hover:border-accent hover:text-accent"
                  >
                    <Github className="h-4 w-4" />
                    GitHub
                  </a>
                ) : null}
                {project.liveUrl ? (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-lg border-[0.5px] border-border px-4 py-2 text-sm text-slate-200 transition-colors hover:border-accent hover:text-accent"
                  >
                    <ArrowUpRight className="h-4 w-4" />
                    Live Demo
                  </a>
                ) : null}
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
