/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        main: "#ECBC55",
        customDark: "#131315",
      },
    },
  },
  plugins: [],
};
