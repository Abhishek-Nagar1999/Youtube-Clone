/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,tsx,ts,js,jsx}","./src/**/**/*.{html,tsx,ts,js,jsx}"],
  theme: {
    extend: {
      backgroundColor:{
        'black':'#0f0f0f',
        'orange': '#ff5722'
      },
      colors:{
        'gray':'#303030',
        'blue':'#065fd4'
      }
    },
  },
  plugins: [],
}

