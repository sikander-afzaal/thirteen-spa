const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Noto Sans", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        "main-pink": "#FF4E84",
        "bg-black": "#242424",
        "light-gray": "rgba(72, 72, 72, 0.89)",
        "gray-text": "rgba(174, 174, 174, 0.89)",
      },
      boxShadow: {
        black: "0px 0px 20px rgba(0, 0, 0, 0.25)",
      },
    },
  },
  plugins: [],
};
