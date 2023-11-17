/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {},
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
    }
  },
  plugins: [],
}

