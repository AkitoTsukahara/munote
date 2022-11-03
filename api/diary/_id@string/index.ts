import type { ApiDiaryDetail } from '$api/types/diary/detail'
import type { DiaryEditRecordApi } from '$api/types/diary'

export type Methods = {
  get: {
    resBody: ApiDiaryDetail
  }
  patch: {
    reqHeaders: {
      'Authorization': string
      'Content-Type': string
    }
    reqBody: DiaryEditRecordApi
    resBody: {}
  }
}
