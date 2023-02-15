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
        'good':'70rem',
        'card':'27rem',
        'sc':'92vh',
        'form':'40rem'
      }
    },
  },
  plugins: [
    require('tailwind-scrollbar')({ nocompatible: true })
  ],
}
