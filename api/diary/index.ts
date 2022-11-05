import type { ApiDiary } from '$api/types/diary'

export type Methods = {
  get: {
    resBody: ApiDiary
  }
  patch: {
    reqHeaders: {
      'Authorization': string
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
