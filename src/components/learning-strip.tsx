"use client";

import { motion } from "framer-motion";
import { learningItems } from "@/lib/data";

export function LearningStrip() {
  return (
    <section className="section-shell py-10 md:py-12">
      <div className="rounded-xl border-[0.5px] border-border bg-elevated px-5 py-5 md:px-8 md:py-6">
        <p className="mono-chip text-xs uppercase tracking-[0.18em] text-accent">
          CURRENTLY LEARNING
        </p>
        <p className="mt-2 text-sm text-slate-400">Always building, always learning.</p>

        <div className="mt-4 flex flex-wrap items-center justify-center gap-3 md:justify-start">
          {learningItems.map((item, index) => (
            <motion.span
              key={item}
              animate={{
                borderColor: ["rgba(167,139,250,0.28)", "rgba(167,139,250,0.6)", "rgba(167,139,250,0.28)"],
                boxShadow: [
                  "0 0 0 rgba(167,139,250,0)",
                  "0 0 18px rgba(167,139,250,0.12)",
                  "0 0 0 rgba(167,139,250,0)"
                ]
              }}
              transition={{
                duration: 2.4,
                repeat: Infinity,
                delay: index * 0.16,
                ease: "easeInOut"
              }}
              className="mono-chip rounded-full border-[0.5px] bg-card px-4 py-1.5 text-sm tracking-[0.04em] text-accent"
            >
              {item}
            </motion.span>
          ))}
        </div>
      </div>
    </section>
  );
}
