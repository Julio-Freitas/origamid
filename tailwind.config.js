module.exports = {
  content: [
    "./src/templates/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      height: {
        128: "32rem",
      },

      colors: {
        dark: "#040814",
        blue: "#0063e5",
        silver: "#c3bfbf",
        breakingBad: {
          orange: "#daab00",
          green: "#487f5a",
        },
      },
    },
  },
  plugins: [],
};
