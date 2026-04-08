"use client";

import { learningSummary } from "@/lib/data";

export function LearningStrip() {
  return (
    <section className="section-shell py-10 md:py-12">
      <div className="rounded-xl border-[0.5px] border-border bg-elevated px-5 py-5 md:px-8 md:py-6">
        <p className="mono-chip text-xs uppercase tracking-[0.18em] text-accent">
          CURRENTLY LEARNING
        </p>
        <p className="mt-4 max-w-4xl text-sm leading-7 text-slate-400">{learningSummary}</p>
      </div>
    </section>
  );
}
