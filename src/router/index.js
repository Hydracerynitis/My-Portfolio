import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '/src/views/HomeView.vue'
import ProjectView from '/src/views/ProjectView.vue'
import ContactView from '/src/views/ContactView.vue'
import notFoundView from '/src/views/NotFoundView.vue'
import HonorView from '/src/views/HonorView.vue'
import CovidView from '/src/views/CovidView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: HomeView,
    },
    {
      path: '/project',
      name: 'Project',
      component: ProjectView,
    },
    {
      path: '/project/honor',
      name: 'Honor Dissertation',
      component: HonorView,
    },
    {
      path: '/project/covid',
      name: 'Covid Contact App',
      component: CovidView,
    },
    {
      path: '/contact',
      name: 'Contact',
      component: ContactView,
    },
    {
      path:"/:catchAll(.*)*",
      name:'404',
      component: notFoundView,
    }
  ],
})

export default router
