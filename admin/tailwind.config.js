/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        studio: {
          bg: "#0B0C10",
          card: "#12141C",
          border: "#202432",
          accent: "#C47A65",
          accentHover: "#B36854",
          gold: "#D4AF37",
          text: "#E2E8F0",
          muted: "#94A3B8"
        }
      },
      fontFamily: {
        sans: ['"DM Sans"', 'Inter', 'sans-serif'],
        editorial: ['"DM Serif Display"', 'Georgia', 'serif'],
      }
    },
  },
  plugins: [],
}
