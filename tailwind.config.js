/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      backgroundImage: {
        "blob-pattern": "url('assets/blob-scene-haikei.svg')",
      },
      colors: {
        primary: "#003049",
        secondary: "#669BBC",
        accent: "#C1121F",
        "accent-2": "#780000",
        cream: "#FDF0D5",
      },
      fontFamily: {
        title: ["Libre Baskerville", ...defaultTheme.fontFamily.serif],
        body: ["Montserrat", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
};
