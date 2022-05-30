import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  // eslint-disable-next-line eqeqeq
  base: process.env.ELECTRON == 'true' ? './' : '',
  plugins: [vue()],
  server: {
    hmr: true,
    host: '0.0.0.0',
    port: 3000,
    proxy: {
      // 选项写法
      '/api': {
        target: 'http://localhost:5000/',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, '')
      },
      // 代理 WebSocket 或 socket
      '/socket.io': {
        target: 'ws:127.0.0.1:1234/',
        changeOrigin: true,
        ws: true
      }
    }
  },
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src')
    }
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: '@import "@/assets/styles/index.scss";'
        // additionalData: '@import "@/assets/styles/index.scss";@import "@/assets/styles/base.css";@import "@/assets/styles/common.scss";@import "@/assets/styles/mixin.scss";@import "@/assets/styles/scrollbar.scss";@import "@/assets/styles/variables.scss";'
      }
    }
  }
})
