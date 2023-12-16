/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './ _drafts/**/ *.html',
    './_includes/**/*.html',
    './_layouts/**/*.html', ,
    './blog/*.html',
    './about/*.html',
    './_posts/*.md',
    './team/*.html',
    './*.md',
    './*js',
    './**/*.html',
    './assets/js/*.js',
    './node_modules/preline/dist/*.js',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          light: '#2563EB',
          DEFAULT: '#2563EB',
          dark: '#2563EB',
        }
      }
    },
  },
  plugins: [require("kutty"), require('preline/plugin'), require('@tailwindcss/typography'),],
}

