import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // From brand colors.png – Uplifted palette
        primary: {
          DEFAULT: "#ED5F2D", // Vibrant Orange (main CTAs, energy)
          dark: "#d95424",
          light: "#f07a52",
        },
        accent: {
          DEFAULT: "#E19B56", // Warm Orange / Amber
          dark: "#c9823e",
          light: "#eab078",
        },
        neutral: {
          DEFAULT: "#3D3938", // Dark Gray / Charcoal (text)
          light: "#6b6766",
          muted: "#9a9695",
        },
        slate: "#758AB1", // Muted Blue/Slate (secondary)
        cream: "#FDE6DB", // Light Peach (warm backgrounds)
      },
      fontFamily: {
        sans: ["system-ui", "Segoe UI", "sans-serif"],
        display: ["system-ui", "Segoe UI", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
