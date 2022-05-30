import { createApp } from 'vue'
import App from './App.vue'
import { createPinia } from 'pinia'
// import VueSocketIO from 'vue-3-socket.io'
// import io from 'socket.io-client'
import Socketio from '@/plugins/Socket.io'
import { storagePlugin } from '@/store/storagePlugin'
import { useAuthStore } from '@/store/auth'
import router from './router'

const app = createApp(App)
// socket.io
app.use(Socketio, {
  connection: 'http://localhost:1234',
  options: {
    autoConnect: false
  }
})
// const socketio = new VueSocketIO({
//   // debug: true,
//   connection: io('http://localhost:1234', { transports: ['websocket'] })
// })

// pinia
const store = createPinia()
store.use(storagePlugin({ key: 'pinia' }))
app.use(store)

// router 白名单
const whiteList = ['/signin', '/signup']
// 路由守卫，权限控制
router.beforeEach((to, from, next) => {
  const Auth = useAuthStore()
  if (!Auth.__self?.email && !Auth.__self?.username) {
    whiteList.includes(to.path)
      ? next()
      : next({
        path: '/signin'
      })
    sessionStorage.clear()
  } else {
    next()
  }
})

// router.afterEach(() => {})

app.use(router)

app.mount('#app')
