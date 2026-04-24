"use client";

import { motion } from "framer-motion";
import { ArrowRight, Download, Github } from "lucide-react";
import { developer } from "@/lib/data";

export function HeroSection() {
  return (
    <section id="top" className="section-shell relative pt-24">
      <div className="hero-panel">
        <div className="hero-orb hero-orb-left" />
        <div className="hero-orb hero-orb-right" />

        <div className="hero-layout">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="hero-copy"
          >
            <div className="availability-pill">
              <span className="availability-dot" />
              Available for opportunities
            </div>

            <h1 className="hero-title">
              Hi, I&apos;m
              <span className="hero-gradient-text block">Aman Naryal</span>
            </h1>

            <p className="hero-kicker">
              {"// Full Stack Developer"}
            </p>

            <p className="hero-description">
              Software Developer building API-driven web products, modern frontend experiences,
              and practical backend systems. Based in Thane, Maharashtra, India.
            </p>

            <div className="hero-actions">
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

            <div className="hero-meta">
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
            className="hero-visual"
          >
            <div className="hero-visual-card">
              <div className="code-window">
                <div className="code-window-bar">
                  <span className="code-dot bg-[#ff5d77]" />
                  <span className="code-dot bg-[#ffcf5a]" />
                  <span className="code-dot bg-[#29d391]" />
                </div>
                <pre className="code-snippet">
{`const stack = {
  frontend: ["Next.js", "React", "TypeScript"],
  backend: ["Node.js", "NestJS", "FastAPI"],
  focus: "Scalable products with polished UI"
};`}
                </pre>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
