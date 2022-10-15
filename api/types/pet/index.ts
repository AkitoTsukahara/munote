export type ApiPet = {
  records: [
    {
      id: string
      createdTime: string
      fields: {
        name: string
        sex: '♂' | '♀'
        breed: string
        birthday: string
        familyday: string
        profile_image: [
          {
            thumbnails: {
              large: {
                url: string
              }
            }
          }
        ]
      }
    }
  ]
}
