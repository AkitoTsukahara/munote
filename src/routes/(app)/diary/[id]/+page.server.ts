import { error, type ServerLoad } from '@sveltejs/kit'
import { useDiaryStoreApi } from '$lib/stores/diary/api'
import type { ApiDiaryDetail } from '$api/types/diary/detail'

export type GetOutput = {
  diary: ApiDiaryDetail
}

export const load: ServerLoad = async (): Promise<GetOutput> => {
  const [diary] = await Promise.all([useDiaryStoreApi().get()]).catch((err) => {
    throw error(Number(err.response?.status), err.response?.statusText)
  })
  return {
    diary
  }
}
