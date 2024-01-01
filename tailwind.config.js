/** @type {import('tailwindcss').Config} */

module.exports = {
  darkMode: 'class',
  content: ['./src/**/*.{jsx, js, ts, tsx}'],
  theme: {
    extend: {
      fontFamily: {
        roboto: ['"Roboto"', '"Arial"', 'sans-serif']
      },
      fontSize: {
        'xxs': '0.65rem',
        's': '0.9rem',
        '1.5xl': '1.35rem'
      },
      gap: {
        3.5: '0.85rem'
      },
      width: {
        '3.8': '0.92rem',
        '22': '5.5rem',
        '58': '14.3rem',
        '90': '22rem',
        '98': '28rem',
        '100': '34rem',
        '280': '80rem',
        '15%': '15%',
        '19%': '19%',
        '23%': '23.8%',
        '70%': '70%',
        '85%': '85%',
        'minus22': 'calc(100% - 22rem)'
      },
      height: {
        200: '45rem'
      },
      padding: {
        2.5: '0.6rem',
        22: '5.5rem',
        58: '14.3rem'
      },
      margin: {
        22: '5.5rem',
        58: '14.3rem'
      },
      borderWidth: {
        0.5: '0.5px',
        1: '1px'
      },
      backgroundColor: {
        'main-dark': '#0f0f0f',
        'dark': '#2E2E2E',
        'dark-hover': '#4a4949'
      },
      aspectRatio: {
        '180/101': 180 / 101
      }
    }
  },
  plugins: []
};

value = {
  58: '14.3rem'
};
