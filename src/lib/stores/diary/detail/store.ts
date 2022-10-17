import { writable } from '$lib/package/isolation/store'
import type { ApiDiaryDetail } from '$api/types/diary/detail'

export type Diary = {
  id: string
  title: string
  contents: string
  createdAt: string
  thumbnail: {
    url: string
  }
  name: string
  profileImage: {
    url: string
  }
}

const diaryStore = writable<Diary | null>(null)

const setFromApi = (data: ApiDiaryDetail) => {
  console.log(data)
  const diary: Diary = {
    id: data.id,
    title: data.fields.title,
    contents: data.fields.contents,
    createdAt: data.fields.created_at,
    thumbnail: {
      url: data.fields.thumbnail[0].thumbnails.large.url
    },
    name: data.fields.name,
    profileImage: {
      url: data.fields.profile_image[0].thumbnails.small.url
    }
  }
  diaryStore.set(diary)
}

export const useDiaryDetail = () => {
  return {
    diaryStore,
    setFromApi
  }
}
