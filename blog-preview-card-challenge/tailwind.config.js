/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.html"],
  theme: {
    colors: {
      yellow: "#F4D04E",
      gray: {
        500: "#6B6B6B",
        950: "#111111",
      },
      white: "#FFFFFF",
    },
    spacing: {
      50: "4px",
      100: "8px",
      150: "12px",
      200: "24px",
    },
    extend: {
      fontFamily: {
        figtree: ["Figtree", "sans-serif"],
      },
    },
  },
  plugins: [],
};
