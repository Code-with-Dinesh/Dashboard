/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        customGreen1: '#1da256',
        customGreen2: '#48d483',
        custompink1: '#c012e2',
        custompink2:'#eb64fe',
        customblue1:'#2c78e5',
        customblue2:'#60aff5',
        customyellow1:'#e1950e',
        customyellow2:'#f3cd29'
      },
      backgroundImage: {
        'custom-gradient': 'linear-gradient(to right, #1da256, #48d483)',
        'custom-gradient': 'linear-gradient(to right, #c012e2, #eb64fe)',
      },
    },
  },
  plugins: [],
}

