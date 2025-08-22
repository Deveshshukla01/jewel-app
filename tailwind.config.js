/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#faf8f7',
          100: '#f5f0ee',
          200: '#e8ddd8',
          300: '#d9c7be',
          400: '#c6aa9d',
          500: '#b08d7c',
          600: '#9a7260',
          700: '#7d5a49',
          800: '#542018', // Main primary color
          900: '#3d1611',
        },
        secondary: {
          50: '#fefcf7',
          100: '#fdf8ed',
          200: '#fbf0d4',
          300: '#f7e5b3',
          400: '#f2d788',
          500: '#ebcc78', // Main secondary color
          600: '#d4b366',
          700: '#b8954f',
          800: '#9a7a42',
          900: '#7d6238',
        },
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
        gilda: ['"Gilda Display"', "serif"],
      },
      animation: {
        'fade-in-up': 'fadeInUp 0.8s ease-out',
        'slide-in-left': 'slideInLeft 0.8s ease-out',
        'slide-in-right': 'slideInRight 0.8s ease-out',
        'bounce-in': 'bounceIn 1s ease-out',
        'shimmer': 'shimmer 2s infinite',
        'float': 'float 3s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite',
      },
      boxShadow: {
        'warm': '0 10px 40px rgba(84, 32, 24, 0.15)',
        'warm-lg': '0 20px 60px rgba(84, 32, 24, 0.2)',
        'amber': '0 10px 40px rgba(235, 204, 120, 0.3)',
      }
    },
  },
  plugins: [],
}