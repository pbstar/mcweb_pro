import { createRouter, createWebHistory } from 'vue-router'
import nav from '@/views/navPage'

const routes = [
  {
    path: '/',
    name: 'nav',
    component: nav
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
