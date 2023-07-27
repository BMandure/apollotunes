/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        main: "rgba(100, 189, 159)",
        "main-transparent": "rgba(100, 189, 159, 0.5)",
      },
    },
  },
  plugins: [],
};
