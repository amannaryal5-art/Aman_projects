"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { scrollState } from "@/lib/cinematic/scrollState";

const navItems = [
  { label: "Home", href: "#top", sceneIndex: 0 },
  { label: "About", href: "#about", sceneIndex: 1 },
  { label: "Skills", href: "#skills", sceneIndex: 2 },
  { label: "Experience", href: "#experience", sceneIndex: 3 },
  { label: "Education", href: "#education", sceneIndex: 4 },
  { label: "Projects", href: "#projects", sceneIndex: 5 },
  { label: "Contact", href: "#contact", sceneIndex: 6 },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeScene, setActiveScene] = useState(0);

  useEffect(() => {
    let animId: number;

    const checkState = () => {
      setScrolled(window.scrollY > 20);
      setActiveScene(scrollState.sceneIndex);
      animId = requestAnimationFrame(checkState);
    };

    animId = requestAnimationFrame(checkState);
    return () => cancelAnimationFrame(animId);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setMenuOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <motion.header
      initial={false}
      animate={{
        borderColor: scrolled ? "rgba(255,255,255,0.08)" : "rgba(255,255,255,0.04)",
        backgroundColor: scrolled ? "rgba(24,26,32,0.85)" : "rgba(24,26,32,0.4)",
      }}
      className="fixed inset-x-0 top-0 z-50 border-b backdrop-blur-xl transition-colors duration-300"
    >
      <div className="section-shell flex items-center justify-between h-16 sm:h-20">
        {/* Brand */}
        <a
          href="#top"
          className="font-display font-bold text-xl sm:text-2xl tracking-tight text-graphite-100 hover:text-spark transition-colors duration-200 flex items-center gap-2"
        >
          <span>Aman</span>
          <span className="w-1.5 h-1.5 rounded-full bg-spark shadow-spark-sm" />
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-1 lg:gap-2">
          {navItems.map((item) => {
            const isActive = activeScene === item.sceneIndex;
            return (
              <a
                key={item.href}
                href={item.href}
                className={`relative px-3.5 py-1.5 rounded-full text-xs lg:text-[13px] font-medium tracking-wide transition-all duration-200 ${
                  isActive
                    ? "text-spark font-semibold"
                    : "text-graphite-400 hover:text-graphite-100"
                }`}
              >
                {item.label}
                {isActive && (
                  <motion.span
                    layoutId="nav-active-pill"
                    className="absolute inset-0 rounded-full bg-spark/10 border border-spark/25 -z-10"
                    transition={{ type: "spring", stiffness: 350, damping: 30 }}
                  />
                )}
              </a>
            );
          })}
        </nav>

        {/* Mobile Toggle Button */}
        <button
          type="button"
          className="md:hidden flex items-center justify-center w-10 h-10 rounded-full border border-hairline bg-graphite-800/80 text-graphite-300 hover:text-spark transition-colors"
          aria-expanded={menuOpen}
          aria-controls="mobile-nav"
          aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
          onClick={() => setMenuOpen((current) => !current)}
        >
          {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Subtle Hairline Progress Accent */}
      <AnimatePresence>
        {scrolled && (
          <motion.div
            key="nav-accent"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="h-px w-full bg-[linear-gradient(90deg,transparent,rgba(182,255,46,0.3),transparent)]"
          />
        )}
      </AnimatePresence>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            id="mobile-nav"
            key="mobile-nav"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="md:hidden border-b border-hairline bg-graphite-950/95 backdrop-blur-2xl px-6 py-6"
          >
            <nav className="flex flex-col gap-3">
              {navItems.map((item) => {
                const isActive = activeScene === item.sceneIndex;
                return (
                  <a
                    key={item.href}
                    href={item.href}
                    className={`py-2 px-3 rounded-lg text-sm tracking-wider uppercase transition-colors ${
                      isActive
                        ? "text-spark bg-spark/10 font-medium"
                        : "text-graphite-300 hover:text-graphite-100"
                    }`}
                    onClick={() => setMenuOpen(false)}
                  >
                    {item.label}
                  </a>
                );
              })}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
