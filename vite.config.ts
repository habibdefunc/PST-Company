import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [tailwindcss()],
  server: {
    proxy: {
      // Semua request ke /api/testimonial akan diteruskan ke Google Apps Script
      "/api/testimonial": {
        target:
          "https://script.google.com/macros/s/AKfycbwnRjTpsNwcNnMa-2UADV3q1-KcJX49CwSMOdOkL7lW0Kl37Hxo6tFYADMcs-qyEjOGHw/exec",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api\/testimonial/, ""),
      },
    },
  },
});
