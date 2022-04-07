import { defineConfig } from 'windicss/helpers'
import theme from './theme'
export default defineConfig({
  plugins: [],
  theme,
  extract: {
    include: ['**/*.{vue,js,css,scss,sass,json}'],
    exclude: ['node_modules', '.git']
  }
})
