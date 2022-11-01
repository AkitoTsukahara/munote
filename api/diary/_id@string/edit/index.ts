export type DiaryEditBodyApi = {
  id: string
  created_at: string
  title: string
  contents: string
}

type DiaryEditRecordApi = {
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

export type Methods = {
  patch: {
    reqBody: {
      records: [
        DiaryEditRecordApi
      ]
    }
  }
}
