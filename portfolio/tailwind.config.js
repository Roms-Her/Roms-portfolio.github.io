/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,vue}"],
  theme: {
    extend: {
      colors:{
        backgroundColor: '#141726',
        components: "#253974",
        separator: "#3A4F97",
        solid: "#0090FF",
        accessible: "#d6e1ff"
      },

      fontSize: {
        sm: "0.8em",
        base: "1em0",
        base2: "1.1em",
        xl: "1.2em",
        '2xl': "1.5em",
        '3xl': "2em",
        '35xl': "2.5em",
        '4xl': "3em",
        max: "5em"
      },

      screens: {
        'sm': '640px',
        'md': '800px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1536px',
        'ms': {'max': '1280px'},
        'small': {'max': '640px'}
      }
    },
  },
  plugins: [require("daisyui")],
}