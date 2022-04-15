<script setup lang="ts">
import { useClipboard } from '@vueuse/core'

const input = ref('')

const { text, isSupported, copy } = useClipboard()
</script>
<template>
  <h2 class="title mb-5">useClipboard</h2>
  <p class="tips">{ text, isSupported, copy }</p>
  <pre class="pre pt-4 text-secondary">
    代码示例
    <code>
      import { useClipboard } from '@vueuse/core'

      const { text, isSupported, copy } = useClipboard()
    </code>
  </pre>

  <h3 class="title mb-3">Demo</h3>
  <div v-if="isSupported">
    <input v-model="input" class="bg-dark-800 text-white p-3" type="text" />
    <button class="btn-green p-3" @click="copy(input)">复制</button>
  </div>
  <div v-else>当前浏览器不支持复制功能</div>
</template>
