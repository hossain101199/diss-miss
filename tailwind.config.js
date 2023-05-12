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
        primary: "#1D112B",
      },
      backgroundImage: {
        backgroundGradient:
          "linear-gradient(325.83deg, #0C0D13 14.58%, #485272 114.3%)",
        ButtonGradient:
          "linear-gradient(136.82deg, rgba(255, 224, 1, 0.4) 21.24%, rgba(255, 177, 25, 0.116) 75.79%);",
      },
    },
  },
  plugins: [],
};
