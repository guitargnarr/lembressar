/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          50: '#f0f1f8',
          100: '#d9dbe9',
          200: '#b3b7d3',
          300: '#8d93bd',
          400: '#676fa7',
          500: '#414b91',
          600: '#343c74',
          700: '#2b3674',
          800: '#1e2550',
          900: '#111432',
        },
        cream: {
          50: '#fefdfb',
          100: '#fdf9f3',
          200: '#faf3e7',
          300: '#f5e8d4',
          400: '#eddcc0',
          500: '#e5d0ac',
        },
        gold: {
          400: '#c9a96e',
          500: '#b8944f',
          600: '#a07d3a',
        },
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Garamond', 'serif'],
        sans: ['"Inter"', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        'widest-plus': '0.2em',
      },
    },
  },
  plugins: [],
}
