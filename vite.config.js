import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  server: {
    host: '0.0.0.0',
    proxy: {
      '/api/v1': {
        // target: 'https://chat.icoding.ink', //API服务器的地址
        target: 'http://chat.icoding.ink', //API服务器的地址
        changeOrigin: true,
        ws: true,
      },
      '/v1/chat/completions': {
        // target: 'https://chat.icoding.ink', //API服务器的地址
        target: 'https://api.icoding.ink', //API服务器的地址
        changeOrigin: true,
        ws: true,
      },
    }
  },
})
