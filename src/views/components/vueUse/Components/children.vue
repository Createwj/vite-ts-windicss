<script lang="ts" setup>
import { useVModel } from '@vueuse/core'

const count = ref(0)

const props = defineProps<{
  dec: number
}>()

const emit = defineEmits(['update:dec'])

const data = useVModel(props, 'dec', emit)

// const props = defineProps<{
//   modelValue: string
// }>()
// const emit = defineEmits(['update:modelValue'])

// const data = useVModel(props, 'modelValue', emit)
</script>
<template>
  <p>
    {{ count }}
  </p>
  <button class="btn-green mt-3" @click="count++">{{ props.dec }}-children</button>
  <br />
  <button class="btn-green mt-3" @click="emit('update:dec', 2)">
    children-count(no-useVModal)
  </button>

  <hr />
  <p>{{ data }}</p>
  <button class="btn-green m-3" @click="++data">data++</button>
</template>
