import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../views/HomePage.vue'
import VideoPage from '../views/VideoPage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomePage
    },
    {
      path: '/video/:id',
      name: 'video',
      component: VideoPage,
      props: true
    }
  ]
})

export default router