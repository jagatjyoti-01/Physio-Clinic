/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: '#0D9488', // Custom primary color
        secondary: '#202135', // Custom secondary color
        secondary2:'#8D8D8D'
      },
      fontFamily: {
        custom: ['playfair'], // Custom font
        custom1: ['caladea-regular', 'sans-serif'], // Custom font
        custom2: ['caladea-regular-italic', 'sans-serif'], // Custom font

      },
    },
  },
  plugins: [],



  
}

