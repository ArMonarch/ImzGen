import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    manifest: true,
    emptyOutDir: true,
    outDir: 'dist',
    assetsDir: '',
    rollupOptions: {
      output: {
        assetFileNames: '[name][extname]',
        entryFileNames: '[name].js',
        chunkFileNames: '[name][extname]',
      },
    },
  },
  
  plugins: [react()],
})
