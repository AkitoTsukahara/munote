import { error, type ServerLoad } from '@sveltejs/kit'
import { useDiaryStoreApi } from '$lib/stores/diary/api'
import type { Diary } from '$lib/stores/diary/detail/store'

export type GetOutput = {
  diaries: Diary[]
}

export const load: ServerLoad = async (): Promise<GetOutput> => {
  const [diaries] = await Promise.all([useDiaryStoreApi().get()]).catch((err) => {
    throw error(Number(err.response?.status), err.response?.statusText)
  })
  return {
    diaries
  }
}
