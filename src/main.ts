import App from './App.vue'
import router, { setupRouter } from '@/router/index'
import { createApp } from 'vue'

import 'virtual:windi.css'
import 'virtual:windi-devtools'

window.dataLayer = '全局属性： dataLayer'

async function bootstrap() {
  const app = createApp(App)
  setupRouter(app)
  await router.isReady()
  app.mount('#app')
}
bootstrap()
