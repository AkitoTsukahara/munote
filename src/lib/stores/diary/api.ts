import { client } from '$lib/package/api/client'
import type { ApiDiary } from '$api/types/diary'

export const useDiaryStoreApi = () => {
  const get = async (): Promise<ApiDiary> => {
    return await client()
      .diary.$get()
      .catch((err) => {
        if (err.response?.status !== 404) {
          console.log(err)
        }
        throw err
      })
  }
  return {
    get
  }
}
