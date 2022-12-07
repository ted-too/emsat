/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    colors: {
      white: "#FFFFFF",
      cyan: {
        DEFAULT: "#0099B0",
        50: "#BAF6FF",
        100: "#A6F3FF",
        200: "#7DEEFF",
        300: "#54E9FF",
        400: "#2BE3FF",
        500: "#03DEFF",
        600: "#00BCD9",
        700: "#0099B0",
        800: "#006878",
        900: "#003740",
      },
      dark: {
        DEFAULT: "#030303",
        100: "#b5b5b5",
        200: "#696969",
        300: "#2c2c2c",
        400: "#171717",
        500: "#030303",
      },
      black: {
        DEFAULT: "#1a1a1a",
        50: "#f2f2f2",
        100: "#e5e5e5",
        200: "#cccccc",
        300: "#b3b3b3",
        400: "#999999",
        500: "#808080",
        600: "#666666",
        700: "#4d4d4d",
        800: "#333333",
        900: "#1a1a1a",
      },
    },
    extend: {},
    fontFamily: {
      sans: ["Nunito", "sans-serif"],
    },
  },
  plugins: [],
};
