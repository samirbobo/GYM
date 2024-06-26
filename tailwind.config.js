/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },
      backgroundImage: {
        hero: "url('./src/assets/images/hero4.jpeg')",
        hero2: "url('./src/assets/images/hero5.png')",
      },
    },
  },
  plugins: [],
};
