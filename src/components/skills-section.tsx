"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Bot, Braces, Database, LayoutTemplate, Link2 } from "lucide-react";
import { skillGroups } from "@/lib/data";

const icons = [Braces, LayoutTemplate, Database, Link2, Bot];

// Asymmetric bento column spans across 12-col grid
const bentoColSpans = [
  "lg:col-span-7",
  "lg:col-span-5",
  "lg:col-span-4",
  "lg:col-span-4",
  "lg:col-span-4",
];

function BentoSkillCard({
  group,
  index,
}: {
  group: (typeof skillGroups)[0];
  index: number;
}) {
  const Icon = icons[index] ?? Bot;
  const colSpan = bentoColSpans[index] || "lg:col-span-4";
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, delay: index * 0.06, ease: [0.16, 1, 0.3, 1] }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`relative rounded-2xl border border-hairline bg-graphite-800/60 backdrop-blur-xl p-6 sm:p-8 overflow-hidden transition-all duration-300 ${colSpan} flex flex-col justify-between`}
      style={{
        boxShadow: isHovered
          ? "0 20px 40px rgba(0, 0, 0, 0.45), inset 0 1px 0 rgba(255, 255, 255, 0.08)"
          : "0 12px 30px rgba(0, 0, 0, 0.35)",
      }}
    >
      {/* Cursor-following spotlight border overlay */}
      <div
        className="pointer-events-none absolute inset-0 transition-opacity duration-300"
        style={{
          opacity: isHovered ? 1 : 0,
          background: `radial-gradient(350px circle at ${mousePos.x}px ${mousePos.y}px, rgba(182, 255, 46, 0.12), transparent 80%)`,
        }}
        aria-hidden="true"
      />

      <div className="relative z-10">
        <div className="flex items-center justify-between mb-6">
          <div className="w-12 h-12 rounded-xl bg-graphite-900/80 border border-hairline flex items-center justify-center text-spark shadow-spark-sm">
            <Icon className="w-6 h-6" />
          </div>
          <span className="font-mono text-[11px] tracking-widest text-graphite-400 uppercase">
            {`0${index + 1} // SYS`}
          </span>
        </div>

        <h3 className="font-display text-xl sm:text-2xl font-bold tracking-tight text-graphite-100 mb-6">
          {group.title}
        </h3>

        <div className="flex flex-wrap gap-2">
          {group.skills.map((skill) => (
            <span
              key={skill}
              className="inline-flex items-center px-3 py-1.5 rounded-lg border border-hairline bg-graphite-900/70 font-mono text-xs text-graphite-300 transition-all duration-200 hover:border-spark/40 hover:text-spark hover:bg-graphite-900"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </motion.article>
  );
}

export function SkillsSection() {
  return (
    <section id="skills" className="section-shell scroll-mt-28 py-20 md:py-32 relative">
      {/* Scene Marker */}
      <div className="flex items-center gap-2 mb-6">
        <span className="font-mono text-[11px] tracking-[0.26em] text-spark uppercase">
          SCENE 03 // THE MATRIX
        </span>
        <span className="h-px w-8 bg-spark/30" />
      </div>

      {/* Two-Line Statement Heading */}
      <div className="max-w-3xl mb-14">
        <h2 className="font-display font-extrabold tracking-[-0.03em] leading-[0.96] text-[clamp(2.4rem,5.5vw,4.5rem)] text-left mb-6">
          <span className="sr-only">Skills & Technologies grouped for production.</span>
          <span aria-hidden="true" className="block text-graphite-100">
            Skills &amp; Technologies
          </span>
          <span aria-hidden="true" className="block text-spark">
            grouped for production.
          </span>
        </h2>
        <p className="font-sans text-base sm:text-lg text-graphite-300 leading-relaxed">
          From APIs and data modeling to polished React experiences, third-party integrations, and
          how I ship—grouped the way I think about production systems.
        </p>
      </div>

      {/* Asymmetric 12-Column Bento Matrix */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
        {skillGroups.map((group, index) => (
          <BentoSkillCard key={group.title} group={group} index={index} />
        ))}
      </div>
    </section>
  );
}

