/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['node_modules/preline/dist/*.js', "./src/**/*.{html,js}"],
  theme: {
    extend: {},
  },
  plugins: [require("kutty"), require('preline/plugin'), require('@tailwindcss/typography'),],
}

