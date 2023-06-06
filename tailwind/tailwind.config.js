/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      lg: "54rem",
      md: "40rem",
    },
    colors: {
      blue: "hsl(228, 39%, 23%)",
      white: "hsl(0, 0%, 100%)",
      red: "hsl(0, 100%, 70%)",
      gray: {
        900: "hsl(233, 12%, 13%)",
        700: "hsl(233, 12%, 33%)",
        400: "hsl(230, 12%, 60%)",
        100: "hsl(233, 12%, 70%)",
      },
      orange: {
        800: "hsl(12, 88%, 59%)",
        600: "hsl(12, 94%, 72%)",
        400: "hsl(12, 88%, 80%)",
        100: "hsl(13, 100%, 96%)",
      },
    },
    fontFamily: {
      serif: ["Be Vietnam Pro", "sans-serif"],
    },
    fontWeight: {
      regular: 400,
      medium: 500,
      bold: 700,
    },
  },
  plugins: [],
};
