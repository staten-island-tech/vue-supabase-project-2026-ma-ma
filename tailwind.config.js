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

        secondary: colors.red[200],
        "secondary-border": colors.red[500],
        "on-secondary": colors.red[500],
        "secondary-hover": colors.red[500],
        "on-secondary-hover": colors.red[200],
      },
      boxShadow: {
        "solid-sm": "2px 2px 0 0 rgba(0, 0, 0, 0.25)",
        "solid-md": "4px 4px 0 0 rgba(0, 0, 0, 0.25)",
        "solid-lg": "6px 6px 0 0 rgba(0, 0, 0, 0.25)",
      },
      fontFamily: {
        sans: ["Pixelify Sans", "monospace"],
      },
    },
  },
  plugins: [],
};
