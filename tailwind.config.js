/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "buttonBorder" : "#272B30",
        "buttonColor" : "#1A1D1F"


      },
    },
  },
  plugins: [],
}