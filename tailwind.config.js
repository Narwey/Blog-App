/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        blue: {
          400: '#1565D8', 
          500: '#183B56', 
          600: '#0D2436', 
        },
        gray: '#5A7184'
      },
      fontFamily: {
        'openSans': ['open-sans', 'sans-serif'],
        'roboto': ['roboto', 'sans-serif']
      }
    },
  },
  plugins: [],
}