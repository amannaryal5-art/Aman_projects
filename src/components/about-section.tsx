"use client";

import { motion } from "framer-motion";
import { Download, Mail, MapPin, School } from "lucide-react";
import { developer } from "@/lib/data";

export function AboutSection() {
  return (
    <section id="about" className="section-shell scroll-mt-28 py-20 md:py-28">
      <div className="section-frame grid gap-10 lg:grid-cols-[0.92fr_1.08fr] lg:items-center">
        <div>
          <p className="section-pill">About Me</p>
          <h2 className="section-title mt-6 text-left">
            Software Developer focused on building practical systems.
          </h2>
          <p className="section-copy mt-5 max-w-2xl text-left">
            I&apos;m passionate about designing and shipping reliable full stack applications. My
            work blends backend architecture, frontend polish, and real-world debugging to turn
            ideas into useful products.
          </p>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.45 }}
            className="neo-card mt-10 p-6 md:p-8"
          >
            <div className="code-window">
              <div className="code-window-bar">
                <span className="code-dot bg-[#ff5d77]" />
                <span className="code-dot bg-[#ffcf5a]" />
                <span className="code-dot bg-[#29d391]" />
              </div>
              <pre className="code-snippet">
{`// About Aman Naryal
const developer = {
  role: "Full Stack Developer",
  location: "Thane, Maharashtra",
  backend: ["Node.js", "NestJS", "FastAPI"],
  frontend: ["React", "Next.js", "Tailwind CSS"],
  focus: "APIs, products, and dependable delivery"
};`}
              </pre>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.45, delay: 0.08 }}
          className="space-y-5"
        >
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="info-card">
              <MapPin className="info-icon" />
              <p className="info-card-label">Location</p>
              <p className="info-card-value">{developer.location}</p>
            </div>
            <div className="info-card">
              <Mail className="info-icon" />
              <p className="info-card-label">Email</p>
              <a href={`mailto:${developer.email}`} className="info-card-value hover:text-cyan-300">
                {developer.email}
              </a>
            </div>
            <div className="info-card">
              <School className="info-icon" />
              <p className="info-card-label">Current Study</p>
              <p className="info-card-value">MCA, Chandigarh University</p>
            </div>
            <div className="info-card">
              <Download className="info-icon" />
              <p className="info-card-label">Resume</p>
              <a href="/resume.pdf" target="_blank" rel="noreferrer" className="info-card-value hover:text-cyan-300">
                Download CV
              </a>
            </div>
          </div>

          <div className="neo-card p-6 md:p-8">
            <p className="text-base leading-8 text-slate-300">
              I work best where clean system thinking meets shipping speed. From academic training
              to internships and current product work, I&apos;ve been building a strong foundation in
              backend engineering, full stack development, and polished delivery.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
