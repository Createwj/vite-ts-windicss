<script setup lang="ts">
import { useEventListener } from '@vueuse/core'

useEventListener(document, 'visibilitychange', (evt) => {
  console.log(evt)
})
</script>
<template>
  <h1 class="title mb-3">useEventListener</h1>

  <p class="tips">在挂载的时候进行事件监听，移除组件的时候自动卸载</p>
  <pre class="pre text-secondary">
    <code>
      import { useEventListener } from '@vueuse/core'

      useEventListener(document, 'visibilitychange', (evt) => {
        console.log(evt)
      })
    </code>
  </pre>
</template>
