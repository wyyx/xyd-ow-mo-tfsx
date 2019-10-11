import { RouteConfig } from 'vue-router'

const routes: RouteConfig[] = [
  {
    path: '/',
    component: () => import('layouts/Layout1.vue'),
    children: [
      { path: '', component: () => import('pages/Index.page.vue') },
      {
        path: 'school-intro',
        name: 'school-intro',
        component: () => import('pages/SchoolIntro.page.vue')
      }
    ]
  }
]

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
  routes.push({
    path: '*',
    component: () => import('pages/Error404.vue')
  })
}

export default routes
