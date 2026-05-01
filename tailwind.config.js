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
          "focus-placeholder": colors.blue[300],

          // Error (condition)
          error: colors.red[50],
          "error-border": colors.red[500],
          "error-foreground": colors.red[900],
          "error-placeholder": colors.red[300],

          label: colors.slate[500],
        },
        card: {
          DEFAULT: colors.slate[100],
          border: colors.slate[400],
          ring: colors.slate[300],
          foreground: colors.slate[700],
          shadow: colors.black,
        },
        domain: {
          bg: colors.slate[800],
          text: colors.white,
          particle: colors.violet[100],
          accent: {
            DEFAULT: colors.violet[300],
            dim: colors.violet[600],
            glow: colors.violet[200],
            subtle: colors.violet[700],
          },
          detail: {
            DEFAULT: colors.fuchsia[400],
            dim: colors.fuchsia[600],
            glow: colors.fuchsia[300],
          },
          ray: {
            DEFAULT: colors.indigo[200],
            dim: colors.indigo[600],
          },
          slash: {
            red: colors.rose[400],
            redGlow: colors.rose[300],
          },
          slashBlue: {
            DEFAULT: colors.indigo[700],
            glow: colors.indigo[400],
          },
          overlay: {
            scanline: colors.black,
            veil: colors.violet[700],
          },
          corner: {
            pink: colors.rose[400],
            purple: colors.indigo[400],
          },
        },
      },
      opacity: {
        3: "0.03",
        7: "0.07",
        8: "0.08",
        12: "0.12",
        15: "0.15",
        18: "0.18",
        22: "0.22",
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
