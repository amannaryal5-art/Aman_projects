"use client";

import { useEffect, useRef } from "react";
import { SCENES } from "@/config/scenes";
import { scrollState } from "@/lib/cinematic/scrollState";

export function SceneHud() {
  const sceneLabelRef = useRef<HTMLSpanElement>(null);
  const percentRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    let animId: number;
    let lastSceneIdx = -1;
    let lastPercent = -1;

    const tick = () => {
      const idx = scrollState.sceneIndex;
      const pct = Math.min(Math.max(Math.round(scrollState.progress * 100), 0), 100);

      if (idx !== lastSceneIdx && sceneLabelRef.current) {
        lastSceneIdx = idx;
        const currentScene = SCENES[idx] || SCENES[0];
        sceneLabelRef.current.textContent = currentScene.act;
      }

      if (pct !== lastPercent && percentRef.current) {
        lastPercent = pct;
        percentRef.current.textContent = `${String(pct).padStart(2, "0")}%`;
      }

      animId = requestAnimationFrame(tick);
    };

    animId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(animId);
  }, []);

  return (
    <div
      className="pointer-events-none fixed inset-x-0 bottom-0 z-40 hidden md:flex items-center justify-between px-8 py-5 font-mono text-[11px] tracking-[0.22em] text-graphite-400 uppercase select-none"
      aria-hidden="true"
    >
      {/* Bottom Left: Scene Marker */}
      <div className="flex items-center gap-2.5">
        <span className="w-1.5 h-1.5 rounded-full bg-spark shadow-spark-sm animate-pulse" />
        <span ref={sceneLabelRef} className="text-graphite-300">
          ACT 01 // PROLOGUE
        </span>
      </div>

      {/* Bottom Right: Scroll Coordinates */}
      <div className="flex items-center gap-2">
        <span className="text-graphite-400">DEPTH //</span>
        <span ref={percentRef} className="text-spark font-medium">
          00%
        </span>
      </div>
    </div>
  );
}
