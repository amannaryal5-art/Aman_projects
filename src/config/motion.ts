export const MOTION_CONFIG = {
  ease: {
    expoOut: [0.16, 1, 0.3, 1] as const,
    gsapExpoOut: "expo.out",
    power2Out: "power2.out",
  },
  duration: {
    reveal: 0.9,
    quick: 0.3,
    slow: 1.4,
    stagger: 0.06,
  },
  scroll: {
    scrubSmooth: 0.6,
    lenisLerp: 0.09,
  },
  tiers: {
    lowFps: 35,
    midFps: 50,
  },
} as const;

export type MediaTier = "high" | "mid" | "low";
