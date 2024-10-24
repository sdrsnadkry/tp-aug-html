/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      white: "var(--white)",
      warning: "var(--warning)",
      error: "var(--error)",
      primary: {
        DEFAULT: "var(--primary)",
        bright: "var(--primary-bright)",
        dark: "var(--primary-dark)",
      },
      gray: {
        50: "var(--gray-50)",
        100: "var(--gray-100)",
        200: "var(--gray-200)",
        300: "var(--gray-300)",
        400: "var(--gray-400)",
        500: "var(--gray-500)",
        600: "var(--gray-600)",
        700: "var(--gray-700)",
        800: "var(--gray-800)",
        900: "var(--gray-900)",
      },
      "green-gray": {
        50: "var(--green-gray-50)",
        100: "var(--green-gray-100)",
        200: "var(--green-gray-200)",
        300: "var(--green-gray-300)",
        400: "var(--green-gray-400)",
        500: "var(--green-gray-500)",
        600: "var(--green-gray-600)",
        700: "var(--green-gray-700)",
        800: "var(--green-gray-800)",
        900: "var(--green-gray-900)",
      },
    },
    fontFamily: {
      sans: ["Poppins", "sans-serif"],
    },
    fontSize: {
      display: ["4.5rem", "1.2"],
      h1: ["3.5rem", "1.2"],
      h2: ["3rem", "1.2"],
      h3: ["2.5rem", "1.2"],
      h4: ["2.25rem", "1.2"],
      h5: ["2rem", "1.2"],
      "2xl": ["1.5rem", "1.5"],
      xl: ["1.25rem", "1.5"],
      lg: ["1.125rem", "1.5"],
      md: ["1rem", "1.5"],
      sm: ["0.875rem", "1.5"],
      tiny: ["0.75rem", "1.3"],
      "caps-2xl": ["1.5rem", "1.2"],
      "caps-xl": ["1rem", "1.2"],
      "caps-l": [
        "1rem",
        {
          lineHeight: "1",
          fontWeight: 500,
        },
      ],
      "caps-md": [
        "0.875rem",
        {
          lineHeight: "1",
          fontWeight: 500,
        },
      ],
      "caps-sm": [
        "0.75rem",
        {
          lineHeight: "1",
          fontWeight: 500,
        },
      ],
      "caps-tiny": [
        "0.625rem",
        {
          lineHeight: "1",
          fontWeight: 500,
        },
      ],
    },
    fontWeight: {
      400: "400",
      500: "500",
      600: "600",
    },
    extend: {},
  },
  plugins: [],
};
