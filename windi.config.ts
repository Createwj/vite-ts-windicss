import { defineConfig } from 'windicss/helpers'
import theme from './theme'
export default defineConfig({
  plugins: [],
  theme,
  extract: {
    include: ['**/*.{vue,js,css,scss,sass,json}'],
    exclude: ['node_modules', '.git']
  },
  // 可在styles/index.scss中书写全局可复用样式@apply
  shortcuts: {
    btn: 'py-2 px-4 font-semibold rounded-lg shadow-md ',
    'btn-green': 'text-white bg-green-500 hover:bg-green-700',
    pre: {
      margin: '20px auto',
      padding: '5px',
      'background-color': '#333',
      'white-space': 'pre-wrap',
      'word-wrap': 'break-word',
      'letter-spacing': '0',
      font: '14px/26px courier new',
      position: 'relative',
      'border-radius': '3px'
    },
    tips: 'bg-gray-200 text-gray-700 px-2 py-1 rounded-lg shadow-md p-3 text-xs',
    title: 'text-2xl font-semibold text-gray-700'
  }
})
