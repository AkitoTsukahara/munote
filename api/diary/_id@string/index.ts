import type { ApiDiaryDetail } from '$api/types/diary/detail'
// import type { DiaryEditRecordApi } from '$api/types/diary'

export type Methods = {
  get: {
    resBody: ApiDiaryDetail
  }
  patch: {
    reqHeaders: {
      Authorization: string
      'Access-Control-Allow-Origin': string
      'Content-Type': string
    }
    // reqBody: DiaryEditRecordApi
    reqBody: {
      records: [
        {
          id: string
          fields: {
            id: string
            title: string
            contents: string
            created_at: string
            thumbnail: [
              {
                id: string
              }
            ]
            pet: string[]
          }
        }
      ]
    }
    resBody: {}
  }
}
