import { error, type ServerLoad } from '@sveltejs/kit'
import { useDiaryDetailStoreApi } from '$lib/stores/diary/detail/api'
import type { Diary } from '$lib/stores/diary/detail/store'

export type GetOutput = {
  diary: Diary
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
