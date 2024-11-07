import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: HomeView
    },
    {
      path: '/Machine',
      name: 'Machine',
      component: () => import('../views/MachineView.vue')
    },
    {
      path: '/JDCarving',
      name: 'JDCarving',
      component: () => import('../views/JDCarving.vue')
    },
    {
      path: '/JDCarvingImg',
      name: 'JDCarvingImg',
      component: () => import('../views/JDCarvingImg.vue')
    },
    {
      path: '/3DCad',
      name: '3DCad',
      component: () => import('../views/3DCad.vue')
    },
    {
      path: '/3DCadModel',
      name: '3DCadModel',
      component: () => import('../views/3DCadModel.vue')
    },
    {
      path: '/HtmlCssJs',
      name: 'HtmlCssJs',
      component: () => import('../views/HtmlCssJs.vue')
    },
    {
      path: '/SkillView',
      name: 'SkillView',
      component: () => import('../views/SkillView.vue')
    }
  ]
})

export default router
