import { defineConfig } from 'vite'
import path from 'path';
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  server: {
    port: 8080,
    host: '0.0.0.0',
    watch: {
      usePolling: false,
    },
    proxy: {
      '/api': {
        target: 'https://swapi.dev',
        ws: true,
        changeOrigin: true,
      },
    },
  }
})
