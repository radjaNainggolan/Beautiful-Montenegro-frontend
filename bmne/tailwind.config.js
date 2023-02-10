/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      fontFamily:{
        graduate:['Graduate'],
        montserrat:['Montserrat'],
      },
      height:{
        'good':'78rem',
        'card':'52rem',
        'sc':'94vh'
      }
    },
  },
  plugins: [
    require('tailwind-scrollbar')({ nocompatible: true })
  ],
}
