import type { RouteRecordRaw } from 'vue-router'
const index: RouteRecordRaw[] = [
  {
    path: '/my',
    component: () => import('@/layout/index.vue'),
    children: [
      {
        path: 'index',
        component: () => import('@/views/my/index.vue')
      },
      {
        path: 'about',
        component: () => import('@/views/my/about.vue')
      },
      {
        path: 'use',
        component: () => import('@/views/my/use.vue'),
        children: [
          {
            path: 'index/:id',
            component: () => import('@/views/components/vueUse/index.vue')
          }
        ]
      }
    ]
  }
]
export default index
