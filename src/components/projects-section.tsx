"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence, useMotionTemplate, useMotionValue, useReducedMotion, useSpring, useTransform } from "framer-motion";
import {
  ArrowUpRight,
  Check,
  Copy,
  ExternalLink,
  FlaskConical,
  Github,
  ShieldAlert,
  ShieldCheck,
  ShoppingBag,
  X
} from "lucide-react";
import { AnimatedSection } from "@/components/AnimatedSection";
import { SectionHeading } from "@/components/section-heading";
import { projects, Project } from "@/lib/data";

export function ProjectsSection() {
  const [selectedVerification, setSelectedVerification] = useState<{
    project: Project;
    verification: NonNullable<Project["verification"]>;
  } | null>(null);

  // Close modal on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setSelectedVerification(null);
      }
    };
    if (selectedVerification) {
      window.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [selectedVerification]);

  return (
    <AnimatedSection id="projects" className="section-shell scroll-mt-24 py-14 md:py-20 relative">
      <SectionHeading
        eyebrow="Portfolio"
        title="Featured Projects"
        description="Production platforms, client systems, and modern full-stack architectures engineered for high performance and reliability."
      />

      {/* Modern, Balanced 3-Column Grid */}
      <div className="mt-10 grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-stretch">
        {projects.map((project, index) => (
          <ModernProjectCard
            key={project.title}
            project={project}
            index={index}
            onOpenVerification={() => {
              if (project.verification) {
                setSelectedVerification({ project, verification: project.verification });
              }
            }}
          />
        ))}
      </div>

      {/* Recruiter Verification Modal */}
      <AnimatePresence>
        {selectedVerification && (
          <VerificationModal
            data={selectedVerification}
            onClose={() => setSelectedVerification(null)}
          />
        )}
      </AnimatePresence>
    </AnimatedSection>
  );
}

