/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./lib/**/*.{js,ts,jsx,tsx}"
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        aero: {
          dark: "#0A0A0A",
          graphite: "#121212",
          slate: "#1A1A1A",
          neon: "#5BD8FF",
          magenta: "#FF5BF1",
          amber: "#FFC773",
          lime: "#B6FF71",
          violet: "#8C71FF"
        }
      },
      backdropBlur: {
        xs: "2px"
      },
      boxShadow: {
        glass: "0 20px 45px rgba(0, 0, 0, 0.45)",
        neu: "inset 2px 2px 4px rgba(255, 255, 255, 0.08), inset -6px -6px 16px rgba(0, 0, 0, 0.8)"
      }
    }
  },
  plugins: []
};
