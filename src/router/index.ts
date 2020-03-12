import Vue from 'vue'
import VueRouter from 'vue-router'
import Layout from '../views/Layout/index.vue'
Vue.use(VueRouter)

const innerPageRoutes = [
  {
    path: '/',
    component: Layout,
    children: [{
      name: 'index',
      path: '',
      redirect: '/homePage'
    }]
  },
  {
    path: '/homePage',
    component: Layout,
    children: [{
      name: 'homePage',
      path: '',
      component: () => import(/* webpackChunkName: "home" */ '../views/HomePage/index.vue')
    }]
  },
  {
    path: '/authPage',
    component: Layout,
    children: [{
      name: 'authPage',
      path: '',
      component: () => import(/* webpackChunkName: "auth" */ '../views/AuthPage/index.vue')
    }]
  },
  {
    path: '/areaPage',
    component: Layout,
    children: [{
      name: 'areaPage',
      path: '',
      component: () => import(/* webpackChunkName: "area" */ '../views/AreaPage/index.vue')
    }]
  }
]

const routes = [
  ...innerPageRoutes,
  {
    path: '/about',
    name: 'About',
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router: VueRouter = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
