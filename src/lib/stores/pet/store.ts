import { writable } from '$lib/package/isolation/store'
import type { ApiPet } from '$api/types/pet'

export type Pet = {
  name: string
  sex: '♂' | '♀'
  breed: string
  birthday: string
  familyday: string
  profileImage: {
    url: string
  }
}

const petStore = writable<Pet | null>(null)

const setFromApi = (data: ApiPet) => {
  const pet: Pet = {
    name: data.records[0].fields.name,
    sex: data.records[0].fields.sex,
    breed: data.records[0].fields.breed,
    birthday: data.records[0].fields.birthday,
    familyday: data.records[0].fields.familyday,
    profileImage: {
      url: data.records[0].fields.profileImage[0].url
    }
  }
  petStore.set(pet)
}

export const usePet = () => {
  return {
    petStore,
    setFromApi
  }
}
