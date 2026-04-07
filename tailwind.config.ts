import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        bg: "#0d0f14",
        card: "#13151c",
        elevated: "#1a1d2e",
        accent: "#a78bfa",
        live: "#34d399",
        text: "#f1f5f9",
        muted: "#6b7280",
        border: "#2a2d35"
      },
      fontFamily: {
        sans: ["var(--font-geist-sans)"],
        mono: ["var(--font-geist-mono)"]
      },
      maxWidth: {
        "8xl": "90rem"
      },
      keyframes: {
        blink: {
          "0%, 49%": { opacity: "1" },
          "50%, 100%": { opacity: "0" }
        },
        pulseDot: {
          "0%, 100%": { transform: "scale(1)", opacity: "0.85" },
          "50%": { transform: "scale(1.12)", opacity: "1" }
        },
        gridDrift: {
          "0%": { transform: "translate3d(0, 0, 0)" },
          "100%": { transform: "translate3d(-24px, -24px, 0)" }
        }
      },
      animation: {
        blink: "blink 1s step-end infinite",
        pulseDot: "pulseDot 1.8s ease-in-out infinite",
        gridDrift: "gridDrift 18s linear infinite"
      }
    }
  },
  plugins: []
};

export default config;

