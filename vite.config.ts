import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// GitHub Pages project URL: https://<user>.github.io/<repo>/
const repoBase = process.env.VITE_BASE_PATH?.replace(/\/?$/, '/') ?? '/'

// https://vite.dev/config/
export default defineConfig({
  base: repoBase,
  plugins: [react()],
  server: {
    /** Avoid clashing with other Vite apps on the default 5173 */
    port: 5180,
    strictPort: false,
  },
})
