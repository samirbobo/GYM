/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },
      backgroundImage: {
        hero: "url('./src/assets/images/hero.jpeg')",
        hero2: "url('./src/assets/images/hero2.png')",
      },
    },
  },
  plugins: [],
};
