/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './ _drafts/**/ *.html',
    './_includes/**/*.html',
    './_layouts/**/*.html', ,
    './blog/*.html',
    './about/*.html',
    './_posts/*.md',
    'team/*.html',
    './*.md',
    './**/*.html',
    './assets/js/*.js',
    'node_modules/preline/dist/*.js',
  ],
  theme: {
    extend: {},
  },
  plugins: [require("kutty"), require('preline/plugin'), require('@tailwindcss/typography'),],
}

