/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        bgPrimary: "#122B49",
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
        merriweatherSans: ["Merriweather Sans", "sans-serif"],
        merriweather: ["Merriweather", "sans-serif"],
        jacques: ["Jacques Francois", "sans-serif"],
      },
    },
  },
  plugins: [],
};
