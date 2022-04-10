import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/Transfer.vue')
  },
  {
    path: '/historico',
    name: 'Historico',
    component: () => import('../views/History.vue')
  },
  {
    path: '/criarConta',
    name: 'CriarConta',
    component: () => import('../views/CreateAccount.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
