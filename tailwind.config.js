/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#a855f7", // purple-500
        secondary: "#06b6d4", // cyan-500
        background: "#0f172a", // slate-900
        card: "rgba(255, 255, 255, 0.05)",
        cardBorder: "rgba(255, 255, 255, 0.1)",
      },
      fontFamily: {
        sans: ['Inter', 'Poppins', 'sans-serif'],
      },
      animation: {
        'spin-slow': 'spin 8s linear infinite',
      }
    },
  },
  plugins: [],
}
