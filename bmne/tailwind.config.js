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
        'card':'25rem',
        'sc':'88vh'
      }
    },
  },
  plugins: [
    require('tailwind-scrollbar')({ nocompatible: true })
  ],
}
