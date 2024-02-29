/** @type {import('tailwindcss').Config} */

const {nextui} = require("@nextui-org/react");

module.exports = {
  content: ["./src/**/*.{html,js}",
  "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}"
],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    fontFamily: {
      sans: ['Graphik', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
      montserrat: ['Montserrat', 'sans-serif'],
      raleway: ['Raleway', 'sans-serif'],
    },
    extend: {
      spacing: {
        '128': '32rem',
        '144': '36rem',
      },
      borderRadius: {
        '4xl': '2rem',
      }
    }
  },
  darkMode: "class",
  plugins: [nextui()],
}
