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
    },
    colors: {
      body: "#e9e9e9",
      white: "#fff",
      text: "#000",
      text_Light: "#000",
      buttonBg: "hsl(217, 10%, 25%)",
      cyan: "teal",
      cyan_dark: "teal",
      veryDark: "hsl(0, 0%, 0%)",
      gray: "hsl(217, 13%, 27%)",
    },
    fontFamily: {
      pop: [`"Poppins", "sans-serif"`],
    },
    extend: {},
  },
  plugins: [],
};
