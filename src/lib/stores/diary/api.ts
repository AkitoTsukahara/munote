import { base } from '$lib/package/airtable'

export const useDiaryStoreApi = () => {
  const get = async () => {
    let res = await base('diary')
      .select({
        //fields: ['id'],
        maxRecords: 3,
        cellFormat: 'json'
      }).all().then((records) => {
        return records.map((record) => {
          console.log(record.fields.thumbnail)
          // @ts-ignore
          return {
            id: record.id,
            createdTime: record._rawJson.createdTime,
            fields: {
              id: record.fields.id,
              title: record.fields.title,
              contents: record.fields.contents,
              created_at: record.fields.created_at,
              thumbnail: [
                {
                  thumbnails: {
                    large: {
                      url: record.fields.thumbnail[0].thumbnails.large.url
                    }
                  }
                }
              ],
              name: record.fields.name,
              profile_image: [
                {
                  thumbnails: {
                    small: {
                      url: record.fields.profile_image[0].thumbnails.small.url
                    }
                  }
                }
              ]
            }
          }
        })
      });
    return {
      records: res
    }
  }
  return {
    get
  }
}
