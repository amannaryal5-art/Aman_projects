"use client";

import { motion } from "framer-motion";
import { ArrowRight, Download, Github } from "lucide-react";
import { developer } from "@/lib/data";

export function HeroSection() {
  return (
    <section id="top" className="section-shell relative pt-32 md:pt-36">
      <div className="hero-panel">
        <div className="hero-orb hero-orb-left" />
        <div className="hero-orb hero-orb-right" />

        <div className="relative z-10 grid gap-16 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <div className="availability-pill">
              <span className="availability-dot" />
              Available for opportunities
            </div>

            <h1 className="mt-10 font-display text-5xl leading-[0.98] tracking-[-0.06em] text-white sm:text-6xl md:text-7xl lg:text-[5.6rem]">
              Hi, I&apos;m
              <span className="hero-gradient-text block">Aman Naryal</span>
            </h1>

            <p className="mt-6 font-mono text-lg text-[#8d83ff] md:text-2xl">
              {"// Full Stack Developer"}
            </p>

            <p className="mt-8 max-w-2xl text-lg leading-9 text-slate-300 md:text-[1.32rem]">
              Software Developer building API-driven web products, modern frontend experiences,
              and practical backend systems. Based in Thane, Maharashtra, India.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <a href="#contact" className="button-primary">
                Contact Me
                <ArrowRight className="h-4 w-4" />
              </a>
              <a href="#projects" className="button-secondary">
                View Projects
              </a>
              <a href="/resume.pdf" target="_blank" rel="noreferrer" className="button-secondary">
                <Download className="h-4 w-4" />
                Resume
              </a>
            </div>

            <div className="mt-8 flex flex-wrap gap-4">
              <div className="info-pill">{developer.availability}</div>
              <div className="info-pill">{developer.location}</div>
              <a href={developer.github} target="_blank" rel="noreferrer" className="info-pill">
                <Github className="h-4 w-4" />
                GitHub
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 28 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.65, delay: 0.12, ease: "easeOut" }}
            className="relative mx-auto w-full max-w-[460px]"
          />
        </div>
      </div>
    </section>
  );
}
