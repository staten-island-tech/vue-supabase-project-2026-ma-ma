import colors from "tailwindcss/colors";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./app/**/*.vue"],
  theme: {
    extend: {
      colors: {
        primary: colors.zinc[950],
        "on-primary": colors.zinc[50],
        "primary-hover": colors.zinc[900],
        secondary: colors.zinc[600],
        "on-secondary": colors.zinc[200],
        "secondary-hover": colors.zinc[500],
      },
      boxShadow: {
        solid: "4px 4px 0 0 rgba(0, 0, 0, 0.5)",
        "solid-lg": "8px 8px 0 0 rgba(0, 0, 0, 0.5)",
      },
      fontFamily: {
        pixelify: ["Pixelify Sans"],
      },
    },
  },
  plugins: [],
};
