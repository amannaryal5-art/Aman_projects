"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/section-heading";
import { skillGroups } from "@/lib/data";

export function SkillsSection() {
  return (
    <section id="skills" className="section-shell scroll-mt-24 py-16 md:py-24">
      <SectionHeading
        eyebrow="SKILLS"
        title="Aman&apos;s stack is built around APIs, data flow, and dependable delivery."
        description="Practical engineering - reliable backend modules, well-structured database work, and frontend layers that integrate cleanly with real services."
      />

      <div className="mt-10 rounded-xl border-[0.5px] border-border bg-card">
        {skillGroups.map((group, index) => (
          <motion.div
            key={group.title}
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.4, delay: index * 0.08 }}
            className={`flex flex-col gap-6 px-6 py-8 md:px-8 md:py-10 lg:flex-row lg:items-start lg:justify-between ${
              index !== skillGroups.length - 1 ? "border-b-[0.5px] border-border" : ""
            }`}
          >
            <div className="lg:w-64 lg:flex-none">
              <h3 className="text-xl font-semibold text-text">{group.title}</h3>
            </div>
            <div className="flex flex-wrap gap-3 lg:flex-1">
              {group.skills.map((skill) => (
                <span
                  key={skill}
                  className="mono-chip rounded-full border-[0.5px] border-accent/40 bg-elevated px-4 py-1.5 text-sm tracking-[0.04em] text-accent"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
