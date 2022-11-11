/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "app-primary": {
          DEFAULT: "#834958",

          50: "#b57b8a",
          100: "#ab7180",
          200: "#a16776",
          300: "#975d6c",
          400: "#8d5362",
          500: "#834958",
          600: "#793f4e",
          700: "#6f3544",
          800: "#652b3a",
          900: "#5b2130",
        },
        "app-secondary": {
          DEFAULT: "#414850",
          50: "#737a82",
          100: "#697078",
          200: "#5f666e",
          300: "#555c64",
          400: "#4b525a",
          500: "#414850",
          600: "#373e46",
          700: "#2d343c",
          800: "#232a32",
          900: "#192028",
        },
      },
    },
    fontFamily: {
      Inter: ["Inter,sans-serif"],
    },
  },
  plugins: [],
};
