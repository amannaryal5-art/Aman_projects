"use client";

import dynamic from "next/dynamic";

// WebGL is intentionally loaded only in the browser so it never delays SSR.
const ParticleCanvas = dynamic(() => import("./ParticleCanvas"), { ssr: false });

export function ParticleBackground() {
  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 z-[-1]">
      <ParticleCanvas />
    </div>
  );
}
