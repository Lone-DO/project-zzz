import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'

// https://vite.dev/config/
export default defineConfig({
  server: {
    port: 8081,
  },
  plugins: [vue(), vueDevTools()],
  build: {
    minify: false,
    sourcemap: true,
    rollupOptions: {
      input: {
        app: './index.html',
        project: './src/main.ts',
      },
    },
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `
          @use "@/assets/styles/_mixins.scss" as *;
          @use "@/assets/styles/_colors.scss" as *;
          @use "@/assets/styles/_variables.scss" as *;
        `,
        api: 'modern-compiler', // or "modern"
      },
    },
  },
})
