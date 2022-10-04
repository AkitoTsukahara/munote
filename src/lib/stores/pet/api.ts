import { client } from '$lib/package/api/client'
import type {ApiPet} from '$api/types/pet'
import axios from 'axios'

export const usePetStoreApi = () => {
  const get = async (): Promise<ApiPet> => {
    return await client()
      .pet.$get()
      .catch((err) => {
        if (axios.isAxiosError(err) && err.response?.status !== 404) {
          console.error(err)
        }
        throw err
      })
  }
  return {
    get
  }
}
