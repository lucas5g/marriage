import { defineConfig } from "vitest/config";
import { resolve } from "node:path";
import 'dotenv/config'

export default defineConfig({
  test: {
    environment: "jsdom",
    globals: true,
  },
  resolve: {
    alias: [{ find: "@", replacement: resolve(__dirname, "./src") }],
  },

});
