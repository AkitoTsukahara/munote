export type DiaryEditBodyApi = {
  id: string
  created_at: string
  title: string
  contents: string
}

export type Methods = {
  post: {
    reqBody: DiaryEditBodyApi
  }
}
