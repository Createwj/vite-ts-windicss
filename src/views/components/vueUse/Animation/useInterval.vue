<script setup lang="ts">
import { useInterval } from '@vueuse/core'

// count will increase every 200ms
// const counter = useInterval(200)
const { counter, pause, resume } = useInterval(200, { controls: true })
</script>
<template>
  <h1 class="title mb-3">useInterval</h1>
  <p class="tips mb-3">监听外部点击事件「用于下拉框 点击外部之后自动收缩」</p>

  <pre class="pre text-secondary">
    <code>
    import { useInterval } from '@vueuse/core'

    const { counter, pause, resume } = useInterval(200, { controls: true })
    </code>
  </pre>

  <div ref="target">Hello world</div>
  <div>Outside element</div>
</template>
