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
  daisyui: {
    themes: [
      "cupcake",
      "bumblebee",
      "emerald",
      "corporate",
      "synthwave",
      "retro",
      "cyberpunk",
      "valentine",
      "halloween",
      "garden",
      "forest",
      "aqua",
      "lofi",
      "pastel",
      "fantasy",
      "wireframe",
      "black",
      "luxury",
      "dracula",
      "cmyk",
      "autumn",
      "business",
      "acid",
      "lemonade",
      "night",
      "coffee",
      "winter",
      "dim",
      "nord",
      "sunset"
    ], // false: only light + dark | true: all themes | array: specific themes like this ["light", "dark", "cupcake"]
    darkTheme: "dark", // name of one of the included themes for dark mode
    base: false, // applies background color and foreground color for root element by default
    styled: false, // include daisyUI colors and design decisions for all components
    utils: true, // adds responsive and modifier utility classes
    prefix: "", // prefix for daisyUI classnames (components, modifiers and responsive class names. Not colors)
    logs: true, // Shows info about daisyUI version and used config in the console when building your CSS
    themeRoot: ":root", // The element that receives theme color CSS variables
  },
  plugins: [
    require('@tailwindcss/custom-forms'),
    require('preline/plugin'),
    require("kutty"),
    require('@tailwindcss/typography'),
    require("daisyui"),
    require('@tailwindcss/aspect-ratio'),],
  corePlugins: {
    aspectRatio: false,
  },
  
}

