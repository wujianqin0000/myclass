import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/Login.vue'
import Index from '../views/Index.vue'
import Notfound from '../views/error/Notfound.vue'
import ErrorPage from '../views/error/Error.vue'

Vue.use(VueRouter)
// 修改路由规则（可以重复跳转）
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {undefined
  return originalPush.call(this, location).catch(err => err)
}
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
        component: () => import(/* webpackChunkName: "HomeIndex" */ '../views/index/HomeIndex.vue')
      },
      {
        path: 'aboutSchool',
        name: 'aboutSchool',
        component: () => import(/* webpackChunkName: "aboutSchool" */ '../views/index/aboutSchool.vue')
      },
      {
        path: 'personPhoto',
        name: 'personPhoto',
        component: () => import(/* webpackChunkName: "personPhoto" */ '../views/index/personPhoto.vue'),
        children: [
          {
            path: '/',
            redirect: 'personPhotoList'
          },
          {
            path: 'personDetails/:id',
            name: 'PersonDetails',
            component: () => import(/* webpackChunkName: "AboutProject" */ '../views/index/personphoto/PersonDetails.vue')
          },
          {
            path: 'personPhotoList',
            name: 'personPhotoList',
            component: () => import(/* webpackChunkName: "AboutProject" */ '../views/index/personphoto/PersonPhotoList.vue')
          },
          {
            path: 'Personal/:id',
            name: 'Personal',
            component: () => import(/* webpackChunkName: "AboutProject" */ '../views/index/personphoto/Personal.vue')
          },
        ]
      },
      {
        path: 'classPhoto',
        name: 'classPhoto',
        component: () => import(/* webpackChunkName: "classPhoto" */ '../views/index/classPhoto.vue')
      },
      {
        path: 'aboutProject',
        name: 'aboutProject',
        component: () => import(/* webpackChunkName: "AboutProject" */ '../views/index/AboutProject.vue')
      },
      {
        path: 'aboutAuthor',
        name: 'aboutAuthor',
        component: () => import(/* webpackChunkName: "AboutProject" */ '../views/index/aboutAuthor.vue')
      }
    ]
  },
  {
    path: '/notfound',
    name: 'notfound',
    component: Notfound
  },
  {
    path: '/ErrorPage',
    name: 'errorpage',
    component: ErrorPage
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
