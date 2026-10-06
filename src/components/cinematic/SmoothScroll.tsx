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
    // Detect mobile touch devices
    const isTouchDevice =
      typeof window !== "undefined" &&
      ("ontouchstart" in window ||
        /Android|iPhone|iPad|iPod/i.test(navigator.userAgent) ||
        (window.matchMedia("(pointer: coarse)").matches && !window.matchMedia("(pointer: fine)").matches));

    if (isTouchDevice) {
      // Touch devices: use native scrolling with non-blocking, RAF-throttled progress tracking
      let ticking = false;
      let cachedDocHeight = 0;

      const updateDimensions = () => {
        cachedDocHeight = document.documentElement.scrollHeight - window.innerHeight;
      };

      updateDimensions();
      window.addEventListener("resize", updateDimensions, { passive: true });

      const handleNativeScroll = () => {
        if (!ticking) {
          requestAnimationFrame(() => {
            if (cachedDocHeight > 0) {
              const progress = Math.max(0, Math.min(1, window.scrollY / cachedDocHeight));
              scrollState.progress = progress;
              scrollState.sceneIndex = Math.min(
                Math.floor(progress * SCENES.length),
                SCENES.length - 1
              );
              scrollState.sceneProgress = (progress * SCENES.length) % 1;
            }
            ticking = false;
          });
          ticking = true;
        }
      };

      window.addEventListener("scroll", handleNativeScroll, { passive: true });

      return () => {
        window.removeEventListener("resize", updateDimensions);
        window.removeEventListener("scroll", handleNativeScroll);
      };
    }

    // Desktop: use Lenis for buttery-smooth wheel scrolling
    const lenis = new Lenis({
      lerp: MOTION_CONFIG.scroll.lenisLerp,
      smoothWheel: true,
      wheelMultiplier: 1.0,
      touchMultiplier: 1.2,
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
    gsap.ticker.lagSmoothing(500, 33);

    // RAF-throttled pointer tracking for ambient 3D parallax & cursor (desktop only)
    let pointerTicking = false;
    const handlePointerMove = (e: PointerEvent) => {
      if (!pointerTicking) {
        requestAnimationFrame(() => {
          const x = (e.clientX / window.innerWidth) * 2 - 1;
          const y = -(e.clientY / window.innerHeight) * 2 + 1;
          scrollState.pointer.targetX = x;
          scrollState.pointer.targetY = y;
          pointerTicking = false;
        });
        pointerTicking = true;
      }
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
