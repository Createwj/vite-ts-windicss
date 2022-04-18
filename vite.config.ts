import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import legacy from '@vitejs/plugin-legacy'
import WindiCSS from 'vite-plugin-windicss'
import AutoImport from 'unplugin-auto-import/vite'

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

export default defineConfig({
  plugins: [
    vue(),
    WindiCSS(),
    legacy({
      targets: ['defaults', 'not IE 11'],
      polyfills: true
    }),
    AutoImport({
      include: [/\.[tj]sx?$/, /\.vue$/, /\.vue\?vue/],
      imports: ['vue', 'vue-router', '@vueuse/core'],
      eslintrc: {
        enabled: true,
        filepath: './.eslintrc-auto-import.json',
        globalsPropValue: true
      },
      dts: './auto-import.d.ts'
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
    alias
  }
})
