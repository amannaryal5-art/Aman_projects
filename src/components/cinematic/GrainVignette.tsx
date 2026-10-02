export function GrainVignette() {
  return (
    <div className="pointer-events-none fixed inset-0 z-30 overflow-hidden" aria-hidden="true">
      {/* Radial Vignette */}
      <div
        className="absolute inset-0 bg-radial-vignette opacity-80"
        style={{
          background:
            "radial-gradient(ellipse at center, transparent 40%, rgba(17, 19, 23, 0.6) 80%, rgba(17, 19, 23, 0.95) 100%)",
        }}
      />

      {/* Lightweight SVG Static Grain Pattern */}
      <svg
        className="absolute inset-0 w-full h-full opacity-[0.035] mix-blend-overlay"
        xmlns="http://www.w3.org/2000/svg"
      >
        <filter id="cinematic-grain">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.8"
            numOctaves="3"
            stitchTiles="stitch"
          />
          <feColorMatrix type="saturate" values="0" />
        </filter>
        <rect width="100%" height="100%" filter="url(#cinematic-grain)" />
      </svg>
    </div>
  );
}
