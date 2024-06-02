/** @type {import('tailwindcss').Config} */
const colors = require("./src/utility/pokemonTypeColorCodes");

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: colors,
    extend: {},
  },
  plugins: [],
};
