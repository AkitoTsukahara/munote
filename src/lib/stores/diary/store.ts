import { writable } from '$lib/package/isolation/store'
import type { ApiDiary } from '$api/types/diary'

export type Diary = {
  id: string
  title: string
  createdAt: string
  thumbnail: {
    url: string
  }
  name: string
  profileImage: {
    url: string
  }
}

const diaryStore = writable<Diary[] | null>(null)

const setFromApi = (data: ApiDiary) => {
  const diary: Diary[] = data.records.map((record) => ({
    id: record.id,
    title: record.fields.title,
    createdAt: record.fields.created_at,
    thumbnail: {
      url: record.fields.thumbnail[0].thumbnails.large.url
    },
    name: record.fields.name,
    profileImage: {
      url: record.fields.profile_image[0].thumbnails.small.url
    }
  }))
  diaryStore.set(diary)
}

export const useDiary = () => {
  return {
    diaryStore,
    setFromApi
  }
}
