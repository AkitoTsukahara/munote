import { writable } from '$lib/package/isolation/store'

export type Diary = {
  id: string
  title: string
  contents: string
  created_at: string
  thumbnail: {
    url: string
  }
  name: string
  profileImage: {
    url: string
  }
}

const diaryStore = writable<Diary | null>(null)

const setFromApi = (data: Diary) => {
  const diary: Diary = {
    id: data.id,
    title: data.title,
    contents: data.contents,
    created_at: data.created_at,
    thumbnail: {
      url: data.thumbnail.url
    },
    name: data.name,
    profileImage: {
      url: data.profileImage.url
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
