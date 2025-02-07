import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  // repositoryName 要改成自己的 Repo 名稱
  base: process.env.NODE_ENV === "production" ? "/repositoryName/" : "/",
  plugins: [react()],
});
