import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"
import path from "path"

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [
      // Redirect neat-design-icons CJS sub-path imports to ESM equivalents.
      // 68 files in packages/vendor/neat-design/es/ import from /lib/ instead
      // of /es/ — Rollup rejects this in production without this redirect.
      {
        find: /@derbysoft\/neat-design-icons\/lib\/(.*)/,
        replacement: "@derbysoft/neat-design-icons/es/$1",
      },
      {
        find: "@hotel-copy/shared",
        replacement: path.resolve(__dirname, "../../packages/shared/src/index.ts"),
      },
    ],
  },
  server: {
    port: 5173,
  },
})
