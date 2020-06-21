import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    children: [
      {
        path: '/',
        name: 'production',
        component: () => import(/* webpackChunkName: "production" */ '../views/watchView/production.vue'),
        subName:'生产'
      },
      {
        path: '/home/internetThings',
        name: 'internetThigs',
        component: () => import(/* webpackChunkName: "internetThigs" */ '../views/watchView/internetOfThings.vue'),
        subName:'物联网'
      },
    ]
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes
})

export default router
