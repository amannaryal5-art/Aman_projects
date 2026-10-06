"use client";

import { motion } from "framer-motion";
import { SKILL_CATEGORIES, SkillCategoryData, SkillItem } from "@/data/skillsData";

/**
 * Reusable SkillCard component
 * Displays official technology logo, name, and subtext badge
 * Features dark glassmorphism, hardware-accelerated hover elevation, logo scale, and lime spark accents
 */
export function SkillCard({ skill }: { skill: SkillItem; index: number }) {
  const Icon = skill.icon;

  return (
    <div
      className="group relative flex flex-col justify-between p-4 rounded-xl border border-hairline bg-graphite-900 transition-[transform,border-color,background-color] duration-200 ease-out hover:-translate-y-1 hover:border-spark/45 hover:bg-graphite-800 min-h-[105px] select-none will-change-transform"
    >
      {/* Subtle hover gradient glow */}
      <div
        className="pointer-events-none absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-200"
        style={{
          background: "radial-gradient(circle at 50% 0%, rgba(182, 255, 46, 0.08), transparent 70%)",
        }}
        aria-hidden="true"
      />

      {/* Top Row: Logo & Subtext */}
      <div className="relative z-10 flex items-start justify-between gap-2">
        <div
          className="text-2xl sm:text-[28px] transition-transform duration-200 ease-out group-hover:scale-110 drop-shadow-sm flex items-center justify-center w-8 h-8"
          style={{ color: skill.brandColor }}
        >
          <Icon className="w-full h-full" aria-hidden="true" />
        </div>

        <span className="font-mono text-[10px] tracking-wider text-graphite-400 uppercase bg-graphite-950/80 border border-hairline px-2 py-0.5 rounded group-hover:border-spark/30 group-hover:text-graphite-300 transition-colors">
          {skill.subtext}
        </span>
      </div>

      {/* Bottom Row: Technology Name */}
      <div className="relative z-10 mt-3">
        <h4 className="font-sans font-semibold text-sm sm:text-[15px] tracking-tight text-graphite-100 group-hover:text-white transition-colors truncate">
          {skill.name}
        </h4>
      </div>
    </div>
  );
}

/**
 * Reusable SkillCategory component
 * Groups technology cards with category icon, code marker, title, and description
 */
export function SkillCategory({ category, categoryIndex }: { category: SkillCategoryData; categoryIndex: number }) {
  const CategoryIcon = category.categoryIcon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.08 }}
      transition={{ duration: 0.45, delay: categoryIndex * 0.05, ease: [0.16, 1, 0.3, 1] }}
      className="relative rounded-2xl border border-hairline bg-graphite-950 p-5 sm:p-7"
    >
      {/* Category Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-5 mb-5 border-b border-hairline">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-lg bg-graphite-900 border border-hairline flex items-center justify-center text-spark shadow-spark-sm">
            <CategoryIcon className="w-5 h-5" aria-hidden="true" />
          </div>
          <div>
            <span className="font-mono text-[10px] sm:text-[11px] tracking-[0.24em] text-spark uppercase font-medium block">
              {category.code}
            </span>
            <h3 className="font-display font-bold text-xl sm:text-2xl text-graphite-100 tracking-tight">
              {category.title}
            </h3>
          </div>
        </div>

        <p className="font-sans text-xs sm:text-sm text-graphite-400 max-w-md sm:text-right leading-relaxed">
          {category.description}
        </p>
      </div>

      {/* Grid of Skill Cards (2 cols mobile, 3 tablet, 4-6 desktop) */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-3 sm:gap-3.5">
        {category.skills.map((skill, index) => (
          <SkillCard key={skill.name} skill={skill} index={index} />
        ))}
      </div>
    </motion.div>
  );
}

/**
 * Main SkillsSection
 * Cinematic "Technical Arsenal" section with categorized visual technology cards
 */
export function SkillsSection() {
  return (
    <section id="skills" className="section-shell scroll-mt-28 py-20 md:py-32 relative">
      {/* Micro-label Scene Marker */}
      <div className="flex items-center gap-2 mb-6">
        <span className="font-mono text-[11px] tracking-[0.26em] text-spark uppercase font-semibold">
          SCENE 03 // TECHNICAL ARSENAL
        </span>
        <span className="h-px w-8 bg-spark/30" />
      </div>

      {/* Section Header */}
      <div className="max-w-3xl mb-14">
        <p className="font-mono text-xs uppercase tracking-[0.28em] text-spark mb-3">
          SKILLS // TECHNOLOGIES
        </p>
        <h2 className="font-display font-extrabold tracking-[-0.03em] leading-[0.96] text-[clamp(2.4rem,5.5vw,4.5rem)] text-left mb-5">
          <span className="sr-only">Technical Arsenal &amp; production stack.</span>
          <span aria-hidden="true" className="block text-graphite-100">
            Technical Arsenal &amp;
          </span>
          <span aria-hidden="true" className="block text-spark">
            production stack.
          </span>
        </h2>
        <p className="font-sans text-base sm:text-lg text-graphite-300 leading-relaxed max-w-2xl">
          Tools and technologies I use to design, build, integrate, and ship production-ready applications.
        </p>
      </div>

      {/* Categories Stack */}
      <div className="space-y-8">
        {SKILL_CATEGORIES.map((category, index) => (
          <SkillCategory key={category.id} category={category} categoryIndex={index} />
        ))}
      </div>
    </section>
  );
}
