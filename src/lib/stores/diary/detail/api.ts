import { base } from '$lib/package/airtable'
import type { Diary } from './store'

export const useDiaryDetailStoreApi = () => {
  const get = async (id: string) => {
    return await base('diary')
      .find(id).then((record: Record<any, any>): Diary => {
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
      });
  }
  return {
    get
  }
}
