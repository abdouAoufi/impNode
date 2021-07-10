const colors = require("tailwindcss/colors");
module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
 
    minHeight: {
      0: "0",
      "1/4": "25%",
      "1/2": "50%",
      "3/4": "75%",
      "19/20": "90%",
      full: "100%",
    },

    extend: {
      colors: {
        primary: "#ff9f68",
        "litlegray" : "#c4c4c4",
        transparent: "transparent",
        current: "currentColor",
        black: "#3f3b3b",
        white: colors.white,
        gray: colors.trueGray,
        indigo: colors.indigo,
        red: colors.rose,
        yellow: colors.amber,
        bgcolor: "#fff4e3",
        weakblack: "#575151",
        card_one : "#f3cf7a",
        card_two : "#ffa45c",
        card_three : "#2cb978",
        card_four : "#107a8b",
        color_add : "#e8ffe8",
        color_active_cell : "#b4f1f1",
      },
      animation: {
        bounce200: "bounce 1s infinite 200ms",
        bounce400: "bounce 1s infinite 400ms",
      },
      spacing: {
        88: "352px",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
