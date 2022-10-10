import { writable } from '$lib/package/isolation/store'
import type { ApiSchedule } from '$api/types/schedule'

export type Schedule = {
  title: string
  start: string
}

const scheduleStore = writable<Schedule[] | null>(null)

const setFromApi = (data: ApiSchedule): void => {
  const schedules: Schedule[] = data.records.map((record) => ({
    title: record.fields.title,
    start: record.fields.start,
  }))
  scheduleStore.set(schedules)
}

export const useSchedule = () => {
  return {
    scheduleStore,
    setFromApi
  }
}
