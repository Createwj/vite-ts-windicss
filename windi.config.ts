import { defineConfig } from 'windicss/helpers'
import theme from './theme'
export default defineConfig({
  plugins: [],
  theme,
  extract: {
    include: ['**/*.{vue,js,css,scss,sass,json}'],
    exclude: ['node_modules', '.git']
  }
  // 可在styles/index.scss中书写全局可复用样式@apply
  // shortcuts: {
  //   btn: 'py-2 px-4 font-semibold rounded-lg shadow-md',
  //   'btn-green': 'text-white bg-green-500 hover:bg-green-700'
  // }
})
