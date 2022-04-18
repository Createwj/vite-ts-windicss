<script setup lang="ts">
const { counter, pause, resume } = useInterval(200, { controls: true })
</script>
<template>
  <h1 class="title mb-3">useInterval</h1>
  <p class="tips mb-3">计时器 {{ counter }}</p>

  <button class="btn-green p-3" @click="pause">pause</button>
  <button class="btn-green p-3 ml-3" @click="resume">resume</button>

  <pre class="pre text-secondary">
    <code>
    import { useInterval } from '@vueuse/core'

    const { counter, pause, resume } = useInterval(200, { controls: true })
    </code>
  </pre>
</template>
