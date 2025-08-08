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
        primary: {
          dark: "#1A3F22",
          light: "#58761B",
        },
        secondary: {
          light: "#D99201",
          dark: "#905A01",
        },
        rahmah: {
          black: "#0D2F2B",
        },
      },
      fontFamily: {
        sans: ["Gilroy", "system-ui", "sans-serif"],
        gilroy: ["Gilroy", "system-ui", "sans-serif"],
        arabic: ["var(--font-arabic)", "system-ui", "sans-serif"],
      },
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      ld: "1100px",
      xl: "1280px",
      "2xl": "1536px",
    },
  },
  plugins: [],
};

export default config;
