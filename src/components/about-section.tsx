"use client";

import { motion } from "framer-motion";
import { Download, Mail, MapPin } from "lucide-react";
import { developer } from "@/lib/data";

export function AboutSection() {
  return (
    <section id="about" className="section-shell scroll-mt-28 py-20 md:py-32 relative">
      {/* Scene Marker */}
      <div className="flex items-center gap-2 mb-6">
        <span className="font-mono text-[11px] tracking-[0.26em] text-spark uppercase">
          SCENE 02 // THE ARCHITECT
        </span>
        <span className="h-px w-8 bg-spark/30" />
      </div>

      <div className="grid gap-12 lg:grid-cols-12 lg:items-start">
        {/* Left Column: Heading and Code Card */}
        <div className="lg:col-span-7 flex flex-col">
          <h2 className="font-display font-extrabold tracking-[-0.03em] leading-[0.96] text-graphite-100 text-[clamp(2.4rem,5.5vw,4.5rem)] text-left mb-6">
            <span className="sr-only">Software Developer focused on building practical systems.</span>
            <span aria-hidden="true" className="block text-graphite-100">
              Software Developer focused on
            </span>
            <span aria-hidden="true" className="block text-spark">
              building practical systems.
            </span>
          </h2>

          <p className="font-sans text-base sm:text-lg text-graphite-300 leading-relaxed max-w-xl text-left mb-8">
            I&apos;m passionate about designing and shipping reliable full stack applications. My
            work blends backend architecture, frontend polish, and real-world debugging to turn
            ideas into useful products.
          </p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="rounded-2xl border border-hairline bg-graphite-900/80 backdrop-blur-xl p-5 sm:p-6 shadow-[0_20px_50px_rgba(0,0,0,0.4)]"
          >
            <div className="flex items-center justify-between pb-3 mb-4 border-b border-hairline">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-graphite-600" />
                <span className="w-2.5 h-2.5 rounded-full bg-graphite-600" />
                <span className="w-2.5 h-2.5 rounded-full bg-graphite-600" />
              </div>
              <span className="font-mono text-[11px] text-graphite-400 tracking-wider">
                architect.ts
              </span>
            </div>
            <pre className="font-mono text-xs sm:text-sm leading-relaxed text-graphite-300 overflow-x-auto">
              <span className="text-graphite-400">{"// Architectural Focus"}</span>
              {"\n"}
              <span className="text-spark">const</span>{" "}
              <span className="text-graphite-100">architect</span> = {"{\n"}
              {"  "}role: <span className="text-spark">&apos;Full Stack Developer&apos;</span>,{"\n"}
              {"  "}location: <span className="text-graphite-100">&apos;Thane, Maharashtra&apos;</span>,{"\n"}
              {"  "}backend: [<span className="text-graphite-100">&apos;Node.js&apos;</span>, <span className="text-graphite-100">&apos;NestJS&apos;</span>, <span className="text-graphite-100">&apos;FastAPI&apos;</span>],{"\n"}
              {"  "}frontend: [<span className="text-graphite-100">&apos;React&apos;</span>, <span className="text-graphite-100">&apos;Next.js&apos;</span>, <span className="text-graphite-100">&apos;Tailwind CSS&apos;</span>],{"\n"}
              {"  "}focus: <span className="text-spark">&apos;APIs, products, & dependable delivery&apos;</span>{"\n"}
              {"}"};
            </pre>
          </motion.div>
        </div>

        {/* Right Column: Info Cards and Delivery Philosophy */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-5 flex flex-col gap-4"
        >
          <div className="grid gap-3.5 sm:grid-cols-2">
            <div className="rounded-xl border border-hairline bg-graphite-800/60 backdrop-blur-md p-4 transition-colors hover:border-spark/30">
              <MapPin className="w-4 h-4 text-spark mb-2" />
              <p className="font-mono text-[11px] text-graphite-400 uppercase tracking-wider mb-1">
                Location
              </p>
              <p className="text-sm font-medium text-graphite-100">{developer.location}</p>
            </div>

            <div className="rounded-xl border border-hairline bg-graphite-800/60 backdrop-blur-md p-4 transition-colors hover:border-spark/30">
              <Mail className="w-4 h-4 text-spark mb-2" />
              <p className="font-mono text-[11px] text-graphite-400 uppercase tracking-wider mb-1">
                Email
              </p>
              <a
                href={`mailto:${developer.email}`}
                className="text-sm font-medium text-graphite-100 hover:text-spark transition-colors truncate block"
              >
                {developer.email}
              </a>
            </div>

            <div className="rounded-xl border border-hairline bg-graphite-800/60 backdrop-blur-md p-4 transition-colors hover:border-spark/30 sm:col-span-2">
              <Download className="w-4 h-4 text-spark mb-2" />
              <p className="font-mono text-[11px] text-graphite-400 uppercase tracking-wider mb-1">
                Curriculum Vitae
              </p>
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noreferrer"
                className="text-sm font-medium text-graphite-100 hover:text-spark transition-colors inline-flex items-center gap-1.5"
              >
                <span>Download CV</span>
                <span className="text-spark font-mono text-xs">PDF</span>
              </a>
            </div>
          </div>

          <div className="rounded-2xl border border-hairline bg-graphite-800/50 backdrop-blur-md p-6">
            <p className="text-sm sm:text-base leading-relaxed text-graphite-300">
              I work best where clean system thinking meets shipping speed. From academic training
              to internships and product work, I&apos;ve been building a strong foundation in
              backend engineering, full stack development, and polished delivery.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

