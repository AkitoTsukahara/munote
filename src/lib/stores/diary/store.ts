import { writable } from '$lib/package/isolation/store'
import type { Diary } from './detail/store'

const diaryStore = writable<Diary[] | null>(null)

const setFromApi = (data: Diary[]) => {
  const diary: Diary[] = data.map((record: Diary) => ({
    id: record.id,
    title: record.title,
    contents: record.contents,
    created_at: record.created_at,
    thumbnail: {
      url: record.thumbnail.url
    },
    name: record.name,
    profileImage: {
      url: record.profileImage.url
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
