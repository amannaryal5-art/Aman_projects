"use client";

import { useEffect, useState } from "react";
import type { MediaTier } from "@/config/motion";

export interface MediaTierInfo {
  tier: MediaTier;
  isReducedMotion: boolean;
}

export function useMediaTier(): MediaTierInfo {
  const [tierInfo, setTierInfo] = useState<MediaTierInfo>({
    tier: "high",
    isReducedMotion: false,
  });

  useEffect(() => {
    const reducedMotionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const isReducedMotion = reducedMotionQuery.matches;

    // Detect hardware limits
    const cores = navigator.hardwareConcurrency || 4;
    const isMobile = /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);
    const dpr = window.devicePixelRatio || 1;

    let tier: MediaTier = "high";
    if (isReducedMotion || cores <= 2) {
      tier = "low";
    } else if (isMobile || cores <= 4 || dpr > 2.5) {
      tier = "mid";
    }

    setTierInfo({ tier, isReducedMotion });

    const handleMotionChange = (e: MediaQueryListEvent) => {
      setTierInfo((prev) => ({
        ...prev,
        isReducedMotion: e.matches,
        tier: e.matches ? "low" : prev.tier,
      }));
    };

    reducedMotionQuery.addEventListener("change", handleMotionChange);
    return () => reducedMotionQuery.removeEventListener("change", handleMotionChange);
  }, []);

  return tierInfo;
}
