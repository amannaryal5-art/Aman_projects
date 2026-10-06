"use client";

import { useEffect, useState } from "react";
import { motion, useMotionTemplate, useMotionValue, useReducedMotion, useSpring, useTransform } from "framer-motion";
import { ArrowUpRight, Check, Copy, ExternalLink, Github, ShieldCheck } from "lucide-react";
import { AnimatedSection } from "@/components/AnimatedSection";
import { SectionHeading } from "@/components/section-heading";
import { projects, Project } from "@/lib/data";

export function ProjectsSection() {
  return (
    <AnimatedSection id="projects" className="section-shell scroll-mt-28 py-20 md:py-28">
      <SectionHeading
        eyebrow="Portfolio"
        title="Featured Projects"
        description="A focused selection of production client platforms, enterprise systems, and full stack engineering architectures built for real-world reliability."
      />
      <div className="mt-14 grid gap-6 lg:grid-cols-2">
        {projects.map((project, index) => (
          <ProjectCard key={project.title} project={project} index={index} />
        ))}
      </div>
    </AnimatedSection>
  );
}

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const reduced = useReducedMotion();
  const [isMobile, setIsMobile] = useState(true);

  useEffect(() => {
    setIsMobile(window.innerWidth < 768 || "ontouchstart" in window);
  }, []);

  const pointerX = useMotionValue(50);
  const pointerY = useMotionValue(50);
  const rotateX = useSpring(useTransform(pointerY, [0, 100], [8, -8]), { stiffness: 180, damping: 22 });
  const rotateY = useSpring(useTransform(pointerX, [0, 100], [-8, 8]), { stiffness: 180, damping: 22 });
  const glare = useMotionTemplate`radial-gradient(circle at ${pointerX}% ${pointerY}%, rgba(255, 255, 255, 0.1), transparent 40%)`;

  const updateTilt = (event: React.MouseEvent<HTMLElement>) => {
    if (reduced || isMobile || project.featured) return;
    const bounds = event.currentTarget.getBoundingClientRect();
    pointerX.set(((event.clientX - bounds.left) / bounds.width) * 100);
    pointerY.set(((event.clientY - bounds.top) / bounds.height) * 100);
  };

  const resetTilt = () => {
    if (reduced || isMobile || project.featured) return;
    pointerX.set(50);
    pointerY.set(50);
  };

  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.4, delay: index * 0.06 }}
      onMouseMove={updateTilt}
      onMouseLeave={resetTilt}
      className={`project-card ${project.featured ? "lg:col-span-2 border-spark/25 shadow-2xl" : "project-card-tilt"}`}
      style={reduced || isMobile || project.featured ? undefined : { rotateX, rotateY, transformPerspective: 1000 }}
    >
      <div className="project-card-glow" />
      {!reduced && !isMobile && !project.featured && (
        <motion.div aria-hidden="true" className="project-card-glare" style={{ background: glare }} />
      )}

      <div className="relative z-10">
        {/* Banner with branded watermark & status */}
        <div className="project-card-banner flex items-center justify-between px-6 md:px-8">
          <div className="flex items-center gap-3">
            {project.badge ? (
              <span className="inline-flex items-center gap-1.5 rounded-full border border-spark/30 bg-spark/10 px-3 py-1 font-mono text-[0.7rem] uppercase tracking-wider text-spark">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-spark opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-spark" />
                </span>
                {project.badge}
              </span>
            ) : (
              <span className="font-mono text-xs uppercase tracking-widest text-slate-500">
                {project.category}
              </span>
            )}
          </div>
          <span className="project-card-year">{project.year ?? "2026"}</span>
        </div>

        {/* Card Body */}
        <div className="p-6 md:p-8">
          {project.featured && project.verification ? (
            /* Featured Enterprise Layout (2 columns on large screens) */
            <div className="grid gap-8 lg:grid-cols-12 lg:items-start">
              {/* Left Column: Overview & Tech Stack */}
              <div className="space-y-6 lg:col-span-7">
                <div>
                  <div className="flex flex-wrap items-center gap-2">
                    <p className="text-xs uppercase tracking-[0.22em] text-spark">{project.category}</p>
                    <span className="text-slate-600" aria-hidden>•</span>
                    <span className="font-mono text-xs text-slate-400">Production Client</span>
                  </div>
                  <h3 className="mt-2 font-display text-3xl tracking-[-0.03em] text-white md:text-4xl">
                    {project.title}
                  </h3>
                  {project.subtitle ? (
                    <p className="mt-1.5 text-sm font-medium text-slate-300 md:text-base">
                      {project.subtitle}
                    </p>
                  ) : null}
                </div>

                <ul className="list-disc space-y-2.5 pl-5 text-sm leading-7 text-slate-300">
                  {project.summary.map((line, i) => (
                    <li key={i}>{line}</li>
                  ))}
                </ul>

                {project.techUsed?.length ? (
                  <div className="rounded-xl border border-white/10 bg-graphite-800/80 p-4">
                    <p className="text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-spark/90">
                      Architecture & Stack
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

                <div className="flex flex-wrap gap-3 pt-2">
                  {project.liveUrl ? (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="button-primary inline-flex items-center gap-2"
                    >
                      <ArrowUpRight className="h-4 w-4" />
                      Visit Live Platform
                    </a>
                  ) : null}
                </div>
              </div>

              {/* Right Column: Authorship Verification Console */}
              <div className="lg:col-span-5">
                <AuthorshipVerificationBox
                  verification={project.verification}
                  liveUrl={project.liveUrl}
                />
              </div>
            </div>
          ) : (
            /* Standard 2-column Grid Card Layout */
            <div>
              <div>
                <p className="text-xs uppercase tracking-[0.22em] text-spark">{project.category}</p>
                <h3 className="mt-3 font-display text-3xl tracking-[-0.04em] text-white">{project.title}</h3>
                {project.subtitle ? (
                  <p className="mt-1 text-sm font-medium text-slate-300">{project.subtitle}</p>
                ) : null}
              </div>

              <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-7 text-slate-300">
                {project.summary.map((line, i) => (
                  <li key={i}>{line}</li>
                ))}
              </ul>

              {project.techUsed?.length ? (
                <div className="mt-5 rounded-xl border border-white/10 bg-graphite-800 p-4">
                  <p className="text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-spark/90">Tech used</p>
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
          )}
        </div>
      </div>
    </motion.article>
  );
}

function AuthorshipVerificationBox({
  verification,
  liveUrl
}: {
  verification: NonNullable<Project["verification"]>;
  liveUrl?: string;
}) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    if (typeof navigator !== "undefined" && navigator.clipboard) {
      navigator.clipboard.writeText(verification.copyQuery).then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 2400);
      });
    } else {
      const el = document.createElement("textarea");
      el.value = verification.copyQuery;
      document.body.appendChild(el);
      el.select();
      try {
        document.execCommand("copy");
        setCopied(true);
        setTimeout(() => setCopied(false), 2400);
      } catch {
        // ignore
      }
      document.body.removeChild(el);
    }
  };

  return (
    <div className="relative overflow-hidden rounded-2xl border border-spark/25 bg-[#101217] p-5 shadow-xl transition-all duration-300 hover:border-spark/40">
      {/* Background glow accent */}
      <div className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-spark/10 blur-3xl" />

      {/* Terminal Header */}
      <div className="flex items-center justify-between border-b border-white/10 pb-3">
        <div className="flex items-center gap-1.5">
          <span className="h-2.5 w-2.5 rounded-full bg-red-500/80" />
          <span className="h-2.5 w-2.5 rounded-full bg-amber-500/80" />
          <span className="h-2.5 w-2.5 rounded-full bg-emerald-500/80" />
          <span className="ml-2 font-mono text-[0.7rem] uppercase tracking-wider text-slate-400">
            Dev Signature Verification
          </span>
        </div>
        <div className="inline-flex items-center gap-1 rounded-full border border-spark/30 bg-spark/10 px-2.5 py-0.5 text-[0.68rem] font-semibold text-spark">
          <ShieldCheck className="h-3 w-3" />
          <span>Live Proof</span>
        </div>
      </div>

      {/* How to verify guide */}
      <div className="mt-4">
        <p className="text-xs font-semibold uppercase tracking-wider text-slate-200">
          How to verify in live source:
        </p>
        <ol className="mt-2.5 space-y-2 text-xs leading-relaxed text-slate-400">
          <li className="flex items-start gap-2">
            <span className="flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-white/10 font-mono text-[0.65rem] font-bold text-slate-200">
              1
            </span>
            <span>
              Open{" "}
              {liveUrl ? (
                <a
                  href={liveUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="font-medium text-spark underline underline-offset-2 transition-colors hover:text-white"
                >
                  chromatoscientific.com
                </a>
              ) : (
                "chromatoscientific.com"
              )}{" "}
              in your browser.
            </span>
          </li>
          <li className="flex items-start gap-2">
            <span className="flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-white/10 font-mono text-[0.65rem] font-bold text-slate-200">
              2
            </span>
            <span>
              Right-click and select <strong className="text-slate-200">Inspect</strong> (or press{" "}
              <kbd className="rounded border border-white/15 bg-white/5 px-1 py-0.5 font-mono text-[0.65rem] text-slate-300">
                Ctrl + U
              </kbd>{" "}
              /{" "}
              <kbd className="rounded border border-white/15 bg-white/5 px-1 py-0.5 font-mono text-[0.65rem] text-slate-300">
                ⌘ + ⌥ + U
              </kbd>
              ).
            </span>
          </li>
          <li className="flex items-start gap-2">
            <span className="flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-white/10 font-mono text-[0.65rem] font-bold text-slate-200">
              3
            </span>
            <span>
              Press{" "}
              <kbd className="rounded border border-white/15 bg-white/5 px-1 py-0.5 font-mono text-[0.65rem] text-slate-300">
                Ctrl + F
              </kbd>{" "}
              and search for <strong className="font-mono text-spark">Aman Naryal</strong>.
            </span>
          </li>
        </ol>
      </div>

      {/* Code Snippet Box */}
      <div className="mt-4 rounded-xl border border-white/10 bg-[#0A0C10] p-3">
        <div className="flex items-center justify-between text-[0.68rem] text-slate-500">
          <span className="font-mono">HTML Source (~line 1141)</span>
          <span className="font-mono text-emerald-400">Verified Comment Tag</span>
        </div>
        <pre className="mt-2 overflow-x-auto font-mono text-xs leading-5 text-spark/95">
          <code>{verification.snippet}</code>
        </pre>
      </div>

      {/* Action buttons */}
      <div className="mt-4 flex flex-wrap gap-2.5">
        <button
          type="button"
          onClick={handleCopy}
          className="inline-flex items-center gap-1.5 rounded-lg border border-spark/30 bg-spark/10 px-3 py-1.5 text-xs font-medium text-spark transition-colors hover:bg-spark/20"
        >
          {copied ? (
            <>
              <Check className="h-3.5 w-3.5 text-spark" />
              <span>Copied &quot;{verification.copyQuery}&quot;!</span>
            </>
          ) : (
            <>
              <Copy className="h-3.5 w-3.5" />
              <span>Copy &quot;{verification.copyQuery}&quot;</span>
            </>
          )}
        </button>

        {liveUrl ? (
          <a
            href={liveUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 rounded-lg border border-white/15 bg-white/5 px-3 py-1.5 text-xs font-medium text-slate-200 transition-colors hover:border-white/30 hover:bg-white/10"
          >
            <ExternalLink className="h-3.5 w-3.5" />
            <span>Open & Inspect Site</span>
          </a>
        ) : null}
      </div>
    </div>
  );
}
