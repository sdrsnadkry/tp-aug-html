/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#00B207",
        "hard-primary": "#2C742F",
        gray: {
          800: "#1A1A1A",
          700: "#333333",
          600: "#4D4D4D",
        },
      },
      fontSize: {
        "display-1": [
          "4.5rem",
          {
            lineHeight: "5.4rem",
          },
        ],
        "heading-1": [
          "3.5rem",
          {
            lineHeight: "4.2rem",
          },
        ],
        "body-tiny": [
          "0.75rem",
          {
            lineHeight: "0.975rem",
          },
        ],
        "body-small": [
          "0.875rem",
          {
            lineHeight: "1.05rem",
          },
        ],
        "body-medium": [
          "1rem",
          {
            lineHeight: "1.2rem",
          },
        ],
      },
      fontWeight: {
        400: 400,
        500: 500,
        600: 600,
        700: 700,
        800: 800,
      },
    },
  },
  plugins: [],
};
