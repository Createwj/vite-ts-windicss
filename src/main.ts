import App from './App.vue'
import router, { setupRouter } from '@/router/index'
import { createApp } from 'vue'

import CasualUIVue from 'casual-ui-vue' // 引入全局Vue3插件
import 'casual-ui-vue/dist/style.css'

import 'virtual:windi.css'
import 'virtual:windi-devtools'
import '@/style/index.scss'

async function bootstrap() {
  const app = createApp(App)
  app.use(CasualUIVue)
  setupRouter(app)
  await router.isReady()
  app.mount('#app')
}
bootstrap()
