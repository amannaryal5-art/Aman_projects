"use client";

export function GrainVignette() {
  return (
    <div className="pointer-events-none fixed inset-0 z-30 overflow-hidden" aria-hidden="true">
      {/* Cinematic Radial Vignette - hardware-accelerated CSS gradient */}
      <div
        className="absolute inset-0 opacity-80"
        style={{
          background:
            "radial-gradient(ellipse at center, transparent 40%, rgba(17, 19, 23, 0.6) 80%, rgba(17, 19, 23, 0.95) 100%)",
        }}
      />
    </div>
  );
}
