"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Download, Mail, MapPin } from "lucide-react";
import { developer } from "@/lib/data";
import { AnimatedSection } from "@/components/AnimatedSection";

export function AboutSection() {
  return (
    <AnimatedSection id="about" className="section-shell scroll-mt-24 py-14 md:py-20">
      <div className="section-frame grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
        <div>
          <p className="section-pill">About Me</p>
          <h2 className="section-title mt-4 text-left">
            Software Developer focused on building practical systems.
          </h2>
          <p className="section-copy mt-3.5 max-w-2xl text-left">
            I&apos;m passionate about designing and shipping reliable full stack applications. My
            work blends backend architecture, frontend polish, and real-world debugging to turn
            ideas into useful products.
          </p>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.4 }}
            className="neo-card mt-6 p-4 md:p-5"
          >
            <div className="code-window">
              <div className="code-window-bar">
                <span className="code-dot bg-[#ff5d77]" />
                <span className="code-dot bg-[#ffcf5a]" />
                <span className="code-dot bg-[#29d391]" />
              </div>
              <pre className="code-snippet !py-3 !px-3 !text-[12px] leading-relaxed">
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
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.4, delay: 0.06 }}
          className="space-y-4"
        >
          <div className="grid gap-3 sm:grid-cols-2">
            <div className="info-card !p-3.5">
              <MapPin className="info-icon" />
              <p className="info-card-label mt-1 text-[11px]">Location</p>
              <p className="info-card-value text-xs sm:text-sm mt-0.5">{developer.location}</p>
            </div>
            <div className="info-card !p-3.5">
              <Mail className="info-icon" />
              <p className="info-card-label mt-1 text-[11px]">Email</p>
              <a href={`mailto:${developer.email}`} className="info-card-value text-xs sm:text-sm mt-0.5 hover:text-spark truncate block">
                {developer.email}
              </a>
            </div>
            <div className="info-card !p-3.5">
              <Download className="info-icon" />
              <p className="info-card-label mt-1 text-[11px]">Resume</p>
              <a href="/resume.pdf" target="_blank" rel="noreferrer" className="info-card-value text-xs sm:text-sm mt-0.5 hover:text-spark block">
                Download CV
              </a>
            </div>
            <div className="info-card !p-3.5 flex items-center gap-3">
              <div className="relative w-10 h-10 rounded-full overflow-hidden border border-spark/40 shadow-spark-sm shrink-0">
                <Image
                  src="/aman-profile.png"
                  alt="Aman Naryal"
                  fill
                  sizes="40px"
                  className="object-cover scale-[1.14]"
                />
              </div>
              <div>
                <p className="info-card-label mt-0 text-[11px]">Developer</p>
                <p className="info-card-value mt-0 text-xs sm:text-sm font-semibold text-graphite-100">{developer.name}</p>
              </div>
            </div>
          </div>

          <div className="neo-card p-4 sm:p-5">
            <p className="text-xs sm:text-sm leading-6 sm:leading-7 text-slate-300">
              I work best where clean system thinking meets shipping speed. From academic training
              to internships and product work, I&apos;ve been building a strong foundation in
              backend engineering, full stack development, and polished delivery.
            </p>
          </div>
        </motion.div>
      </div>
    </AnimatedSection>
  );
}
