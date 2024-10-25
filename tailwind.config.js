const defaultTheme = require("tailwindcss/defaultTheme");
const plugin = require("tailwindcss/plugin");

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "var(--color--primary)",
        black: "var(--color--black)",
        "black-48": "var(--color--black-48)",
        "black-36": "var(--color--black-36)",
        "black-24": "var(--color--black-24)",
        "black-12": "var(--color--black-12)",
        "black-04": "var(--color--black-04)",
        white: "var(--color--white)",
        "white-48": "var(--color--white-48)",
        "white-36": "var(--color--white-36)",
        "white-24": "var(--color--white-24)",
        "white-12": "var(--color--white-12)",
        "white-04": "var(--color--white-04)",
      },
      fontFamily: {
        sans: ["Outfit", ...defaultTheme.fontFamily.sans],
      },
      fontSize: {
        display: [
          "var(--font-size--display)",
          {
            lineHeight: "1.1",
            letterSpacing: "-0.01em",
            fontWeight: "900",
          },
        ],
        headline: [
          "var(--font-size--headline)",
          {
            lineHeight: "1.1",
            letterSpacing: "-0.01em",
            fontWeight: "600",
          },
        ],
        title: [
          "var(--font-size--title)",
          {
            lineHeight: "1.2",
            letterSpacing: "0.03em",
            fontWeight: "600",
          },
        ],
        subtitle: [
          "var(--font-size--subtitle)",
          {
            lineHeight: "1.2",
          },
        ],
        body: ["var(--font-size--body)", { lineHeight: "1.5" }],
        label: [
          "var(--font-size--label)",
          {
            lineHeight: "1.5",
            letterSpacing: "0.03em",
            fontWeight: "600",
          },
        ],
      },
      padding: {
        global: "var(--space--global-padding-inline)",
      },
    },
  },
  plugins: [],
};
