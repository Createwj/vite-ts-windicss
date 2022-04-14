<script setup lang="ts">
import Menu from '@/components/menu.vue'
// import useBrowserLocation from '../components/vueUse/useBrowserLocation.vue'
const vueUseApi = [
  {
    name: '浏览器',
    children: [
      { name: 'location-Info', components: 'useBrowserLocation' },
      { name: '剪切板', components: 'useClipboard' },
      { name: '主题模式', components: 'useColorMode' },
      { name: 'css变量', components: 'useCssVar' },
      { name: '暗黑模式', components: 'useDark' }
    ]
  },
  {
    name: '浏览器1',
    children: [
      { name: 'location-Info', components: 'useBrowserLocation' },
      { name: '剪切板', components: 'useClipboard' },
      { name: '主题模式', components: 'useColorMode' },
      { name: 'css变量', components: 'useCssVar' },
      { name: '暗黑模式', components: 'useDark' }
    ]
  }
]

const handleSelectItem = (item: any) => {
  activeComponents.value = getPromiseComponents(item.components)
}

const getPromiseComponents = (name: string) =>
  defineAsyncComponent(async () => await import(`../components/vueUse/${name}.vue`))

const activeComponents = ref(getPromiseComponents('useBrowserLocation'))
</script>

<template>
  <div class="flex w-full">
    <div class="w-2/5 bg-dark-100">
      <h3 class="text-center py-3 text-primary">vue-use Api</h3>
      <Menu :vue-use-api="vueUseApi" @update-select-item="handleSelectItem" />
    </div>
    <div class="w-3/5">
      <h3 class="text-center py-3">content</h3>
      <div v-if="activeComponents" class="container">
        <Component :is="activeComponents" />
      </div>
    </div>
  </div>
</template>
