const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        sm: "600px",
        md: "840px",
        lg: "1200px",
        xl: "1600px",
      },
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
          "clamp(58px, 5vw, 5vw)",
          {
            lineHeight: "1.1",
            letterSpacing: "-0.01em",
            fontWeight: "600",
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
        "global-inline": "var(--fluid--global-inline)",
        "global-block": "var(--fluid--global-block)",
      },
      margin: {
        "global-block": "var(--space--144)",
      },
      spacing: {
        16: "var(--space--16)",
        24: "var(--space--24)",
        32: "var(--space--32)",
        48: "var(--space--48)",
        64: "var(--space--64)",
        96: "var(--space--96)",
        144: "var(--space--144)",
      },
      minHeight: {
        hero: "var(--height--hero)",
      },
    },
  },
  plugins: [],
};
