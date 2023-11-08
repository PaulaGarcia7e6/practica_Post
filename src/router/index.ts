import { createRouter, createWebHistory } from 'vue-router'
import myJournalVue from '@/views/myJournal.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: myJournalVue
    },
  ]
})

export default router
