/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      xs: "280px",
      sm: "375px",
      lg: "664px",
    },
    colors: {
      "transparent": "transparent",
      "very-dark-cyan": "hsl(156, 42%, 18%)",
      "dark-cyan": "hsl(158, 36%, 37%)",
      "cream": "hsl(30, 38%, 92%)",
      "very-dark-blue": "hsl(212, 21%, 14%)",
      "dark-grayish-blue": "hsl(228, 12%, 48%)",
      "white": "hsl(0, 0%, 100%)",
    },
    spacing: {
      "0": "0px",
      "1": "0.0625rem",
      "2": "0.125rem",
      "4": "0.25rem",
      "8": "0.5rem",
      "12": "0.75rem",
      "16": "1rem",
      "18": "1.125rem",
      "20": "1.25rem",
      "24": "1.5rem",
      "28": "1.75rem",
      "32": "2rem",
      "36": "2.25rem",
      "40": "2.5rem",
      "44": "2.75rem",
      "48": "3rem",
      "52": "3.25rem",
      "56": "3.5rem",
      "60": "3.75rem",
      "64": "4rem",
      "68": "4.25rem",
      "72": "4.5rem",
      "76": "4.75rem",
      "80": "5rem",
      "84": "5.25rem",
      "88": "5.5rem",
      "92": "5.75rem",
      "96": "6rem",
    },
    fontSize: {
      "h13": ["0.8125rem", { lineHeight: "1rem", letterSpacing: "0.25rem" }],
      "h32": ["2rem", { lineHeight: "2rem", letterSpacing: "-0.0625rem" }],
      "b13": ["0.8125rem", { lineHeight: "1.4375rem" }],
      "b14": ["0.875rem", { lineHeight: "1.4375rem" }],
      "button": ["0.875rem", { lineHeight: "1rem" }],
    },
    fontWeight: {
      "300": "300",
      "400": "400",
      "500": "500",
      "600": "600",
      "700": "700",
    },
    borderRadius: {
      "8": "0.5rem",
      "10": "0.625rem",
    },
    extend: {
      fontFamily: {
        sans: [
          "Montserrat",
          ...defaultTheme.fontFamily.sans,
        ],
        serif: [
          "Fraunces",
          ...defaultTheme.fontFamily.serif,
        ],
      },
      minHeight: {
        "48": "3rem",
      },
      maxWidth: {
        "343": "21.4375rem",
        "600": "37.5rem",
      },
      maxHeight: {
        "95vh": "95vh",
      },
      transitionProperty: {
        "image": "opacity, visibility",
      }
    },
  },
  plugins: [],
}
