import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import { VitePWA } from "vite-plugin-pwa";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: "autoUpdate",
      includeAssets: ["favicon.ico", "apple-touch-icon.png"],
      manifest: {
        name: "Latex Fabrics",
        short_name: "Latex Fabrics",
        description:
          "Premium fabric catalog with WhatsApp ordering — lace, Swiss voile, sequins & luxury textiles from Oshodi, Lagos.",
        theme_color: "#451822",
        background_color: "#FAF3EF",
        display: "standalone",
        start_url: "/",
        icons: [
          { src: "pwa-192x192.png", sizes: "192x192", type: "image/png" },
          { src: "pwa-512x512.png", sizes: "512x512", type: "image/png" },
          {
            src: "pwa-512x512.png",
            sizes: "512x512",
            type: "image/png",
            purpose: "maskable",
          },
        ],
      },
      workbox: {
        // precache the app shell + catalog images so the catalog browses offline (FR-001)
        globPatterns: ["**/*.{js,css,html,ico,png,svg,jpg,webp,woff2}"],
      },
    }),
  ],
});
