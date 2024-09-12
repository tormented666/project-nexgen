/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        poly: ['poly', 'sans-serif'], // Define your custom font here
      },
    },
  },
  plugins: [],
}
