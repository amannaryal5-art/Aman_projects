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

                <p className="mt-4 text-sm leading-7 text-slate-300">{project.description}</p>

                <div className="mt-5 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span key={tag} className="project-chip">
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="mt-7 flex flex-wrap gap-3">
                  {project.liveUrl ? (
                    <a href={project.liveUrl} target="_blank" rel="noreferrer" className="button-primary">
                      <ArrowUpRight className="h-4 w-4" />
                      Live Demo
                    </a>
                  ) : null}
                  {project.githubUrl ? (
                    <a href={project.githubUrl} target="_blank" rel="noreferrer" className="button-secondary">
                      <Github className="h-4 w-4" />
                      Source
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
