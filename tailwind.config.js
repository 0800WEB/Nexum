/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundColor:{
        "primary":"#f6e3d8",
        "secondary":"#212121",
        "accent":"#803d3b"
      },
      colors:{
        "primary":"#f6e3d8",
        "secondary":"#212121",
        "accent":"#803d3b"
      }
    },
  },
  plugins: [],
}