import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        graphite: {
          950: "#111317",
          900: "#181A20",
          800: "#23262F",
          700: "#2E323E",
          600: "#3B404F",
          400: "#9499A8",
          300: "#B9BCC6",
          100: "#F1F2F4",
        },
        spark: {
          DEFAULT: "#B6FF2E",
          hover: "#C4FF57",
          deep: "#8DC91D",
          soft: "#D4FF85",
        },
        hairline: "rgba(255, 255, 255, 0.08)",
        error: "#FF7A7A",
        // Legacy semantic mappings mapped to exact graphite & spark palette
        bg: "#23262F",
        panel: "#2E323E",
        "panel-soft": "#3B404F",
        accent: "#B6FF2E",
        text: "#F1F2F4",
        muted: "#9499A8",
        border: "rgba(255, 255, 255, 0.08)",
      },
      fontFamily: {
        sans: ["var(--font-dm-sans)", "sans-serif"],
        display: ["var(--font-syne)", "sans-serif"],
        mono: ["var(--font-ibm-plex-mono)", "monospace"],
      },
      maxWidth: {
        "8xl": "68.75rem",
      },
      boxShadow: {
        hero: "0 30px 120px rgba(0, 0, 0, 0.45)",
        card: "0 18px 50px rgba(0, 0, 0, 0.35)",
        glow: "0 18px 60px rgba(182, 255, 46, 0.12)",
        "spark-sm": "0 0 20px rgba(182, 255, 46, 0.2)",
        "spark-lg": "0 0 50px rgba(182, 255, 46, 0.15)",
      },
    },
  },
  plugins: [],
};

export default config;
