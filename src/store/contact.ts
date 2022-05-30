import { defineStore } from 'pinia'
import { Names } from './store-name'
import { get } from '@/api/request.js'
import { useHelperStore } from './helper'

const Helper = useHelperStore()

export const useContactStore = defineStore(Names.CONTACT, {
  state: () => ({
    // 联系人列表
    contactsBook: [],
    showIDCard: <boolean>false,
    IDCard: {},
    groups: [],
    rootGroup: {},
    sourceFiles: [],
    showExtends: false
  }),
  getters: {
  },
  actions: {
    async reqRootGroup () {
      const res = await get('/api/group/root') as { code: number, data?: any, message?: string }
      if (res.code === 200) {
        this.rootGroup = res.data
      } else {
        Helper.showModal({ show: true, title: res.code, msg: res.message })
      }
    }
  }
})
