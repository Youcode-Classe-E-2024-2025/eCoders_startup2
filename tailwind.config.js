/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./assets/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        "split-70-30": "linear-gradient(to right, #F9F1E7 70%, #FCF8F3 70%)",
      },
      backgroundColor: {
        bgElm: "#F9F1E7",
        colgre: "#B7D0C1",
        colgri: "#CCC8C9",
      },
    },
    screens: {
      sm: "320px",
      md: "768px",
      lg: "1024px",
    },
  },
  plugins: [],
};
