<script setup lang="ts">
import { useDark, useToggle } from '@vueuse/core'

const isDark = useDark()
const toggleDark = useToggle(isDark)
</script>
<template>
  <h1 class="title mb-3">useDark</h1>

  <button class="btn-green p-3 rounded-5px mt-3" @click="toggleDark">toggleDark</button>
  <pre class="pre text-secondary">
    <code>
      import { useDark, useToggle } from '@vueuse/core'

      const isDark = useDark()
      const toggleDark = useToggle(isDark)
    </code>
  </pre>
</template>
