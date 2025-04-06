import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";
export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: "index.html",
        portfolio: "portfolio/index.html",
        website: "portfolio/website.html",
      },
    },
  },
  plugins: [tailwindcss()],
});
