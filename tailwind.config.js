/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "app-primary": "#834958",
        "app-secondary": "#414850",
      },
    },
    fontFamily: {
      Inter: ["Inter,sans-serif"],
    },
  },
  plugins: [],
};
