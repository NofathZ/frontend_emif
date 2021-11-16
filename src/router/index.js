import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/Homepage.vue'),
  },
  {
    path: '/categories',
    component: () => import('../views/Categories.vue'),
    redirect: '/coming-soon'
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
    component: () => import('../views/Registration.vue'),
    redirect: '/coming-soon'
  },
  {
    path: '/agenda',
    name: 'Agenda',
    component: () => import('../views/Agenda.vue'),
    redirect: '/coming-soon'
  },
  {
    path: '/agenda/:slug',
    name: 'Agenda Detail',
    component: () => import('../views/DetailAgenda.vue'),
    redirect: '/coming-soon'
  },
  {
    path: '/beasiswa',
    name: 'Scholarship',
    component: () => import('../views/Scholarship.vue'),
    redirect: '/coming-soon'
  },
  {
    path: '/beasiswa/:slug',
    name: 'Scholarship Detail',
    component: () => import('../views/DetailScholarship.vue'),
    redirect: '/coming-soon'
  },
  {
    path: '/artikel',
    name: 'Article',
    component: () => import('../views/Article.vue'),
    redirect: '/coming-soon'
  },
  {
    path: '/artikel/:slug',
    name: 'Article Detail',
    component: () => import('../views/DetailArticle.vue'),
    redirect: '/coming-soon'
  },
  {
    path: '/pengumuman',
    name: 'Announcement',
    component: () => import('../views/Announcement.vue'),
    redirect: '/coming-soon'
  },
  {
    path: '/pengumuman/:slug',
    name: 'Announcement Detail',
    component: () => import('../views/DetailAnnouncement.vue'),
    redirect: '/coming-soon'
  },
  {
    path: '/lomba',
    name: 'Competition',
    component: () => import('../views/Competition.vue'),
    redirect: '/coming-soon'
  },
  {
    path: '/lomba/:slug',
    name: 'Competition Detail',
    component: () => import('../views/DetailCompetition.vue'),
    redirect: '/coming-soon'
  },
  {
    path: '/lowongan',
    name: 'Job Vacancy',
    component: () => import('../views/JobVacancy.vue'),
    redirect: '/coming-soon'
  },
  {
    path: '/lowongan/:slug',
    name: 'Job Vacancy Detail',
    component: () => import('../views/DetailJobVacancy.vue'),
    redirect: '/coming-soon'
  },
  {
    path: '/produk',
    name: 'Product',
    component: () => import('../views/Product.vue'),
    redirect: '/coming-soon'
  },
  {
    path: '/produk/:slug',
    name: 'Product Detail',
    component: () => import('../views/DetailProduct.vue'),
    redirect: '/coming-soon'
  },
  {
    path: '/coming-soon',
    name: "Coming Soon",
    component: () => import('../views/ComingSoon.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
