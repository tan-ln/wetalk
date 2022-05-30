import { defineStore } from 'pinia'
import { Names } from './store-name'
import { TModal } from './types'

export const useHelperStore = defineStore(Names.HELPER, {
  state: () => ({
    // 导航栏
    navbar: {
      activeId: <number>0,
      // 导航列表
      navList: [
        // { title: 'Home', name: 'home', fontCode: '&#xe690;', to: '/' },
        { title: 'Chat', name: 'chat', fontCode: '&#xe601;', to: '/chat' },
        { title: 'Contacts', name: 'contacts', fontCode: '&#xe61f;', to: '/contacts' },
        { title: 'Folders', name: 'folders', fontCode: '&#xeac5;', to: '/folders' },
        { title: 'Collections', name: 'collections', fontCode: '&#xeac6;', to: '/collections' }
      ],
      // 底部操作栏 设置 | 深色模式
      setting: { title: 'Setting', name: 'setting', fontCode: '&#xe8b8;' },
      darkMode: { title: 'Collections', name: 'collections', fontCode: '&#xe664;' }
    },
    errorno: {},
    // 过场动画反转
    flipAni: <boolean>false,
    // modal 弹窗
    modal: <TModal>{ show: false, title: '', msg: '' }
  }),
  getters: {},
  actions: {
    showModal (data: TModal) {
      this.modal = data
    },
    hideModal () {
      this.modal.show = false
    },
    changeNavbarActiveId (index: number) {
      this.navbar.activeId = index
    }
  }
})
