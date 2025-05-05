/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      fontFamily: {
        regular: ["WorkSans-Regular"],
        medium: ["WorkSans-Medium"],
        light: ["WorkSans-Light"],
      },
      colors: {
        forest: "#427C67",
        darkforest: "#012D17",
        grey:"#898989",
        blackforest: "#141D19",
      },
      boxShadow: {
        'custom-green': '2px 2px 0px rgba(1, 45, 23, 0.2)',
      },
    },
  },
  plugins: [],
};
