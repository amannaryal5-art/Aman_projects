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
        bg: "#0a0a0a",
        panel: "#101010",
        "panel-soft": "#151515",
        accent: "#e8ff47",
        text: "#f5f5f5",
        muted: "#8a8a8a",
        border: "#262626"
      },
      fontFamily: {
        sans: ["var(--font-dm-sans)"],
        display: ["var(--font-syne)"],
        mono: ["var(--font-ibm-plex-mono)"]
      },
      maxWidth: {
        "8xl": "68.75rem"
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(18px)" },
          "100%": { opacity: "1", transform: "translateY(0)" }
        }
      },
      animation: {
        fadeUp: "fadeUp 700ms cubic-bezier(0.22, 1, 0.36, 1) both"
      },
      boxShadow: {
        hero: "0 30px 120px rgba(0, 0, 0, 0.45)",
        card: "0 18px 50px rgba(0, 0, 0, 0.35)",
        glow: "0 18px 60px rgba(232, 255, 71, 0.12)"
      }
    }
  },
  plugins: []
};

export default config;
