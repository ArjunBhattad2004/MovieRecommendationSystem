/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    extend: {
      fontFamily:{
        "raleway" :["Raleway"],
        "ubuntu" : ["Ubuntu"]
      }, 
      colors:{
        "backcolor1" :"#555555",
        "backcolor2" : "#0b1021",
        "mattgray" : "#111111",
        "sidebar-back" : "#14161d",
        "main-back" : "#1a1b22",
        "card-back" : "#0d0e0f"

      }
    },
  },
  plugins: [],
}

