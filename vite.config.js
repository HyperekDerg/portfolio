import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: { chunkSizeWarningLimit: 1600, },
  base: './', // Set the base path for all relative URLs MUST HAVE!!!!!!!!!
})
