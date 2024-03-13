/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'BgOwnBlue': 'rgba(74, 165, 210, 0.7)',
        'OnerBtn' :  'rgba(45, 55, 72, 1)',

      },
    },
  },
  plugins: [],
}