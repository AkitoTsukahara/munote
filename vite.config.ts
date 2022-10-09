import { type ConfigEnv, defineConfig, type UserConfig } from 'vite'
import { sveltekit } from '@sveltejs/kit/vite'

export default defineConfig((env: ConfigEnv) => {
  return {
    server: {
      host: '0.0.0.0',
      port: 1025,
      fs: {
        allow: ['.']
      }
    },
    plugins: [
      sveltekit(),
      // FIXME: workaround for https://github.com/sveltejs/kit/issues/5843
      // 直ったら次のobjectは消せる
      {
        name: 'sveltekit-bug-workaround',
        config(config) {
          if (
            config.build?.rollupOptions?.output &&
            !(config.build.rollupOptions.output instanceof Array) &&
            typeof config.build.rollupOptions.output.assetFileNames === 'string'
          ) {
            const original = config.build.rollupOptions.output.assetFileNames
            config.build.rollupOptions.output.assetFileNames = (assetInfo) => {
              const match = assetInfo?.name?.match(/\/\+(.*)\.css$/)
              return match ? original.replace('[name]', match[1]) : original
            }
          }
          return config
        }
      },
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
          // additionalData: '@use "src/variables.scss" as *;'
        }
      }
    },
    ssr: {
      noExternal: [...(env.mode === 'development' ? [] : ['@aspida/axios', 'date-fns'])]
    },
    test: {
      globals: true,
      environment: 'jsdom',
      include: ['**/*.vitest.ts']
    }
  }
})
