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
        background: "var(--background)",
        foreground: "var(--foreground)",
        "gray-100": "#D3D3D3",
        "gray-200": "#AAAAAA",
        "gray-300": "#7A7A7A",
      },
      backgroundImage: {
        noise: "url('/noise.webp')",
      },
      boxShadow: {
        "2xl": "0px 4px 15px 3px rgba(0, 0, 0, 0.25)",
      },
    },
  },
  plugins: [],
} satisfies Config;
