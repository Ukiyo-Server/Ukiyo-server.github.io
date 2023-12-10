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
    extend: {
      colors: {
        primary: {
          light: '#A1BCF6',
          DEFAULT: '#2563EB',
          dark: '#0B2E7C',
        }
      }
    },
  },
  plugins: [require("kutty"), require('preline/plugin'), require('@tailwindcss/typography'),],
}

