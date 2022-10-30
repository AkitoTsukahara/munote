import { client } from '$lib/package/api/client'
import type {DiaryEditBodyApi} from '$api/diary/_id@string/edit'

export const useDiaryEditStoreApi = () => {
  const postEditDiary = async (data: DiaryEditBodyApi) => {
    return await client().diary._id(data.id).edit.$post({
      body: data
    })
    .catch((err) => {
      if (err.response?.status !== 404) {
        console.log(err)
      }
      throw err
    })
  }
  return {
    postEditDiary
  }
}
