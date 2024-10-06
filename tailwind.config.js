/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,tsx,ts}"],
  theme: {
    extend: {},
    colors: {
      dark: "#201F1F",
      lightBlue: "rgb(221 221 221)",
    },
  },

  plugins: [require("@tailwindcss/forms")],
};
