import type { ApiPet } from '$api/types/pet'
import { error, type ServerLoad } from '@sveltejs/kit'
import { usePetStoreApi } from '$lib/stores/pet/api'

export type GetOutput = {
  pet: ApiPet
}

export const load: ServerLoad = async (): Promise<GetOutput> => {
  const [pet] = await Promise.all([usePetStoreApi().get()]).catch((err) => {
    throw error(Number(err.response?.status), err.response?.statusText)
  })
  return {
    pet
  }
}
