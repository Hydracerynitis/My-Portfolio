import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '/src/views/HomeView.vue'
import ProjectView from '/src/views/ProjectView.vue'
import ContactView from '/src/views/ContactView.vue'
import notFoundView from '/src/views/NotFoundView.vue'

import HonorView from '/src/views/projects/HonorView.vue'
import CovidView from '/src/views/projects/CovidView.vue'
import ArgusMLView from '/src/views/projects/ArgusMLView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: HomeView,
      meta:{
        breadcrumb: 'breadcrumb.home'
      }
    },
    {
      path: '/project',
      name: 'Project',
      component: ProjectView,
      meta:{
        breadcrumb: 'breadcrumb.project'
      }
    },
    {
      path: '/project/honor',
      name: 'Honor Dissertation',
      component: HonorView,
      meta:{
        breadcrumb: 'breadcrumb.honor'
      }
    },
    {
      path: '/project/argusML',
      name: 'ArgusML Assignment',
      component: ArgusMLView,
      meta:{
        breadcrumb: 'breadcrumb.argusML'
      }
    },
    {
      path: '/project/covid',
      name: 'Covid Contact App',
      component: CovidView,
      meta:{
        breadcrumb: 'breadcrumb.covidApp'
      }
    },
    {
      path: '/contact',
      name: 'Contact',
      component: ContactView,
      meta:{
        breadcrumb: 'breadcrumb.contact'
      }
    },
    {
      path:"/:catchAll(.*)*",
      name:'404',
      component: notFoundView,
      meta:{
        breadcrumb: '404'
      }
    }
  ],
})

export default router
