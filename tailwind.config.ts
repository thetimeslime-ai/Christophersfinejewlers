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
        gold: {
          50:  "#fdf9ee",
          100: "#f7edcc",
          200: "#eed98a",
          300: "#e5c456",
          400: "#d4a82a",
          500: "#A16207",
          600: "#8a5205",
          700: "#8a6218",
          800: "#6b4c14",
          900: "#4d370f",
        },
        cream: "#FAF8F3",
        charcoal: "#1a1a1a",
      },
      fontFamily: {
        serif: ["var(--font-cormorant)", "Georgia", "serif"],
        sans:  ["var(--font-montserrat)", "system-ui", "sans-serif"],
      },
      letterSpacing: {
        display: "-0.03em",
        wide:    "0.18em",
        widest:  "0.28em",
      },
      lineHeight: {
        body: "1.75",
      },
    },
  },
  plugins: [],
};

export default config;
