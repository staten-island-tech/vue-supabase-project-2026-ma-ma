import colors from "tailwindcss/colors";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./app/**/*.vue"],
  theme: {
    extend: {
      colors: {
        primary: colors.blue[200],
        "primary-border": colors.blue[500],
        "on-primary": colors.blue[500],
        "primary-hover": colors.blue[500],
        "on-primary-hover": colors.blue[200],

        secondary: colors.zinc[600],
        "on-secondary": colors.zinc[200],
        "secondary-hover": colors.zinc[500],
      },
      boxShadow: {
        solid: "4px 4px 0 0 rgba(0, 0, 0, 0.25)",
        "solid-lg": "8px 8px 0 0 rgba(0, 0, 0, 0.25)",
      },
      fontFamily: {
        pixelify: ["Pixelify Sans", "monospace"],
      },
    },
  },
  plugins: [],
};
