import type { DiaryEditBodyApi } from '$api/types/diary'
import { base } from '$lib/package/airtable'

export const useDiaryEditStoreApi = () => {
  const postEditDiary = async (id: string, data: DiaryEditBodyApi) => {
    await base('diary')
      .update(
        id,
        data
        , function (err: any, record: any) {
          if (err) {
            console.log(err)
          }
        }
      )
  }
  return {
    postEditDiary
  }
}
