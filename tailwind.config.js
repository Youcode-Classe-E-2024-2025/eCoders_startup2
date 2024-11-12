/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./assets/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        "split-70-30": "linear-gradient(to right, #F9F1E7 70%, #FCF8F3 70%)",
      },
      colors: {
        itemGreen: "#B7D0C1",
        itemGris: "#CCC8C9",
      },
    },
  },
  plugins: [],
};
