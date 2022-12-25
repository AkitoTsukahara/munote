export type ApiDiary = {
  records: [
    {
      id: string
      createdTime: string
      fields: {
        id: number
        title: string
        contents: string
        created_at: string
        thumbnail: [
          {
            thumbnails: {
              large: {
                url: string
              }
            }
          }
        ]
        name: string
        profile_image: [
          {
            thumbnails: {
              small: {
                url: string
              }
            }
          }
        ]
      }
    }
  ]
}

export type DiaryEditBodyApi = {
  created_at: string
  title: string
  contents: string
}

export type DiaryEditRecordApi = {
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
