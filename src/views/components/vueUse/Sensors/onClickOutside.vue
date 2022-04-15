<script setup lang="ts">
import { onClickOutside } from '@vueuse/core'

const target = ref(null)

onClickOutside(target, (event) => console.log(event))
</script>
<template>
  <h1 class="title mb-3">onClickOutside</h1>
  <p class="tips mb-3">监听外部点击事件「用于下拉框 点击外部之后自动收缩」</p>

  <pre class="pre text-secondary">
    <code>
    import { onClickOutside } from '@vueuse/core'

    const target = ref(null)

    onClickOutside(target, (event) => console.log(event))
    </code>
  </pre>

  <div ref="target">Hello world</div>
  <div>Outside element</div>
</template>
