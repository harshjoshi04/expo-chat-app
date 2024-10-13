/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors:{
        mainColor:"#1E1E1E",
        seconrdColor:"#448976",
        thirdColor:"#95EDC5"
      },
      fontFamily: {
        Poppins: ["Poppins", "sans-serif"],
        PoppinsBlack: ["PoppinsBlack", "sans-serif"],
        PoppinsBold: ["PoppinsBold", "sans-serif"],
        PoppinsItalic: ["PoppinsBlackItalic", "sans-serif"],
      }
    },
  },
  plugins: [],
}

