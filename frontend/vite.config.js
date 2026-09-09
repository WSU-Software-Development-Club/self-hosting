// Vite settings: makes the dev server reachable from outside the container and forwards /api requests to the backend.
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    host: true,
    port: 5173,
    proxy: {
      // Any request to /api/... is sent to the backend container with /api removed,
      // so fetch('/api/health') reaches the backend's /health endpoint.
      '/api': {
        target: 'http://backend:8000',
        rewrite: (path) => path.replace(/^\/api/, ''),
      },
    },
  },
})
