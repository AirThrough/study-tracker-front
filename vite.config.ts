import { defineConfig } from "vite";
import react, { reactCompilerPreset } from "@vitejs/plugin-react";
import babel from "@rolldown/plugin-babel";
import path from "path";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [
    react(),
    babel({ presets: [reactCompilerPreset()] }),
    tailwindcss(),
  ],
  resolve: {
    alias: {
      "~": path.resolve(__dirname, "./src"),
      "~app": path.resolve(__dirname, "./src/app"),
      "~features": path.resolve(__dirname, "./src/features"),
      "~entities": path.resolve(__dirname, "./src/entities"),
      "~shared": path.resolve(__dirname, "./src/shared"),
      "~pages": path.resolve(__dirname, "./src/pages"),
    },
  },
});
