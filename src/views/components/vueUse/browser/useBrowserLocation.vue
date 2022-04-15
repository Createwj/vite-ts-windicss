<script setup lang="ts">
import { useBrowserLocation } from '@vueuse/core'
import { UseBrowserLocation } from '@vueuse/components'

const location = useBrowserLocation()

// console.log(location)
const isOpen = ref(false)
</script>
<template>
  <h2 class="title mb-5">useBrowserLocation</h2>
  <p class="tips">当项目中安装vue-router时，优先使用 useRoute</p>
  <pre lang="yaml" class="pre pt-4 text-secondary">
    代码示例
    <code>
      import { useBrowserLocation } from '@vueuse/core' 
      const location = useBrowserLocation()
    </code>
  </pre>
  <br />
  <p class="overflow-scroll">Browser Location: {{ JSON.stringify(location) }}</p>
  <c-expansion v-model="isOpen" class="mt-5">
    <template #icon> useBrowserLocation Components </template>
    <div class="p-5">
      <UseBrowserLocation v-slot="{ location }">
        Browser Location: {{ location }}
      </UseBrowserLocation>
    </div>
  </c-expansion>
</template>
