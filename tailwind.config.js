/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: {
          50: '#fefdf8',
          100: '#fdf8e8',
          200: '#faf0d0',
          300: '#f5e4a8',
          400: '#efd780',
          500: '#e8c547',
          600: '#d4a72c',
          700: '#b08b23',
          800: '#8f6f1f',
          900: '#775c1d',
        },
        brown: {
          50: '#faf7f2',
          100: '#f4ede1',
          200: '#e8d9c2',
          300: '#d9c09d',
          400: '#c8a176',
          500: '#b8855a',
          600: '#a6714e',
          700: '#8b4513',
          800: '#6b3410',
          900: '#4a240b',
        }
      },
      fontFamily: {
        'serif': ['Georgia', 'serif'],
        'elegant': ['Playfair Display', 'serif'],
      }
    },
  },
  plugins: [],
}