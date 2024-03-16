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
        'explorebg':  'rgba(174, 174, 174, 0.2)',
        'exploreCont': 'rgba(255, 255, 255, 0.50)',
        'BgPartner': 'rgba(247, 247, 247, 1)',
        'PartName': 'rgba(134, 134, 134, 1)',
        'HomeText': 'rgba(54, 54, 54, 1)',


      },
    },
  },
  plugins: [],
}