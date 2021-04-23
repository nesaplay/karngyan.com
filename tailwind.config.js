const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  purge: [
    './src/**/*.html',
    './src/**/*.vue',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'black': '#12151E',
        'hot-pink': '#fd2d78',
        'gray-900': '#18191a',
        'gray-800': '#212324',
        'gray-700': '#2F3133',
        'gray-600': '#404345',
        'gray-500': '#55585A',
        'gray-400': '#797B7C',
        'gray-300': '#A7A8A8',
        'gray-200': '#D3D4D4',
        'gray-100': '#ECECEC',
        'gray-50': '#F4F4F4',
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif', ...defaultTheme.fontFamily.sans],
        body: ['"Londrina Solid"', 'sans-serif']
      },
    },
  },
  variants: {
    extend: {
      fill: ['hover', 'focus'],
    },
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography')
  ],
}
