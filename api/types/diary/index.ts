export type ApiDiary = {
  records: [
    {
      id: string
      createdTime: string
      fields: {
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
