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

  // Completely skip WebGL on mobile, reduced-motion, or low/mid-spec devices
  if (!mounted || isReducedMotion || tier !== "high") {
    return (
      <div
        className="pointer-events-none fixed inset-0 -z-10"
        style={{
          background:
            "radial-gradient(circle at 50% 30%, rgba(182, 255, 46, 0.05) 0%, transparent 60%)",
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
        dpr={[1, 1.5]}
        gl={{
          alpha: true,
          antialias: false,
          powerPreference: "high-performance",
          stencil: false,
          depth: true,
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
