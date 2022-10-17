export type ApiDiaryDetail = {
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
