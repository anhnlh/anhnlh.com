import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";
export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: "index.html",
        projects: "projects/index.html",
        portfolio: "projects/portfolio.html",
      },
    },
  },
  plugins: [tailwindcss()],
});
