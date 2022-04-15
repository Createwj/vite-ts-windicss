<script setup lang="ts">
import { useCssVar } from '@vueuse/core'

const el = ref(null)
const color = useCssVar('--color', el)

const switchColor = () => {
  if (color.value === 'red') {
    color.value = 'blue'
  } else {
    color.value = 'red'
  }
}
</script>
<template>
  <h1 class="title mb-3">useCssVar</h1>
  <div ref="el" style="--color: red; color: var(--color)">Sample text, {{ color }}</div>
  <button class="btn-green p-3 rounded-5px mt-3" @click="switchColor">Change Color</button>

  <pre class="pre text-secondary">
    <code>
      import { useCssVar } from '@vueuse/core'

      const el = ref(null)
      const color = useCssVar('--color', el)

      const switchColor = () => {
        if (color.value === 'red') {
          color.value = 'blue'
        } else {
          color.value = 'red'
        }
      }
    </code>
  </pre>
</template>
