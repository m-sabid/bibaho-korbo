/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./pages/**/*.{js,jsx,ts,tsx}", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#4ade80",
        secondary: "#06b6d4",
        danger: "#dc2626",
        light: "#E5E7EB",
        cusRed: "#C03839",
      },
      fontFamily: {
        philosopher: ["Philosopher", "sans-serif"],
      },
    },
  },
  plugins: [require("daisyui")],
};
