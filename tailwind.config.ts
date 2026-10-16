import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx,mdx}",
    "./components/**/*.{ts,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: "color-mix(in srgb, var(--bg) calc(<alpha-value> * 100%), transparent)",
        "bg-elev": "color-mix(in srgb, var(--bg-elev) calc(<alpha-value> * 100%), transparent)",
        surface: "color-mix(in srgb, var(--surface) calc(<alpha-value> * 100%), transparent)",
        fg: "color-mix(in srgb, var(--fg) calc(<alpha-value> * 100%), transparent)",
        muted: "color-mix(in srgb, var(--muted) calc(<alpha-value> * 100%), transparent)",
        border: "var(--border)",
        "border-strong": "var(--border-strong)",
        accent: "color-mix(in srgb, var(--accent) calc(<alpha-value> * 100%), transparent)",
        "accent-dim": "color-mix(in srgb, var(--accent-dim) calc(<alpha-value> * 100%), transparent)",
      },
      fontFamily: {
        serif: ["var(--font-serif)", "Georgia", "serif"],
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "monospace"],
      },
      animation: {
        marquee: "marquee 40s linear infinite",
        drift: "drift 18s ease-in-out infinite",
        "pulse-glow": "pulseGlow 8s ease-in-out infinite",
        "blink-cursor": "blinkCursor 1s steps(1) infinite",
      },
      keyframes: {
        marquee: {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-50%)" },
        },
        drift: {
          "0%, 100%": { transform: "translate(0,0) scale(1)" },
          "50%": { transform: "translate(40px,-30px) scale(1.1)" },
        },
        pulseGlow: {
          "0%, 100%": { opacity: "0.35" },
          "50%": { opacity: "0.55" },
        },
        blinkCursor: {
          "0%, 49%": { opacity: "1" },
          "50%, 100%": { opacity: "0" },
        },
      },
    },
  },
  plugins: [],
  darkMode: "class",
};

export default config;
