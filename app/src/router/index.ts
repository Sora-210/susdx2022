import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'List',
      component: () => import('../views/List.vue')
    },
    {
      path: '/view',
      name: 'View',
      component: () => import('../views/View.vue')
    }
  ]
})

export default router
