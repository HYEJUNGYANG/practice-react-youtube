/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{jsx, js, ts, tsx}'],
  theme: {
    extend: {
      fontSize: {
        xxs: '0.65rem'
      },
      width: {
        22: '5.5rem'
      },
      padding: {
        2.5: '0.6rem'
      }
    }
  },
  plugins: []
};
