import { page } from '$app/stores'
import { v4 } from 'uuid'
import { get, writable as svelteWritable, type Writable } from 'svelte/store'
import { useIsClient } from '../env'

const storesKey = 'isolateSSRStore'

/**
 * @see https://github.com/sveltejs/kit/discussions/4339#discussioncomment-3258927
 * @param initialValue
 * @returns
 */
export const writable = <T>(initialValue: T): Writable<T> => {
  // NOTE: 不用意にinitialValueを書き変えられてしまうとバグの温床になるので防ぐ
  if (typeof initialValue === 'object') {
    initialValue = Object.freeze(initialValue)
  }

  const key = `store_${v4()}`
  const setStore = <T>(value: T) => {
    try {
      const { data } = get(page)

      const store = data[storesKey]?.[key]
      const currentValue = store ? store.value : initialValue

      if (!store || value !== currentValue) {
        if (!data[storesKey]) data[storesKey] = {}
        data[storesKey][key] = {
          value,
          subscribers: store?.subscribers || []
        }

        if (store) {
          store.subscribers.forEach((fn: CallableFunction) => {
            fn(value)
          })

          return value
        }
      }
    } catch (error) {
      console.error(error)
      return value
    }
  }

  const sandboxedWritable: Writable<T> = {
    set: setStore,
    subscribe: (fn: CallableFunction) => {
      try {
        const { data } = get(page)

        const store = data[storesKey]?.[key]
        const currentValue = store ? store.value : initialValue

        fn(currentValue)

        if (!data[storesKey]) data[storesKey] = {}
        data[storesKey][key] = {
          value: store?.value || initialValue,
          subscribers: [...(store?.subscribers || []), fn]
        }
      } catch (error) {
        console.error(error)
        fn(initialValue)
      }

      return function unsubscribe() {
        try {
          const { data } = get(page)
          const { subscribers } = data[storesKey][key]
          subscribers.splice(subscribers.indexOf(fn), 1)
        } catch (error) {
          console.error(error)
        }
      }
    },
    update: (fn: CallableFunction) => {
      try {
        const { data } = get(page)

        const store = data[storesKey]?.[key]
        const currentValue = store ? store?.value : initialValue

        setStore(fn(currentValue))
      } catch (error) {
        console.error(error)
        setStore(fn(initialValue))
      }
    }
  }

  const isClient = useIsClient()

  return isClient || process.env.VITEST ? svelteWritable<T>(initialValue) : sandboxedWritable
}
