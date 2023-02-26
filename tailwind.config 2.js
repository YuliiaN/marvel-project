/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ['./public/index.html', './**/*.js'],
  theme: {
    extend: {},
    fontSize: {
      'text-2.5xl': '1.75rem',
    },

    colors: {
      maroon: '#9F0013',
      black: '#232222',
    },

    boxShadow: {
      '3xl': '5px 5px 20px rgba(0, 0, 0, 0.25)',
    },

    backgroundImage: {
      mjolnir: "url('../img/mjolnir.png')",
    },
  },
  plugins: [],
};
