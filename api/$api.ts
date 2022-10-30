import type { AspidaClient } from 'aspida'
import type { Methods as Methods0 } from './diary'
import type { Methods as Methods1 } from './diary/_id@string'
import type { Methods as Methods2 } from './diary/_id@string/edit'
import type { Methods as Methods3 } from './pet'
import type { Methods as Methods4 } from './schedule'

const api = <T>({ baseURL, fetch }: AspidaClient<T>) => {
  const prefix = (baseURL === undefined ? '' : baseURL).replace(/\/$/, '')
  const PATH0 = '/diary'
  const PATH1 = '/edit'
  const PATH2 = '/pet'
  const PATH3 = '/schedule'
  const GET = 'GET'
  const POST = 'POST'

  return {
    diary: {
      _id: (val1: string) => {
        const prefix1 = `${PATH0}/${val1}`

        return {
          edit: {
            post: (option: { body: Methods2['post']['reqBody'], config?: T | undefined }) =>
              fetch(prefix, `${prefix1}${PATH1}`, POST, option).send(),
            $post: (option: { body: Methods2['post']['reqBody'], config?: T | undefined }) =>
              fetch(prefix, `${prefix1}${PATH1}`, POST, option).send().then(r => r.body),
            $path: () => `${prefix}${prefix1}${PATH1}`
          },
          get: (option?: { config?: T | undefined } | undefined) =>
            fetch<Methods1['get']['resBody']>(prefix, prefix1, GET, option).json(),
          $get: (option?: { config?: T | undefined } | undefined) =>
            fetch<Methods1['get']['resBody']>(prefix, prefix1, GET, option).json().then(r => r.body),
          $path: () => `${prefix}${prefix1}`
        }
      },
      get: (option?: { config?: T | undefined } | undefined) =>
        fetch<Methods0['get']['resBody']>(prefix, PATH0, GET, option).json(),
      $get: (option?: { config?: T | undefined } | undefined) =>
        fetch<Methods0['get']['resBody']>(prefix, PATH0, GET, option).json().then(r => r.body),
      $path: () => `${prefix}${PATH0}`
    },
    pet: {
      get: (option?: { config?: T | undefined } | undefined) =>
        fetch<Methods3['get']['resBody']>(prefix, PATH2, GET, option).json(),
      $get: (option?: { config?: T | undefined } | undefined) =>
        fetch<Methods3['get']['resBody']>(prefix, PATH2, GET, option).json().then(r => r.body),
      $path: () => `${prefix}${PATH2}`
    },
    schedule: {
      get: (option?: { config?: T | undefined } | undefined) =>
        fetch<Methods4['get']['resBody']>(prefix, PATH3, GET, option).json(),
      $get: (option?: { config?: T | undefined } | undefined) =>
        fetch<Methods4['get']['resBody']>(prefix, PATH3, GET, option).json().then(r => r.body),
      $path: () => `${prefix}${PATH3}`
    },
  }
}

export type ApiInstance = ReturnType<typeof api>
export default api
