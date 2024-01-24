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
    './node_modules/preline/dist/*.js'
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          light: "#2563EB", // For lighter primary color
          DEFAULT: "#2563EB", // Normal primary color
          dark: "#2563EB", // Used for hover, active, etc.
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/custom-forms'),
    require('preline/plugin'),
    require("kutty"),
    require('@tailwindcss/typography')],
}

