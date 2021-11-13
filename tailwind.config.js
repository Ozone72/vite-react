module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    container: {
      center: true,
      padding: '1.5rem',
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require('tailwindcss-debug-screens')],
};
