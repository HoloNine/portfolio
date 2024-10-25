const defaultTheme = require("tailwindcss/defaultTheme");
const plugin = require("tailwindcss/plugin");

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "var(--primary)",
        black: "var(--black)",
        "black-48": "var(--black-48)",
        "black-36": "var(--black-36)",
        "black-24": "var(--black-24)",
        "black-12": "var(--black-12)",
        "black-04": "var(--black-04)",
        white: "var(--white)",
        "white-48": "var(--white-48)",
        "white-36": "var(--white-36)",
        "white-24": "var(--white-24)",
        "white-12": "var(--white-12)",
        "white-04": "var(--white-04)",
      },
      fontFamily: {
        sans: ["Outfit", ...defaultTheme.fontFamily.sans],
      },
      fontSize: {
        display: "",
        headline: "",
        title: "",
        subtitle: "",
        body: "",
        "label-large": "",
        "label-medium": "",
        "label-small": "",
      },
    },
  },
  plugins: [
    plugin(function ({ addBase }) {
      addBase({
        html: {
          fontSize: "clamp(1rem, 0.913rem + 0.4348vw, 1.25rem)",
          lineHeight: "clamp(1.5rem, 1.413rem + 0.4348vw, 1.75rem)",
        },
      });
    }),
  ],
};
