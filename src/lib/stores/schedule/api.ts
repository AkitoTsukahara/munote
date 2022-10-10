import { client } from '$lib/package/api/client'
import type { ApiSchedule } from '$api/types/schedule'

export const useScheduleStoreApi = () => {
  const get = async (): Promise<ApiSchedule> => {
    return await client()
      .schedule.$get()
      .catch((err) => {
        if (err.response?.status !== 404) {
          console.error(err)
        }
        throw err
      })
  }
  return {
    get
  }
}
