import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        navy: { DEFAULT: "#071b33", deep: "#041224", soft: "#0c2947" },
        gold: { DEFAULT: "#c5a15b", light: "#e3ca94", dark: "#98783d" },
        ivory: "#f8f6f0",
        mist: "#bec8d2",
      },
      fontFamily: {
        display: ["var(--font-display)", "Georgia", "serif"],
        sans: ["var(--font-body)", "Arial", "sans-serif"],
      },
    },
  },
};

export default config;
