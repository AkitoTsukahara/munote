export type ApiSchedule = {
  records: [
    {
      id: string
      createdTime: string
      fields: {
        title: string
        start: string
      }
    }
  ]
}
