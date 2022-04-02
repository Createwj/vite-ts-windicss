import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import legacy from '@vitejs/plugin-legacy'

import WindiCSS from 'vite-plugin-windicss'

import { resolve } from 'path'
const pathResolve = (dir: string): any => {
  return resolve(__dirname, '.', dir)
}

const alias: Record<string, string> = {
  '@': pathResolve('src'),
  views: pathResolve('src/views'),
  utils: pathResolve('src/utils'),
  style: pathResolve('src/style')
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    WindiCSS(),
    legacy({
      targets: ['defaults', 'not IE 11'],
      polyfills: true
    })
  ],
  server: {
    host: '0.0.0.0',
    port: 8080,
    https: false,
    open: false,
    proxy: {},
    cors: true
  },
  resolve: {
    // ***** 路径配置新增
    alias // ***** 路径配置新增
  }
})
