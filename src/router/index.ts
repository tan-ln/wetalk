import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import { useAuthStore } from '@/store/auth'

const routes: Array<RouteRecordRaw> = [
  // {
  //   path: '/',
  //   name: 'home',
  //   component: () => import('@/views/Home/index.vue'),
  //   beforeEnter () {
  //     return { name: 'chat' }
  //   }
  // },
  {
    path: '/chat',
    name: 'chat',
    components: {
      sub: () => import('@/components/msgCollection/index.vue'),
      main: () => import('@/components/dialogBox/index.vue')
    }
  },
  // {
  //   path: '/contacts',
  //   name: 'contacts',
  //   component: () => import('@/views/Contacts/index.vue')
  // },
  // {
  //   path: '/folders',
  //   name: 'folders',
  //   component: () => import('@/views/Folders/index.vue')
  // },
  // {
  //   path: '/collections',
  //   name: 'collections',
  //   component: () => import('@/views/Collections/index.vue')
  // },
  {
    path: '/signup',
    name: 'signup',
    component: () => import('@/views/SignUp/index.vue'),
    // 访问 signup 之前
    beforeEnter (to, from, next) {
      const Auth = useAuthStore();
      (Auth.__self.email && Auth.__self.username) ? next({ name: 'chat' }) : next()
    }
  },
  {
    path: '/signin',
    name: 'signin',
    component: () => import('@/views/SignUp/index.vue'),
    // 访问 signin 之前
    beforeEnter (to, from, next) {
      const Auth = useAuthStore();
      (Auth.__self.email && Auth.__self.username) ? next({ name: 'chat' }) : next()
    }
  },
  {
    path: '/404',
    name: 'notfound',
    component: () => import('@/views/NotFound/index.vue')
  },
  {
    path: '/:pathMatch(.*)',
    redirect: '404'
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
