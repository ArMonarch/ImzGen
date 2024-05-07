import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    manifest: true,
    outDir: "../../static/login-page/"
  },
  
  plugins: [react()],
})
