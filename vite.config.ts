import { fileURLToPath, URL } from 'node:url'

import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'

// https://vite.dev/config/
export default defineConfig(({ command, mode }) => {
  const env = loadEnv(mode, process.cwd(), '')

  if (mode === "development"){
      process.env.DOMAIN = env.DOMAIN
      process.env.API_DOMAIN = env.API_DOMAIN
  }

  return {
      plugins: [
          vue(),
          vueDevTools()
      ],
      server: {
          host: "0.0.0.0",
          port: 3000,
          allowedHosts: [
              env.DOMAIN
          ]
      },
      resolve: {
          alias: {
              '@': fileURLToPath(new URL('./src', import.meta.url))
          }
      },
      define: {
          'process.env': process.env
      }
  }
})