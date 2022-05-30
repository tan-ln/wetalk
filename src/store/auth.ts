import { defineStore } from 'pinia'
import { Names } from './store-name'
import { post } from '@/api/request'
import { useHelperStore } from './helper'

// login user data
type LoginData = {
  path: string,
  email: string,
  password: string | number,
}
// master info or target friend info
type TUserInfo = {
  uid: string,
  email: string,
  username: string,
  avatar: string,
  contacts: string,
  timestamp: string,
}
// target info -- group
type TTargetGroup = {
  gid: string,
  gname: string,
  gavatar: string,
  gmember?: string,
  timestamp: string,
}

export const useAuthStore = defineStore(Names.AUTH, {
  state: () => ({
    __self: <TUserInfo> {},
    __target: <TTargetGroup | TUserInfo> {}
  }),
  // 有缓存 computed
  getters: {
    // ts 无法自动推导
    // 需要手动定义返回值类型
    // newName (): string {
    //   return `prefix-${this.user.name}`
    // }
  },
  // 同步/异步
  actions: {
    // 登录请求
    async reqSignIn (data: LoginData) {
      const { path, email, password } = data
      const res = await post(`/api/user/${path}`, { email, password })
      if (res.code === 200) {
        this.__self = res.data as TUserInfo
      } else {
        const otherStore = useHelperStore()
        console.log('show modal')
        // show modal
        otherStore.showModal({
          show: true,
          title: 'Sign In Error',
          msg: res.message
        })
      }
    }
  }
})
