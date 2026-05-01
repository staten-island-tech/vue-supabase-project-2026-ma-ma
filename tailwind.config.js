import colors from "tailwindcss/colors";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./app/**/*.vue"],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: colors.blue[200],
          border: colors.blue[500],
          foreground: colors.blue[500],

          // Hover state
          hover: colors.blue[500],
          "hover-foreground": colors.blue[200],
        },
        secondary: {
          DEFAULT: colors.red[200],
          border: colors.red[500],
          foreground: colors.red[500],

          // Hover state
          hover: colors.red[500],
          "hover-foreground": colors.red[200],
        },
        input: {
          DEFAULT: colors.slate[50],
          border: colors.slate[400],
          foreground: colors.slate[700],
          placeholder: colors.slate[400],

          // Hover state
          focus: colors.blue[50],
          "focus-border": colors.blue[500],
          "focus-foreground": colors.blue[900],

          // Error (condition)
          error: colors.red[50],
          "error-border": colors.red[500],
          "error-foreground": colors.red[900],

          label: colors.slate[300],
        },
      },
      boxShadow: {
        "transparent-sm": "2px 2px 0 0 rgba(0, 0, 0, 0.25)",
        "transparent-md": "4px 4px 0 0 rgba(0, 0, 0, 0.25)",
        "transparent-lg": "6px 6px 0 0 rgba(0, 0, 0, 0.25)",
      },
      fontFamily: {
        sans: ["Pixelify Sans", "monospace"],
      },
    },
  },
  plugins: [],
};
