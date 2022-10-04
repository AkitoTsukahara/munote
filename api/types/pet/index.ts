export type ApiPet = {
  records:[
    {
      id: string
      createdTime: string
      fields: {
        name: string
        sex: string
        breed: string
        birthday: string
        familyday: string
        profileImage: [{
          url: string
        }]
      }
    }
  ]
}
