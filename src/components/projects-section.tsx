"use client";

import { motion, useMotionTemplate, useMotionValue, useReducedMotion, useSpring, useTransform } from "framer-motion";
import { ArrowUpRight, Github } from "lucide-react";
import { AnimatedSection } from "@/components/AnimatedSection";
import { SectionHeading } from "@/components/section-heading";
import { projects } from "@/lib/data";

export function ProjectsSection() {
  return (
    <AnimatedSection id="projects" className="section-shell scroll-mt-28 py-20 md:py-28">
      <SectionHeading eyebrow="Portfolio" title="Featured Projects" description="A focused selection of projects built for real use, product thinking, and hands-on engineering growth." />
      <div className="mt-14 grid gap-6 lg:grid-cols-2">
        {projects.map((project, index) => <ProjectCard key={project.title} project={project} index={index} />)}
      </div>
    </AnimatedSection>
  );
}

function ProjectCard({ project, index }: { project: (typeof projects)[number]; index: number }) {
  const reduced = useReducedMotion();
  const pointerX = useMotionValue(50);
  const pointerY = useMotionValue(50);
  const rotateX = useSpring(useTransform(pointerY, [0, 100], [12, -12]), { stiffness: 180, damping: 22 });
  const rotateY = useSpring(useTransform(pointerX, [0, 100], [-12, 12]), { stiffness: 180, damping: 22 });
  const glare = useMotionTemplate`radial-gradient(circle at ${pointerX}% ${pointerY}%, rgba(182, 255, 46, 0.12), transparent 42%)`;

  const updateTilt = (event: React.MouseEvent<HTMLElement>) => {
    if (reduced) return;
    const bounds = event.currentTarget.getBoundingClientRect();
    pointerX.set(((event.clientX - bounds.left) / bounds.width) * 100);
    pointerY.set(((event.clientY - bounds.top) / bounds.height) * 100);
  };

  const resetTilt = () => {
    pointerX.set(50);
    pointerY.set(50);
  };

  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.4, delay: index * 0.05 }} onMouseMove={updateTilt} onMouseLeave={resetTilt}
      className="project-card project-card-tilt" style={reduced ? undefined : { rotateX, rotateY, transformPerspective: 1000 }}
    >
      <div className="project-card-glow" />
      {!reduced && <motion.div aria-hidden="true" className="project-card-glare" style={{ background: glare }} />}
      <div className="relative z-10">
        <div className="project-card-banner"><span className="project-card-year">2026</span></div>
        <div className="p-6">
          <div>
            <p className="text-xs uppercase tracking-[0.22em] text-spark-400">{project.category}</p>
            <h3 className="mt-3 font-display text-3xl tracking-[-0.04em] text-text">{project.title}</h3>
          </div>
          <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-7 text-muted">
            {project.summary.map((line, i) => <li key={i}>{line}</li>)}
          </ul>
          {project.techUsed?.length ? (
            <div className="mt-5 rounded-xl border border-white/[0.08] bg-graphite-900/60 p-4 backdrop-blur-sm">
              <p className="text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-spark-400">Tech used</p>
              <div className="mt-3 space-y-2.5">
                {project.techUsed.map((row) => (
                  <p key={row.title} className="text-sm leading-6 text-muted">
                    <span className="font-medium text-text">{row.title}</span><span className="text-graphite-500"> — </span><span>{row.items.join(", ")}</span>
                  </p>
                ))}
              </div>
            </div>
          ) : null}
          <div className="mt-7 flex flex-wrap gap-3">
            {project.githubUrl ? (
              <a href={project.githubUrl} target="_blank" rel="noreferrer" className="button-secondary">
                <Github className="h-4 w-4 text-spark-500" />
                Source
              </a>
            ) : null}
            {project.liveUrl ? (
              <a href={project.liveUrl} target="_blank" rel="noreferrer" className="button-secondary">
                <ArrowUpRight className="h-4 w-4 text-spark-500" />
                Live
              </a>
            ) : null}
          </div>
        </div>
      </div>
    </motion.article>
  );
}
