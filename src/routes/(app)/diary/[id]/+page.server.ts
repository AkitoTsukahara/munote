import { error, type ServerLoad } from '@sveltejs/kit'
import type { ApiDiaryDetail } from '$api/types/diary/detail'
import { useDiaryDetailStoreApi } from '$lib/stores/diary/detail/api'

export type GetOutput = {
  diary: ApiDiaryDetail
}

export const load: ServerLoad = async ({ params }): Promise<GetOutput> => {
  const [diary] = await Promise.all([useDiaryDetailStoreApi().get(String(params.id))]).catch(
    (err) => {
      throw error(Number(err.response?.status), err.response?.statusText)
    }
  )
  return {
    diary
  }
}
