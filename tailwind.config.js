const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  purge: ['./src/**/*.html', './src/**/*.md'],
  darkMode: false,
  theme: {
    extend: {
      fontFamily: {
        sans: ['loos-normal, sans-serif', ...defaultTheme.fontFamily.sans],
      },
      borderWidth: {
        1: '1px',
      },
    },
  },
  variants: {
    borderRadius: ['hover', 'focus'],
  },
  plugins: [require('@tailwindcss/typography')],
};
