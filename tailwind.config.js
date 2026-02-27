export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          lime: "#80AD2E",
          sage: "#8FA268",
          plum: "#5D2F4B",
          purple: "#93668E",
          stone: "#D9D8D1",
          warm: "#BAB0A4",
          ink: "#141414",
        },
      },
      fontFamily: {
        display: ['"Cormorant Garamond"', "serif"],
        sans: ['"Inter"', "system-ui", "sans-serif"],
      },
      letterSpacing: { luxe: "0.08em" },
      boxShadow: { soft: "0 20px 60px rgba(0,0,0,0.08)" },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};