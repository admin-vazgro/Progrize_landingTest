/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: "#043f2e",   // deep green (main)
        accent: "#f5c518",    // yellow accent
        muted: "#6b7280",     // gray text
        card: "#ffffff",      // card white
        bg: "#f8faf9",        // subtle page background
      },
      fontFamily: {
        manrope: ["Manrope", "sans-serif"],
      },
      boxShadow: {
        soft: "0 10px 30px rgba(3, 31, 20, 0.08)",
      },
    },
  },
  plugins: [],
}
