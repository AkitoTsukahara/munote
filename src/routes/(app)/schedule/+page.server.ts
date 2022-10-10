import type { ApiSchedule } from '$api/types/schedule'
import { error, type ServerLoad } from '@sveltejs/kit'
import {useScheduleStoreApi} from '$lib/stores/schedule/api'

export type GetOutput = {
  schedule: ApiSchedule
}

export const load: ServerLoad = async (): Promise<GetOutput> => {
  const [schedule] = await Promise.all([useScheduleStoreApi().get()]).catch((err) => {
    throw error(Number(err.response?.status), err.response?.statusText)
  })
  return {
    schedule
  }
}
