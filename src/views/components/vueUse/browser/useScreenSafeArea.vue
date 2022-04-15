<script setup lang="ts">
import { useScreenSafeArea } from '@vueuse/core'

const { top, right, bottom, left } = useScreenSafeArea()
</script>
<template>
  <h1 class="title mb-3"></h1>

  <p class="tips mb-3">获取安全设备安全边距</p>

  <p>top: {{ top }}</p>
  <p>right: {{ right }}</p>
  <p>left: {{ left }}</p>
  <p>bottom: {{ bottom }}</p>

  <pre class="pre text-secondary">
    <code>
    import { useScreenSafeArea } from '@vueuse/core'

    const { top, right, bottom, left } = useScreenSafeArea()
    </code>
  </pre>
</template>
