/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'selector',
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors:{
        "dark": {
          100 : "#37474f",
        },
        "light":{
          100: "#DEE4E7"
        }
      }
    },
  },
  plugins: [],
}

