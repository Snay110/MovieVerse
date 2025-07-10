import { defineConfig } from "vitest/config";
import tsconfigPaths from "vite-tsconfig-paths";
import { resolve } from "node:path";

import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [react(), tsconfigPaths(), tailwindcss()],
  resolve: {
    alias: {
      "@": resolve(__dirname, "./src"),
    },
  },
});