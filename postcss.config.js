module.exports = {
  plugins: [
    require('tailwindcss'),
    require('postcss-import')({
      addModulesDirectories: ["assets/css"]
    }),
    require('autoprefixer'),
    ...(process.env.JEKYLL_ENV == 'production'
      ? [require('cssnano')({ preset: 'default' })]
      : [])
  ]
}