/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        oliveDrab: '#9B773D',
        DavysGrey: '#646263 ',
        RichBlack: '#121112 ',
        olive: '#9B773D',
        grayishBlue: '#1E293B',
        darkTaupe: "#615545"
      },
    },
  },
  plugins: [],
}

// linear-gradient(to right top, #oliveDrab, #DavysGrey, #RichBlack, #DavysGrey, #oliveDrab);
