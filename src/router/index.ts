import { createRouter, createWebHistory } from 'vue-router'

import NotFoundView from '@/views/NotFoundView.vue'
import MainView from '@/views/MainView.vue'
import AcstRegistryView from '@/views/AcstRegistryView.vue'
import AcstView from '@/views/AcstView.vue'
import AuthView from '@/views/AuthView.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      name: 'main',
      path: '/',
      component: MainView
    },
    // {
    //     name: 'me',
    //     path: '/me',
    //     component: MePage
    // },
    {
        name: 'auth',
        path: '/auth',
        component: AuthView
    },
    // {
    //     name: 'personalRegistry',
    //     path: '/personal-registry',
    //     component: PersonalRegistryPage
    // },
    {
        name: 'acstRegistry',
        path: '/acst-registry',
        component: AcstRegistryView
    },
    // {
    //     name: 'edo',
    //     path: '/edo',
    //     component: EdoPage
    // },
    // {
    //     name: 'personal',
    //     path: '/personal/:id',
    //     component: PersonalPage
    // },
    {
        name: 'acst',
        path: '/acst/:id',
        component: AcstView
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'not-found',
      component: NotFoundView
    }
  ],
})

export default router
