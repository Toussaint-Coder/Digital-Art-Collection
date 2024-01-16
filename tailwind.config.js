/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        assets: "#32CAC6",
        primary: "#F4F8F7",
        secondary: "#FEFEFE",
      },
    },
  },
  plugins: [],
}
