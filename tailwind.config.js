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
        black: "#201F1F",
        "gray-black": "#3C3B3B",
        white: "#fff",
        error: "#FE3210",
      },
    },
  },

  plugins: [require("@tailwindcss/forms")],
};
