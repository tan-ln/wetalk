import { createApp } from 'vue'
import App from './App.vue'
import { createPinia } from 'pinia'
import { storagePlugin } from '@/store/storagePlugin'
import { useAuthStore } from '@/store/auth'
import router from './router'

const store = createPinia()
store.use(storagePlugin({ key: 'pinia' }))

// 白名单
const whiteList = ['/signin', '/signup']
// 路由守卫，权限控制
router.beforeEach((to, from, next) => {
  const Auth = useAuthStore()
  if (!Auth.__self?.email && !Auth.__self?.username) {
    whiteList.includes(to.path)
      ? next()
      : next({
        path: '/signin',
        query: {
          redirect: to.fullPath
        }
      })
    sessionStorage.clear()
  } else {
    next()
  }
})

// router.afterEach(() => {})

createApp(App).use(store).use(router).mount('#app')
