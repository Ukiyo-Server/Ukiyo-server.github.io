/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './ _drafts/**/ *.html',
    './_includes/**/*.html',
    './_layouts/**/*.html',
    './_posts/*.md',
    './*.md',
    './*.html',
    './assets/js/*.js'
  ],
  theme: {
    extend: {},
  },
  plugins: [require("kutty"), require('preline/plugin'), require('@tailwindcss/typography'),],
}

