/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        'roboto': ['Roboto', 'sans-serif'],
        'montserrat': ['Montserrat', 'sans-serif'],
        'raleway': ['Raleway', 'sans-serif'],
      },
      colors: {
        green: '#237C2C',
        darkGreen: '#18561E',
        lightGrey: '#F6F6F6',
        darkGrey: '#777777',
        white: '#FFFFFF',
        dark: '#444444',
      },
      boxShadow: {
        custom: '-1px 11px 38px -4px rgba(0,0,0,0.75)',
      },
    },
  },
  plugins: [],
}

