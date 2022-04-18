import type { RouteRecordRaw } from 'vue-router'

const index: RouteRecordRaw[] = [
  {
    path: '/',
    redirect: '/my/index'
  },
  {
    path: '/form',
    component: () => import('@/views/form/index.vue')
  }
]
export default index
