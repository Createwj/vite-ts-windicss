<script setup lang="ts">
import { useScriptTag } from '@vueuse/core'

useScriptTag('https://player.twitch.tv/js/embed/v1.js', (el: HTMLScriptElement) => {
  console.log(el)
})
</script>
<template>
  <h1 class="title mb-3">useScriptTag</h1>
  <p class="tips mb-3">异步加载js 并执行回调</p>

  <pre class="pre text-secondary">
    <code>
    import { useScriptTag } from '@vueuse/core'

    useScriptTag('https://player.twitch.tv/js/embed/v1.js', (el: HTMLScriptElement) => {
      console.log(el)
    })
    </code>
  </pre>
</template>
