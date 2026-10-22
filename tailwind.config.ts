import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        red: { DEFAULT: "#C82006" },
        ivory: "#FAF8F3",
        ink: "#1B1817",
        oxblood: "#4A0E0E",
        champagne: "#C9B99A",
      },
      fontFamily: {
        display: ["var(--font-display)", "Arial Black", "sans-serif"],
        body: ["var(--font-body)", "Georgia", "serif"],
      },
      transitionTimingFunction: { luxe: "cubic-bezier(0.22,1,0.36,1)" },
    },
  },
  plugins: [],
};
export default config;
