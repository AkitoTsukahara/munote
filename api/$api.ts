import type { AspidaClient } from 'aspida'
import type { Methods as Methods0 } from './diary'
import type { Methods as Methods1 } from './diary/_id@string'
import type { Methods as Methods2 } from './pet'
import type { Methods as Methods3 } from './schedule'

const api = <T>({ baseURL, fetch }: AspidaClient<T>) => {
  const prefix = (baseURL === undefined ? '' : baseURL).replace(/\/$/, '')
  const PATH0 = '/diary'
  const PATH1 = '/pet'
  const PATH2 = '/schedule'
  const GET = 'GET'
  const PATCH = 'PATCH'

  return {
    diary: {
      _id: (val1: string) => {
        const prefix1 = `${PATH0}/${val1}`

        return {
          get: (option?: { config?: T | undefined } | undefined) =>
            fetch<Methods1['get']['resBody']>(prefix, prefix1, GET, option).json(),
          $get: (option?: { config?: T | undefined } | undefined) =>
            fetch<Methods1['get']['resBody']>(prefix, prefix1, GET, option).json().then(r => r.body),
          patch: (option: { body: Methods1['patch']['reqBody'], headers: Methods1['patch']['reqHeaders'], config?: T | undefined }) =>
            fetch<Methods1['patch']['resBody']>(prefix, prefix1, PATCH, option).json(),
          $patch: (option: { body: Methods1['patch']['reqBody'], headers: Methods1['patch']['reqHeaders'], config?: T | undefined }) =>
            fetch<Methods1['patch']['resBody']>(prefix, prefix1, PATCH, option).json().then(r => r.body),
          $path: () => `${prefix}${prefix1}`
        }
      },
      get: (option?: { config?: T | undefined } | undefined) =>
        fetch<Methods0['get']['resBody']>(prefix, PATH0, GET, option).json(),
      $get: (option?: { config?: T | undefined } | undefined) =>
        fetch<Methods0['get']['resBody']>(prefix, PATH0, GET, option).json().then(r => r.body),
      patch: (option: { body: Methods0['patch']['reqBody'], headers: Methods0['patch']['reqHeaders'], config?: T | undefined }) =>
        fetch<Methods0['patch']['resBody']>(prefix, PATH0, PATCH, option).json(),
      $patch: (option: { body: Methods0['patch']['reqBody'], headers: Methods0['patch']['reqHeaders'], config?: T | undefined }) =>
        fetch<Methods0['patch']['resBody']>(prefix, PATH0, PATCH, option).json().then(r => r.body),
      $path: () => `${prefix}${PATH0}`
    },
    pet: {
      get: (option?: { config?: T | undefined } | undefined) =>
        fetch<Methods2['get']['resBody']>(prefix, PATH1, GET, option).json(),
      $get: (option?: { config?: T | undefined } | undefined) =>
        fetch<Methods2['get']['resBody']>(prefix, PATH1, GET, option).json().then(r => r.body),
      $path: () => `${prefix}${PATH1}`
    },
    schedule: {
      get: (option?: { config?: T | undefined } | undefined) =>
        fetch<Methods3['get']['resBody']>(prefix, PATH2, GET, option).json(),
      $get: (option?: { config?: T | undefined } | undefined) =>
        fetch<Methods3['get']['resBody']>(prefix, PATH2, GET, option).json().then(r => r.body),
      $path: () => `${prefix}${PATH2}`
    },
  }
}

export type ApiInstance = ReturnType<typeof api>
export default api
