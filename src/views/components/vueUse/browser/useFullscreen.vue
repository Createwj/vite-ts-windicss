<script setup lang="ts">
import { useFullscreen, useNow } from '@vueuse/core'

const { isFullscreen, enter, exit, toggle } = useFullscreen()
</script>
<template>
  <h1 class="title mb-3">useFullscreen</h1>

  <p class="tips mb-3">提供四个方法</p>
  是否是全屏 {{ isFullscreen }}
  <button class="btn-green p-3 mr-3 rounded-5px" @click="enter">进入全屏</button>
  <button class="btn-green p-3 mr-3 rounded-5px" @click="exit">退出全屏</button>
  <button class="btn-green p-3 rounded-5px" @click="toggle">切换全屏</button>
  <pre class="pre text-secondary">
    <code>
      import { useFullscreen } from '@vueuse/core'
      
      const { isFullscreen, enter, exit, toggle } = useFullscreen()
    </code>
  </pre>
</template>
