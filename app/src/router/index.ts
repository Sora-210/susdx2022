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
      path: '/view/:id',
      name: 'View',
      component: () => import('../views/View.vue')
    },
    {
      path: '/format',
      name: 'FormatList',
      component: () => import('../views/FormatList.vue')
    },
    {
      path: '/format/:id',
      name: 'Format',
      component: () => import('../views/Format.vue')
    },
    
  ]
})

export default router
