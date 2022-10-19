import { devices } from '@playwright/test'
import type { PlaywrightTestConfig } from '@playwright/experimental-ct-svelte'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

// @ts-ignore
const config: PlaywrightTestConfig = {
  reporter: 'html',
  expect: {
    timeout: 20000,
    toHaveScreenshot: {
      maxDiffPixels: 100,
      maxDiffPixelRatio: 0.8,
      threshold: 0.2
    }
  },
  use: {
    ctViteConfig: {
      resolve: {
        alias: [
          {
            find: '$api',
            replacement: `${__dirname}/api/`
          },
          {
            find: '$lib',
            replacement: `${__dirname}/src/lib/`
          },
          {
            find: '$app',
            replacement: `${__dirname}/playwright/mock/app`
          }
        ]
      }
    }
  }
}

export default config
