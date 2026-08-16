/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
    },
    screens: {
      sm: "375px",
      md: "768px",
      lg: "1000px",
      xl: "1111px",
      "2xl": "1440px",
    },
    colors: {
      transparent: "transparent",
      current: "currentColor",
      white: "#ffffff",
      black: "#000000",
      bg: "#0a0a0c",
      surface: "#131316",
      surface2: "#1a1a1f",
      border: "#27272e",
      text: "#ececee",
      muted: "#9c9ca6",
      faint: "#616169",
      accent: "#2dd4bf",
      "accent-dim": "#14b8a6",
      danger: "#f87171",
    },
    fontFamily: {
      sans: ["var(--font-sans)", "system-ui", "sans-serif"],
      mono: ["var(--font-mono)", "ui-monospace", "monospace"],
    },
    extend: {
      maxWidth: {
        prose: "42rem",
        content: "72rem",
      },
      typography: {},
      keyframes: {
        "fade-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
      },
    },
  },
  plugins: [],
};
