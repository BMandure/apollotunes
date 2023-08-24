/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        main: "rgb(1, 87, 6)",
        mainTransparent: "rgba(1, 120, 80, 0.5)",
      },
    },
  },
  plugins: [],
};
