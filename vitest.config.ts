import solidPlugin from "vite-plugin-solid"
import { defineConfig } from "vitest/config"

export default defineConfig({
  plugins: [solidPlugin()],
  test: {
    environment: "jsdom",
    globals: true,
    setupFiles: ["./node_modules/@testing-library/jest-dom/vitest", "./vitest.setup.ts"],
    isolate: false,
    server: {
      deps: {
        inline: [/solid-presence/, /solid-prevent-scroll/, /@corvu/],
      },
    },
  },
  resolve: {
    conditions: ["development", "browser"],
  },
})
