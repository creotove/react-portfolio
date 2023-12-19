/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
    colors: {
      "x-green": "#99D0AF",
      "x-orange": "#FF8618",
      "x-orange-shade": "#5A320E",
      "x-yellow": "#FECD07",
      "x-cyan": "#58CCF7",
      "x-smoke": "#D9D9D9",
      "x-gray-dark": "#3B3B3B",
      "x-gray-dark-v2": "#535353",
      "white" : "#fff",
      "black" : "#000"
    },
    // textColor: {
    //   "x-gray-dark": "#3B3B3B",
    //   "x-white": "#fff",
    // },
    fontFamily: {
      sans: ["Poppins", "sans-serif"],
    },
  },
  plugins: [],
};
