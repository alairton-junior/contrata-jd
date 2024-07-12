/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        default: ["Poppins", "sans-serif"],
        Roboto: ["Roboto", "sans-serif"],
      },
      colors: {
        subtitle: "#686868",
        coral: "#FF5151",
      },
    },
  },
  plugins: [],
};
