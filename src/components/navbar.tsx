"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Download } from "lucide-react";
import { useEffect, useState } from "react";
import { developer } from "@/lib/data";

const navItems = [
  { label: "about", href: "#about" },
  { label: "experience", href: "#experience" },
  { label: "projects", href: "#projects" },
  { label: "skills", href: "#skills" },
  { label: "contact", href: "#contact" }
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 14);

    handleScroll();
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={false}
      animate={{
        borderColor: scrolled ? "rgba(42,45,53,0.9)" : "rgba(42,45,53,0.55)",
        backgroundColor: scrolled ? "rgba(13,15,20,0.86)" : "rgba(13,15,20,0.6)"
      }}
      className="fixed inset-x-0 top-0 z-50 border-b-[0.5px] backdrop-blur-md"
    >
      <div className="section-shell flex h-16 items-center justify-between gap-6">
        <a
          href="#top"
          className="mono-chip text-lg tracking-tight text-text"
        >
          <span className="font-normal text-accent">/ </span>
          <span className="font-semibold text-text">Aman Naryal</span>
        </a>

        <nav className="hidden items-center gap-6 md:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="mono-chip text-sm text-slate-300 transition-colors hover:text-text"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <div className="items-center gap-3 rounded-full border-[0.5px] border-border bg-card px-3 py-2 md:flex">
            <span className="h-2.5 w-2.5 rounded-full bg-live animate-pulseDot" />
            <span className="mono-chip text-xs uppercase tracking-[0.14em] text-slate-300">
              open to full-time
            </span>
          </div>
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-lg border-[0.5px] border-accent px-4 py-2 text-sm font-medium text-accent transition-colors hover:bg-accent hover:text-white"
          >
            <Download className="h-4 w-4" />
            Resume
          </a>
        </div>
      </div>

      <AnimatePresence>
        {scrolled ? (
          <motion.div
            key="nav-line"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="h-px w-full bg-border"
          />
        ) : null}
      </AnimatePresence>
    </motion.header>
  );
}
