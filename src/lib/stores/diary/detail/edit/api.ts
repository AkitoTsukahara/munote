import { base } from '$lib/package/airtable'
import type { FieldSet } from 'airtable/lib/field_set'

export const useDiaryEditStoreApi = () => {
  const postEditDiary = async (id: string, data: Partial<FieldSet>): Promise<boolean> => {
    try {
      await base('diary')
        .update(
          id,
          data
        )
      return true
    } catch (err) {
      return false
    }
  }
  return {
    postEditDiary
  }
}
