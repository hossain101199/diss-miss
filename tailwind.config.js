/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/layout/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#E2EBFB",
        secondary: "#9690AD",
        yellowRba: "#EECB1C",
        background: "#1D112B",
        secondaryBorder: "rgba(161, 95, 238, 1)",
      },
      borderColor: {
        "white-transparent": "rgba(255, 255, 255, 0.2)",
      },
      backgroundImage: {
        backgroundGradient:
          "linear-gradient(325.83deg, #0C0D13 14.58%, #485272 114.3%)",
        ButtonGradient:
          "linear-gradient(136.82deg, rgba(255, 224, 1, 0.4) 21.24%, rgba(255, 177, 25, 0.116) 75.79%);",
        secondaryButtonGradient:
          "linear-gradient(130.81deg, rgba(161, 95, 238, 0.4) 19.08%, rgba(161, 95, 238, 0.116) 68.08%)",
      },
    },
  },
  plugins: [],
};
