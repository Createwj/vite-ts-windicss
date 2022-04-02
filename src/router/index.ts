import type { App } from 'vue'
import type { RouteRecordRaw, _RouteRecordBase } from 'vue-router'
import { createRouter as _createRouter, createWebHistory } from 'vue-router'

const importRoutes = import.meta.globEager('./modules/*.ts')

const routes: RouteRecordRaw[] = Object.keys(importRoutes).reduce(
  (routesArr, path) => routesArr.concat(importRoutes[path].default),
  []
)
function createRouter() {
  return _createRouter({
    history: createWebHistory(),
    scrollBehavior: () => ({ top: 0 }),
    routes
  })
}

export const router = createRouter()

declare function getValue(key: any): string

export function setupRouter(app: App<Element>) {
  app.use(router)
  router.beforeResolve((to, from, next) => {
    to.meta.title && (document.title = getValue(to.meta.title))
    next()
  })
}

export default router
