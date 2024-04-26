// router/index.js
import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import PerfilView from '../views/PerfilView.vue'


const routes = [
  {
    path: '/', // La ruta para la página de inicio
    name: 'Home', // El nombre de la ruta
    component: HomeView // El componente que se renderizará cuando se visite esta ruta
  },
  {
    path: '/perfil', // La ruta para la página de perfil
    name: 'Perfil', // El nombre de la ruta
    component: PerfilView // El componente que se renderizará cuando se visite esta ruta
  }
]

// Creamos el enrutador con las rutas definidas y utilizando el modo de historial del navegador web
const router = createRouter({
  history: createWebHistory(), // Utilizamos el historial del navegador para una experiencia de usuario más natural
  routes // Las rutas que definimos anteriormente
})

export default router
