import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    /** Avoid clashing with other Vite apps on the default 5173 */
    port: 5180,
    strictPort: false,
  },
})
