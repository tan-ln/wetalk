import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import { useAuthStore } from '@/store/auth'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: () => import('@/views/Home/index.vue')
  },
  {
    path: '/signup',
    name: 'signup',
    component: () => import('@/views/SignUp/index.vue'),
    // 访问 signup 之前
    beforeEnter (to, from, next) {
      const Auth = useAuthStore();
      (Auth.__self.email && Auth.__self.username) ? next({ name: 'home' }) : next()
    }
  },
  {
    path: '/signin',
    name: 'signin',
    component: () => import('@/views/SignUp/index.vue'),
    // 访问 signin 之前
    beforeEnter (to, from, next) {
      const Auth = useAuthStore();
      (Auth.__self.email && Auth.__self.username) ? next({ name: 'home' }) : next()
    }
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
