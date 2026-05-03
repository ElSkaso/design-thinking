/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#1f2933",
        muted: "#5d6b78",
        line: "#d7dee4",
        paper: "#fbfaf7",
        card: "#ffffff",
        curry: "#1f7a4d",
        chili: "#b7352d",
        turmeric: "#d99a22",
        coconut: "#f4efe5"
      },
      boxShadow: {
        soft: "0 16px 40px rgba(31, 41, 51, 0.12)"
      },
      borderRadius: {
        app: "8px"
      }
    }
  },
  plugins: []
};
