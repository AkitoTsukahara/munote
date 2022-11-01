import { client } from '$lib/package/api/client'
import type {DiaryEditBodyApi} from '$api/diary/_id@string/edit'

export const useDiaryEditStoreApi = () => {
  const postEditDiary = async (data: DiaryEditBodyApi) => {
    console.log('data')
    console.log(data)
    return await client().diary._id(data.id).edit.$patch({
      body: {
        records: [
          {
            id: data.id,
            fields: {
              id: data.id,
              title: data.title,
              contents: data.contents,
              created_at: data.created_at,
              thumbnail: [
                {
                  id: 'attwyLtVo5KqZclpF'
                }
              ],
              pet: ['reccnizYtG0jzy3xm']
            }
          }
        ]
      }
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
