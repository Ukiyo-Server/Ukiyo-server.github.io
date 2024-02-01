/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
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
          light: "#7AA4FF", // For lighter primary color
          DEFAULT: "#2563EB", // Normal primary color
          dark: "#1A3D80", // Used for hover, active, etc.
        },
        secondary: {
          light: "#05a863",
          DEFAULT: "#05a863",
          dark: "#05a863",
        },
      },
    },
  },
  daisyui: {
    themes: [
      {
        light: {
          ...require("daisyui/src/theming/themes")["light"],
          "primary": "#2563EB",

          "secondary": "#05a863",

          "accent": "#00bbff",

          "neutral": "#111719",

          "base-100": "#fff",

          "info": "#00afce",

          "success": "#22c55e",

          "warning": "#c99400",

          "error": "#ff5a82",
        },
        dark: {
          ...require("daisyui/src/theming/themes")["dark"],
          primary: "#2563EB",
        },
      },
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
      "sunset",
    ], // false: only light + dark | true: all themes | array: specific themes like this ["light", "dark", "cupcake"]
    darkTheme: "dark", // name of one of the included themes for dark mode
    base: true, // applies background color and foreground color for root element by default
    styled: true, // include daisyUI colors and design decisions for all components
    utils: true, // adds responsive and modifier utility classes
    prefix: "", // prefix for daisyUI classnames (components, modifiers and responsive class names. Not colors)
    logs: true, // Shows info about daisyUI version and used config in the console when building your CSS
    themeRoot: ":root", // The element thaqt receives theme color CSS variables
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

