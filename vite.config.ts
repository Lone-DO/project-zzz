import { fileURLToPath, URL } from 'node:url'
import { defineConfig, type UserConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'
import config from './src/assets/common/config'

// https://vite.dev/config/
export default defineConfig(async ({ mode }): Promise<UserConfig> => {
  await config.init(mode)
  return {
    base: config.isPlugin ? '/project-zzz/dist/' : config.isProduction ? '/project-zzz/' : './',
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
          'src/main': './src/main.ts',
          'router/index': './src/router/index.ts',
          'assets/common/config': './src/assets/common/config.ts',
        },
        output: {
          name: 'project-zzz',
          entryFileNames: (chunk) => `${[chunk.name]}.js`,
        },
        preserveEntrySignatures: 'strict',
      },
    },
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url)),
      },
    },
    assetsInclude: ['**/assets/**/*.[svg|webp]'],
    css: {
      devSourcemap: true,
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
