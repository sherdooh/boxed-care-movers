/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  safelist: ["primaryOrange", "secondaryOrange"],
  theme: {
    extend: {
      colors: {
        primaryOrange: "#e59d67",
        secondaryOrange: "#EBAC79",
      },
    },
  },
  plugins: [],
};
