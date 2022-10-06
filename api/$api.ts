import type { AspidaClient } from 'aspida'
import type { Methods as Methods0 } from './pet'

const api = <T>({ baseURL, fetch }: AspidaClient<T>) => {
  const prefix = (baseURL === undefined ? '' : baseURL).replace(/\/$/, '')
  const PATH0 = '/pet'
  const GET = 'GET'

  return {
    pet: {
      get: (option?: { config?: T | undefined } | undefined) =>
        fetch<Methods0['get']['resBody']>(prefix, PATH0, GET, option).json(),
      $get: (option?: { config?: T | undefined } | undefined) =>
        fetch<Methods0['get']['resBody']>(prefix, PATH0, GET, option)
          .json()
          .then((r) => r.body),
      $path: () => `${prefix}${PATH0}`
    }
  }
}

export type ApiInstance = ReturnType<typeof api>
export default api
