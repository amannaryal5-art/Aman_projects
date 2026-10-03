"use client";

import { useEffect, useState } from "react";

export function GrainVignette() {
  const [isMobile, setIsMobile] = useState(true);

  useEffect(() => {
    setIsMobile(
      /Android|iPhone|iPad|iPod/i.test(navigator.userAgent) || window.innerWidth < 768
    );
  }, []);

  return (
    <div className="pointer-events-none fixed inset-0 z-30 overflow-hidden" aria-hidden="true">
      {/* Radial Vignette - lightweight, keep on all devices */}
      <div
        className="absolute inset-0 opacity-80"
        style={{
          background:
            "radial-gradient(ellipse at center, transparent 40%, rgba(17, 19, 23, 0.6) 80%, rgba(17, 19, 23, 0.95) 100%)",
        }}
      />

      {/* SVG Grain - desktop only (feTurbulence is expensive on mobile GPUs) */}
      {!isMobile && (
        <svg
          className="absolute inset-0 w-full h-full opacity-[0.035] mix-blend-overlay"
          xmlns="http://www.w3.org/2000/svg"
        >
          <filter id="cinematic-grain">
            <feTurbulence
              type="fractalNoise"
              baseFrequency="0.8"
              numOctaves="3"
              stitchTiles="stitch"
            />
            <feColorMatrix type="saturate" values="0" />
          </filter>
          <rect width="100%" height="100%" filter="url(#cinematic-grain)" />
        </svg>
      )}
    </div>
  );
}
