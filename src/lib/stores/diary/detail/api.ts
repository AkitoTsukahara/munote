import { client } from '$lib/package/api/client'
import type { ApiDiaryDetail } from '$api/types/diary/detail'

export const useDiaryDetailStoreApi = () => {
  const get = async (id: string): Promise<ApiDiaryDetail> => {
    return await client()
      .diary._id(id)
      .$get()
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
