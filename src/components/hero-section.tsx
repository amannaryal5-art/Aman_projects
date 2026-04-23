"use client";

import { motion } from "framer-motion";
import { ArrowRight, Download } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";
import { developer, heroTitles } from "@/lib/data";

function useTypewriter(words: string[]) {
  const [wordIndex, setWordIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const currentWord = words[wordIndex];
    const typingSpeed = deleting ? 48 : 82;
    const timeout = window.setTimeout(() => {
      if (!deleting) {
        const next = currentWord.slice(0, displayed.length + 1);
        setDisplayed(next);

        if (next === currentWord) {
          window.setTimeout(() => setDeleting(true), 1100);
        }
      } else {
        const next = currentWord.slice(0, Math.max(displayed.length - 1, 0));
        setDisplayed(next);

        if (next.length === 0) {
          setDeleting(false);
          setWordIndex((current) => (current + 1) % words.length);
        }
      }
    }, typingSpeed);

    return () => window.clearTimeout(timeout);
  }, [deleting, displayed, wordIndex, words]);

  return displayed;
}

export function HeroSection() {
  const typedText = useTypewriter(heroTitles);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <section id="top" className="section-shell relative overflow-hidden pb-24 pt-8 md:pb-28 md:pt-12">
      <div className="dot-grid" />
      <div className="relative grid gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="max-w-4xl"
        >
          <div className="rounded-[1.5rem] border border-white/8 bg-[#0f0f0f] p-4 shadow-card md:p-6">
            <div className="grid gap-6 md:grid-cols-[minmax(0,0.78fr)_minmax(0,1fr)] md:items-center">
              <div className="relative">
                <div className="pointer-events-none absolute inset-x-8 bottom-3 h-16 rounded-full bg-[rgba(173,255,47,0.16)] blur-3xl" />
                <div className="grain-overlay relative overflow-hidden rounded-xl border border-white/8 bg-[#0f0f0f] shadow-[0_0_60px_rgba(173,255,47,0.15)]">
                  <Image
                    src="/aman.jpg"
                    alt="Aman Naryal portrait"
                    width={640}
                    height={640}
                    priority
                    className="h-[220px] w-full rounded-xl object-cover [filter:grayscale(20%)_contrast(1.1)] md:h-[320px]"
                  />
                </div>
              </div>

              <div>
                <div className="mb-6 inline-flex rounded-full border-[0.5px] border-border bg-card px-4 py-2">
                  <span className="mono-chip text-xs uppercase tracking-[0.2em] text-slate-300">
                    {developer.tagline}
                  </span>
                </div>

                <h1 className="text-4xl font-semibold tracking-tight text-text md:text-6xl md:leading-[1.05]">
                  Aman Naryal builds polished full stack products and real-world web applications.
                </h1>

                <div className="mt-6 min-h-[4rem] rounded-xl border-[0.5px] border-border bg-card px-5 py-4 md:min-h-[4.75rem]">
                  <p className="mono-chip text-lg text-accent md:text-2xl">
                    {typedText}
                    <span className="animate-blink text-live">_</span>
                  </p>
                </div>

                <p className="mt-6 max-w-2xl text-base leading-8 text-slate-400 md:text-lg">
                  I build intelligent, API-driven full stack applications using Node.js,
                  TypeScript & PostgreSQL with clean architecture and seamless frontend integration.
                </p>

                <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                  <button
                    type="button"
                    onClick={() => scrollTo("projects")}
                    className="inline-flex items-center justify-center rounded-lg border-[0.5px] border-accent bg-accent px-5 py-3 text-sm font-medium text-bg transition-transform hover:-translate-y-0.5"
                  >
                    View Projects
                  </button>
                  <button
                    type="button"
                    onClick={() => scrollTo("contact")}
                    className="inline-flex items-center justify-center gap-2 rounded-lg border-[0.5px] border-border bg-transparent px-5 py-3 text-sm font-medium text-text transition-colors hover:border-accent hover:text-accent"
                  >
                    Contact Aman
                    <ArrowRight className="h-4 w-4" />
                  </button>
                  <a
                    href="/resume.pdf"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-center gap-2 rounded-lg border-[0.5px] border-accent bg-transparent px-5 py-3 text-sm font-medium text-accent transition-colors hover:bg-accent hover:text-white"
                  >
                    <Download className="h-4 w-4" />
                    Resume
                  </a>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 24 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.65, delay: 0.1, ease: "easeOut" }}
          className="surface-card relative rounded-xl p-6"
        >
          <div className="flex items-center gap-2 border-b-[0.5px] border-border pb-4">
            <span className="h-2.5 w-2.5 rounded-full bg-live" />
            <span className="mono-chip text-xs uppercase tracking-[0.18em] text-slate-400">
              portfolio terminal
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
                Node.js, TypeScript, PostgreSQL, Next.js, REST APIs, TailwindCSS
              </p>
            </div>
            <div>
              <p className="mono-chip text-xs uppercase tracking-[0.18em] text-slate-500">
                availability
              </p>
              <p className="mt-2 text-slate-300">{developer.availability}</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
