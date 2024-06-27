/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },
      backgroundImage: {
        hero: "url('assets/images/hero.jpeg')",
        hero2: "url('assets/images/hero2.png')",
      },
    },
  },
  plugins: [],
};
