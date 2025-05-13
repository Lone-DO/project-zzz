import { fileURLToPath, URL } from 'node:url'
import { defineConfig, UserConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'

// https://vite.dev/config/
export default defineConfig(({ mode }): UserConfig => {
  return {
    esbuild: {
      // Remove debugger statements in production
      drop: mode === 'production' ? ['debugger'] : [],
    },
    server: {
      port: 8081,
    },
    plugins: [
      vue({
        template: {
          compilerOptions: {
            // Define custom elements starting with 'app-element'
            isCustomElement: (tag) => tag.startsWith('project-'),
          },
        },
        customElement: true,
      }),
      vueDevTools(),
      {
        // Hot reload fix for Vue components
        name: 'force-reload',
        handleHotUpdate({ file = '', server }) {
          if (file.endsWith('.vue')) {
            server.ws.send({ type: 'full-reload' })
            return []
          }
        },
      },
    ],
    build: {
      emptyOutDir: true,
      minify: false,
      sourcemap: true,
      rollupOptions: {
        input: {
          app: './index.html',
          'project-zzz': './src/main.ts',
        },
        output: {
          name: 'project-zzz',
          entryFileNames: (chunk) => `${[chunk.name]}.js`,
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
  }
})
