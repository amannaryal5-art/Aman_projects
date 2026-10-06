"use client";

import Image from "next/image";
import { motion } from "framer-motion";

interface AnimatedPortraitProps {
  size?: "sm" | "md" | "lg";
  className?: string;
  showBadges?: boolean;
}

export function AnimatedPortrait({
  size = "md",
  className = "",
  showBadges = true,
}: AnimatedPortraitProps) {
  // Size dimensions for container and rings
  const dimensions = {
    sm: {
      container: "w-36 h-36",
      outerRing: "w-48 h-48",
      innerRing: "w-42 h-42",
      badgeText: "text-[9px]",
      badgePad: "px-2 py-0.5",
    },
    md: {
      container: "w-44 h-44 sm:w-52 sm:h-52 md:w-56 md:h-56",
      outerRing: "w-60 h-60 sm:w-68 sm:h-68 md:w-72 md:h-72",
      innerRing: "w-52 h-52 sm:w-60 sm:h-60 md:w-64 md:h-64",
      badgeText: "text-[10px]",
      badgePad: "px-2.5 py-1",
    },
    lg: {
      container: "w-52 h-52 sm:w-64 sm:h-64 md:w-72 md:h-72",
      outerRing: "w-68 h-68 sm:w-80 sm:h-80 md:w-92 md:h-92",
      innerRing: "w-60 h-60 sm:w-72 sm:h-72 md:w-80 md:h-80",
      badgeText: "text-[11px]",
      badgePad: "px-3 py-1",
    },
  }[size];

  return (
    <div
      className={`relative flex items-center justify-center select-none ${className}`}
    >
      {/* 1. Ambient Background Pulse Glow (GPU hardware-accelerated CSS) */}
      <div
        className="pointer-events-none absolute rounded-full anim-ambient-pulse -z-10"
        style={{
          width: "125%",
          height: "125%",
          background: "radial-gradient(circle, rgba(182, 255, 46, 0.16) 0%, transparent 68%)",
        }}
        aria-hidden="true"
      />

      {/* 2. Outer Rotating Orbital Ring (Clockwise) with Satellite Spark */}
      <div
        className={`pointer-events-none absolute rounded-full border border-dashed border-spark/25 anim-spin-clockwise ${dimensions.outerRing}`}
        aria-hidden="true"
      >
        {/* Orbiting Satellite Spark Node */}
        <div className="absolute -top-1.5 left-1/2 -translate-x-1/2 flex items-center justify-center">
          <span className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-spark opacity-60" />
            <span className="relative inline-flex rounded-full h-3 w-3 bg-spark shadow-spark-sm" />
          </span>
        </div>
      </div>

      {/* 3. Inner Counter-Rotating Hairline Ring */}
      <div
        className={`pointer-events-none absolute rounded-full border border-hairline anim-spin-counter ${dimensions.innerRing}`}
        aria-hidden="true"
      >
        {/* Subtle cardinal tick marks */}
        <span className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-white/20" />
        <span className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-1.5 h-1.5 rounded-full bg-white/20" />
        <span className="absolute left-0 top-1/2 -translate-x-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-white/20" />
        <span className="absolute right-0 top-1/2 translate-x-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-white/20" />
      </div>

      {/* 4. Floating Main Portrait Container */}
      <motion.div
        className="relative group cursor-pointer anim-float-bobbing"
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.98 }}
      >
        {/* Bezel Frame */}
        <div className="relative rounded-full p-1.5 bg-gradient-to-b from-spark/40 via-hairline to-graphite-900 shadow-[0_12px_36px_rgba(0,0,0,0.55)] transition-all duration-300 group-hover:from-spark group-hover:to-spark/30 group-hover:shadow-[0_16px_48px_rgba(182,255,46,0.22)]">
          {/* Circular Mask Vessel */}
          <div
            className={`relative rounded-full overflow-hidden bg-graphite-950 ${dimensions.container}`}
          >
            {/* The Developer Photo */}
            <Image
              src="/aman-profile.png"
              alt="Aman Naryal - Full Stack Developer"
              fill
              sizes="(max-width: 640px) 176px, (max-width: 1024px) 224px, 256px"
              priority
              className="object-cover scale-[1.14] transition-transform duration-500 ease-out group-hover:scale-[1.19]"
            />

            {/* Subtle Inner Bevel Shadow */}
            <div
              className="pointer-events-none absolute inset-0 rounded-full shadow-[inset_0_2px_8px_rgba(0,0,0,0.45)]"
              aria-hidden="true"
            />

            {/* Faint Bottom Gradient for Visual Anchoring */}
            <div
              className="pointer-events-none absolute inset-x-0 bottom-0 h-1/4 bg-gradient-to-t from-graphite-950/40 to-transparent"
              aria-hidden="true"
            />
          </div>
        </div>

        {/* 5. Floating Status Badges */}
        {showBadges && (
          <>
            {/* Top-Left: Identity HUD Chip */}
            <div
              className={`absolute -top-2 -left-2 z-20 font-mono ${dimensions.badgeText} ${dimensions.badgePad} tracking-wider uppercase text-graphite-300 bg-graphite-950/90 border border-hairline rounded-full shadow-card flex items-center gap-1.5 backdrop-blur-sm group-hover:border-spark/35 group-hover:text-graphite-100 transition-colors`}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-spark" />
              <span>AMAN // DEV</span>
            </div>

            {/* Bottom-Right: Active Radar Status Pill */}
            <div
              className={`absolute -bottom-2 -right-2 z-20 font-mono ${dimensions.badgeText} ${dimensions.badgePad} tracking-widest uppercase text-spark bg-graphite-950/95 border border-spark/45 rounded-full shadow-[0_4px_20px_rgba(182,255,46,0.25)] flex items-center gap-2 group-hover:shadow-[0_4px_28px_rgba(182,255,46,0.45)] group-hover:border-spark transition-all`}
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-spark opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-spark" />
              </span>
              <span className="font-semibold">AVAILABLE</span>
            </div>
          </>
        )}
      </motion.div>
    </div>
  );
}
