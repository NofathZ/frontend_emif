import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/Home.vue')
  },
  {
    path: '/categories',
    name: 'Categories',
    component: () => import('../views/Categories.vue')
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../views/About.vue')
  },
  {
    path: '/about/emif',
    name: 'About EMIF',
    component: () => import('../views/AboutEMIF.vue')
  },
  {
    path: '/about/bpmif',
    name: 'About BPMIF',
    component: () => import('../views/AboutBPMIF.vue')
  },
  {
    path: '/contact',
    name: 'Contact',
    component: () => import('../views/Contact.vue')
  },
  {
    path: '/registration',
    name: 'Registration',
    component: () => import('../views/Registration.vue')
  },
  {
    path: '/scholarship',
    name: 'Scholarship',
    component: () => import('../views/Scholarship.vue')
  },
  {
    path: '/detail',
    name: 'Detail Info',
    component: () => import('../views/DetailScholar.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
