import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(),
     tailwindcss(),
  ],
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          'framer-motion': ['framer-motion'],
          'router': ['react-router-dom'],
          'vendor': ['lucide-react', 'react-lazy-load-image-component', '@emailjs/browser'],
        }
      }
    }
  }
})
