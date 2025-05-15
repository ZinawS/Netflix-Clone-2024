// vite.config.js
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// Replace "Netflix-Clone-2024" with your repo name
export default defineConfig({
  base: "/Netflix-Clone-2024/",
  plugins: [react()],
});
