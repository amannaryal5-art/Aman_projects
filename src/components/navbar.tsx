"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { developer } from "@/lib/data";

const navItems = [
  { label: "about", href: "#about" },
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
          className="mono-chip text-lg tracking-tight text-text md:text-xl"
        >
          <span className="font-normal text-text">Aman </span>
          <span className="font-bold text-accent">Naryal</span>
          <span className="ml-1 inline-block h-2 w-2 rounded-full bg-accent align-middle animate-blink" />
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

        <div className="hidden items-center gap-3 rounded-full border-[0.5px] border-border bg-card px-3 py-2 md:flex">
          <span className="h-2.5 w-2.5 rounded-full bg-live animate-pulseDot" />
          <span className="mono-chip text-xs uppercase tracking-[0.14em] text-slate-300">
            open to full-time
          </span>
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
