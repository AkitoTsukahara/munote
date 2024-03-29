// import adapter from '@sveltejs/adapter-node'
import adapter from '@sveltejs/adapter-vercel';
import { vitePreprocess } from '@sveltejs/kit/vite'
import dotenv from 'dotenv'
dotenv.config()

/** @type {import('@sveltejs/kit').Config} */
const config = {
  // Consult https://github.com/sveltejs/svelte-preprocess
  // for more information about preprocessors
  preprocess: vitePreprocess(),

  kit: {
    adapter: adapter(),
    files: {
      hooks: {
        client: 'src/hooks.client.ts',
        server: 'src/hooks.server.ts'
      }
    },
    csrf: {
      checkOrigin: process.env.NODE_ENV === 'production'
    }
  }
}

export default config
