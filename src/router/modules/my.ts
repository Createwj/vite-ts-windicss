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
        path: 'center',
        component: () => import('@/views/my/center.vue')
      }
    ]
  }
]
export default index
