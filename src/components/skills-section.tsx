"use client";

import { motion } from "framer-motion";
import { Bot, Braces, Database, LayoutTemplate, Wrench } from "lucide-react";
import { SectionHeading } from "@/components/section-heading";
import { skillGroups } from "@/lib/data";

const icons = [Braces, LayoutTemplate, Database, Wrench, Bot];

export function SkillsSection() {
  return (
    <section id="skills" className="section-shell scroll-mt-28 py-20 md:py-28">
      <SectionHeading
        eyebrow="Tech Stack"
        title="Skills & Technologies"
        description="Technologies I’ve been working with across backend, frontend, databases, delivery tooling, and AI-assisted workflows."
      />

      <div className="mt-14 grid gap-5 sm:grid-cols-2 xl:grid-cols-5">
        {skillGroups.map((group, index) => {
          const Icon = icons[index] ?? Wrench;

          return (
            <motion.article
              key={group.title}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.42, delay: index * 0.06 }}
              className="skill-card"
            >
              <div className="skill-card-icon">
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="mt-5 font-display text-2xl tracking-[-0.04em] text-white">
                {group.title}
              </h3>
              <div className="mt-6 flex flex-wrap gap-2.5">
                {group.skills.map((skill) => (
                  <span key={skill} className="skill-chip">
                    {skill}
                  </span>
                ))}
              </div>
            </motion.article>
          );
        })}
      </div>
    </section>
  );
}
