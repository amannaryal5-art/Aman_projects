"use client";

import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { CameraRig } from "./CameraRig";
import { SceneSet } from "./scenes/SceneSet";
import { useMediaTier } from "@/lib/cinematic/useMediaTier";

export function SceneCanvas() {
  const { tier, isReducedMotion } = useMediaTier();

  // If reduced motion is requested, render a static calm ambient background without heavy canvas
  if (isReducedMotion) {
    return (
      <div
        className="pointer-events-none fixed inset-0 -z-10 bg-radial-spark opacity-20"
        style={{
          background:
            "radial-gradient(circle at 50% 30%, rgba(182, 255, 46, 0.08) 0%, transparent 60%)",
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
        dpr={tier === "low" ? 1 : tier === "mid" ? [1, 1.5] : [1, 2]}
        gl={{
          alpha: true,
          antialias: tier !== "low",
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
