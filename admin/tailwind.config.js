/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        studio: {
          bg: "#090A0F",
          card: "#11131C",
          border: "#202434",
          accent: "#C47A65",
          accentHover: "#B36854",
          gold: "#D4AF37",
          text: "#E2E8F0",
          muted: "#94A3B8"
        }
      },
      fontFamily: {
        sans: ['"DM Sans"', 'Inter', 'sans-serif'],
        editorial: ['"DM Sans"', 'Inter', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
