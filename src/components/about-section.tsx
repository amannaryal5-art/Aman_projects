"use client";

import { motion } from "framer-motion";
import { developer, stats } from "@/lib/data";

export function AboutSection() {
  return (
    <section id="about" className="section-shell scroll-mt-24 py-16 md:py-24">
      <div className="grid gap-8 lg:grid-cols-2">
        <div>
          <p className="mono-chip text-sm uppercase tracking-[0.24em] text-accent">ABOUT</p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-text md:text-4xl">
            Backend-first thinking with full stack execution.
          </h2>
          <p className="mt-4 max-w-2xl text-base leading-7 text-slate-400">
            Aman works best where system design, API structure, and real-world debugging meet
            practical product delivery.
          </p>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.45 }}
            className="surface-card mt-10 rounded-xl p-6 md:p-8"
          >
            <p className="text-base leading-8 text-slate-300">
              I&apos;m Aman Naryal, a full-stack developer focused on backend systems. I specialize in
              Node.js, TypeScript, and PostgreSQL &mdash; building scalable APIs and turning ideas into
              real, working products. I enjoy debugging complex systems and creating backend
              architectures that actually hold up in production.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {stats.map((stat) => (
                <div key={stat.label} className="rounded-lg border-[0.5px] border-border bg-elevated p-4">
                  <p className="mono-chip text-xs uppercase tracking-[0.16em] text-slate-500">
                    {stat.label}
                  </p>
                  <p className="mt-3 text-2xl font-semibold text-text">{stat.value}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.45, delay: 0.08 }}
          className="surface-card h-fit rounded-xl p-6"
        >
          <div className="flex items-center gap-2 border-b-[0.5px] border-border pb-4">
            <span className="h-2.5 w-2.5 rounded-full bg-live" />
            <span className="mono-chip text-xs uppercase tracking-[0.18em] text-slate-400">
              quick info
            </span>
          </div>

          <div className="space-y-5 pt-6">
            <div>
              <p className="mono-chip text-xs uppercase tracking-[0.18em] text-slate-500">
                location
              </p>
              <p className="mt-2 text-lg text-text">{developer.location}</p>
            </div>
            <div>
              <p className="mono-chip text-xs uppercase tracking-[0.18em] text-slate-500">
                preferred stack
              </p>
              <p className="mt-2 text-slate-300">
                Node.js, TypeScript, PostgreSQL, Next.js
              </p>
            </div>
            <div>
              <p className="mono-chip text-xs uppercase tracking-[0.18em] text-slate-500">
                availability
              </p>
              <p className="mt-2 text-slate-300">{developer.availability}</p>
            </div>
            <div>
              <p className="mono-chip text-xs uppercase tracking-[0.18em] text-slate-500">focus</p>
              <p className="mt-2 text-slate-300">
                Backend systems, API architecture, Full stack delivery
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
