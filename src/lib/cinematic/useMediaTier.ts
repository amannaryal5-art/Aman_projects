"use client";

import { useEffect, useState } from "react";
import type { MediaTier } from "@/config/motion";

export interface MediaTierInfo {
  tier: MediaTier;
  isReducedMotion: boolean;
}

export function useMediaTier(): MediaTierInfo {
  // Safe default: start with "low" to prevent premature WebGL context allocation
  const [tierInfo, setTierInfo] = useState<MediaTierInfo>({
    tier: "low",
    isReducedMotion: false,
  });

  useEffect(() => {
    const reducedMotionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const isReducedMotion = reducedMotionQuery.matches;

    // Detect hardware limits
    const cores = navigator.hardwareConcurrency || 4;
    const isTouchOnly =
      window.matchMedia("(pointer: coarse)").matches &&
      !window.matchMedia("(pointer: fine)").matches;
    const isMobile =
      /Android|iPhone|iPad|iPod/i.test(navigator.userAgent) ||
      window.innerWidth < 1024 ||
      isTouchOnly;
    const dpr = window.devicePixelRatio || 1;

    let tier: MediaTier = "high";
    if (isReducedMotion || isMobile || cores <= 2) {
      tier = "low";
    } else if (cores <= 4 || dpr > 2.5) {
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
