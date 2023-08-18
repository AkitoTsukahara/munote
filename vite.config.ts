import { type ConfigEnv, defineConfig, type UserConfig } from 'vite'
import { sveltekit } from '@sveltejs/kit/vite'

export default defineConfig((env: ConfigEnv) => {
  return {
    server: {
      host: '0.0.0.0',
      port: 1025,
      fs: {
        allow: ['.']
      },
    },
    plugins: [
      sveltekit(),
      {
        name: 'setup-vitest-plugin',
        config: () =>
          ({
            test: {
              setupFiles: ['./vitestSetup.ts']
            }
          } as UserConfig)
      }
    ],
    resolve: {
      alias: [
        {
          find: '$api',
          replacement: `${__dirname}/api/`
        },
        {
          find: '$lib',
          replacement: `${__dirname}/src/lib/`
        }
      ],
      dedupe: ['@fullcalendar/common']
    },
    optimizeDeps: {
      include: ['@fullcalendar/common']
    },
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "src/variables.scss" as *;'
        }
      }
    },
    ssr: {
      noExternal: [...(env.mode === 'development' ? [] : ['@aspida/axios'])]
    },
    test: {
      globals: true,
      environment: 'jsdom',
      include: ['**/*.vitest.ts']
    }
  }
})
