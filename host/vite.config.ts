import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      // Adicione aqui os aliases para os módulos que você precisar
      "luigi-client": "luigi-client/dist/luigi-client.umd.js",
    },
  },
  root: "src",
  server: {
    port: 3000,
  },
  publicDir: "../public",
  build: {
    outDir: "../dist",
  },
});
