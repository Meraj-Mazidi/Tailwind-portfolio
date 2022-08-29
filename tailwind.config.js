/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html'],
  theme: {
    extend: {
      screens: {
        'sm': '480px',
        'md': '768px',
        'lg': '1024px'
      },
      fontFamily: {
        'nunito': ['Nunito', 'sans-serif']
      },
      spacing: {
        '50vh': '50vh',
        'big': '32rem',
        '10%': '10%',
        '15%': '15%',
        '100px': '100px'
      }
    },
  },
  plugins: [],
}