function ModernProjectCard({
  project,
  index,
  onOpenVerification
}: {
  project: Project;
  index: number;
  onOpenVerification: () => void;
}) {
  const reduced = useReducedMotion();
  const [isMobile, setIsMobile] = useState(true);

  useEffect(() => {
    setIsMobile(window.innerWidth < 768 || "ontouchstart" in window);
  }, []);

  // 3D Perspective Tilt Physics
  const pointerX = useMotionValue(50);
  const pointerY = useMotionValue(50);
  const rotateX = useSpring(useTransform(pointerY, [0, 100], [6, -6]), { stiffness: 220, damping: 24 });
  const rotateY = useSpring(useTransform(pointerX, [0, 100], [-6, 6]), { stiffness: 220, damping: 24 });
  const glare = useMotionTemplate`radial-gradient(circle at ${pointerX}% ${pointerY}%, rgba(255, 255, 255, 0.12), transparent 45%)`;

  const updateTilt = (event: React.MouseEvent<HTMLElement>) => {
    if (reduced || isMobile) return;
    const bounds = event.currentTarget.getBoundingClientRect();
    pointerX.set(((event.clientX - bounds.left) / bounds.width) * 100);
    pointerY.set(((event.clientY - bounds.top) / bounds.height) * 100);
  };

  const resetTilt = () => {
    if (reduced || isMobile) return;
    pointerX.set(50);
    pointerY.set(50);
  };

  // Distinct Icon and Accent Color per project
  const isChromato = project.title.toLowerCase().includes("chromato");
  const isThreads = project.title.toLowerCase().includes("threads");
  const isCrie = project.title.toLowerCase().includes("crie");

  const IconComponent = isChromato ? FlaskConical : isThreads ? ShoppingBag : ShieldAlert;
  const accentColor = isChromato ? "#B6FF2E" : isThreads ? "#38BDF8" : "#34D399";

  // Flatten top 5-6 tech items for clean pills
  const techPills = project.techUsed
    ? project.techUsed.flatMap((cat) => cat.items).slice(0, 5)
    : [];

  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.4, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
      onMouseMove={updateTilt}
      onMouseLeave={resetTilt}
      style={reduced || isMobile ? undefined : { rotateX, rotateY, transformPerspective: 1000 }}
      className="group relative flex flex-col justify-between rounded-2xl border border-hairline bg-graphite-900/90 shadow-card transition-all duration-300 hover:border-spark/45 hover:shadow-spark-sm select-none overflow-hidden h-full will-change-transform"
    >
      {/* Background radial spotlight */}
      <div
        className="pointer-events-none absolute -right-12 -top-12 h-36 w-36 rounded-full opacity-20 blur-3xl transition-opacity duration-300 group-hover:opacity-40"
        style={{ backgroundColor: accentColor }}
        aria-hidden="true"
      />

      {!reduced && !isMobile && (
        <motion.div aria-hidden="true" className="project-card-glare pointer-events-none" style={{ background: glare }} />
      )}

      {/* Top Visual Header Banner */}
      <div className="relative border-b border-hairline bg-gradient-to-br from-graphite-800/80 via-graphite-900 to-graphite-950 p-5">
        <div className="flex items-center justify-between gap-2">
          {/* Status pill */}
          <span className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-graphite-950/70 px-2.5 py-1 font-mono text-[11px] text-graphite-300">
            {isChromato ? (
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-spark opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-spark" />
              </span>
            ) : (
              <span className="h-1.5 w-1.5 rounded-full" style={{ backgroundColor: accentColor }} />
            )}
            <span className="font-medium text-graphite-200">{project.badge ?? project.category}</span>
          </span>

          {/* Year pill */}
          <span className="rounded-full border border-hairline bg-graphite-950/70 px-2 py-0.5 font-mono text-[11px] text-graphite-400">
            {project.year ?? "2026"}
          </span>
        </div>

        {/* Branded Project Icon */}
        <div className="mt-5 flex items-center gap-3.5">
          <div
            className="flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-graphite-950/90 shadow-sm transition-transform duration-300 group-hover:scale-110"
            style={{ color: accentColor }}
          >
            <IconComponent className="h-6 w-6" />
          </div>

          <div>
            <span className="font-mono text-[10px] uppercase tracking-[0.24em] text-spark font-medium">
              {project.category}
            </span>
            <h3 className="font-display text-xl font-bold tracking-tight text-white group-hover:text-spark transition-colors">
              {project.title}
            </h3>
          </div>
        </div>

        {project.subtitle && (
          <p className="mt-2 text-xs font-medium text-graphite-400 truncate">
            {project.subtitle}
          </p>
        )}
      </div>

      {/* Middle Card Content */}
      <div className="flex flex-col justify-between flex-1 p-5 space-y-4">
        {/* Bullet Points */}
        <ul className="space-y-2 text-xs leading-relaxed text-slate-300 sm:text-[13px]">
          {project.summary.map((line, i) => (
            <li key={i} className="flex items-start gap-2">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-spark/80" />
              <span>{line}</span>
            </li>
          ))}
        </ul>

        {/* Tech Pills */}
        {techPills.length > 0 && (
          <div className="pt-2">
            <p className="font-mono text-[10px] uppercase tracking-wider text-graphite-500 mb-2">
              Core Tech Stack
            </p>
            <div className="flex flex-wrap gap-1.5">
              {techPills.map((tech) => (
                <span
                  key={tech}
                  className="rounded-md border border-hairline bg-graphite-950/80 px-2 py-0.5 font-mono text-[11px] text-graphite-300 transition-colors hover:border-spark/30 hover:text-white"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Bottom Action Footer */}
      <div className="border-t border-hairline/80 bg-graphite-950/60 p-4 flex items-center justify-between gap-2 flex-wrap">
        <div className="flex items-center gap-2 flex-wrap">
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 rounded-lg border border-spark/30 bg-spark/10 px-3 py-1.5 font-mono text-xs font-medium text-spark transition-all duration-200 hover:bg-spark hover:text-graphite-950 hover:shadow-spark-sm"
            >
              <span>Live Site</span>
              <ExternalLink className="h-3 w-3" />
            </a>
          )}

          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 rounded-lg border border-hairline bg-graphite-900 px-3 py-1.5 font-mono text-xs font-medium text-graphite-300 transition-all duration-200 hover:border-hairline hover:bg-graphite-800 hover:text-white"
            >
              <Github className="h-3.5 w-3.5" />
              <span>Source</span>
            </a>
          )}
        </div>

        {/* Interactive Verification Trigger (For Chromato Scientific) */}
        {project.verification && (
          <button
            type="button"
            onClick={onOpenVerification}
            className="inline-flex items-center gap-1.5 rounded-lg border border-white/10 bg-graphite-900/90 px-2.5 py-1.5 font-mono text-[11px] text-slate-300 transition-all duration-200 hover:border-spark/40 hover:text-spark hover:bg-spark/5"
            title="Inspect developer signature in live production source"
          >
            <ShieldCheck className="h-3.5 w-3.5 text-spark" />
            <span>Verify Proof</span>
          </button>
        )}
      </div>
    </motion.article>
  );
}

