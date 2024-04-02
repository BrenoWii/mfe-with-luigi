import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import viteTsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  server: {
    port: 3002,
  },
  alias: {
    // Adicione aqui os aliases para os módulos que você precisar
    "luigi-client": "luigi-client/dist/luigi-client.umd.js",
  },
  plugins: [react(), viteTsconfigPaths()],
  build: {
    outDir: "../host/public/remote1",
  },
  publicDir: "public",
});