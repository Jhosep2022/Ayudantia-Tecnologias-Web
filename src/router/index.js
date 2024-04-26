// router/index.js
import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import PerfilView from '../views/PerfilView.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomeView
  },
  {
    path: '/perfil',
    name: 'Perfil',
    component: PerfilView
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
