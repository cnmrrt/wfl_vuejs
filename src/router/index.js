import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/authors',
    name: 'Authors',
    component: () => import('../views/Authors.vue')
  },
  {
    path: '/words',
    name: 'Words',
    component: () => import('../views/Words.vue')
  },
  {
    path: '/preverbs',
    name: 'Preverbs',
    component: () => import('../views/Preverbs.vue')
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../views/About.vue')
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
