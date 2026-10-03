"use client";

import { useEffect, ReactNode } from "react";
import Lenis from "lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { scrollState } from "@/lib/cinematic/scrollState";
import { MOTION_CONFIG } from "@/config/motion";
import { SCENES } from "@/config/scenes";

gsap.registerPlugin(ScrollTrigger);

interface SmoothScrollProps {
  children: ReactNode;
}

export function SmoothScroll({ children }: SmoothScrollProps) {
  useEffect(() => {
    // Skip Lenis on touch devices - native scroll is smoother on mobile
    const isTouchDevice =
      "ontouchstart" in window ||
      navigator.maxTouchPoints > 0 ||
      /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);

    if (isTouchDevice) {
      // Still track scroll progress for HUD without Lenis overhead
      const handleNativeScroll = () => {
        const docHeight = document.documentElement.scrollHeight - window.innerHeight;
        if (docHeight <= 0) return;
        const progress = Math.max(0, Math.min(1, window.scrollY / docHeight));
        scrollState.progress = progress;
        scrollState.sceneIndex = Math.min(
          Math.floor(progress * SCENES.length),
          SCENES.length - 1
        );
        scrollState.sceneProgress = (progress * SCENES.length) % 1;
      };
      window.addEventListener("scroll", handleNativeScroll, { passive: true });
      return () => window.removeEventListener("scroll", handleNativeScroll);
    }

    // Desktop: use Lenis for smooth wheel scrolling
    const lenis = new Lenis({
      lerp: MOTION_CONFIG.scroll.lenisLerp,
      smoothWheel: true,
      wheelMultiplier: 1.0,
      touchMultiplier: 1.5,
    });

    lenis.on("scroll", (e: { progress: number; velocity: number; direction: number }) => {
      ScrollTrigger.update();
      scrollState.progress = e.progress;
      scrollState.velocity = e.velocity;
      scrollState.direction = e.direction;

      const totalScenes = SCENES.length;
      const calculatedIndex = Math.min(
        Math.floor(e.progress * totalScenes),
        totalScenes - 1
      );
      scrollState.sceneIndex = calculatedIndex;
      scrollState.sceneProgress = (e.progress * totalScenes) % 1;
    });

    const tickerCallback = (time: number) => {
      lenis.raf(time * 1000);
    };

    gsap.ticker.add(tickerCallback);
    gsap.ticker.lagSmoothing(0);

    // Pointer tracking for ambient 3D parallax & cursor (desktop only)
    const handlePointerMove = (e: PointerEvent) => {
      const x = (e.clientX / window.innerWidth) * 2 - 1;
      const y = -(e.clientY / window.innerHeight) * 2 + 1;
      scrollState.pointer.targetX = x;
      scrollState.pointer.targetY = y;
    };

    window.addEventListener("pointermove", handlePointerMove, { passive: true });

    return () => {
      window.removeEventListener("pointermove", handlePointerMove);
      gsap.ticker.remove(tickerCallback);
      lenis.destroy();
    };
  }, []);

  return <>{children}</>;
}
