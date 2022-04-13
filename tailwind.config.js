module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "blue": {
          300: "#D4E7FE",
          500: "#217BF4"
        },
        darkBlue: "#0A093D"
      }
    },
    fontFamily: {
      body: ["Inter", "sans-serif"],
      header: ["poppins", "sans-serif"],
    }
  },
  plugins: [],
}
