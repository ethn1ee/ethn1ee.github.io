import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        black: "#060606",
        white: "#F6F6F6",
        "gray-100": "#D3D3D3",
        "gray-200": "#AAAAAA",
        "gray-300": "#7A7A7A",
        "gray-400": "#2E2E2E",
        "gray-500": "#141414",
      },
      backgroundImage: {
        noise: "url('/noise.webp')",
      },
      boxShadow: {
        "2xl": "0px 4px 15px 3px rgba(0, 0, 0, 0.25)",
      },
      fontFamily: {
        mono: ["var(--font-mono)"],
        playfair: ["var(--font-playfair)"],
        oswald: ["var(--font-oswald)"],
      },
    },
  },
  plugins: [],
} satisfies Config;
