import { client } from '$lib/package/api/client'
import type { ApiPet } from '$api/types/pet'

export const usePetStoreApi = () => {
  const get = async (): Promise<ApiPet> => {
    return await client()
      .pet.$get()
      .catch((err) => {
        if (err.response?.status !== 404) {
          console.error(err)
        }
        throw err
      })
  }
  return {
    get
  }
}
