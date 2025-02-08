/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: '#15B9D9', // Custom primary color
        secondary: '#202135', // Custom secondary color
      },
      fontFamily: {
        custom: ['caladea-regular', 'sans-serif'], // Custom font
      },
    },
  },
  plugins: [],



  
}

