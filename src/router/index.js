import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/Homepage.vue')
  },
  {
    path: '/categories',
    component: () => import('../views/Categories.vue'),
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
    path: '/pendaftaran',
    name: 'Registration',
    component: () => import('../views/Registration.vue')
  },
  {
    path: '/agenda',
    name: 'Agenda',
    component: () => import('../views/Agenda.vue')
  },
  {
    path: '/agenda/:slug',
    name: 'Agenda Detail',
    component: () => import('../views/DetailAgenda.vue')
  },
  {
    path: '/beasiswa',
    name: 'Scholarship',
    component: () => import('../views/Scholarship.vue')
  },
  {
    path: '/beasiswa/:slug',
    name: 'Scholarship Detail',
    component: () => import('../views/DetailScholarship.vue')
  },
  {
    path: '/artikel',
    name: 'Article',
    component: () => import('../views/Article.vue'),
  },
  {
    path: '/artikel/:slug',
    name: 'Article Detail',
    component: () => import('../views/DetailArticle.vue')
  },
  {
    path: '/pengumuman',
    name: 'Announcement',
    component: () => import('../views/Announcement.vue'),
  },
  {
    path: '/pengumuman/:slug',
    name: 'Announcement Detail',
    component: () => import('../views/DetailAnnouncement.vue')
  },
  {
    path: '/lomba',
    name: 'Competition',
    component: () => import('../views/Competition.vue'),
  },
  {
    path: '/lomba/:slug',
    name: 'Competition Detail',
    component: () => import('../views/DetailCompetition.vue')
  },
  {
    path: '/lowongan',
    name: 'Job Vacancy',
    component: () => import('../views/JobVacancy.vue'),
  },
  {
    path: '/lowongan/:slug',
    name: 'Job Vacancy Detail',
    component: () => import('../views/DetailJobVacancy.vue')
  },
  {
    path: '/produk',
    name: 'Product',
    component: () => import('../views/Product.vue')
  },
  {
    path: '/produk/:slug',
    name: 'Product Detail',
    component: () => import('../views/DetailProduct.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
