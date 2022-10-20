/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        quicksand: "Quicksand",
        "plus-jakarta-sans": "'Plus Jakarta Sans'",
      },
    },
    colors: {
      white: "#fff",
      gray: {
        100: "#E6E8EC",
        200: "#e6e8ec",
        300: "#b9bdc6",
        400: "#7c8396",
        500: "#777e90",
        600: "#23262f",
        700: "#151e34",
      },
      violet: { 100: "#EB1F8F", 200: "#eb1f8f" },
      black: "#000",
    },
    fontSize: {
      "7xs": "4.68px",
      "6xs": "10px",
      "5xs": "12.29px",
      "4xs": "12px",
      "3xs": "13.82px",
      "2xs": "13px",
      xs: "14px",
      sm: "15px",
      base: "16px",
      lg: "20px",
      xl: "26px",
    },
    screens: {
      lg: { max: "1200px" },
      md: { max: "992px" },
      sm: { max: "768px" },
      mq350small: { raw: "screen and (max-width: 550px)" },
      xs: { raw: "screen and (max-width: 401px)" },
    },
  },
  corePlugins: { preflight: false },
};
