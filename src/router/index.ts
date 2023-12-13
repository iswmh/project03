import { createRouter, createWebHashHistory } from 'vue-router'

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      redirect: 'login'
    },
    {
      path: '/login',
      component: () => import('@/components/nhLogin.vue')
    },
    {
      path: '/main',
      component: () => import('@/components/nhMain.vue')
    },
    {
      path: '/:pathmatch(.*)',
      component: () => import('@/components/notFound.vue')
    }
  ]
})

export default router
