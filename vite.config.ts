import { resolve } from "node:path";
import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  input: {
    main: resolve(import.meta.dirname, "index.html"),
    fan_art: resolve(import.meta.dirname, "fan-art.html"),
  },
  plugins: [tailwindcss()],
});
