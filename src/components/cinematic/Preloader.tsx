"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function Preloader() {
  const [count, setCount] = useState(0);
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    // Quick bypass if reduced motion is requested
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) {
      setIsComplete(true);
      return;
    }

    const duration = 1200; // ms
    const startTime = performance.now();

    const updateCounter = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // Ease out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      const nextCount = Math.floor(eased * 100);

      setCount(nextCount);

      if (progress < 1) {
        requestAnimationFrame(updateCounter);
      } else {
        setTimeout(() => setIsComplete(true), 150);
      }
    };

    const animId = requestAnimationFrame(updateCounter);
    return () => cancelAnimationFrame(animId);
  }, []);

  return (
    <AnimatePresence>
      {!isComplete && (
        <motion.div
          className="fixed inset-0 z-[100] flex flex-col justify-between pointer-events-none"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          aria-hidden="true"
        >
          {/* Top Letterbox Curtain */}
          <motion.div
            className="w-full h-1/2 bg-graphite-950 border-b border-hairline origin-top"
            exit={{ y: "-100%" }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          />

          {/* Center HUD status */}
          <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
            <div className="flex flex-col items-center gap-3">
              <span className="font-mono text-xs tracking-[0.28em] text-spark uppercase">
                SYSTEM INITIALIZING
              </span>
              <div className="font-mono text-4xl sm:text-6xl font-light text-graphite-100 tracking-tighter">
                {String(count).padStart(3, "0")}
                <span className="text-spark text-2xl">%</span>
              </div>
              <div className="w-48 sm:w-64 h-[2px] bg-graphite-800 rounded-full overflow-hidden mt-2">
                <div
                  className="h-full bg-spark transition-all duration-75 ease-out shadow-spark-sm"
                  style={{ width: `${count}%` }}
                />
              </div>
            </div>
          </div>

          {/* Bottom Letterbox Curtain */}
          <motion.div
            className="w-full h-1/2 bg-graphite-950 border-t border-hairline origin-bottom"
            exit={{ y: "100%" }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
