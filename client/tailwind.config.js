/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'BgOwnBlue': 'rgb(74,165,210)',
        'OnerBtn' :  'rgb(74,165,210)',
        'explorebg':  'rgba(174, 174, 174,0.2)',
        'exploreCont': 'rgb(255, 255, 255)',
        'BgPartner': 'rgba(247, 247, 247, 1)',
        'PartName': 'rgba(134, 134, 134, 1)',
        'HomeText': 'rgba(54, 54, 54, 1)',
        'bgCatorgies':' rgba(233, 233, 233,1)',
        'Bgphto':'#4AA5D2',
        'GetText':'rgba(24, 30, 75, 1)',
        'BlueGrey':'rgba(94, 98, 130, 1)',
      },
    },
  },
  plugins: [],
}