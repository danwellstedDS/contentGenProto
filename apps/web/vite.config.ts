import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"
import path from "path"

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      // Resolve workspace packages directly to their TypeScript source so
      // Vite processes them natively. Remove @derbysoft/neat alias once the
      // real package is installed from npm.
      "@hotel-copy/shared": path.resolve(__dirname, "../../packages/shared/src/index.ts"),
    },
  },
  server: {
    port: 5173,
  },
})
