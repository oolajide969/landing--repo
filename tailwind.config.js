/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
      },
      colors: {
        "buttonBorder" : "#272B30",
        "buttonColor" : "#1A1D1F",
        "neutral":'#fcfcfc',//side bar and top nav share this color
        "main":'#efefef',
        "primary":"#2A85FF"// also used for border color


      },

      gridTemplateColumns: {
        // Simple 16 column grid
        'main': '300px 1fr',

        
      },
      gridTemplateRows: {
        // Simple 16 column grid
        'up': '1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr',

        
      },

      gridColumnStart: {
        '1': '1',
        '2': '2',
        '3': '3',
        '4': '4',
        '5': '5',
      },

      gridColumnEnd: {
        '1': '1',
        '2': '2',
        '3': '3',
        '4': '4',
        '5': '5',
      },
      gridRowStart: {
        '1': '1',
        '2': '2',
        '3': '3',
        '4': '4',
        '5': '5',
      },
      gridRowEnd: {
        '1': '1',
        '2': '2',
        '3': '3',
        '4': '4',
        '5': '5',
      }
    },
  },
  plugins: [],
}