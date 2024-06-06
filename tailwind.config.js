/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./*.{html,js}",
    "./brandpages/*.{html,js}",
    "./**/*.{html,js}",
  ],
  theme: {
    fontFamily: {
      'sans': ['ui-sans-serif', 'system-ui'],
      'serif': ['ui-serif', 'Georgia'],
      'mono': ['ui-monospace', 'SFMono-Regular'],
      'display': ['Oswald'],
      'body': ['"Nunito"'],
      'header': ['"Bebas Neue"'],
      'fun': ['"Poppins"'],
    },
    extend: {}
  },
  plugins: [
    require('postcss-import')({}),
    require('tailwindcss')({}),
    require('autoprefixer')({}),
    require('daisyui'),
  ],
  daisyui: {
    themes: ["light", "dark"],
  },
}

