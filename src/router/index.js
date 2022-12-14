import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import(/* webpackChunkName: "about" */ '@/views/MainPOCalendar.vue')
  },
  {
    path: '/users/new',
    name: 'new-user',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '@/views/NewUser.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
