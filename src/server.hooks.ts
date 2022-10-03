//import { logger } from '$lib/package/log/logger'
import type { Handle } from '@sveltejs/kit'

export const handle: Handle = async ({ event, resolve }) => {
  return resolve(event);
}

// export const handleError: HandleServerError = ({ error, event }) => {
//   if (error instanceof Error) {
//     logger().error('handleError', error, event)
//   }
// }
