"use client";

import { useEffect, useRef, useState } from "react";

export function Cursor() {
  const [enabled, setEnabled] = useState(false);
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Only enable on devices with a fine pointer (mouse / trackpad)
    if (
      typeof window === "undefined" ||
      !window.matchMedia("(pointer: fine)").matches ||
      "ontouchstart" in window
    ) {
      return;
    }

    setEnabled(true);

    let mouseX = -100;
    let mouseY = -100;
    let ringX = -100;
    let ringY = -100;
    let isHoveringInteractive = false;
    let lastTarget: EventTarget | null = null;
    let running = false;
    let animationFrameId: number;

    const updatePosition = () => {
      // Ring lerps toward mouse
      ringX += (mouseX - ringX) * 0.18;
      ringY += (mouseY - ringY) * 0.18;

      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0) translate(-50%, -50%) scale(${
          isHoveringInteractive ? 1.5 : 1
        })`;
      }

      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${ringX}px, ${ringY}px, 0) translate(-50%, -50%) scale(${
          isHoveringInteractive ? 1.35 : 1
        })`;
        ringRef.current.style.borderColor = isHoveringInteractive
          ? "rgba(182, 255, 46, 0.6)"
          : "rgba(182, 255, 46, 0.25)";
      }

      // If ring is close to mouse and not moving, keep loop going only while in window
      if (running) {
        animationFrameId = requestAnimationFrame(updatePosition);
      }
    };

    const handlePointerMove = (e: PointerEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;

      if (e.target !== lastTarget) {
        lastTarget = e.target;
        const target = e.target as HTMLElement | null;
        isHoveringInteractive = !!target?.closest(
          "a, button, input, textarea, [role='button'], .interactive"
        );
      }

      if (!running) {
        running = true;
        animationFrameId = requestAnimationFrame(updatePosition);
      }
    };

    const handlePointerLeave = () => {
      running = false;
      cancelAnimationFrame(animationFrameId);
      if (dotRef.current) dotRef.current.style.opacity = "0";
      if (ringRef.current) ringRef.current.style.opacity = "0";
    };

    const handlePointerEnter = () => {
      if (dotRef.current) dotRef.current.style.opacity = "1";
      if (ringRef.current) ringRef.current.style.opacity = "1";
      if (!running) {
        running = true;
        animationFrameId = requestAnimationFrame(updatePosition);
      }
    };

    window.addEventListener("pointermove", handlePointerMove, { passive: true });
    document.addEventListener("mouseleave", handlePointerLeave);
    document.addEventListener("mouseenter", handlePointerEnter);

    return () => {
      running = false;
      window.removeEventListener("pointermove", handlePointerMove);
      document.removeEventListener("mouseleave", handlePointerLeave);
      document.removeEventListener("mouseenter", handlePointerEnter);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  if (!enabled) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-50 overflow-hidden" aria-hidden="true">
      {/* Precision Dot */}
      <div
        ref={dotRef}
        className="fixed top-0 left-0 w-2 h-2 rounded-full bg-spark shadow-spark-sm transition-[opacity] duration-150 will-change-transform"
      />
      {/* Lagging Ring */}
      <div
        ref={ringRef}
        className="fixed top-0 left-0 w-8 h-8 rounded-full border border-spark/30 transition-[opacity] duration-150 will-change-transform"
      />
    </div>
  );
}
