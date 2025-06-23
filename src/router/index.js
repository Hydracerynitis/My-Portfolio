import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '/src/views/HomeView.vue'
import ProjectView from '/src/views/ProjectView.vue'
import ContactView from '/src/views/ContactView.vue'
import notFoundView from '/src/views/NotFoundView.vue'

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
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: ProjectView,
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