function VerificationModal({
  data,
  onClose
}: {
  data: {
    project: Project;
    verification: NonNullable<Project["verification"]>;
  };
  onClose: () => void;
}) {
  const [copied, setCopied] = useState(false);
  const { project, verification } = data;

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
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Blurred backdrop */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black/80 backdrop-blur-md"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Modal Dialog Box */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 14 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 10 }}
        transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
        className="relative z-10 w-full max-w-lg rounded-2xl border border-spark/30 bg-graphite-950 p-6 shadow-2xl overflow-hidden"
      >
        {/* Glow accent */}
        <div className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-spark/10 blur-3xl" />

        {/* Terminal Header */}
        <div className="flex items-center justify-between border-b border-hairline pb-3.5">
          <div className="flex items-center gap-2">
            <span className="h-2.5 w-2.5 rounded-full bg-red-500/80" />
            <span className="h-2.5 w-2.5 rounded-full bg-amber-500/80" />
            <span className="h-2.5 w-2.5 rounded-full bg-emerald-500/80" />
            <span className="ml-2 font-mono text-xs uppercase tracking-wider text-graphite-300">
              Source Code Verification
            </span>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="rounded-lg border border-hairline p-1 text-graphite-400 hover:text-white hover:bg-graphite-900 transition-colors"
            aria-label="Close modal"
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        {/* Project Context */}
        <div className="mt-4 flex items-center justify-between gap-2">
          <div>
            <h4 className="font-display text-lg font-bold text-white">
              {project.title}
            </h4>
            <p className="font-mono text-xs text-spark">
              {project.subtitle}
            </p>
          </div>
          <span className="inline-flex items-center gap-1 rounded-full border border-spark/30 bg-spark/10 px-2.5 py-0.5 text-[11px] font-mono font-medium text-spark">
            <ShieldCheck className="h-3 w-3" />
            Verified
          </span>
        </div>

        {/* Role Scope note */}
        <div className="mt-3 rounded-lg border border-white/5 bg-white/[0.02] p-3 text-xs leading-relaxed text-slate-300">
          <span className="font-semibold text-spark">Production Note:</span> Aman is actively maintaining the live platform, resolving production issues, and engineering new features. The official development &amp; maintenance credit is verifiable in production HTML.
        </div>

        {/* Step-by-Step Instructions */}
        <div className="mt-4">
          <p className="font-mono text-xs font-semibold uppercase tracking-wider text-slate-200">
            How to verify in live source code:
          </p>
          <ol className="mt-2 space-y-2 text-xs leading-relaxed text-slate-400">
            <li className="flex items-start gap-2">
              <span className="flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-white/10 font-mono text-[10px] font-bold text-slate-200">
                1
              </span>
              <span>
                Open{" "}
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="font-medium text-spark underline underline-offset-2 hover:text-white"
                >
                  chromatoscientific.com
                </a>{" "}
                in your browser.
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-white/10 font-mono text-[10px] font-bold text-slate-200">
                2
              </span>
              <span>
                Right-click anywhere and click <strong className="text-slate-200">Inspect</strong> (or press{" "}
                <kbd className="rounded border border-white/15 bg-white/5 px-1 py-0.5 font-mono text-[10px] text-slate-300">
                  Ctrl + U
                </kbd>{" "}
                /{" "}
                <kbd className="rounded border border-white/15 bg-white/5 px-1 py-0.5 font-mono text-[10px] text-slate-300">
                  ⌘ + ⌥ + U
                </kbd>
                ).
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-white/10 font-mono text-[10px] font-bold text-slate-200">
                3
              </span>
              <span>
                Press{" "}
                <kbd className="rounded border border-white/15 bg-white/5 px-1 py-0.5 font-mono text-[10px] text-slate-300">
                  Ctrl + F
                </kbd>{" "}
                and search for <strong className="font-mono text-spark">Aman Naryal</strong>.
              </span>
            </li>
          </ol>
        </div>

        {/* Code Snippet */}
        <div className="mt-4 rounded-xl border border-white/10 bg-[#0A0C10] p-3">
          <div className="flex items-center justify-between text-[11px] text-slate-500 pb-1.5 border-b border-white/5 font-mono">
            <span>HTML Source (~line 1141)</span>
            <span className="text-emerald-400">Match Confirmed</span>
          </div>
          <pre className="mt-2 overflow-x-auto font-mono text-xs leading-5 text-spark/95">
            <code>{verification.snippet}</code>
          </pre>
        </div>

        {/* Action Buttons */}
        <div className="mt-5 flex items-center justify-between gap-3 flex-wrap">
          <button
            type="button"
            onClick={handleCopy}
            className="inline-flex items-center gap-1.5 rounded-lg border border-spark/30 bg-spark/10 px-3.5 py-2 font-mono text-xs font-medium text-spark transition-colors hover:bg-spark/20"
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

          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 rounded-lg border border-hairline bg-graphite-900 px-3.5 py-2 font-mono text-xs font-medium text-slate-200 transition-colors hover:border-spark/30 hover:text-white hover:bg-graphite-800"
            >
              <ExternalLink className="h-3.5 w-3.5" />
              <span>Open Live Website</span>
            </a>
          )}
        </div>
      </motion.div>
    </div>
  );
}
