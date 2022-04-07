import App from './App.vue'
import router, { setupRouter } from '@/router/index'
import { createApp } from 'vue'

import 'virtual:windi.css'
import 'virtual:windi-devtools'
import '@/style/index.scss'

async function bootstrap() {
  const app = createApp(App)
  setupRouter(app)
  await router.isReady()
  app.mount('#app')
}
bootstrap()
