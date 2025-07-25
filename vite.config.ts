import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    port: 5173,
    host: true,
    hmr: {
      overlay: true
    },
    watch: {
      usePolling: true, // This helps with file watching issues
    }
  }
})
