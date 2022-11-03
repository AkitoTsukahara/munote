import { client } from '$lib/package/api/client'
import type { DiaryEditBodyApi } from '$api/types/diary'

export const useDiaryEditStoreApi = () => {
  const postEditDiary = async (data: DiaryEditBodyApi) => {
    return await client().diary._id(data.id).patch({
      headers: {
        'Authorization': `Bearer ${import.meta.env.VITE_API_KEY}`,
        'Content-Type': 'application/json'
      },
      body: {
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
