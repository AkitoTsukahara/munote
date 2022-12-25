import { base } from '$lib/package/airtable'
import type { Diary } from './detail/store'

export const useDiaryStoreApi = () => {
  const get = async () => {
    return await base('diary')
      .select({
        maxRecords: 3,
        cellFormat: 'json'
      }).all().then((records) => {
        return records.map((record:Record<any, any>): Diary => {
          return {
            id: record.id,
            created_at: record._rawJson.createdTime,
            title: record.fields.title,
            contents: record.fields.contents,
            thumbnail: {
              url: record.fields.thumbnail[0].thumbnails.large.url
            },
            name: record.fields.name,
            profileImage: {
              url: record.fields.profile_image[0].thumbnails.small.url
            }
          }
        })
      });
  }
  return {
    get
  }
}
