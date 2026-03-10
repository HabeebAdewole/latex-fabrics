/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          green: {
            DEFAULT: "#135041", // Sidebar dark green
            light: "#1e6d5a",
          },
          gold: {
            DEFAULT: "#d39a3e", // Buttons and active states
            light: "#e0ad5c",
          },
          beige: {
            DEFAULT: "#fdfbf7", // Main background
            dark: "#f4f1ea",
          },
          gray: {
            DEFAULT: "#f0f0f0", // Borders and inactive pills
          },
          black: "#111827",
          white: "#FFFFFF",
        },
      },
      fontFamily: {
        serif: ['Georgia', 'Times New Roman', 'ui-serif', 'serif'],
        sans: ['Inter', 'system-ui', 'ui-sans-serif', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
