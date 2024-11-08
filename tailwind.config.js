/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
    "./node_modules/tw-elements/js/**/*.js"
  ],
  darkMode: 'class',
  prefix: 'tw-',
  theme: {
    extend: {},
  },
  plugins: [require("tw-elements/plugin.cjs")],
};
