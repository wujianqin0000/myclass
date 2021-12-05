import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/Login.vue'
import Index from '../views/Index.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/login'
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '/home',
    name: 'index',
    component: Index,
    children: [
      {
        path: '/',
        redirect:'index'
      },
      {
        path: 'index',
        name: 'homeIndex',
        component: () => import(/* webpackChunkName: "about" */ '../views/index/HomeIndex.vue')
      },
      {
        path: 'aboutSchool',
        name: 'aboutSchool',
        component: () => import(/* webpackChunkName: "about" */ '../views/index/aboutSchool.vue')
      },
      {
        path: 'personPhoto',
        name: 'personPhoto',
        component: () => import(/* webpackChunkName: "about" */ '../views/index/personPhoto.vue')
      },
      {
        path: 'classPhoto',
        name: 'classPhoto',
        component: () => import(/* webpackChunkName: "about" */ '../views/index/classPhoto.vue')
      }
    ]
  }
  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
]

const router = new VueRouter({
  routes
})

export default router
