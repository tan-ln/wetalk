import { toRaw } from 'vue'
import { PiniaPluginContext } from 'pinia'

type Option = {
  key?: string
}

const __piniaKey__ = 'pinia'

const setStorage = (key: string, value: string | object | []) => {
  sessionStorage.setItem(key, JSON.stringify(value))
}
const getStorage = (key: string) => {
  return sessionStorage.getItem(key) ? JSON.parse(sessionStorage.getItem(key) as string) : {}
}

export const storagePlugin = (options: Option) => (ctx: PiniaPluginContext) => {
  const { store } = ctx
  const data = getStorage(`${options?.key ?? __piniaKey__}-${store.$id}`)
  store.$subscribe(() => {
    setStorage(`${options?.key ?? __piniaKey__}-${store.$id}`, toRaw(store.$state))
  })
  return {
    ...data
  }
}
