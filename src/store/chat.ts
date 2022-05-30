import { TMsg, TCvs, TMsgQueue, TLastMsg, TTargetGroup, TUserInfo } from './types'
import { defineStore } from 'pinia'
import { Names } from './store-name'
import { useAuthStore } from './auth'
const Auth = useAuthStore()

export const useChatStore = defineStore(Names.CHAT, {
  state: () => ({
    // 正在聊天的消息队列
    curMsgQueue: [],
    // 所有消息队列
    msgQueue: <TMsgQueue>{},
    // 最近/新消息 列表
    lastMsgQueue: <TLastMsg []>[]
  }),
  getters: {},
  // 同步/异步
  actions: {
    // 最近聊天列表更新
    updateLastQueue (payload: { data: TMsg, master: string }) {
      const { data, master } = payload
      // 最近聊天列表更新
      const lastQueue = this.lastMsgQueue
      if (lastQueue.length > 0) {
        let temp = false
        lastQueue.forEach((item, idx) => {
          // 群聊 || 私聊
          if ((data.group && item.msg.group === data.group) || (!data.group && !item.msg.group && item.master === master)) {
            // 在聊天列表中
            temp = true
            // 覆盖更新
            item.msg = data
          }
        })
        // 不在聊天列表中
        if (!temp) {
          const id = data.timestamp ? data.timestamp : Date.now()
          lastQueue.push({
            master,
            msg: data,
            id: id + master,
            unreadNum: 0,
            top: false,
            mute: false
          })
        }
      } else {
        // 聊天列表为空
        const id = data.timestamp ? data.timestamp : Date.now()
        lastQueue.push({
          master,
          msg: data,
          id: id + master,
          unreadNum: 0,
          top: false,
          mute: false
        })
      }
    },
    // 未读消息管理
    setUnReadNum (payload: { data: TMsg, master: string }) {
      const __target = Auth.__target
      const { data, master } = payload
      this.lastMsgQueue.forEach(item => {
        // 群聊消息
        if (data.group && item.msg.group === data.group) {
          // 是否当前在聊
          if (item.msg.group === (__target as TTargetGroup).gname) {
            item.unreadNum = 0
          } else {
            // 其他对象
            item.unreadNum++
          }
        } else if (!data.group && item.master === master) {
          // 私聊消息
          // 是否当前在聊
          if (item.master === (__target as TUserInfo).email) {
            item.unreadNum = 0
          } else {
            // 其他对象
            item.unreadNum++
          }
        }
      })
    },
    // 当前聊天对象
    setCurrentChating: (payload: { group?: string | undefined, from: string, to: string }) => {
      const { group, from, to } = payload
      const __self = Auth.__self
      let master = from
      // 判断私聊消息的发送方是否是自己
      if (!group && from === __self.email) {
        master = to
      }
      // // 当前聊天
      // commit('auth/saveTarget', {
      //   group,
      //   master,
      //   rootGroup: rootState.contact.rootGroup
      // }, { root: true })

      // // 加载当前对象聊天消息
      // commit('loadTargetMsg', { group, master })
      // // 清零 未读
      // commit('cleanUnReadNum', payload)
    },
    // 聊天消息管理
    setConversations (payload: TCvs) {
      const { data } = payload
      const __self = Auth.__self
      let master = data?.from
      // 判断私聊消息的发送方是否是自己
      if (!data?.group && data?.from === __self.email) {
        master = data.to
      }
      const temp = this.msgQueue[data.group || master]
      if (temp && temp.list) {
        temp.list.push(data)
      } else {
        // create
        this.msgQueue[data.group || master] = { list: [data] }
      }
      // 最近聊天列表更新
      this.updateLastQueue({ data, master })
      // 未读消息管理
      this.setUnReadNum({ data, master })
    }
  }
})
