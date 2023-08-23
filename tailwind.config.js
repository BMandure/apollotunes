/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        main: "rgb(1, 87, 6)",
        "main-transparent": "rgba(1, 87, 6, 0.5))",
      },
    },
  },
  plugins: [],
};
