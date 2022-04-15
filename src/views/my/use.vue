<script setup lang="ts">
import Menu from '@/components/menu.vue'
const isLoading = ref(false)
const vueUseApi = [
  {
    name: '浏览器相关api',
    children: [
      { name: 'location-api', components: 'browser/useBrowserLocation' },
      { name: '剪切板', components: 'browser/useClipboard' },
      { name: 'css变量', components: 'browser/useCssVar' },
      { name: '暗黑模式', components: 'browser/useDark' },
      { name: '事件监听', components: 'browser/useEventListener' },
      { name: '全屏事件', components: 'browser/useFullscreen' },
      { name: 'SafeArea', components: 'browser/useScreenSafeArea' },
      { name: 'useScriptTag', components: 'browser/useScriptTag' }
    ]
  },
  {
    name: 'Sensors',
    children: [{ name: 'onClickOutside', components: 'sensors/onClickOutside' }]
  },
  {
    name: 'Animation',
    children: [{ name: 'onClickOutside', components: 'Animation/onClickOutside' }]
  }
]

const getPromiseComponents = (name: string) => {
  isLoading.value = true
  const components = defineAsyncComponent(
    async () => await import(`../components/vueUse/${name}.vue`)
  )
  isLoading.value = false
  return components
}

const activeComponents = shallowRef(getPromiseComponents('browser/useBrowserLocation'))

const handleSelectItem = (item: any) => {
  activeComponents.value = getPromiseComponents(item.components)
}
</script>

<template>
  <div class="flex w-full">
    <div
      class="sm:w-2/5 md:w-1/6 lg:w-1/6 h-100vh overflow-scroll bg-dark-100 dark:bg-gray-500 dark:text-primary"
    >
      <h3 class="text-center py-3 text-primary">vue-use Api</h3>
      <Menu :vue-use-api="vueUseApi" @update-select-item="handleSelectItem" />
    </div>
    <div class="sm:w-3/5 md:w-5/6 lg:w-5/6 dark:bg-gray-700">
      <h3 class="text-center py-3">content</h3>
      <div v-if="isLoading" class="container">loadding</div>
      <div v-if="!isLoading" class="container px-5">
        <Component :is="activeComponents" />
      </div>
    </div>
  </div>
</template>
