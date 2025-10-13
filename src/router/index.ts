import { createRouter, createWebHistory } from 'vue-router'

import Skill from '@/pages/home/subpages/Skill.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
    name:"skill",
    path:"/Skill/:stage?",
    component: Skill, 
    props: true,
    },
  ],
})

export default router
