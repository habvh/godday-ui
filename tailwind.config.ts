/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "go-jade": "#00838C",
        "go-jade-dark": "#09757A",
        "go-jade-light": "#D8EFEF",
        "go-black": "#111111",
        "go-gray": "#e8eaeb",
        "go-white": "#FFFFFF",
      },
      gridTemplateColumns: {
        auto30: "auto 30%",
      },
    },
  },
  plugins: [],
};
