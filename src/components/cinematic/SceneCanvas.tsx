"use client";

import { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { CameraRig } from "./CameraRig";
import { SceneSet } from "./scenes/SceneSet";
import { useMediaTier } from "@/lib/cinematic/useMediaTier";

export function SceneCanvas() {
  const [mounted, setMounted] = useState(false);
  const { tier, isReducedMotion } = useMediaTier();

  useEffect(() => {
    setMounted(true);
  }, []);

  // Completely skip WebGL on mobile and reduced-motion devices or before mount
  if (!mounted || isReducedMotion || tier === "low" || tier === "mid") {
    return (
      <div
        className="pointer-events-none fixed inset-0 -z-10"
        style={{
          background:
            "radial-gradient(circle at 50% 30%, rgba(182, 255, 46, 0.06) 0%, transparent 60%)",
        }}
        aria-hidden="true"
      />
    );
  }

  return (
    <div
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
      aria-hidden="true"
    >
      <Canvas
        camera={{ position: [0, 0, 5], fov: 45 }}
        dpr={[1, 2]}
        gl={{
          alpha: true,
          antialias: true,
          powerPreference: "high-performance",
        }}
      >
        <Suspense fallback={null}>
          <CameraRig />
          <SceneSet tier={tier} />
        </Suspense>
      </Canvas>
    </div>
  );
}
