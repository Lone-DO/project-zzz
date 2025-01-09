import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
// import vueDevTools from 'vite-plugin-vue-devtools'

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    sourcemap: 'inline'
  },
  plugins: [
    vue({
      customElement: true
    })
    // vueDevTools()
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
      '@zzz': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `
          @use "@zzz/assets/styles/_mixins.scss" as *;
          @use "@zzz/assets/styles/_colors.scss" as *;
          @use "@zzz/assets/styles/_variables.scss" as *;
        `,
        api: 'modern-compiler' // or "modern"
      }
    }
  }
})
