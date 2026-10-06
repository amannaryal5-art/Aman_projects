"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SKILL_CATEGORIES, SkillCategoryData, SkillItem } from "@/data/skillsData";

/**
 * Reusable SkillCard component
 * Compact, fast, hardware-accelerated hover elevation, logo scale, and lime spark accents
 */
export function SkillCard({ skill }: { skill: SkillItem; index: number }) {
  const Icon = skill.icon;

  return (
    <div
      className="group relative flex flex-col justify-between p-3 sm:p-3.5 rounded-xl border border-hairline bg-graphite-900 transition-[transform,border-color,background-color] duration-200 ease-out hover:-translate-y-1 hover:border-spark/45 hover:bg-graphite-800 min-h-[90px] select-none will-change-transform"
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
      <div className="relative z-10 flex items-start justify-between gap-1.5">
        <div
          className="text-2xl sm:text-[26px] transition-transform duration-200 ease-out group-hover:scale-110 drop-shadow-sm flex items-center justify-center w-7 h-7"
          style={{ color: skill.brandColor }}
        >
          <Icon className="w-full h-full" aria-hidden="true" />
        </div>

        <span className="font-mono text-[9px] tracking-wider text-graphite-400 uppercase bg-graphite-950/80 border border-hairline px-1.5 py-0.5 rounded group-hover:border-spark/30 group-hover:text-graphite-300 transition-colors">
          {skill.subtext}
        </span>
      </div>

      {/* Bottom Row: Technology Name */}
      <div className="relative z-10 mt-2">
        <h4 className="font-sans font-semibold text-xs sm:text-[13.5px] tracking-tight text-graphite-100 group-hover:text-white transition-colors truncate">
          {skill.name}
        </h4>
      </div>
    </div>
  );
}

/**
 * Reusable SkillCategory component
 * Groups technology cards with streamlined header and grid
 */
export function SkillCategory({ category, categoryIndex }: { category: SkillCategoryData; categoryIndex: number }) {
  const CategoryIcon = category.categoryIcon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.06 }}
      transition={{ duration: 0.35, delay: categoryIndex * 0.04, ease: [0.16, 1, 0.3, 1] }}
      className="relative rounded-2xl border border-hairline bg-graphite-950 p-4 sm:p-5"
    >
      {/* Category Header (compact single/two-row) */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-3 mb-3.5 border-b border-hairline/80">
        <div className="flex items-center gap-2.5">
          <div className="w-7 h-7 rounded-lg bg-graphite-900 border border-hairline flex items-center justify-center text-spark shadow-spark-sm shrink-0">
            <CategoryIcon className="w-4 h-4" aria-hidden="true" />
          </div>
          <div className="flex items-center gap-2">
            <h3 className="font-display font-bold text-base sm:text-lg text-graphite-100 tracking-tight">
              {category.title}
            </h3>
            <span className="font-mono text-[9px] px-1.5 py-0.5 rounded bg-graphite-900 text-spark border border-hairline">
              {category.skills.length}
            </span>
          </div>
        </div>

        <p className="font-sans text-xs text-graphite-400 sm:text-right leading-relaxed">
          {category.description}
        </p>
      </div>

      {/* Grid of Skill Cards (2 cols mobile, 3 tablet, 4-6 desktop) */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-2 sm:gap-2.5">
        {category.skills.map((skill, index) => (
          <SkillCard key={skill.name} skill={skill} index={index} />
        ))}
      </div>
    </motion.div>
  );
}

/**
 * Main SkillsSection
 * Includes Category Tab Filter for fast navigation & compact layout
 */
export function SkillsSection() {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  const totalSkillsCount = SKILL_CATEGORIES.reduce((acc, cat) => acc + cat.skills.length, 0);

  const displayedCategories =
    selectedCategory === "all"
      ? SKILL_CATEGORIES
      : SKILL_CATEGORIES.filter((cat) => cat.id === selectedCategory);

  return (
    <section id="skills" className="section-shell scroll-mt-24 py-14 md:py-20 relative">
      {/* Micro-label Scene Marker */}
      <div className="flex items-center gap-2 mb-4">
        <span className="font-mono text-[11px] tracking-[0.26em] text-spark uppercase font-semibold">
          SCENE 03 // TECHNICAL ARSENAL
        </span>
        <span className="h-px w-8 bg-spark/30" />
      </div>

      {/* Section Header */}
      <div className="max-w-3xl mb-8">
        <h2 className="font-display font-extrabold tracking-[-0.03em] leading-[0.96] text-[clamp(2.2rem,5vw,3.8rem)] text-left mb-3">
          <span className="sr-only">Technical Arsenal &amp; production stack.</span>
          <span aria-hidden="true" className="block text-graphite-100">
            Technical Arsenal &amp;
          </span>
          <span aria-hidden="true" className="block text-spark">
            production stack.
          </span>
        </h2>
        <p className="font-sans text-sm sm:text-base text-graphite-300 leading-relaxed max-w-2xl">
          Core technologies, frameworks, and developer tooling used across production projects.
        </p>
      </div>

      {/* Filter Tabs for quick browsing and compact height */}
      <div className="flex flex-wrap items-center gap-2 mb-6 border-b border-hairline pb-4">
        <button
          type="button"
          onClick={() => setSelectedCategory("all")}
          className={`inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full font-mono text-xs uppercase tracking-wider transition-all duration-200 ${
            selectedCategory === "all"
              ? "bg-spark text-graphite-950 font-bold shadow-spark-sm"
              : "border border-hairline bg-graphite-900 text-graphite-300 hover:text-white hover:border-spark/30"
          }`}
        >
          <span>All Stack</span>
          <span
            className={`px-1.5 py-0.2 rounded-full text-[10px] font-mono ${
              selectedCategory === "all" ? "bg-graphite-950/20 text-graphite-950" : "bg-graphite-800 text-spark"
            }`}
          >
            {totalSkillsCount}
          </span>
        </button>

        {SKILL_CATEGORIES.map((category) => {
          const Icon = category.categoryIcon;
          const isSelected = selectedCategory === category.id;

          return (
            <button
              key={category.id}
              type="button"
              onClick={() => setSelectedCategory(category.id)}
              className={`inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full font-mono text-xs uppercase tracking-wider transition-all duration-200 ${
                isSelected
                  ? "bg-spark text-graphite-950 font-bold shadow-spark-sm"
                  : "border border-hairline bg-graphite-900 text-graphite-300 hover:text-white hover:border-spark/30"
              }`}
            >
              <Icon className="w-3.5 h-3.5" />
              <span>{category.title.split("&")[0].trim()}</span>
              <span
                className={`px-1.5 py-0.2 rounded-full text-[10px] font-mono ${
                  isSelected ? "bg-graphite-950/20 text-graphite-950" : "bg-graphite-800 text-spark"
                }`}
              >
                {category.skills.length}
              </span>
            </button>
          );
        })}
      </div>

      {/* Categories Grid Display */}
      <AnimatePresence mode="wait">
        <motion.div
          key={selectedCategory}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -6 }}
          transition={{ duration: 0.24 }}
          className="space-y-4"
        >
          {displayedCategories.map((category, index) => (
            <SkillCategory key={category.id} category={category} categoryIndex={index} />
          ))}
        </motion.div>
      </AnimatePresence>
    </section>
  );
}
