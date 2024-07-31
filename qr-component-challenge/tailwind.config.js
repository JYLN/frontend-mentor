/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.html'],
  theme: {
    colors: {
      blue: {
        500: '#3685FF',
        600: '#2C7DFA',
      },
      slate: {
        300: '#D5E1EF',
        500: '#6877BD',
        900: '#1F314F',
      },
      white: '#FFFFFF',
    },
    extend: {
      fontFamily: {
        outfit: ['Outfit', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
