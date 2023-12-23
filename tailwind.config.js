/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ['./src/**/*.{jsx, js, ts, tsx}'],
  theme: {
    extend: {
      fontSize: {
        xxs: '0.65rem'
      },
      width: {
        22: '5.5rem',
        100: '34rem'
      },
      padding: {
        2.5: '0.6rem'
      },
      borderWidth: {
        0.5: '0.5px',
        1: '1px'
      },
      backgroundColor: {
        'main-dark': '#0f0f0f',
        'dark': '#2E2E2E',
        'dark-hover': '#4a4949'
      }
    }
  },
  plugins: []
};
