/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/**/*.{html, hbs}",
    "src/sass/*.sass",
    "src/css/*.css",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        xmd: "1170px",
      },
    },
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          ...require("daisyui/src/colors/themes")["[data-theme=mytheme]"],
          primary: "#FFF17F",
          "primary-content": "#6A5300",
          secondary: "#FFC700",
          accent: "#008139",
          neutral: "#363434",
          "base-100": "#ffffff",
          info: "#A8E2F0",
          success: "#43D854",
          warning: "#FFC700",
          error: "#FF5C00",
        },
      },
    ],
  },
  plugins: [require("daisyui"), require("@tailwindcss/typography")],
};
