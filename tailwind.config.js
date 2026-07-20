/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          burgundy: "#7B2D3B", // Royal Burgundy — primary CTAs, active pills, badges
          "burgundy-dark": "#632331", // burgundy hover
          gold: "#C6A032", // Royal Gold — prices, logo, accents
          "gold-dark": "#AD8B26", // gold hover
          wine: "#451822", // Deep Wine — navbar, footer, dark surfaces
          ivory: "#FAF3EF", // Blush Ivory — page backgrounds (never pure white)
          charcoal: "#1A1A1A", // body text (never #000)
          muted: "#9C7F85", // Rose Taupe — secondary text, captions
          whatsapp: "#25D366", // WhatsApp order buttons ONLY
          "whatsapp-dark": "#20BD5A", // whatsapp hover
          error: "#C0392B",
          success: "#27AE60",
          warning: "#D97706",
        },
      },
      fontFamily: {
        display: ['"Playfair Display"', "Georgia", "serif"],
        serif: ["Georgia", '"Times New Roman"', "serif"],
        sans: ["Lato", '"Helvetica Neue"', "Arial", "sans-serif"],
      },
      borderRadius: {
        btn: "8px",
        card: "12px",
        sheet: "16px",
      },
      maxWidth: {
        content: "1280px",
      },
    },
  },
  plugins: [],
};
