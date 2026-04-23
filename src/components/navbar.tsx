"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

const navItems = [
  { label: "Home", href: "#top" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Education", href: "#education" }
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 18);

    handleScroll();
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={false}
      animate={{
        borderColor: scrolled ? "rgba(108,114,255,0.22)" : "rgba(108,114,255,0.12)",
        backgroundColor: scrolled ? "rgba(10,10,32,0.88)" : "rgba(10,10,32,0.68)"
      }}
      className="fixed inset-x-0 top-0 z-50 border-b backdrop-blur-xl"
    >
      <div className="section-shell flex h-20 items-center justify-between gap-6">
        <nav className="hidden items-center gap-2 md:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="rounded-full px-4 py-2.5 text-sm text-slate-300 transition-all hover:bg-white/5 hover:text-white"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:block" />

        <a href="#contact" className="button-primary ml-auto hidden md:inline-flex">
          Hire Me
        </a>
      </div>

      <AnimatePresence>
        {scrolled ? (
          <motion.div
            key="nav-line"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="h-px w-full bg-[linear-gradient(90deg,transparent,rgba(61,232,224,0.32),transparent)]"
          />
        ) : null}
      </AnimatePresence>
    </motion.header>
  );
}
