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
        xl: "1.2em",
        '2xl': "1.5em",
        '3xl': "2em"
      }
    },
  },
  plugins: [require("daisyui")],
}