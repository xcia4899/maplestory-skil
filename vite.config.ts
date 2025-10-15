import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'

// https://vite.dev/config/
export default defineConfig({
   base: '/maplestory-skil/', // ← 關鍵：加上你的 repo 名稱
  plugins: [
    vue(),
    vueDevTools(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        // 這段會自動注入到每個 <style lang="scss"> 與 .scss 檔案
        additionalData: `
          @use "@/styles/variables" as *;
          @use "@/styles/mixins" as *;
        `
      }
    }
  }
})
