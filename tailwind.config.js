/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      spacing: {
        smSidePad: "29px",
        lgSidePad: "218px",
      },
      colors: {
        primary: "ffffff",
        sec1: "65DBC3",
        sec1shades1: "56BEB6",
        sec2shades2: "85CAB5",
        gentextColor: "333333",
        whiteVariance: "FBFBFB",
      },
      fontSize: {
        h2Text: "28px",
        h1Text: "32px",
        h3Text: "24px",
        h4Text: "20px",
        pText: "13px",
        largePText: "18px",
        navText: "14px",
        btnText: "16px",
        subPText: "11px",
      },

      boxShadow: {
        basicShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
      },

      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
