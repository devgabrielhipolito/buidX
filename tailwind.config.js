/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,tsx,ts}"],
  theme: {
    fontFamily: {
      sanfrancisco: ["san francisco", "sans-serif"],
      "sanfrancisco-normal": ["san francisco normal", "sans-serif"],
    },
    extend: {
      colors: {
        "gray-500": "#1F1F1F",
        "gray-300": "#8B8B8B",
        "gray-100": "#161616",
        gray: "#A4A4A4",
        white: "#fff",
        black: "#101010",
      },
    },
  },

  plugins: [require("@tailwindcss/forms")],
};
