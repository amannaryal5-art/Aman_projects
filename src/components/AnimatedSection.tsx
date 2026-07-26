"use client";

import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

type AnimatedSectionProps = React.PropsWithChildren<{ id: string; className?: string }>;

export function AnimatedSection({ id, className, children }: AnimatedSectionProps) {
  const ref = useRef<HTMLElement>(null);
  const reduced = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 88%", "start 40%"] });
  const rotateX = useTransform(scrollYProgress, [0, 1], [reduced ? 0 : 8, 0]);
  const y = useTransform(scrollYProgress, [0, 1], [reduced ? 0 : 28, 0]);
  const opacity = useTransform(scrollYProgress, [0, 0.65], [0.25, 1]);

  return (
    <motion.section ref={ref} id={id} className={className} style={{ rotateX, y, opacity, transformPerspective: 1200 }}>
      {children}
    </motion.section>
  );
}
